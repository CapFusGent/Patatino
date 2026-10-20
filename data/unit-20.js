import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:20,title:'Vroeger was het anders',it:'Il passato semplice',group:3,
explanation:`<h2>L'idea</h2><p>Il passato semplice neerlandese, chiamato <i>onvoltooid verleden tijd</i>, descrive eventi passati, stati e sfondi narrativi. Non coincide perfettamente né con l'imperfetto né con il passato remoto italiano. <i>Ik werkte</i> può significare «lavoravo» o «lavorai», secondo il contesto. Molto spesso, nel parlato, incontrerai soprattutto le forme passate di essere, avere e dei modali.</p>
<h3>1 · Riconosci i verbi regolari</h3><p>I verbi regolari prendono <i>-te</i> oppure <i>-de</i> al singolare e <i>-ten</i> oppure <i>-den</i> al plurale. La scelta segue lo stesso principio delle consonanti sorde già incontrato nei participi. <i>Werken</i> dà <i>werkte</i>; <i>bellen</i> dà <i>belde</i>. Tutte le persone singolari condividono la stessa forma: <i>ik werkte</i>, <i>jij werkte</i>, <i>hij werkte</i>.</p>
<table><tr><th>Infinito</th><th>Singolare</th><th>Plurale</th></tr><tr><td>werken</td><td>werkte</td><td>werkten</td></tr><tr><td>bellen</td><td>belde</td><td>belden</td></tr><tr><td>zijn</td><td>was</td><td>waren</td></tr><tr><td>hebben</td><td>had</td><td>hadden</td></tr><tr><td>gaan</td><td>ging</td><td>gingen</td></tr><tr><td>komen</td><td>kwam</td><td>kwamen</td></tr><tr><td>lezen</td><td>las</td><td>lazen</td></tr><tr><td>kunnen</td><td>kon</td><td>konden</td></tr><tr><td>moeten</td><td>moest</td><td>moesten</td></tr></table>
<h3>2 · Impara le forme forti frequenti</h3><p>Molti verbi cambiano vocale: <i>komen</i> diventa <i>kwam</i>, <i>zien</i> diventa <i>zag</i>, <i>lezen</i> diventa <i>las</i>. Non puoi ottenere queste forme aggiungendo una desinenza regolare. Impara almeno infinito, passato singolare e participio insieme. I modali più frequenti includono <i>kon</i>, «potevo», <i>moest</i>, «dovevo», e <i>wilde</i>, «volevo»; il verbo dell'azione resta all'infinito.</p>
<h3>3 · Mantieni l'ordine della principale</h3><p>La forma del verbo cambia, ma V2 rimane: <i>gisteren werkte ik</i>. Non aggiungere <i>hebben</i> davanti al passato semplice: sarebbe una combinazione scorretta di due costruzioni. Per uno sfondo come «ero stanco», <i>ik was moe</i> è naturale. Per riferire un fatto concluso potrai usare anche il passato prossimo, ma non esiste una divisione automatica basata soltanto su «ieri» o sulla distanza temporale. Restano valide anche le regole dell'aggettivo: <i>een goede dag</i>, «una buona giornata», ma <i>een goed jaar</i>, «un buon anno».</p>
<p>In tutti gli esercizi di questa unità usa il passato semplice neerlandese, anche quando l'italiano potrebbe suggerire più tempi. Nel racconto reale, invece, la scelta dipende dalla prospettiva: una sequenza narrativa tende a mantenere un tempo coerente, mentre una conversazione può alternare stati e fatti conclusi. Il titolo <i>vroeger was het anders</i> significa «un tempo era diverso»: <i>vroeger</i> indica un tempo passato e <i>anders</i> significa «diverso».</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik heb werkte.</s> → <strong>Ik werkte.</strong> Oppure <strong>ik heb gewerkt</strong>, ma non mescolare le forme. <s>Wij was moe.</s> → <strong>Wij waren moe.</strong> Il plurale resta importante.</p>`,
keywords:'was=ero, eri, era|waren=eravamo, eravate, erano|had=avevo, avevi, aveva|hadden=avevamo, avevate, avevano|ging=andavo, andò|kwam=venivo, venne|kon=potevo, poteva|moest=dovevo, doveva',
words:'vroeg=presto|ziek=malato|gezond=sano|jong=giovane|het jaar=l’anno|de maand=il mese|de week=la settimana|de dag=il giorno',
vlaanderen:'Voormiddag e namiddag hanno in Belgio riferimenti diversi da alcuni usi nei Paesi Bassi. Nel raccontare un evento passato, precisa l’ora se il periodo non è chiaro.',source:'time',practiceNote:'Passato semplice senza ausiliare: werkte/werkten, was/waren. Nelle frasi con modale il verbo dell’azione resta all’infinito.',
rules:[
['Ik ___ moe.','was','Ero stanco.','Passato semplice di essere.','ben~Presente.','waren~Plurale.'],
['Wij ___ klaar.','waren','Eravamo pronti.','Essere, passato plurale.','was~Singolare.','zijn~Presente.'],
['Hij ___ een fiets.','had','Lui aveva una bici.','Avere, passato singolare.','heeft~Presente.','hadden~Plurale.'],
['Ik ___ gisteren.','werkte','Ieri lavoravo.','Passato semplice regolare di lavorare.','gewerkt~Participio.','werken~Infinito.'],
['Wij ___ haar.','belden','Le telefonammo.','Bellen, passato plurale.','belde~Singolare.','gebeld~Participio.'],
['Zij ___ naar huis.','ging','Lei andò a casa.','Gaan, passato singolare.','gaat~Presente.','gegaan~Participio.'],
['Hij ___ laat.','kwam','Lui arrivò tardi.','Komen, passato semplice.','komt~Presente.','gekomen~Participio.'],
['Ik ___ niet komen.','kon','Non potevo venire.','Kunnen, passato.','kan~Presente.','kunnen~Infinito.'],
['Wij ___ werken.','moesten','Dovevamo lavorare.','Moeten, passato plurale.','moest~Singolare.','moeten~Presente.'],
['Ik ___ het boek.','las','Lessi il libro.','Lezen, passato semplice.','lees~Presente.','gelezen~Participio.']
],sentences:[
['Ik was gisteren ziek.','Ieri ero malato.','!wass',['Gisteren was ik ziek.','Ziek was ik gisteren.']],
['Wij werkten die week.','Lavoravamo quella settimana.','maand',['Die week werkten wij.','We werkten die week.','Die week werkten we.']],
['Zij kwam vroeg.','Lei arrivò presto.','!kwamm',['Ze kwam vroeg.','Vroeg kwam zij.','Vroeg kwam ze.']],
['Hij had een goede dag.','Lui passò una buona giornata.','jaar',['Een goede dag had hij.']],
['Ik kon niet slapen.','Non riuscivo a dormire.','!konn',['Slapen kon ik niet.']],
['Wij waren jong.','Eravamo giovani.','ziek',['We waren jong.','Jong waren wij.','Jong waren we.']],
['Hij moest werken.','Lui doveva lavorare.','!moestt',['Werken moest hij.']],
['Ik las die brief.','Lessi quella lettera.','week',['Die brief las ik.']],
['Zij gingen naar het museum.','Loro andarono al museo.','!gingent',['Ze gingen naar het museum.','Naar het museum gingen zij.','Naar het museum gingen ze.']],
['Wij hadden een goed jaar.','Abbiamo avuto un buon anno: usa il passato semplice.','dag',['We hadden een goed jaar.','Een goed jaar hadden wij.','Een goed jaar hadden we.']]
]});
