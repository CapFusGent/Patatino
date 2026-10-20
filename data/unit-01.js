import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:1,title:'Ik, jij, wij',it:'I pronomi soggetto',group:0,
explanation:`<h2>L'idea</h2>
<p>In italiano possiamo dire «sono pronto» senza nominare chi parla. In neerlandese una frase dichiarativa completa ha normalmente un soggetto espresso: <b>ik ben klaar</b>. Il pronome non è un'aggiunta enfatica, ma una parte della struttura. Pensa alla coppia soggetto e verbo come al nucleo della frase: prima individua la persona, poi scegli la forma verbale. In questa unità usiamo soprattutto <i>zijn</i>, essere, per presentarsi e descrivere uno stato.</p>
<h3>1 · Scegli la persona</h3>
<p><i>Ik</i> indica chi parla; <i>jij</i> chi ascolta; <i>hij</i> un uomo e <i>zij</i> una donna. <i>Het</i> può riprendere un nome neutro oppure introdurre un'espressione impersonale. Per più persone trovi <i>wij</i>, <i>jullie</i> e <i>zij</i>. La stessa parola <i>zij</i> significa dunque «lei» o «loro»: la forma del verbo e il contesto chiariscono il numero.</p>
<table><tr><th>Persona</th><th>Con zijn</th><th>Italiano</th></tr><tr><td>ik</td><td>ik ben</td><td>io sono</td></tr><tr><td>jij / je, u</td><td>jij bent, u bent</td><td>tu sei, Lei è</td></tr><tr><td>hij, zij / ze, het</td><td>hij is</td><td>lui è</td></tr><tr><td>wij / we, jullie, zij / ze</td><td>wij zijn</td><td>noi siamo</td></tr></table>
<h3>2 · Riconosci le forme brevi</h3>
<p><i>Je, ze</i> e <i>we</i> sono forme non accentate, frequentissime nel parlato. Non sono abbreviazioni scorrette. <i>Wij</i> mette più facilmente in contrasto «noi» con altre persone, mentre <i>we</i> è naturale quando il soggetto non porta un accento particolare. Quando l'esercizio non impone un contrasto, entrambe le forme sono accettate. Nella scrittura informale puoi incontrare anche <i>’k</i> per <i>ik</i>; qui usiamo <i>ik</i> come modello. Non confondere però una forma breve con l'assenza del soggetto: il pronome resta presente.</p>
<h3>3 · Rivolgiti a qualcuno</h3>
<p>La forma di cortesia è <i>u</i>, anche quando parli a un uomo: non tradurre il «Lei» italiano con <i>zij</i>. Nel neerlandese attuale usa <i>u bent</i>; <i>u is</i> è antiquato. <i>Jullie</i> è il plurale informale, corrispondente a «voi». I nomi propri, come Nora e Milan, possono sostituire il pronome. Dire <i>Nora is klaar</i> significa «Nora è pronta»; riprendendola userai <i>zij</i> o <i>ze</i>. L'aggettivo dopo essere non cambia con il genere della persona.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3>
<p><s>Ben klaar.</s> → <strong>Ik ben klaar.</strong> Nella frase completa conserva il soggetto. <s>Zij bent klaar.</s> → <strong>Zij is klaar.</strong> Per «lei» singolare serve <i>is</i>. Per «Lei è pronto», rivolto cortesemente all'interlocutore, scrivi <strong>U bent klaar.</strong></p>`,
keywords:'ik=io|jij=tu|u=Lei di cortesia|hij=lui|zij=lei o loro|het=esso, soggetto neutro|wij=noi|jullie=voi',
words:'zijn=essere|klaar=pronto|moe=stanco|blij=contento|rustig=tranquillo|de man=l’uomo|de vrouw=la donna|de collega=il collega, la collega',
vlaanderen:'In molte zone del Belgio sentirai ge/gij come forma informale di “tu”. Qui esercitiamo je/jij e u, le forme usuali dello standard.',source:'gij',
practiceNote:'Il soggetto va espresso; scegli ben, bent, is o zijn in base alla persona.',
rules:[
['___ ben klaar.','Ik','Sono pronto.','Chi parla in prima persona?','Hij~Lui: richiederebbe is.','Wij~Noi: richiederebbe zijn.','Con ben il soggetto è ik; nella scrittura informale puoi incontrare anche ’k.',["'k"]],
['___ bent moe.','Jij','Sei stanco.','Forma informale singolare.','Ik~Io: richiederebbe ben.','Hij~Lui: richiederebbe is.','Jij e je sono forme del soggetto informale singolare.',['Je']],
['___ zijn blij.','Wij','Siamo contenti.','Prima persona plurale.','Ik~Io: è singolare.','Hij~Lui: è singolare.','Wij e we indicano noi.',['We']],
['___ is rustig.','Hij','Lui è tranquillo.','Uomo di cui parli.','Jij~Tu: richiederebbe bent.','Wij~Noi: richiederebbe zijn.','Hij indica lui.'],
['___ bent klaar.','U','Lei è pronto.','Ti rivolgi cortesemente a una persona.','Zij~Lei di cui parli, non forma di cortesia.','Ik~Io: richiederebbe ben.','U è il pronome di cortesia.'],
['___ zijn moe.','Jullie','Voi siete stanchi.','Parli a più persone informalmente.','Ik~Io: è singolare.','Hij~Lui: è singolare.','Jullie significa voi.'],
['___ is blij.','Zij','Lei è contenta.','Donna di cui stai parlando.','Wij~Noi: plurale.','Ik~Io: prima persona.','Zij o ze con is indica lei.',['Ze']],
['Ik ___ rustig.','ben','Sono tranquillo.','Essere, prima persona singolare.','is~È: terza persona.','zijn~Essere o siamo/sono plurale.','Ik si combina con ben.'],
['We ___ klaar.','zijn','Siamo pronti.','Essere, prima persona plurale.','ben~Sono, prima persona singolare.','is~È, terza persona singolare.','We richiede zijn.'],
['De vrouw ___ moe.','is','La donna è stanca.','Un soggetto singolare.','ben~Solo con ik.','zijn~Forma plurale.','Un nome singolare richiede is.']
],
sentences:[
['Ik ben klaar.','Sono pronto.','!bentt',['Klaar ben ik.']],
['Jij bent moe.','Sei stanco.','blij',['Je bent moe.','Moe ben jij.','Moe ben je.']],
['Hij is rustig.','Lui è tranquillo.','!benn',['Rustig is hij.']],
['Zij is blij.','Lei è contenta.','moe',['Ze is blij.','Blij is zij.','Blij is ze.']],
['Wij zijn klaar.','Siamo pronti.','!iss',['We zijn klaar.','Klaar zijn wij.','Klaar zijn we.']],
['Jullie zijn rustig.','Voi siete tranquilli.','klaar',['Rustig zijn jullie.']],
['Zij zijn moe.','Loro sono stanchi.','!benn',['Ze zijn moe.','Moe zijn zij.','Moe zijn ze.']],
['U bent blij.','Lei è contento.','rustig',['Blij bent u.']],
['De man is moe.','L’uomo è stanco.','!zijnt',['Moe is de man.']],
['De vrouw is klaar.','La donna è pronta.','blij',['Klaar is de vrouw.']]
]});
