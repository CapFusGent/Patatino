const app=document.querySelector('#app');
let state=freshState();
try {state=restoreState(JSON.parse(localStorage.getItem(STORAGE_KEY)));}catch{}
let storageFailed=false;
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));storageFailed=false;}catch{storageFailed=true;}}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const unitById=id=>UNITS.find(u=>u.id===Number(id));
let route={page:'home',depth:0},session=null,lastResult=null,voices=[],lastSpoken='',voiceReady=false,installEvent=null,noticeTimer,pendingNavigation=null;
const synth='speechSynthesis' in window?window.speechSynthesis:null;
function applyTheme(){
  const p=PALETTES[state.palette];for(const k of ['bg','accent','light'])document.documentElement.style.setProperty('--'+k,p[k]);
  document.querySelector('meta[name="theme-color"]').content=p.bg;
}
function toast(message){
  document.querySelector('.toast')?.remove();
  const node=document.createElement('div');node.className='toast';node.setAttribute('role','status');node.textContent=message;document.body.append(node);
  clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>node.remove(),5000);
}
function discoverVoices(){
  voices=synth?synth.getVoices().filter(v=>/^nl(?:[-_]|$)/i.test(v.lang)).sort((a,b)=>Number(/^nl[-_]BE/i.test(b.lang))-Number(/^nl[-_]BE/i.test(a.lang))||a.name.localeCompare(b.name)):[];
  voiceReady=true;
  if(route.page==='settings')render(false);
  else refreshAudioNotice();
}
function speak(text,allowed=true){
  if(!allowed||!state.audio||!text)return;
  if(!synth){toast('La sintesi vocale non è disponibile. Puoi continuare leggendo.');return;}
  const available=synth.getVoices().filter(v=>/^nl(?:[-_]|$)/i.test(v.lang));
  const selected=available.find(v=>v.voiceURI===state.voiceURI)||available.find(v=>/^nl[-_]BE/i.test(v.lang))||available[0];
  if(!selected){discoverVoices();toast('Manca una voce neerlandese. Apri Impostazioni → Voce per installarla.');return;}
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.voice=selected;utterance.lang=selected.lang;utterance.rate=lastSpoken===text.trim().toLowerCase().normalize('NFC') ? .62:.92;
  lastSpoken=text.trim().toLowerCase().normalize('NFC');
  synth.cancel();synth.speak(utterance);
}
function refreshAudioNotice(){
  const node=document.querySelector('#audio-notice');
  if(node)node.innerHTML=voiceNotice();
}
function voiceNotice(){
  if(!voiceReady||voices.length||!state.audio)return '';
  return '<div class="notice">Non è disponibile una voce neerlandese. <button data-action="settings">Configura audio</button></div>';
}
function go(page,props={},replace=false){
  if(synth)synth.cancel();
  route={page,...props,depth:replace?(route.depth||0):(route.depth||0)+1};
  history[replace?'replaceState':'pushState']({patatino:true,route},'',location.pathname+location.search+(page==='home'?'':`#${page}${props.unit?'-'+props.unit:''}`));
  render(true);
}
function back(){
  if(route.page==='home')return;
  history.back();
}
function fromHome(callback){
  const depth=route.depth||0;
  if(!depth){callback();return;}
  pendingNavigation=callback;history.go(-depth);
}
window.addEventListener('popstate',event=>{
  synth?.cancel();route=event.state?.patatino?event.state.route:{page:'home',depth:0};
  if(pendingNavigation){const callback=pendingNavigation;pendingNavigation=null;callback();return;}
  if(route.page==='exercise'&&!session){go(route.unit?'unit':'home',route.unit?{unit:route.unit}:{},true);return;}
  if(route.page==='result'&&!lastResult){go(route.unit?'unit':'home',route.unit?{unit:route.unit}:{},true);return;}
  render(true);
});
// Keep the existing browser stack on reload; unfinished sessions return to their parent.
const savedRoute=history.state?.patatino?history.state.route:null;
if(savedRoute&&['exercise','result'].includes(savedRoute.page)&&savedRoute.depth>0){
  route=savedRoute.unit&&unitById(savedRoute.unit)?{page:'unit',unit:savedRoute.unit,depth:1}:{page:'review',depth:1};
  history.back();
}else{
  if(savedRoute?.page==='unit'&&unitById(savedRoute.unit))route={page:'unit',unit:savedRoute.unit,depth:1};
  else if(['settings','review'].includes(savedRoute?.page))route={page:savedRoute.page,depth:1};
  history.replaceState({patatino:true,route},'',location.pathname+location.search+(route.page==='home'?'':`#${route.page}${route.unit?'-'+route.unit:''}`));
}
function progressBar(percent,label){return `<div class="progress" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div>`;}
function header(){return `<header class="topbar"><a href="#" data-action="home" class="brand" aria-label="Patatino, percorso">${mascot('saluto')}<span class="logo">Patatino</span></a><div class="stats"><button class="stat" data-action="streak" aria-label="Giorni di fila: ${visibleStreak(state)}">↗ <b>${visibleStreak(state)}</b></button><button class="stat" data-action="xp" aria-label="${state.xp} punti XP">✦ <b>${state.xp}</b></button><button class="stat icon" data-action="audio" aria-pressed="${state.audio}" aria-label="${state.audio?'Disattiva':'Attiva'} audio">${state.audio?'♪':'♩'}</button><button class="stat icon" data-action="settings" aria-label="Impostazioni">⚙</button></div></header>`;}
function nextCard(unit){const next=nextPart(state,unit);return `<div class="card next-card"><span class="eyebrow">Prossima lezione · ${String(unit.id).padStart(2,'0')}</span><h2>${esc(unit.title)}</h2><p>${esc(unit.it)}</p><p class="small">${esc(next.label)}</p><button class="primary wide" data-action="unit" data-unit="${unit.id}">Continua <span aria-hidden="true">→</span></button></div>`;}
function renderHome(){
  const next=UNITS.find(u=>!unitComplete(state,u))||UNITS[29],count=UNITS.filter(u=>unitComplete(state,u)).length,errorCount=Object.keys(state.errors).length;
  return `${header()}<div id="audio-notice">${voiceNotice()}</div><section class="hero"><div><span class="eyebrow">Italiano → Nederlands · Vlaanderen</span><h1>Parole vere.<br>Un passo alla volta.</h1><p>Capire la regola. Usarla subito.<br>Il tuo neerlandese comincia qui.</p><span class="pill">${count} / 30 unità completate</span></div><div class="hero-stage"><div class="bubble" lang="nl">Allez, we gaan!</div><span class="spark" aria-hidden="true">✦</span><div class="cloud"></div>${mascot('saluto')}</div></section>
  <div class="next-mobile">${nextCard(next)}</div><div class="home-grid"><section class="course"><div class="row course-heading"><h2>Il tuo percorso</h2><span class="mono">6 tappe</span></div>
  ${GROUPS.map((group,g)=>{const units=UNITS.filter(u=>u.group===g),done=units.filter(u=>unitComplete(state,u)).length;return `<details class="card group" ${next.group===g?'open':''}><summary><div class="row"><div><span class="eyebrow">Tappa ${String(g+1).padStart(2,'0')} · ${done}/5</span><h2>${group}</h2></div><span class="chevron" aria-hidden="true">›</span></div><p class="topics">${units.map(u=>esc(u.it)).join(' · ')}</p>${progressBar(done*20,`Avanzamento ${group}`)}</summary><ol class="unit-list">${units.map(u=>`<li><button data-action="unit" data-unit="${u.id}" class="${unitComplete(state,u)?'done':''}"><span class="unit-no">${unitComplete(state,u)?'✓':String(u.id).padStart(2,'0')}</span><span><strong lang="nl">${esc(u.title)}</strong><small>${esc(u.it)}</small></span></button></li>`).join('')}</ol></details>`;}).join('')}</section>
  <aside class="sidebar">${nextCard(next)}<section class="card"><div class="row"><h2>Ci riproviamo?</h2><span class="pill" data-testid="error-count">${errorCount}</span></div><p class="small">Gli errori sono il punto da cui ripartire.</p><button class="wide" data-action="review" ${errorCount?'':'disabled'}>Ripasso errori${errorCount?' →':''}</button></section><div class="card"><span class="eyebrow">Il metodo Patatino</span><p class="small">Prima il lessico, poi la grammatica. Due parti, un traguardo: almeno l’80% al primo tentativo delle domande.</p><p class="small">Tocca una parola per ascoltarla. Toccala ancora per rallentare.</p></div></aside></div><footer class="footer">Contenuti originali · Nessun account · Progressi su questo dispositivo <br><button class="back" data-action="settings">Audio, colori e installazione</button></footer>`;
}
function wordCards(words){return `<div class="lexicon">${words.map(word=>`<button class="word" data-action="speak" data-text="${esc(word.nl)}"><strong lang="nl">${esc(word.nl)} <span class="speaker" aria-hidden="true">♪</span></strong><small>${esc(word.it)}</small></button>`).join('')}</div>`;}
function scoreLabel(record){return record?`${record.passed?'✓ ':''}Migliore: ${record.best}% · ultimo: ${record.last}%`:'Da iniziare';}
function renderUnit(){
  const u=unitById(route.unit),next=nextPart(state,u),blocks=vocabularyBlocks(u.words);
  return `<div class="lesson"><div class="row page-head"><button class="back" data-action="back">‹ Percorso</button><span class="pill">Unità ${u.id} / 30</span></div><header class="row start page-head"><div><span class="eyebrow">${GROUPS[u.group]}</span><h1 lang="nl">${esc(u.title)}</h1><p>${esc(u.it)}</p></div>${mascot(unitComplete(state,u)?'festa':'contento')}</header>
  <article class="card explanation">${u.explanation}</article>
  <aside class="card vlaanderen"><span class="pill">IN VLAANDEREN</span><p>${esc(u.vlaanderen.text)}</p><a class="small" href="${esc(u.vlaanderen.source.url)}" target="_blank" rel="noopener noreferrer">${esc(u.vlaanderen.source.label)} ↗</a></aside>
  ${u.keywords.length?`<section class="card"><span class="eyebrow">Ascolta · tocca ancora per rallentare</span><h2>Parole chiave della grammatica</h2>${wordCards(u.keywords)}</section>`:''}
  <section class="card"><span class="eyebrow">${u.words.length} parole per questa unità</span><h2>Lessico</h2>${wordCards(u.words)}</section>
  <section class="card"><h2>Mettiamolo in pratica</h2><p class="section-intro">Per completare l’unità supera ogni blocco di lessico e la grammatica con almeno l’80%. Gli errori tornano in fondo alla sessione.</p>
  <div class="part"><span class="eyebrow">Parte 1</span><h3>Lessico</h3><p class="small">Presentazione → riconoscimento → ascolto → produzione. Un gruppo di massimo 6 parole alla volta.</p>${blocks.map((block,i)=>`<button class="part-button" data-action="start" data-unit="${u.id}" data-part="vocab" data-block="${i}"><span>${blocks.length>1?`Blocco ${i+1} · `:''}${block.length} parole<small class="muted" style="display:block">${scoreLabel(scoreFor(state,u.id,'vocab',i))}</small></span><span>→</span></button>`).join('')}</div>
  <div class="part"><span class="eyebrow">Parte 2</span><h3>Grammatica</h3><p class="small">Le parole chiave, 6 esercizi sulla regola e 8 frasi miste. Le domande ruotano tra i tentativi.</p><button class="part-button" data-action="start" data-unit="${u.id}" data-part="grammar"><span>Inizia grammatica<small class="muted" style="display:block">${scoreLabel(scoreFor(state,u.id,'grammar'))}</small></span><span>→</span></button></div></section>
  <div class="bottom"><button data-action="back">‹ Percorso</button><button class="primary" data-action="start" data-unit="${u.id}" data-part="${next.part}" data-block="${next.block}">${esc(next.label)} →</button></div></div>`;
}
function startSession(unitId,part,block=0,replace=false){
  const u=unitById(unitId);
  let queue=part==='review'?Object.values(state.errors).map(error=>({...error.question,unit:error.unit})):
    part==='vocab'?makeVocabularyQueue(u,block):makeGrammarQueue(u,scoreFor(state,unitId,'grammar')?.attempts||0);
  if(!queue.length){toast('Nessun errore da ripassare. Goed zo!');return;}
  session={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,unit:unitId||0,part,block,queue,index:0,total:queue.filter(q=>q.type!=='card').length,correct:0,firstAnswers:{},selection:[],selected:null,checked:false,feedback:null,prepared:null,initialCount:queue.length};
  if(part==='review'){
    if(route.page==='home')go('review');
    go('exercise',{unit:0},replace);
  }else go('exercise',{unit:unitId},replace);
}
function currentQuestion(){return session?.queue[session.index];}
function prepareQuestion(){
  const q=currentQuestion();if(!q)return;
  if(session.prepared===session.index)return;
  session.options=q.options?shuffle(q.options.map((option,i)=>({...option,sourceIndex:i}))):[];
  session.tiles=q.tiles?shuffle(q.tiles.map((tile,i)=>({...tile,id:i}))):[];
  session.selection=[];session.selected=null;session.checked=false;session.feedback=null;session.prepared=session.index;session.input='';
}
function renderExercise(){
  prepareQuestion();const q=currentQuestion();
  const percent=Math.round(session.index/session.queue.length*100);
  const counter=`${session.index+1} / ${session.queue.length}`;
  const reaction=session.checked?(session.feedback.ok?'contento':'dispiaciuto'):'saluto';
  return `<section class="exercise-shell"><div class="exercise-top"><button class="icon" data-action="back" aria-label="Esci dagli esercizi">×</button>${progressBar(percent,'Avanzamento sessione')}<span class="count">${counter}</span></div>
  <div class="card exercise-card">${mascot(reaction,'exercise-watermark')}${q.retry?'<span class="pill review-tag">Riproviamo questa domanda</span>':''}
  ${q.type==='card'?renderStudy(q):renderQuestion(q)}
  </div><p class="exercise-footer">${session.part==='review'?'Ripasso · ogni risposta corretta elimina un errore salvato.':`${session.part==='vocab'?'Parte 1 · Lessico':'Parte 2 · Grammatica'} · Le ripetizioni aiutano a imparare, ma non cambiano il punteggio iniziale.`}</p></section>`;
}
function renderStudy(q){
  return `<div class="card-study"><span class="eyebrow">${q.kind==='grammatica'?'Prima, le parole chiave':'Una parola da conoscere'}</span>${mascot('contento')}<h1 class="study-word" lang="nl">${esc(q.word.nl)}</h1><p>${esc(q.word.it)}</p><button data-action="speak" data-text="${esc(q.word.nl)}">♪ Ascolta</button><p class="small muted" style="margin-top:14px">Tocca ancora per la versione lenta.</p><div class="form-actions"><button class="primary" data-action="next">Continua →</button></div></div>`;
}
function renderQuestion(q){
  const hasAudio=q.mode==='listen',canListen=!!synth&&voices.length>0&&state.audio;
  const isTiles=q.type==='order'||q.type==='tr';
  return `<span class="eyebrow">${q.type==='fill'?'Una parola':q.type==='order'?'Ordine delle parole':q.type==='tr'?'Traduzione':'Scegli una risposta'}</span><h1>${esc(q.prompt)}</h1>
  ${q.sentence?`<p class="prompt-nl" ${q.mode==='produce'?'':'lang="nl"'}>${esc(q.sentence)}</p>`:''}
  ${hasAudio?`<button data-action="speak" data-text="${esc(q.audio)}" class="wide">♪ Ascolta la parola</button>${!canListen?`<p class="notice">Audio ${state.audio?'neerlandese non disponibile':'disattivato'}. Puoi continuare leggendo: <strong lang="nl">${esc(q.audio)}</strong>.</p>`:''}`:''}
  ${!q.mode?`<p class="prompt-it">${esc(q.it)}</p>`:''}
  ${q.hint?`<p class="hint">${esc(q.hint)}</p>`:''}
  ${q.type==='mc'?`<div class="choices">${session.options.map((opt,i)=>`<button class="choice ${session.selected===i?'selected':''}" data-action="choose" data-index="${i}" aria-pressed="${session.selected===i}" ${session.checked?'disabled':''}><span class="letter">${String.fromCharCode(65+i)}</span><span ${opt.speak?'lang="nl"':''}>${esc(opt.text)}</span></button>`).join('')}</div>`:''}
  ${q.type==='fill'?`<label class="sr-only" for="written-answer">La parola mancante</label><input id="written-answer" class="text-answer" value="${esc(session.input||'')}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Scrivi una parola…" ${session.checked?'disabled':''}><p class="small muted">Maiuscole e punteggiatura finale non contano. Conserva i segni interni richiesti, come in België e auto's.</p>`:''}
  ${isTiles?`<div class="tile-answer" aria-label="La tua frase">${session.selection.length?session.selection.map(id=>{const tile=session.tiles.find(t=>t.id===id);return `<button class="tile" lang="nl" data-action="remove-tile" data-id="${id}" ${session.checked?'disabled':''}>${esc(tile.text)}</button>`;}).join(''):'<span class="placeholder">Tocca le parole nell’ordine desiderato.</span>'}</div><div class="tile-bank" aria-label="Parole disponibili">${session.tiles.map(tile=>`<button class="tile ${session.selection.includes(tile.id)?'used':''}" data-action="tile" data-id="${tile.id}" ${session.checked||session.selection.includes(tile.id)?'disabled':''} lang="nl">${esc(tile.text)}</button>`).join('')}</div><p class="small muted">Non servono tutte le tessere. Tocca una parola nella frase per rimuoverla.</p>`:''}
  ${session.checked?renderFeedback(q):''}
  <div class="form-actions"><button class="primary" data-action="${session.checked?'next':'check'}">${session.checked?'Continua →':'Controlla'}</button></div>`;
}
function explanationForInput(q,input){
  if(q.type==='mc')return session.options[session.selected]?.it||'Nessuna alternativa selezionata.';
  const known=UNITS.flatMap(u=>[...u.words,...u.keywords]).find(w=>acceptsAnswer(input,[w.nl,w.nl.replace(/^(?:de|het|zich) /,'')]));
  if(known)return `«${known.it}». ${q.note}`;
  if(q.type==='fill')return `La forma scritta non completa la frase con il significato richiesto. ${q.note}`;
  const terms=UNITS.flatMap(u=>[...u.words,...u.keywords]);
  const glosses=input.split(/\s+/).map(token=>{const word=terms.find(w=>acceptsAnswer(token,[w.nl,w.nl.replace(/^(?:de|het|zich) /,'')]));return word?`${token} = ${word.it}`:null;}).filter(Boolean);
  return glosses.length?`Parole riconosciute: ${[...new Set(glosses)].join('; ')}. La sequenza non rende la frase richiesta.`:'L’ordine o le forme scelte non costituiscono la traduzione richiesta; vedi la frase corretta.';
}
function renderFeedback(q){
  const f=session.feedback,full=q.sentence?.includes('___')?q.sentence.replace('___',q.answer):q.mode==='meaning'||q.mode==='listen'?q.audio||q.sentence:q.answer;
  return `<section class="feedback ${f.ok?'':'bad'}" role="status" aria-live="polite"><h2 lang="nl">${f.ok?'Goed zo!':'Niet helemaal'}</h2>
  ${f.ok?`<p>${q.retry?'Questa volta è giusta.': 'Risposta corretta.'}</p>`:`<div class="compare"><div class="answer-box wrong"><span class="label">La tua scelta</span><p>${esc(f.answer)}</p><small>${esc(explanationForInput(q,f.answer))}</small></div><div class="answer-box"><span class="label">Giusta</span><p lang="nl">${esc(q.answer)}</p><small>${esc(q.it)}</small></div></div>`}
  <p><b lang="nl">${esc(full)}</b><br>${esc(q.it)}</p><p class="small">${esc(q.note)}</p>
  ${q.type==='mc'?`<details><summary class="small">Significato delle alternative</summary><ul class="small">${q.options.map(o=>`<li><b>${esc(o.text)}</b>: ${esc(o.it)}</li>`).join('')}</ul></details>`:''}
  ${!f.ok?`<p class="small">${session.part==='review'?'La domanda torna più avanti nel ripasso.':q.retry?'Resta nel ripasso errori per la prossima volta.':'La domanda torna in fondo alla sessione ed è salvata nel ripasso.'}</p>`:''}</section>`;
}
function checkAnswer(){
  if(session.checked)return;
  const q=currentQuestion();let answer;
  if(q.type==='mc'){if(session.selected===null){toast('Scegli una risposta.');return;}answer=session.options[session.selected].text;}
  else if(q.type==='fill'){answer=document.querySelector('#written-answer').value.trim();session.input=answer;if(!answer){toast('Scrivi la parola mancante.');return;}}
  else {answer=session.selection.map(id=>session.tiles.find(t=>t.id===id).text).join(' ');if(!answer){toast('Componi la frase con le tessere.');return;}}
  const ok=q.type==='mc'?session.options[session.selected].sourceIndex===q.correct:acceptsAnswer(answer,q.answers);
  if(!session.firstAnswers[q.id]){
    session.firstAnswers[q.id]={ok};if(ok)session.correct++;
  }
  if(session.part==='review'){
    if(ok)delete state.errors[q.id];else session.queue.push({...q,retry:true});
  }else if(!ok){
    state.errors[q.id]={unit:q.unit||session.unit,question:{...q,retry:false},lastAnswer:answer};
    if(!q.retry)session.queue.push({...q,retry:true});
  }
  session.checked=true;session.feedback={ok,answer};save();render(false);
  document.querySelector('.feedback')?.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function nextQuestion(){
  const q=currentQuestion();if(q.type!=='card'&&!session.checked)return;
  session.index++;
  if(session.index>=session.queue.length){
    lastResult=finishSession(state,session);save();go('result',{unit:session.unit},true);
  }else render(true);
}
function renderResult(){
  const r=lastResult,u=unitById(r.unit),complete=u&&unitComplete(state,u),next=u?nextPart(state,u):null;
  const expression=r.percent===100?'festa':r.passed?'contento':'dispiaciuto';
  return `<section class="card result"><span class="eyebrow">${r.part==='review'?'Ripasso concluso':complete?'Unità completata':r.passed?'Parte superata':'Un altro passo per imparare'}</span>
  <h1>${r.part==='review'?'Errori risolti!':r.passed?'Goed gedaan!':'Ci riproviamo.'}</h1>${mascot(expression)}
  <div class="score">${r.percent}%</div><p>${r.correct} / ${r.total} risposte corrette al primo tentativo</p>
  <p>${r.part==='review'?'Hai corretto la coda di ripasso.':r.passed?'Hai raggiunto la soglia dell’80%.':'Per superare questa parte serve l’80%. Gli errori sono salvati: ripartiamo da quelli.'}</p>
  <div class="result-stats"><span class="pill">+${r.xp} XP</span><span class="pill">↗ ${visibleStreak(state)} giorni</span><span class="pill">${state.xp} XP totali</span></div>
  <div class="column">${r.part==='review'?'<button class="primary" data-action="finish-review">Torna al percorso →</button>':
    complete&&u.id<30?`<button class="primary" data-action="next-unit" data-unit="${u.id+1}">Unità ${u.id+1} · ${esc(unitById(u.id+1).it)} →</button>`:
    r.passed&&!complete?`<button class="primary" data-action="result-next" data-unit="${u.id}" data-part="${next.part}" data-block="${next.block}">${esc(next.label)} →</button>`:
    complete?'<button class="primary" data-action="result-home">Percorso completato →</button>':''}
    <button data-action="retry">Rifai${r.part==='review'?' le domande':''}</button><button class="back" data-action="back">${r.part==='review'?'‹ Ripasso':'‹ Torna all’unità'}</button></div></section>`;
}
function renderReview(){
  const errors=Object.values(state.errors);
  return `<div class="lesson"><button class="back" data-action="back">‹ Percorso</button><section class="card" style="margin-top:20px"><span class="eyebrow">Un passo alla volta</span><h1>Ripasso errori</h1><p><span data-testid="error-count">${errors.length}</span> domande da riprendere. Ogni risposta corretta elimina l’errore; quelle sbagliate tornano in fondo.</p><button class="primary wide" data-action="start-review" ${errors.length?'':'disabled'}>${errors.length?'Inizia il ripasso →':'Tutto ripassato ✓'}</button></section>${errors.length?`<div class="card"><h2>Da queste unità</h2><p>${[...new Set(errors.map(e=>e.unit))].map(id=>`${id}. ${esc(unitById(id)?.it||'Lessico')}`).join('<br>')}</p></div>`:`<div class="empty">${mascot('festa')}<p>Goed zo! Nessun errore in coda.</p></div>`}</div>`;
}
function renderSettings(){
  return `<div class="settings"><div class="row page-head"><button class="back" data-action="back">‹ Percorso</button><span class="pill">Su questo dispositivo</span></div><h1>Fallo tuo.</h1>
  <section class="card"><h2>Il tuo colore</h2><div class="palette-grid">${Object.entries(PALETTES).map(([id,p])=>`<button class="palette-button ${state.palette===id?'chosen':''}" data-action="palette" data-palette="${id}" aria-pressed="${state.palette===id}" style="background:${p.bg};box-shadow:4px 4px 0 ${p.accent}"><span class="palette-dot" style="background:${p.accent}"></span>${p.name}${state.palette===id?' ✓':''}<small style="display:block">Testo nero · sfondo chiaro</small></button>`).join('')}</div></section>
  <section class="card"><h2>Una voce neerlandese</h2><p>Preferenza per il Belgio (nl-BE), poi altre voci neerlandesi. Tocca due volte lo stesso testo per ascoltarlo più lentamente.</p>
  <button data-action="audio" aria-pressed="${state.audio}" style="margin-bottom:18px">Audio ${state.audio?'attivo ♪':'disattivato'}</button>
  <label for="voice-select" class="small">Voce del dispositivo</label><select id="voice-select" class="voice-select" ${voices.length?'':'disabled'}><option value="">Automatica · preferisci nl-BE</option>${voices.map(v=>`<option value="${esc(v.voiceURI)}" ${v.voiceURI===state.voiceURI?'selected':''}>${esc(v.name)} (${esc(v.lang)})${v.localService?' · locale':''}</option>`).join('')}</select>
  <button data-action="test-voice" ${voices.length?'':'disabled'}>♪ Prova: Dag, we gaan!</button><button class="back" data-action="voices" style="margin-left:14px">Aggiorna voci</button>
  ${voices.length?'':`<p class="notice" style="margin-top:18px">Nessuna voce neerlandese trovata. Finché non è disponibile, Patatino resta silenzioso e gli esercizi di ascolto mostrano la parola.</p>`}
  <h3>Android</h3><p class="small">Nelle Impostazioni cerca “Sintesi vocale” o “Output sintesi vocale”. Apri le impostazioni del motore vocale e scarica i dati per Nederlands. I nomi dei menu possono variare. Poi riapri Chrome e aggiorna le voci.</p>
  <h3>iPhone / iPad</h3><p class="small">Apri Impostazioni → Accessibilità → Contenuto letto ad alta voce (o Contenuti parlati) → Voci → Neerlandese/Nederlands. Scarica una voce, poi riapri Safari. Alcune voci del sistema potrebbero non essere esposte al browser.</p>
  <p class="small">Per ascoltare offline, scarica una voce locale. La disponibilità dell’audio dipende dal dispositivo.</p></section>
  <section class="card"><h2>Patatino sulla Home</h2><p class="small">Android / Chrome: menu ⋮ → Installa app o Aggiungi a schermata Home. iPhone / Safari: Condividi → Aggiungi alla schermata Home. Apri una volta online per preparare la copia offline.</p>${installEvent?'<button class="primary" data-action="install">Installa Patatino</button>':''}<p id="offline-status" class="small">${'serviceWorker' in navigator?'Il supporto offline si attiva quando apri l’app tramite HTTPS o localhost.':'Questo browser non supporta il funzionamento offline.'}</p></section>
  <section class="card"><h2>I tuoi progressi</h2><p class="small">Salvati soltanto in questo browser. Cambiando dispositivo o cancellando i dati del sito, non vengono trasferiti automaticamente.</p>${state.legacyProgress?'<p class="small">I punti della versione precedente sono conservati. Le nuove unità hanno contenuti diversi e vanno completate nel nuovo percorso.</p>':''}</section></div>`;
}
function render(scroll=false){
  applyTheme();
  app.innerHTML=(storageFailed?'<p class="notice" role="alert">Il browser non permette di salvare. Puoi studiare, ma i progressi potrebbero andare persi alla chiusura.</p>':'')+
    (route.page==='home'?renderHome():route.page==='unit'?renderUnit():route.page==='exercise'?renderExercise():route.page==='result'?renderResult():route.page==='settings'?renderSettings():renderReview());
  document.title=route.page==='unit'?`${unitById(route.unit).it} · Patatino`:'Patatino · Nederlands in Vlaanderen';
  if(scroll)window.scrollTo(0,0);
}
app.addEventListener('input',event=>{if(event.target.id==='written-answer')session.input=event.target.value;});
app.addEventListener('change',event=>{if(event.target.id==='voice-select'){state.voiceURI=event.target.value;save();}});
app.addEventListener('keydown',event=>{if(event.key==='Enter'&&event.target.id==='written-answer'){event.preventDefault();checkAnswer();}});
app.addEventListener('click',event=>{
  const el=event.target.closest('[data-action]');if(!el||el.disabled)return;
  event.preventDefault();const {action}=el.dataset;
  if(action==='back')back();
  else if(action==='home'){if(route.page!=='home')fromHome(()=>render(true));}
  else if(action==='unit')go('unit',{unit:Number(el.dataset.unit)});
  else if(action==='settings')fromHome(()=>go('settings'));
  else if(action==='audio'){state.audio=!state.audio;if(!state.audio)synth?.cancel();save();render(false);}
  else if(action==='speak')speak(el.dataset.text);
  else if(action==='palette'){state.palette=el.dataset.palette;save();render(false);}
  else if(action==='voices')discoverVoices();
  else if(action==='test-voice'){state.audio=true;save();speak('Dag, we gaan!');}
  else if(action==='start')startSession(Number(el.dataset.unit),el.dataset.part,Number(el.dataset.block||0));
  else if(action==='review')go('review');
  else if(action==='start-review')startSession(0,'review');
  else if(action==='choose'){
    if(session.checked)return;session.selected=Number(el.dataset.index);
    const choice=session.options[session.selected];speak(choice.text,choice.speak);render(false);
  }else if(action==='tile'||action==='remove-tile'){
    if(session.checked)return;const id=Number(el.dataset.id),tile=session.tiles.find(t=>t.id===id);
    speak(tile.text,tile.speak);
    if(action==='tile')session.selection.push(id);else session.selection=session.selection.filter(x=>x!==id);
    render(false);
  }else if(action==='check')checkAnswer();
  else if(action==='next')nextQuestion();
  else if(action==='streak')toast('Un giorno conta quando completi una sessione. Due giorni consecutivi fanno crescere la serie.');
  else if(action==='xp')toast('5 XP per risposta giusta al primo tentativo, più 20 XP quando superi una parte.');
  else if(action==='retry'){
    const old={...lastResult};
    if(old.part==='review'){
      const originals=session.queue.filter(q=>!q.retry&&q.type!=='card');
      session={id:`${Date.now()}-review`,unit:0,part:'review',block:0,queue:originals,index:0,total:originals.length,correct:0,firstAnswers:{},prepared:null};
      go('exercise',{unit:0},true);
    }else startSession(old.unit,old.part,old.block,true);
  }else if(action==='result-next'){startSession(Number(el.dataset.unit),el.dataset.part,Number(el.dataset.block),true);}
  else if(action==='next-unit'){fromHome(()=>go('unit',{unit:Number(el.dataset.unit)}));}
  else if(action==='result-home'||action==='finish-review'){fromHome(()=>render(true));}
  else if(action==='install'&&installEvent){installEvent.prompt();installEvent=null;}
});
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;if(route.page==='settings')render(false);});
window.addEventListener('online',()=>toast('Connessione disponibile.'));
window.addEventListener('offline',()=>toast('Sei offline. Continua con il corso salvato.'));
if(synth){
  synth.addEventListener?.('voiceschanged',discoverVoices);
  for(const delay of [100,600,1800,3500])setTimeout(discoverVoices,delay);
}else voiceReady=true;
if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
  navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{toast('La copia offline non è pronta. Riapri Patatino online.');});
}
render(true);
