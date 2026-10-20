import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { loadUnits } from './load-data.mjs';
import { validateUnits } from './validate.mjs';
import { acceptsAnswer, freshState, restoreState, vocabularyBlocks, makeVocabularyQueue, makeGrammarQueue, finishSession, unitComplete, updateStreak, visibleStreak, PALETTES } from '../src/core.js';
const units=await loadUnits();validateUnits(units);
const html=fs.readFileSync('index.html','utf8');
assert.ok(!/<script[^>]+\bsrc\s*=/i.test(html),'External JavaScript dependency');
new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
assert.equal(html,fs.readFileSync('dist/index.html','utf8'),'Root and dist differ');
for(const size of [32,180,192,512]){
  const png=fs.readFileSync(`icon-${size}.png`);
  assert.equal(png.subarray(1,4).toString(),'PNG');
  assert.equal(png.readUInt32BE(16),size);assert.equal(png.readUInt32BE(20),size);
}
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert.equal(manifest.display,'standalone');assert.equal(manifest.scope,'./');
for(const icon of manifest.icons)assert.ok(fs.existsSync(icon.src));
for(const [actual,expected,ok] of [
  ['IK WERK!!!','Ik werk.',true],['café','cafe',true],['cafe','café',false],
  ['Belgie','België',false],['BELGIË.','België',true],["auto’s","auto's",true],['autos',"auto's",false],
  ['auto-s',"auto's",false],['email','e-mail',false],['e mail','e-mail',false],['e‑mail','e-mail',true],
  ['tweeentwintig','tweeëntwintig',false],["dr","d'r",false],['  ik   werk ','Ik werk',true]
])assert.equal(acceptsAnswer(actual,[expected]),ok,`${actual} / ${expected}`);
let accepted=0;
for(const u of units){
  for(const q of [...u.grammar,...u.mixed]){
    for(const a of q.answers){assert.ok(acceptsAnswer(a,q.answers),q.id);assert.ok(acceptsAnswer(a.toUpperCase()+'!',q.answers),q.id);accepted++;}
  }
  const ids=new Set();
  for(let i=0;i<5;i++){const queue=makeGrammarQueue(u,i);assert.equal(queue.filter(q=>q.type!=='card').length,14);queue.forEach(q=>ids.add(q.id));}
  for(const q of [...u.grammar,...u.mixed])assert.ok(ids.has(q.id),`${q.id}: mai selezionato nella rotazione`);
  vocabularyBlocks(u.words).forEach((_,i)=>{
    const queue=makeVocabularyQueue(u,i),cards=[];
    for(const q of queue){
      if(q.type==='card'){cards.push(q.word.nl);continue;}
      assert.equal(q.type,'mc');assert.ok(q.options.every(o=>q.mode==='produce'?cards.includes(o.text):cards.includes(o.it)),'Distrattore lessicale non visto');
      assert.equal(q.options.filter(o=>o.text===q.answer).length,1,'Lessico ambiguo');
      assert.ok(q.options.every(o=>q.mode==='produce'?o.speak:!o.speak),'Audio italiano non deve essere pronunciato');
    }
    assert.equal(queue.filter(q=>q.type!=='card').length,vocabularyBlocks(u.words)[i].length*3);
  });
}
for(let n=8;n<=18;n++){
  const words=Array.from({length:n},(_,id)=>({id})),blocks=vocabularyBlocks(words);
  assert.equal(new Set(blocks.flat().map(w=>w.id)).size,n);
  if(n>10)assert.ok(blocks.every(b=>b.length>=7&&b.length<=9));
}
const state=freshState(),date=new Date(2026,9,20,12),session={id:'single-award',unit:1,part:'grammar',block:0,total:10,correct:8};
finishSession(state,session,date);const xp=state.xp;finishSession(state,session,date);assert.equal(state.xp,xp,'XP duplicati');
assert.equal(state.units[1].grammar.passed,true);
assert.equal(unitComplete(state,units[0]),false);
finishSession(state,{id:'vocab-pass',unit:1,part:'vocab',block:0,total:24,correct:24},date);assert.ok(unitComplete(state,units[0]));
finishSession(state,{id:'later-fail',unit:1,part:'grammar',block:0,total:14,correct:0},date);assert.equal(state.units[1].grammar.passed,true,'Tentativo fallito non cancella successo');
updateStreak(state,new Date(2026,9,21,12));assert.equal(state.streak,2);
updateStreak(state,new Date(2026,9,23,12));assert.equal(state.streak,1);
assert.equal(visibleStreak(state,new Date(2026,9,25,12)),0);
assert.equal(restoreState({xp:10,palette:'unknown'}).xp,10);assert.equal(restoreState({schema:2,xp:'oops'}).xp,0);
const lum=hex=>{const values=hex.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*values[0]+.7152*values[1]+.0722*values[2];};
const contrasts={};for(const [id,p] of Object.entries(PALETTES)){contrasts[id]={};for(const [key,color] of Object.entries({...p,paper:'#fffdf5',notice:'#ffe8e4',success:'#e3f2dc'})){if(!color.startsWith?.('#')||key==='accent')continue;const ratio=(lum(color)+.05)/(lum('#171717')+.05);assert.ok(ratio>=4.5,`${id} ${key} contrasto ${ratio}`);contrasts[id][key]=Number(ratio.toFixed(2));}}
fs.mkdirSync('qa',{recursive:true});fs.writeFileSync('qa/unit-test-report.json',JSON.stringify({status:'passed',units:30,exercises:600,acceptedAnswers:accepted,standaloneScriptSyntax:true,pngSizes:[32,180,192,512],manifest:true,contrast:contrasts},null,2));
console.log(`Test logica superati: ${accepted} risposte accettate, normalizzazione, code, rotazioni, XP, serie e contrasto ≥4,5:1.`);
