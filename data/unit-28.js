import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:28,title:'Hij zegt dat…',it:'Il discorso indiretto',group:5,
explanation:`<h2>L'idea</h2><p>Il discorso diretto ripete le parole di qualcuno; quello indiretto le integra nella tua frase. «Nora dice: “Sono stanca”» diventa <i>Nora zegt dat ze moe is</i>. Non basta togliere le virgolette: devi adattare la prospettiva, scegliere il collegamento e usare l'ordine subordinato. L'italiano fa cambiamenti simili nei pronomi, ma non sposta il verbo nello stesso modo.</p>
<h3>1 · Riporta una dichiarazione</h3><p>Dopo verbi come <i>zeggen</i> e <i>vertellen</i>, una dichiarazione viene spesso introdotta da <i>dat</i>. Il soggetto originale <i>ik</i> diventa il pronome che identifica chi ha parlato. Se Nora dice <i>ik ben thuis</i>, tu puoi riferire <i>Nora zegt dat zij thuis is</i>. La forma verbale cambia insieme alla persona, e si colloca verso la fine.</p>
<table><tr><th>Tipo</th><th>Collegamento</th><th>Struttura riferita</th></tr><tr><td>affermazione</td><td>dat</td><td>hij zegt dat hij komt</td></tr><tr><td>domanda sì/no</td><td>of</td><td>hij vraagt of ik kom</td></tr><tr><td>domanda sul luogo</td><td>waar</td><td>hij vraagt waar ik woon</td></tr><tr><td>domanda sul tempo</td><td>wanneer</td><td>hij vraagt wanneer ik kom</td></tr></table>
<h3>2 · Riporta una domanda</h3><p>Una domanda sì/no usa <i>of</i>, «se»: <i>hij vraagt of de winkel open is</i>. Non usare <i>als</i>, che introduce una condizione. Se la domanda originale contiene una parola interrogativa, conserva quella parola: <i>waar</i>, <i>wie</i>, <i>wanneer</i>. Dentro la domanda indiretta non usare l'inversione della domanda diretta: <i>waar ik woon</i>, non <i>waar woon ik</i>.</p>
<h3>3 · Controlla tempo e prospettiva</h3><p>Quando riferisci al passato, il tempo della subordinata può arretrare: <i>hij zei dat hij moe was</i>. Qui <i>zei</i> è il passato di <i>zeggen</i>, «disse»; <i>vroeg</i> è il passato di <i>vragen</i>, «chiese», e non l'avverbio «presto» già incontrato. Ricorda anche <i>komen → kwam</i> al singolare e <i>kwamen</i> al plurale. Non applicare però una sostituzione meccanica a ogni frase: se un fatto resta vero, il presente può essere adatto. Anche parole come «qui», «oggi» e «domani» dipendono dal momento e dal luogo di chi riferisce. La traduzione deve conservare il riferimento, non soltanto le parole originali.</p>
<p>Negli esercizi trovi indicazioni esplicite su chi parla e su quale tempo usare. Questo permette una risposta determinata senza inventare il contesto. In una conversazione reale, prima identifica il parlante originale e l'interlocutore, poi ricostruisci i pronomi e infine controlla la posizione dei verbi.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Hij vraagt als ik kom.</s> → <strong>Hij vraagt of ik kom.</strong> <s>Hij vraagt waar woon ik.</s> → <strong>Hij vraagt waar ik woon.</strong> <s>Nora zegt dat ik moe ben</s> → <strong>Nora zegt dat zij moe is</strong>, se Nora parlava di se stessa.</p>`,
keywords:'dat=che, dichiarazione riferita|of=se, domanda indiretta|waar=dove|wanneer=quando|zei=disse|vroeg=chiese',
words:'vertellen=raccontare, dire|vragen=chiedere|antwoorden=rispondere|geloven=credere|de boodschap=il messaggio, comunicazione|het gesprek=la conversazione|de vergadering=la riunione|de informatie=l’informazione',
vlaanderen:'Om hoe laat è standard in Belgio e può comparire anche in una domanda indiretta. Hoe laat resta una scelta condivisa in tutta l’area neerlandofona.',source:'hour',practiceNote:'Dat per dichiarazioni; of per domande sì/no; nella domanda indiretta usa l’ordine subordinato.',
rules:[
['Hij zegt ___ hij komt.','dat','Lui dice che viene.','Riporta un’affermazione.','of~Domanda sì/no, non affermazione.','want~Causa con ordine principale.'],
['Hij vraagt ___ ik kom.','of','Lui chiede se vengo.','Domanda indiretta sì/no.','als~Condizione, non domanda indiretta.','dat~Non introduce questa domanda.'],
['Zij vraagt waar ik ___.','woon','Lei chiede dove abito.','Wonen con ik, in fondo.','woont~Terza persona.','wonen~Plurale.'],
['Nora zegt dat ___ moe is.','zij','Nora dice che è stanca, lei stessa.','Il parlante originale è Nora.','ik~Io, richiederebbe ben.','wij~Noi, richiederebbe zijn.'],
['Hij vroeg of ik ___ komen.','kon','Lui chiese se potevo venire.','Kunnen al passato.','kan~Presente.','kunnen~Infinito.'],
['Hij zei dat hij moe ___.','was','Lui disse che era stanco.','Essere al passato singolare.','waren~Plurale.','ben~Presente prima persona.'],
['Zij vraagt ___ de trein komt.','wanneer','Lei chiede quando arriva il treno.','Chiedi il momento.','waar~Luogo.','waarom~Motivo.'],
['Hij vraagt of de winkel open ___.','is','Lui chiede se il negozio è aperto.','Soggetto singolare.','zijn~Plurale.','ben~Prima persona.'],
['Ik vraag ___ zij woont.','waar','Chiedo dove abita lei.','Informazione di luogo.','wanneer~Tempo.','waarom~Motivo.'],
['Zij zegt dat wij moeten ___.','werken','Lei dice che dobbiamo lavorare.','Infinito dopo il modale.','werk~Prima persona.','werkt~Singolare.']
],sentences:[
['Hij vertelt dat hij moe is.','Lui racconta che è stanco.','!vertelltt'],
['Zij vraagt of ik kom.','Lei chiede se vengo.','geloven',['Ze vraagt of ik kom.']],
['Ik vraag waar de vergadering is.','Chiedo dove si tiene la riunione.','!vraagg'],
['Hij antwoordt dat hij thuis blijft.','Lui risponde che resta a casa.','vertellen'],
['Wij weten niet of zij komt.','Non sappiamo se lei viene.','!komtt',['We weten niet of zij komt.','Wij weten niet of ze komt.','We weten niet of ze komt.']],
['Nora zei dat zij ziek was.','Nora disse che era malata.','vragen',['Nora zei dat ze ziek was.']],
['Hij vroeg wanneer wij kwamen.','Lui chiese quando venivamo.','!kwament',['Hij vroeg wanneer we kwamen.']],
['Ik geloof dat de informatie goed is.','Credo che l’informazione sia buona.','boodschap'],
['Hij vraagt hoe laat het gesprek begint.','Lui chiede a che ora comincia la conversazione.','!begintt',['Hij vraagt om hoe laat het gesprek begint.'],'Hoe laat è comune a tutta l’area neerlandofona; om hoe laat è anche standard in Belgio. Entrambe chiedono l’orario.'],
['Zij vertelt dat zij heeft gewerkt.','Lei racconta che ha lavorato.','antwoorden',['Zij vertelt dat zij gewerkt heeft.','Ze vertelt dat ze heeft gewerkt.','Ze vertelt dat ze gewerkt heeft.','Zij vertelt dat ze heeft gewerkt.','Zij vertelt dat ze gewerkt heeft.','Ze vertelt dat zij heeft gewerkt.','Ze vertelt dat zij gewerkt heeft.'],'Zij e ze possono riferirsi alla stessa donna. Heeft gewerkt e gewerkt heeft mantengono lo stesso tempo; dat introduce sempre ciò che lei racconta.']
]});
