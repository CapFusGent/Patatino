import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { dependency } from './dependencies.mjs';
import { startServer } from './serve.mjs';
const {chromium,webkit}=dependency('playwright');
const server=await startServer(0,path.resolve('dist'),{offlineFonts:true}),port=server.address().port,base=`http://127.0.0.1:${port}/Patatino/`;
const errors=[],report={status:'running',browser:'Chromium',buildSHA256:createHash('sha256').update(fs.readFileSync('dist/index.html')).digest('hex'),units:[],layout:[],offline:false,installable:false};
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'patatino-e2e-'));
const focus=process.env.PATATINO_E2E_FOCUS==='platform',reportFile=focus?'qa/pwa-report.json':'qa/e2e-report.json';
let context,page;
async function bounded(promise,label,ms=30000){
  let timer;
  try{return await Promise.race([promise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error(`Timeout: ${label}`)),ms);})]);}
  finally{clearTimeout(timer);}
}
function checkpoint(label){
  console.log(label);
  fs.mkdirSync('qa',{recursive:true});
  fs.writeFileSync(reportFile,JSON.stringify({...report,checkpoint:label},null,2));
}
function captureErrors(page){page.on('pageerror',error=>{errors.push(error.message);console.error('Page error:',error.message);});}
async function openUnit(page,id){
  const link=page.locator(`.unit-list [data-action="unit"][data-unit="${id}"]`),group=link.locator('xpath=ancestor::details');
  if((await group.getAttribute('open'))===null)await group.locator('summary').click();
  await link.click();await page.waitForSelector('.explanation');
}
// Uses DOM input/click events on the rendered controls, never calls the grader or edits progress.
async function completeSession(page,wrongCount=0,stopAtTiles=false){
  return page.evaluate(({wrongCount,stopAtTiles})=>{
    let wrong=0,steps=0;
    const click=selector=>{const el=document.querySelector(selector);if(!el)throw Error('Missing '+selector);el.click();};
    while(document.querySelector('.exercise-shell')){
      if(++steps>2000)throw Error('Session did not terminate');
      const q=currentQuestion();
      if(stopAtTiles&&['order','tr'].includes(q.type))return {pausedAtTiles:q.id};
      if(q.type==='card'){click('[data-action="next"]');continue;}
      const makeWrong=wrong<wrongCount&&!q.retry;
      if(q.type==='mc'){
        const ix=session.options.findIndex(o=>makeWrong?o.sourceIndex!==q.correct:o.sourceIndex===q.correct);
        click(`[data-action="choose"][data-index="${ix}"]`);
      }else if(q.type==='fill'){
        const field=document.querySelector('#written-answer');
        field.value=makeWrong?'zzfout':q.answer;field.dispatchEvent(new Event('input',{bubbles:true}));
      }else{
        const tokens=(makeWrong?q.tiles.find(t=>t.distractor).text:q.answer).replace(/[.!?,;:]$/,'').split(/\s+/);
        const used=new Set();
        for(const token of tokens){
          const tile=session.tiles.find(t=>!used.has(t.id)&&t.text.toLowerCase()===token.toLowerCase());
          if(!tile)throw Error('Missing tile '+token+' '+q.id);
          used.add(tile.id);click(`[data-action="tile"][data-id="${tile.id}"]`);
        }
      }
      click('[data-action="check"]');
      const feedback=document.querySelector('.feedback');
      if(!feedback)throw Error('No feedback '+q.id);
      if(!makeWrong&&feedback.classList.contains('bad'))throw Error('Correct answer rejected '+q.id+' '+q.answer);
      if(makeWrong&&!feedback.classList.contains('bad'))throw Error('Wrong answer accepted '+q.id);
      if(makeWrong)wrong++;
      click('[data-action="next"]');
    }
    if(!document.querySelector('.result'))throw Error('No results');
    return {percent:lastResult.percent,passed:lastResult.passed,total:lastResult.total,xp:state.xp,errorCount:Object.keys(state.errors).length,steps};
  },{wrongCount,stopAtTiles});
}
async function layoutCheck(page,label){
  const overflow=await page.evaluate(()=>{
    const width=document.documentElement.clientWidth;
    const overflowing=[...document.querySelectorAll('main *,.bottom *')].filter(el=>{
      const css=getComputedStyle(el),r=el.getBoundingClientRect();
      return css.position!=='fixed'&&!el.closest('.exercise-watermark')&&!el.classList.contains('sr-only')&&css.visibility!=='hidden'&&r.width>0&&(r.right>width+1||r.left<-1);
    }).map(el=>({tag:el.tagName,cls:el.className?.baseVal||el.className,text:el.textContent.slice(0,60)}));
    if(document.documentElement.scrollWidth>width)overflowing.push({pageScrollWidth:document.documentElement.scrollWidth,width});
    return overflowing;
  });
  assert.deepEqual(overflow,[],`Overflow ${label}: ${JSON.stringify(overflow)}`);
  report.layout.push(label);
}
try{
  const options={headless:true,channel:'chromium',viewport:{width:360,height:800},reducedMotion:'reduce',args:['--disable-gpu']};
  try {context=await chromium.launchPersistentContext(profile,options);}
  catch(error){
    if(!error.message.includes("Executable doesn't exist"))throw error;
    context=await chromium.launchPersistentContext(profile,{...options,channel:'chrome'});
    report.browser='Chrome';
  }
  context.setDefaultTimeout(30000);
  page=await bounded(context.newPage(),'Chrome page');captureErrors(page);await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.waitForSelector('.hero');
  // Disable TTS via the actual audio button, preserving other settings.
  await page.getByRole('button',{name:'Disattiva audio',exact:true}).click();
  await page.evaluate(()=>navigator.serviceWorker.ready);
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.hero');
  if(!focus){
  for(let id=1;id<=30;id++){
    const link=page.locator(`.unit-list [data-action="unit"][data-unit="${id}"]`);
    const detail=link.locator('xpath=ancestor::details');
    if(await detail.count()&&(await detail.getAttribute('open'))===null)await detail.locator('summary').click();
    await link.click();
    await page.waitForSelector('.lesson .explanation');
    const blocks=await page.locator('[data-action="start"][data-part="vocab"]').count();
    // Bottom next-action duplicates the current block; restrict to the exercise section.
    const blockButtons=page.locator('.part [data-action="start"][data-part="vocab"]');
    const blockCount=await blockButtons.count();
    for(let b=0;b<blockCount;b++){
      await page.locator(`.part [data-action="start"][data-part="vocab"][data-block="${b}"]`).click();
      const result=await completeSession(page);
      assert.equal(result.percent,100,`Vocab ${id}/${b}`);
      await page.getByRole('button',{name:'‹ Torna all’unità',exact:true}).click();
      await page.waitForSelector('.explanation');
    }
    await page.locator('.part [data-action="start"][data-part="grammar"]').click();
    const failed=await completeSession(page,4);assert.equal(failed.passed,false,`Grammar failure ${id}`);
    const xp=failed.xp;
    // Re-render result by browser back/forward must not award again.
    await page.goBack();await page.waitForSelector('.explanation');
    await page.goForward();await page.waitForSelector('.result');
    assert.equal(await page.evaluate(()=>state.xp),xp,'XP repeated by history');
    await page.getByRole('button',{name:'Rifai',exact:true}).click();
    const passed=await completeSession(page);assert.equal(passed.percent,100,`Grammar success ${id}`);
    await page.getByRole('button',{name:'‹ Torna all’unità',exact:true}).click();
    await page.waitForSelector('.explanation');
    await page.getByRole('button',{name:'‹ Percorso',exact:true}).first().click();
    await page.waitForSelector('.hero');
    const completed=await page.evaluate(id=>unitComplete(state,unitById(id)),id);assert.ok(completed,`Unit ${id} incomplete`);
    report.units.push({id,vocabularyBlocks:blockCount,grammarWithErrors:failed.percent,grammarWithoutErrors:passed.percent});
    console.log(`Unità ${id}/30: ${blockCount} blocchi lessico, grammatica con errori e senza.`);
  }
  const errorsBefore=await page.evaluate(()=>Object.keys(state.errors).length);assert.ok(errorsBefore>=120);
  await page.locator('[data-action="review"]').click();await page.locator('[data-action="start-review"]').click();
  await completeSession(page,1);
  assert.equal(await page.evaluate(()=>Object.keys(state.errors).length),0,'Review did not clear errors');
  await page.getByRole('button',{name:'Torna al percorso →',exact:true}).click();await page.waitForSelector('.hero');
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.hero');
  assert.equal(await page.evaluate(()=>UNITS.filter(u=>unitComplete(state,u)).length),30,'Persistence');
  assert.equal(await page.evaluate(()=>localStorage.length),1,'Only one storage key');
  // Every palette and every screen, including long lessons and feedback at 360 px.
  for(const palette of ['frietkot','mosselen','praline','atomium']){
    await page.getByRole('button',{name:'Impostazioni',exact:true}).click();
    await page.locator(`[data-action="palette"][data-palette="${palette}"]`).click();
    await layoutCheck(page,`${palette}/settings`);
    await page.screenshot({path:`qa/${palette}-settings-360.png`,fullPage:true});
    await page.getByRole('button',{name:'‹ Percorso',exact:true}).click();await page.waitForSelector('.hero');
    await layoutCheck(page,`${palette}/home`);
    await page.screenshot({path:`qa/${palette}-home-360.png`,fullPage:true});
    for(let id=1;id<=30;id++){
      // Use the visible unit buttons; expand each relevant accordion.
      const button=page.locator(`.unit-list [data-action="unit"][data-unit="${id}"]`),details=button.locator('xpath=ancestor::details');
      if(await details.count()&&(await details.getAttribute('open'))===null)await details.locator('summary').click();
      await button.click();await page.waitForSelector('.explanation');await layoutCheck(page,`${palette}/unit-${id}`);
      if(id===22)await page.screenshot({path:`qa/${palette}-unit-360.png`,fullPage:true});
      if(id===1){
        await page.locator('.part [data-action="start"][data-part="grammar"]').click();
        await layoutCheck(page,`${palette}/study`);
        await page.evaluate(()=>{while(currentQuestion().type==='card')document.querySelector('[data-action="next"]').click();});
        await layoutCheck(page,`${palette}/question`);
        await page.evaluate(()=>{
          const q=currentQuestion();
          if(q.type==='fill'){const f=document.querySelector('#written-answer');f.value='zzfout';f.dispatchEvent(new Event('input',{bubbles:true}));}
          else document.querySelector(`[data-action="choose"][data-index="${session.options.findIndex(o=>o.sourceIndex!==q.correct)}"]`).click();
          document.querySelector('[data-action="check"]').click();
        });
        await layoutCheck(page,`${palette}/feedback`);await page.screenshot({path:`qa/${palette}-feedback-360.png`,fullPage:true});
        await page.locator('[data-action="next"]').click();
        assert.ok((await completeSession(page,0,true)).pausedAtTiles);
        await layoutCheck(page,`${palette}/tiles-empty`);
        await page.evaluate(()=>{
          const used=new Set();
          for(const token of currentQuestion().answer.replace(/[.!?,;:]$/,'').split(/\s+/)){
            const tile=session.tiles.find(t=>!used.has(t.id)&&t.text.toLowerCase()===token.toLowerCase());
            used.add(tile.id);document.querySelector(`[data-action="tile"][data-id="${tile.id}"]`).click();
          }
        });
        await layoutCheck(page,`${palette}/tiles-filled`);
        await page.locator('[data-action="check"]').click();
        assert.equal(await page.locator('.feedback.bad').count(),0);
        await layoutCheck(page,`${palette}/tiles-feedback`);
        await page.screenshot({path:`qa/${palette}-tiles-360.png`,fullPage:true});
        await page.locator('[data-action="next"]').click();
        await completeSession(page);
        await layoutCheck(page,`${palette}/results`);await page.screenshot({path:`qa/${palette}-result-360.png`,fullPage:true});
        await page.getByRole('button',{name:'‹ Torna all’unità',exact:true}).click();await page.waitForSelector('.explanation');
      }
      await page.getByRole('button',{name:'‹ Percorso',exact:true}).first().click();await page.waitForSelector('.hero');
    }
    await page.locator('[data-action="review"]').click();await layoutCheck(page,`${palette}/review`);
    await page.getByRole('button',{name:'‹ Percorso',exact:true}).click();await page.waitForSelector('.hero');
  }
  // Remaining layout-induced errors are actually answered, never cleared by a shortcut.
  await page.locator('[data-action="review"]').click();await page.locator('[data-action="start-review"]').click();await completeSession(page);
  await page.getByRole('button',{name:'Torna al percorso →',exact:true}).click();await page.waitForSelector('.hero');
  }
  checkpoint(`${report.layout.length} controlli layout superati; verifica installabilità.`);
  await page.bringToFront();
  const cdp=await context.newCDPSession(page);
  await cdp.send('Page.enable');
  const manifest=await bounded(cdp.send('Page.getAppManifest'),'manifest');
  assert.ok(!manifest.errors.length,JSON.stringify(manifest.errors));
  checkpoint('Manifest valido; verifica criteri installazione Chrome.');
  const installability=await bounded(cdp.send('Page.getInstallabilityErrors'),'installability');report.installability=installability.installabilityErrors;
  assert.deepEqual(installability.installabilityErrors,[],'Chrome installability errors');report.installable=true;
  checkpoint('Criteri installazione superati; verifica offline.');
  const persistedXP=await page.evaluate(()=>state.xp);
  await context.setOffline(true);await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.hero');
  assert.equal(await page.evaluate(()=>state.xp),persistedXP);
  const offlineUnit=page.locator('.unit-list [data-action="unit"][data-unit="30"]');
  const parent=offlineUnit.locator('xpath=ancestor::details');if((await parent.getAttribute('open'))===null)await parent.locator('summary').click();
  await offlineUnit.click();await page.waitForSelector('.explanation');
  await page.locator('.part [data-action="start"][data-part="grammar"]').click();await completeSession(page);
  report.offline=true;
  checkpoint('Offline superato; verifica cronologia e audio.');
  await context.setOffline(false);
  // Reloading a lesson or exercise must not add a duplicate home/lesson history entry.
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.explanation');
  await page.getByRole('button',{name:'‹ Percorso',exact:true}).first().click();await page.waitForSelector('.hero');
  await openUnit(page,30);
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.explanation');
  await page.goBack();await page.waitForSelector('.hero');
  await openUnit(page,30);
  await page.locator('.part [data-action="start"][data-part="grammar"]').click();
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.explanation');
  await page.goBack();await page.waitForSelector('.hero');
  report.reloadHistory=true;
  // TTS behavior: only Dutch voices; BE preference; second identical tap slow.
  const speechPage=page;
  await speechPage.addInitScript(()=>{
    if(location.search.includes('test-no-storage')){
      Storage.prototype.getItem=function(){throw new DOMException('Blocked','SecurityError');};
      Storage.prototype.setItem=function(){throw new DOMException('Blocked','QuotaExceededError');};
      Object.defineProperty(window,'speechSynthesis',{value:undefined});
      return;
    }
    window.__spoken=[];window.__voices=[{voiceURI:'en',name:'English',lang:'en-US'},{voiceURI:'nl',name:'Dutch',lang:'nl-NL'},{voiceURI:'be',name:'Belgian',lang:'nl-BE'}];
    window.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};
    Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>window.__voices,cancel(){},speak(u){window.__spoken.push({text:u.text,lang:u.lang,rate:u.rate,uri:u.voice.voiceURI});},addEventListener(){}}});
  });
  await speechPage.goto(base,{waitUntil:'domcontentloaded'});await speechPage.waitForSelector('.hero');
  if(await speechPage.getByRole('button',{name:'Attiva audio',exact:true}).count())await speechPage.getByRole('button',{name:'Attiva audio',exact:true}).click();
  await openUnit(speechPage,30);
  const word=speechPage.locator('.word').first();await word.click();await word.click();
  const spoken=await speechPage.evaluate(()=>window.__spoken);assert.equal(spoken[0].lang,'nl-BE');assert.equal(spoken[0].rate,.92);assert.equal(spoken[1].rate,.62);
  await speechPage.evaluate(()=>window.__voices=[{voiceURI:'en',name:'English',lang:'en-US'}]);await word.click();
  assert.equal((await speechPage.evaluate(()=>window.__spoken)).length,2,'Non-Dutch voice used');
  await speechPage.evaluate(()=>window.__voices=[{voiceURI:'be',name:'Belgian',lang:'nl-BE'}]);
  await speechPage.getByRole('button',{name:'‹ Percorso',exact:true}).first().click();await speechPage.waitForSelector('.hero');
  const first=speechPage.locator('.unit-list [data-action="unit"][data-unit="1"]'),group=first.locator('xpath=ancestor::details');
  if((await group.getAttribute('open'))===null)await group.locator('summary').click();
  await first.click();await speechPage.locator('.part [data-action="start"][data-part="vocab"]').click();
  await speechPage.evaluate(()=>{while(currentQuestion().type==='card')document.querySelector('[data-action="next"]').click();});
  const italianBefore=await speechPage.evaluate(()=>window.__spoken.length);
  await speechPage.locator('[data-action="choose"]').first().click();
  assert.equal(await speechPage.evaluate(()=>window.__spoken.length),italianBefore,'Italian answer pronounced');
  await speechPage.getByRole('button',{name:'Esci dagli esercizi',exact:true}).click();await speechPage.waitForSelector('.explanation');
  await speechPage.locator('.part [data-action="start"][data-part="grammar"]').click();
  await completeSession(speechPage,0,true);
  const invalidBefore=await speechPage.evaluate(()=>window.__spoken.length);
  const invalidTile=await speechPage.evaluate(()=>session.tiles.find(t=>!t.speak).id);
  await speechPage.locator(`[data-action="tile"][data-id="${invalidTile}"]`).click();
  assert.equal(await speechPage.evaluate(()=>window.__spoken.length),invalidBefore,'Invalid form pronounced');
  report.audio=true;
  checkpoint('Audio superato; verifica salvataggio bloccato.');
  {
    const blockedPage=page;await blockedPage.goto(base+'?test-no-storage',{waitUntil:'domcontentloaded'});await blockedPage.waitForSelector('.hero');
    await blockedPage.getByRole('button',{name:'Disattiva audio',exact:true}).click();
    await blockedPage.getByRole('alert').waitFor();
    await blockedPage.locator('.next-mobile [data-action="unit"]').click();await blockedPage.waitForSelector('.explanation');
    await blockedPage.locator('.part [data-action="start"][data-part="vocab"]').click();
    assert.equal((await completeSession(blockedPage)).percent,100);
    report.storageUnavailable=true;report.speechUnavailable=true;
  }
  assert.deepEqual(errors,[],'JavaScript errors');
  report.javascriptErrors=errors;report.reviewCleared=true;report.status='passed';
  checkpoint('Controlli Chrome superati; verifica WebKit.');
  // WebKit is the browser engine family used by Safari; this does not replace physical-device tests.
  let webkitReady=false;
  try{
    const wb=await bounded(webkit.launch({headless:true,timeout:20000}),'WebKit launch');const wc=await bounded(wb.newContext({viewport:{width:360,height:800}}),'WebKit context');
    try{
      wc.setDefaultTimeout(30000);
      const wp=await bounded(wc.newPage(),'WebKit page');webkitReady=true;captureErrors(wp);await wp.goto(base,{waitUntil:'domcontentloaded'});await wp.waitForSelector('.hero');
      await wp.locator('.next-mobile [data-action="unit"]').click();await wp.waitForSelector('.explanation');
      await wp.locator('.part [data-action="start"][data-part="grammar"]').click();await completeSession(wp);
      assert.deepEqual(errors,[]);report.webkit='smoke passed';
    }finally{await bounded(wb.close(),'WebKit close');}
  }catch(error){
    if(webkitReady)throw error;
    report.webkit='not verified: '+error.message.split('\n')[0];
  }
}catch(error){
  report.status='failed';report.failure=error.stack;report.javascriptErrors=errors;
  if(page)try{report.page=await bounded(page.evaluate(()=>({url:location.href,ready:document.readyState,text:document.body.innerText.slice(0,1500),history:history.state})),'failure diagnostics',3000);}catch{}
  throw error;
}
finally{
  try{if(context)await bounded(context.close(),'Chrome close');}
  catch(error){
    report.cleanupWarnings=[error.message];
    // Some Windows Chrome builds stall on graceful exit. Only the unique profile
    // created by this test is eligible for forced shutdown; never a user's browser.
    if(process.platform==='win32'){
      const cleanup=spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',
        "Get-CimInstance Win32_Process -Filter \"Name = 'chrome.exe'\" | Where-Object { $_.CommandLine -and $_.CommandLine.Contains($env:PATATINO_TEST_PROFILE) -and $_.CommandLine.Contains('--remote-debugging-pipe') -and $_.CommandLine -notmatch '--type=' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }"],
        {env:{...process.env,PATATINO_TEST_PROFILE:profile},windowsHide:true,timeout:10000,encoding:'utf8'});
      if(cleanup.status!==0)report.cleanupWarnings.push('Owned browser cleanup could not be confirmed.');
    }
    console.warn('Functional results retained; temporary Chrome required forced cleanup.');
  }
  finally{
    report.completedAt=new Date().toISOString();
    fs.mkdirSync('qa',{recursive:true});fs.writeFileSync(reportFile,JSON.stringify(report,null,2));
    server.closeAllConnections();await new Promise(resolve=>server.close(resolve));
  }
}
console.log(focus?'Controlli piattaforma completati.':'E2E completato: 30 unità, ripasso, 4 palette/360px, offline, installabilità Chromium e audio.');
if(report.cleanupWarnings)process.exit(report.status==='passed'?0:1);
