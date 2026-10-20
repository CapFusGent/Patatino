import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:21,title:'Ik voel me goed',it:'I verbi riflessivi',group:4,
explanation:`<h2>L'idea</h2><p>Un verbo riflessivo contiene un pronome che rimanda al soggetto: <i>ik was me</i>, «mi lavo». Italiano e neerlandese condividono questa possibilità, ma non assegnano sempre la forma riflessiva agli stessi verbi. Non tradurre automaticamente ogni «mi» italiano con <i>me</i>, né eliminare il pronome solo perché il verbo italiano non lo richiede. Impara il verbo insieme alla sua costruzione.</p>
<h3>1 · Abbina il pronome alla persona</h3><p>Con <i>ik</i> usa normalmente <i>me</i>, oppure <i>mij</i>; con <i>jij</i>, <i>je</i> o <i>jou</i>; con <i>hij</i> e <i>zij</i> singolare, <i>zich</i>. Al plurale trovi <i>ons</i> con «noi», normalmente <i>je</i> con <i>jullie</i>, e <i>zich</i> con «loro». Anche <i>jullie</i> può essere riflessivo, ma la ripetizione è meno comune. La forma di cortesia permette <i>u</i> oppure <i>zich</i> in molte costruzioni.</p>
<table><tr><th>Soggetto</th><th>Riflessivo</th><th>Frase</th></tr><tr><td>ik</td><td>me</td><td>ik was me</td></tr><tr><td>jij</td><td>je</td><td>jij wast je</td></tr><tr><td>hij / zij</td><td>zich</td><td>hij wast zich</td></tr><tr><td>wij</td><td>ons</td><td>wij wassen ons</td></tr><tr><td>jullie / zij plurale</td><td>je / zich</td><td>jullie wassen je</td></tr></table>
<h3>2 · Distingui se stessi da un'altra persona</h3><p><i>Hij wast zich</i> significa che lui lava se stesso; <i>hij wast hem</i> significa normalmente che lava un'altra persona maschile. Il riflessivo non è dunque intercambiabile con qualsiasi pronome oggetto. Con alcuni verbi il pronome è parte della costruzione: <i>zich vergissen</i>, «sbagliarsi», e <i>zich herinneren</i>, «ricordarsi».</p>
<p>Con <i>wassen</i> o <i>aankleden</i> puoi sottolineare «se stesso» con <i>zichzelf</i>. Le altre forme comprendono <i>mezelf/mijzelf</i>, <i>jezelf</i>, <i>onszelf</i> e, con la cortesia, <i>uzelf/zichzelf</i>. Per anticipare il riflessivo usa una forma forte: <i>zichzelf wast hij</i>. Non applicare automaticamente questa sostituzione a verbi obbligatoriamente riflessivi come <i>zich vergissen</i>.</p>
<h3>3 · Conserva la cornice verbale</h3><p>Con un modale il riflessivo si trova prima dell'infinito: <i>ik wil me wassen</i>. Il soggetto resta <i>ik</i>, quindi il pronome è <i>me</i> anche se l'infinito è lontano. Con un verbo separabile come <i>zich aankleden</i>, «vestirsi», la principale diventa <i>ik kleed me aan</i>. Nel passato prossimo molti riflessivi usano <i>hebben</i>, anche quando l'italiano sceglie essere: <i>ik heb me gewassen</i>.</p>
<p>Non tutte queste costruzioni descrivono letteralmente un'azione su se stessi: <i>zich voelen</i> significa «sentirsi» e descrive uno stato. Prima individua la persona, poi scegli il pronome richiesto dalla costruzione, infine controlla la coniugazione del verbo. Con parti del corpo è comune il possessivo: <i>ik was mijn handen</i>, «mi lavo le mani».</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Hij wast hem</s> → <strong>hij wast zich</strong> se intendi «si lava». <s>Wij voelen zich goed.</s> → <strong>Wij voelen ons goed.</strong> <s>Ik ben me gewassen.</s> → <strong>Ik heb me gewassen.</strong></p>`,
keywords:'me=mi, riflessivo|je=ti o vi, riflessivo|zich=si, riflessivo|ons=ci, riflessivo',
words:'wassen=lavare|zich voelen=sentirsi|zich vergissen=sbagliarsi|zich herinneren=ricordarsi|zich aankleden=vestirsi|zich haasten=affrettarsi|het gezicht=il viso|de hand=la mano',
vlaanderen:'Goesting è un termine informale belga per “voglia”. Nei contesti formali è utile distinguere il registro del vocabolo dalla correttezza della costruzione grammaticale.',source:'goesting',practiceNote:'Il riflessivo concorda con il soggetto: me, je, zich, ons, je, zich.',
rules:[
['Ik was ___.','me','Mi lavo.','Prima persona riflessiva.','zich~Terza persona.','ons~Prima persona plurale.','Me o mij rinvia a ik; mezelf e mijzelf sottolineano che lavo me stesso.',['mij','mezelf','mijzelf']],
['Hij wast ___.','zich','Lui si lava.','Lava se stesso.','hem~Un altro uomo.','me~Me, non lui stesso.'],
['Wij wassen ___.','ons','Ci laviamo.','Prima persona plurale.','zich~Terza persona.','me~Prima persona singolare.','Ons è la forma neutra; onszelf aggiunge enfasi.',['onszelf']],
['Jij wast ___.','je','Ti lavi.','Seconda persona riflessiva.','me~Mi.','zich~Terza persona.'],
['Zij voelen ___ goed.','zich','Loro si sentono bene.','Soggetto terza persona plurale.','ons~Prima persona plurale.','me~Prima persona singolare.'],
['Jullie wassen ___.','je','Vi lavate.','Seconda persona plurale.','zich~Terza persona.','ons~Noi.'],
['Ik wil ___ wassen.','me','Voglio lavarmi.','Il riflessivo dipende da ik.','zich~Terza persona.','ons~Noi.','Con ik: me o mij; con enfasi, mezelf o mijzelf.',['mij','mezelf','mijzelf']],
['Hij heeft ___ gewassen.','zich','Lui si è lavato.','Riflessivo con il soggetto hij.','hem~Un altro uomo.','ons~Noi.'],
['U wast ___.','u','Lei si lava.','Riflessivo di cortesia.','me~Mi.','ons~Ci.','Con u sono possibili u e zich; per sottolineare se stesso, uzelf o zichzelf.',['zich','uzelf','zichzelf']],
['Ik ___ me gewassen.','heb','Mi sono lavato.','Ausiliare neerlandese.','ben~L’italiano non determina l’ausiliare.','heeft~Terza persona.']
],sentences:[
['Ik voel me goed.','Mi sento bene.','!zichh',['Ik voel mij goed.','Goed voel ik me.','Goed voel ik mij.']],
['Hij wast zich.','Lui si lava.','haasten',['Hij wast zichzelf.','Zichzelf wast hij.']],
['Wij vergissen ons.','Ci sbagliamo.','!onss',['We vergissen ons.']],
['Zij kleedt zich aan.','Lei si veste.','wassen',['Ze kleedt zich aan.','Zij kleedt zichzelf aan.','Ze kleedt zichzelf aan.','Zichzelf kleedt zij aan.','Zichzelf kleedt ze aan.']],
['Ik herinner me die dag.','Mi ricordo quel giorno.','!herinnerr',['Ik herinner mij die dag.','Die dag herinner ik me.','Die dag herinner ik mij.']],
['Jullie haasten je.','Vi affrettate.','voelen',['Jullie haasten jullie.']],
['Wij voelen ons moe.','Ci sentiamo stanchi.','!onss',['We voelen ons moe.','Moe voelen wij ons.','Moe voelen we ons.']],
['Ik was mijn handen.','Mi lavo le mani.','gezicht',['Mijn handen was ik.']],
['Hij heeft zich gewassen.','Lui si è lavato.','!gewassent',['Hij heeft zichzelf gewassen.','Zichzelf heeft hij gewassen.','Gewassen heeft hij zich.','Gewassen heeft hij zichzelf.']],
['Ik wil me aankleden.','Voglio vestirmi.','vergissen',['Ik wil mij aankleden.','Ik wil mezelf aankleden.','Ik wil mijzelf aankleden.','Aankleden wil ik me.','Aankleden wil ik mij.','Aankleden wil ik mezelf.','Aankleden wil ik mijzelf.','Mezelf wil ik aankleden.','Mijzelf wil ik aankleden.']]
]});
