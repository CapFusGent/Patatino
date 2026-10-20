import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { loadUnits } from './load-data.mjs';
import { acceptsAnswer, normalizeAnswer, vocabularyBlocks } from '../src/core.js';
const clean=s=>s.toLowerCase().normalize('NFC').replace(/[.!?,;:]/g,'').replace(/[’]/g,"'").trim();
export const explanationWords=html=>html.replace(/<[^>]+>/g,' ').split(/\s+/).filter(w=>/[\p{L}\p{N}]/u.test(w)).length;
export function validateUnits(units) {
  assert.equal(units.length,30,'Servono 30 unità');
  const allIds=new Set();
  for(const [index,u] of units.entries()){
    const at=`Unità ${u.id}`;
    assert.equal(u.id,index+1,`${at}: ordine`);assert.equal(u.group,Math.floor(index/5),`${at}: gruppo`);
    for(const key of ['title','it','explanation','practiceNote'])assert.ok(typeof u[key]==='string'&&u[key].trim(),`${at}: ${key}`);
    const words=explanationWords(u.explanation);assert.ok(words>=300&&words<=600,`${at}: spiegazione ${words} parole (300–600)`);
    for(const part of ["L'idea",'Attenzione: errori tipici di chi parla italiano','<table','<s>','<strong>'])assert.ok(u.explanation.includes(part),`${at}: manca ${part}`);
    assert.ok(u.vlaanderen.text&&/^https:\/\//.test(u.vlaanderen.source.url),`${at}: nota e fonte Fiandre`);
    assert.ok(u.keywords.length<=8,`${at}: troppe parole chiave`);assert.ok(u.words.length>=8&&u.words.length<=18,`${at}: lessico 8–18`);
    const kw=new Set(u.keywords.map(w=>clean(w.nl)));
    for(const list of [u.words,u.keywords]){
      assert.equal(new Set(list.map(w=>clean(w.nl))).size,list.length,`${at}: parole duplicate`);
      for(const w of list)assert.ok(w.nl&&w.it,`${at}: traduzione parola assente`);
    }
    for(const w of u.words)assert.ok(!kw.has(clean(w.nl)),`${at}: parola anche fra chiave: ${w.nl}`);
    if(u.words.length>10)for(const block of vocabularyBlocks(u.words))assert.ok(block.length>=7&&block.length<=9,`${at}: blocco lessico fuori 7–9`);
    assert.equal(u.grammar.length,10,`${at}: 10 regole`);assert.ok(u.mixed.length>=10&&u.mixed.length<=12,`${at}: 10–12 frasi miste`);
    for(const q of [...u.grammar,...u.mixed]){
      assert.ok(!allIds.has(q.id),`${at}: id duplicato ${q.id}`);allIds.add(q.id);
      for(const key of ['id','prompt','answer','it','note'])assert.ok(q[key]?.trim(),`${at} ${q.id}: manca ${key}`);
      assert.ok(['mc','fill','order','tr'].includes(q.type),`${q.id}: tipo`);
      assert.ok(q.answers.length&&q.answers.every(a=>typeof a==='string'&&a.trim()),`${q.id}: risposte`);
      assert.ok(acceptsAnswer(q.answer,q.answers),`${q.id}: risposta canonica`);
      assert.equal(new Set(q.answers.map(a=>normalizeAnswer(a,a))).size,q.answers.length,`${q.id}: risposte duplicate`);
      if(q.type==='mc'){
        assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,`${q.id}: indice`);
        assert.equal(new Set(q.options.map(o=>clean(o.text))).size,q.options.length,`${q.id}: opzioni duplicate`);
        q.options.forEach((o,i)=>{
          assert.ok(o.text&&o.it&&typeof o.speak==='boolean',`${q.id}: opzione senza traduzione/audio`);
          assert.equal(acceptsAnswer(o.text,q.answers),i===q.correct,`${q.id}: più risposte valide / distrattore uguale`);
        });
      }else if(q.type==='fill'){
        assert.equal((q.sentence.match(/___/g)||[]).length,1,`${q.id}: lacuna`);
        assert.ok(q.hint,`${q.id}: suggerimento`);
        q.answers.forEach(a=>assert.equal(a.trim().split(/\s+/).length,1,`${q.id}: fill deve essere una parola (${a})`));
        assert.ok(!q.answers.some(a=>q.hint.toLowerCase().split(/\s+/).includes(a.toLowerCase())),`${q.id}: suggerimento rivela risposta`);
      }else{
        const distractors=q.tiles.filter(t=>t.distractor);
        assert.ok(distractors.length,`${q.id}: manca distrattore`);
        const lex=new Set(u.words.flatMap(w=>[clean(w.nl),clean(w.nl.replace(/^(?:de|het|zich)\s+/,''))]));
        for(const t of distractors){
          assert.ok(!q.tiles.some(x=>!x.distractor&&clean(x.text)===clean(t.text)),`${q.id}: distrattore uguale a risposta`);
          if(q.type==='order')assert.equal(t.speak,false,`${q.id}: distrattore malformato deve essere silenzioso`);
          if(q.type==='tr')assert.ok(lex.has(clean(t.text)),`${q.id}: distrattore ${t.text} fuori lessico unità`);
        }
        for(const answer of q.answers){
          const available=q.tiles.filter(t=>!t.distractor).map(t=>clean(t.text));
          for(const token of answer.replace(/[.!?,;:]$/,'').split(/\s+/)){
            const pos=available.indexOf(clean(token));assert.ok(pos>=0,`${q.id}: tessera assente ${token}`);available.splice(pos,1);
          }
        }
      }
    }
  }
  return true;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const units=await loadUnits();validateUnits(units);console.log('Validatore superato: 30 unità, 600 esercizi, campi, traduzioni, risposte, distrattori, tessere, lunghezza spiegazioni e blocchi lessicali.');
}
