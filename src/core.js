export const STORAGE_KEY = 'patatino-progress';
export const PALETTES = {
  frietkot: {name:'Frietkot',bg:'#F5D130',accent:'#C2304C',light:'#fff1be'},
  mosselen: {name:'Mosselen',bg:'#BFE6DC',accent:'#1D3B5C',light:'#e7f8f2'},
  praline: {name:'Praline',bg:'#F7D3D8',accent:'#5A3324',light:'#fff0f1'},
  atomium: {name:'Atomium',bg:'#CFE4FA',accent:'#2343B8',light:'#edf5ff'}
};
export const GROUPS = ['Le basi','Prime frasi','Descrivere','Agire e raccontare','Precisare','Frasi complesse'];
export function freshState() {
  return {schema:2, units:{}, errors:{}, xp:0, streak:0, lastDay:null, palette:'frietkot', audio:true, voiceURI:'', awards:[]};
}
export function restoreState(raw) {
  const base=freshState();
  if (!raw || typeof raw !== 'object') return base;
  if (raw.schema !== 2) return {...base, xp:Number.isFinite(raw.xp)?Math.max(0,raw.xp):0, palette:PALETTES[raw.palette]?raw.palette:'frietkot', legacyProgress:raw};
  return {...base,...raw,units:raw.units&&typeof raw.units==='object'?raw.units:{},errors:raw.errors&&typeof raw.errors==='object'?raw.errors:{},awards:Array.isArray(raw.awards)?raw.awards.slice(-200):[],palette:PALETTES[raw.palette]?raw.palette:'frietkot',xp:Number.isFinite(raw.xp)?Math.max(0,raw.xp):0};
}
export function typography(s) {
  return String(s).normalize('NFC').replace(/[’‘ʼ]/g,"'").replace(/[‐‑‒–—]/g,'-');
}
export function normalizeAnswer(value, expected='') {
  let text=typography(value).toLocaleLowerCase('nl').trim();
  const target=typography(expected).toLocaleLowerCase('nl');
  const keepAccents=/[\u0300-\u036f]/.test(target.normalize('NFD'));
  if (!keepAccents) text=text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC');
  // Word-internal marks are meaningful only when the expected form requires them.
  if (!target.includes("'")) text=text.replace(/'/g,'');
  if (!target.includes('-')) text=text.replace(/-/g,' ');
  return text.replace(/[.,!?;:…«»“”"()[\]{}]/g,'').replace(/\s+/g,' ').trim();
}
export function acceptsAnswer(actual, answers) {
  return answers.some(expected=>normalizeAnswer(actual,expected)===normalizeAnswer(expected,expected));
}
export function vocabularyBlocks(words) {
  if(words.length<=10)return [words];
  // 11–13 cannot be split into 7–9-word blocks; overlap a few learned words.
  if(words.length<14)return [words.slice(0,7),words.slice(-7)];
  const count=Math.ceil(words.length/9), size=Math.ceil(words.length/count);
  return Array.from({length:count},(_,i)=>{
    const start=i*size,end=Math.min(start+size,words.length);
    return words.slice(end-start<7?Math.max(0,end-7):start,end);
  });
}
export function shuffle(items,random=Math.random) {
  const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;
}
export function makeVocabularyQueue(unit,blockIndex=0) {
  const block=vocabularyBlocks(unit.words)[blockIndex],queue=[],seen=[];
  for(let start=0;start<block.length;start+=6){
    const batch=block.slice(start,start+6);seen.push(...batch);
    for(const word of batch)queue.push({type:'card',id:`${unit.id}-card-${blockIndex}-${start}-${word.nl}`,word,kind:'lessico'});
    for(const mode of ['meaning','listen','produce']){
      for(const word of batch){
        const others=seen.filter(w=>w.nl!==word.nl && w.it!==word.it).slice(0,3);
        const index=unit.words.findIndex(w=>w.nl===word.nl), italian=mode!=='produce';
        const options=[word,...others].map(w=>({text:italian?w.it:w.nl,it:italian?w.nl:w.it,speak:!italian}));
        queue.push({id:`${unit.id}-v${blockIndex}-${index}-${mode}`,type:'mc',mode,unit:unit.id,
          prompt:mode==='meaning'?'Cosa significa?':mode==='produce'?'Come si dice in neerlandese?':'Ascolta e scegli.',
          sentence:mode==='meaning'?word.nl:mode==='produce'?word.it:'',audio:mode==='listen'?word.nl:null,
          options,correct:0,answer:options[0].text,answers:[options[0].text],
          it:word.it,note:`${word.nl} significa «${word.it}».`,seen:seen.map(w=>w.nl)});
      }
    }
  }
  return queue;
}
export function rotateTake(list,n,offset) {return Array.from({length:Math.min(n,list.length)},(_,i)=>list[(i+offset)%list.length]);}
export function makeGrammarQueue(unit,attempt=0) {
  return [
    ...unit.keywords.map((word,i)=>({type:'card',kind:'grammatica',word,id:`${unit.id}-key-${i}`})),
    ...rotateTake(unit.grammar,6,attempt*6%unit.grammar.length),
    ...rotateTake(unit.mixed,8,attempt*8%unit.mixed.length)
  ].map(q=>({...q,unit:unit.id}));
}
export function scoreFor(state,unitId,part,block=0) {
  const entry=state.units[unitId]||{};
  return part==='grammar' ? entry.grammar : entry.blocks?.[block];
}
export function unitComplete(state,unit) {
  return !!scoreFor(state,unit.id,'grammar')?.passed && vocabularyBlocks(unit.words).every((_,i)=>scoreFor(state,unit.id,'vocab',i)?.passed);
}
export function nextPart(state,unit) {
  const blocks=vocabularyBlocks(unit.words);
  const index=blocks.findIndex((_,i)=>!scoreFor(state,unit.id,'vocab',i)?.passed);
  if(index>=0)return {part:'vocab',block:index,label:blocks.length>1?`Lessico · blocco ${index+1}`:'Parte 1 · Lessico'};
  return {part:'grammar',block:0,label:'Parte 2 · Grammatica'};
}
export function localDay(date=new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
export function updateStreak(state,date=new Date()) {
  const day=localDay(date);
  if(state.lastDay===day)return;
  const previous=new Date(date);previous.setDate(previous.getDate()-1);
  state.streak=state.lastDay===localDay(previous)?state.streak+1:1;
  state.lastDay=day;
}
export function visibleStreak(state,date=new Date()) {
  const yesterday=new Date(date);yesterday.setDate(yesterday.getDate()-1);
  return [localDay(date),localDay(yesterday)].includes(state.lastDay)?state.streak:0;
}
export function finishSession(state,session,date=new Date()) {
  if(state.awards.includes(session.id))return session.result;
  const percent=session.total?Math.round(session.correct/session.total*100):0,passed=percent>=80;
  const xp=session.correct*5+(passed&&session.part!=='review'?20:0);
  state.xp+=xp;updateStreak(state,date);state.awards.push(session.id);state.awards=state.awards.slice(-200);
  if(session.part!=='review'){
    const entry=state.units[session.unit] ||= {blocks:[]};entry.blocks ||= [];
    const old=scoreFor(state,session.unit,session.part,session.block)||{};
    const record={best:Math.max(old.best||0,percent),last:percent,passed:!!old.passed||passed,attempts:(old.attempts||0)+1};
    if(session.part==='grammar')entry.grammar=record;else entry.blocks[session.block]=record;
  }
  return session.result={percent,passed,xp,correct:session.correct,total:session.total,part:session.part,unit:session.unit,block:session.block};
}
