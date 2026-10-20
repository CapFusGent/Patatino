import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:17,title:'Ik sta op',it:'I verbi separabili',group:3,
explanation:`<h2>L'idea</h2><p>Alcuni verbi neerlandesi sono costruiti con una particella che può staccarsi. <i>Opstaan</i> significa «alzarsi», ma nella frase principale diventa <i>ik sta op</i>. In italiano puoi cambiare verbo senza modificare la struttura; qui devi tenere presente che una parte dell'informazione arriva alla fine. La particella non è un dettaglio decorativo: può cambiare radicalmente il significato della base.</p>
<h3>1 · Separa quando il verbo è coniugato</h3><p>Nella principale semplice il verbo coniugato occupa la seconda posizione e la particella si colloca verso la fine: <i>Nora belt mij op</i>, «Nora mi telefona». Il soggetto non deve per forza essere all'inizio: <i>vandaag belt Nora mij op</i>. V2 riguarda la parte coniugata; la particella rimane nel posto finale della cornice verbale.</p>
<table><tr><th>Infinito</th><th>Principale</th><th>Italiano</th></tr><tr><td>opstaan</td><td>ik sta op</td><td>mi alzo</td></tr><tr><td>opbellen</td><td>ik bel je op</td><td>ti telefono</td></tr><tr><td>aankomen</td><td>de trein komt aan</td><td>il treno arriva</td></tr><tr><td>meenemen</td><td>ik neem het mee / wij nemen het mee</td><td>lo porto con me / lo portiamo con noi</td></tr><tr><td>aandoen</td><td>zij doet haar jas aan</td><td>lei si mette la sua giacca</td></tr><tr><td>opendoen</td><td>ik doe de deur open</td><td>apro la porta</td></tr><tr><td>dichtdoen</td><td>hij doet het raam dicht</td><td>lui chiude la finestra</td></tr></table>
<h3>2 · Riunisci con l'infinito</h3><p>Se un modale è il verbo coniugato, il separabile resta all'infinito e si scrive unito: <i>ik wil opstaan</i>. Non separare meccanicamente ogni volta che vedi una particella. Prima trova quale verbo è coniugato. Nelle subordinate incontrerai un altro contesto in cui le due parti si riuniscono; per ora confronta soltanto principale semplice e costruzione con modale.</p>
<h3>3 · Impara il verbo completo</h3><p><i>Meenemen</i> contiene il verbo irregolare <i>nemen</i>: al presente trovi <i>ik neem</i> e <i>wij nemen</i>. I composti di <i>doen</i> usano <i>ik doe</i>, <i>hij/zij doet</i>, <i>wij doen</i>. La separabilità non elimina le normali regole di coniugazione. Non tutti i prefissi sono separabili: <i>be-</i>, <i>ver-</i> e altri prefissi comuni non si trattano allo stesso modo. Per un verbo nuovo impara significato, forma con <i>ik</i> e comportamento della particella, ascoltando dove cade l'accento.</p>
<p>Negli esercizi, una lacuna può chiedere soltanto la particella oppure la parte coniugata. Leggi il suggerimento prima di completarla. Le tessere, invece, ti fanno costruire l'intera cornice: puoi mettere il tempo all'inizio, ma la particella deve continuare a completare il verbo.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik opsta.</s> → <strong>Ik sta op.</strong> <s>Ik wil sta op.</s> → <strong>Ik wil opstaan.</strong> <s>Ik neem mee het boek.</s> → <strong>Ik neem het boek mee.</strong> L'oggetto entra nella cornice.</p>`,
keywords:'op=particella di opstaan e opbellen|aan=particella di aankomen|mee=con sé, particella|uit=fuori, particella',
words:'opstaan=alzarsi|opbellen=telefonare a|aankomen=arrivare|meenemen=portare con sé|uitgaan=uscire|aandoen=mettersi un indumento|opendoen=aprire|dichtdoen=chiudere',
vlaanderen:'Deze middag è standard in tutto il territorio neerlandofono ed è più frequente nel parlato belga. In Belgio può indicare questo pomeriggio oppure la fascia di oggi fra le 12 e le 14: un orario preciso evita ambiguità.',source:'afternoon',practiceNote:'Principale: parte coniugata al secondo posto, particella in fondo. Dopo modale: infinito unito.',
rules:[
['Ik sta ___.','op','Mi alzo.','Completa opstaan.','aan~Particella di altri verbi.','mee~Con sé.'],
['Hij ___ mij op.','belt','Lui mi telefona.','Opbellen, terza persona.','bel~Forma con ik.','bellen~Plurale.'],
['De trein komt ___.','aan','Il treno arriva.','Completa aankomen.','op~Cambia verbo e significato.','mee~Viene insieme, altro senso.'],
['Ik neem het boek ___.','mee','Porto con me il libro.','Completa meenemen.','op~Registrare o raccogliere, altro verbo.','aan~Accettare, altro verbo.'],
['Wij willen ___.','opstaan','Vogliamo alzarci.','L’infinito resta unito.','opsta~Forma finita in una subordinata, non infinito.','!staatop~Unione scorretta.'],
['Hij doet de jas ___.','aan','Lui si mette la giacca.','Completa aandoen.','uit~Si toglie la giacca.','mee~Qui non significa mettersi la giacca.'],
['Ik doe de deur ___.','open','Apro la porta.','Completa opendoen.','dicht~Chiudo.','aan~Non significa aprire.'],
['Wij ___ uit.','gaan','Usciamo.','Uitgaan, plurale.','ga~Singolare.','gaat~Singolare.'],
['Ik wil jou ___.','opbellen','Voglio telefonarti.','Infinito dopo modale.','opbel~Forma finita in una subordinata, non infinito.','!beltop~Unione scorretta.'],
['Nora doet het raam ___.','dicht','Nora chiude la finestra.','Completa dichtdoen.','open~Apre.','mee~Non significa chiudere.']
],sentences:[
['Ik sta om acht uur op.','Mi alzo alle otto.','!opstaatt',['Om acht uur sta ik op.']],
['Hij belt mij op.','Lui mi telefona.','uitgaan',['Hij belt me op.','Mij belt hij op.']],
['De trein komt laat aan.','Il treno arriva tardi.','!aann',['Laat komt de trein aan.']],
['Wij nemen het boek mee.','Portiamo con noi il libro.','opstaan',['We nemen het boek mee.','Het boek nemen wij mee.','Het boek nemen we mee.']],
['Ik wil opstaan.','Voglio alzarmi.','!opstaant',['Opstaan wil ik.']],
['Zij doet haar jas aan.','Lei si mette la sua giacca.','aankomen',['Ze doet haar jas aan.','Haar jas doet zij aan.','Haar jas doet ze aan.']],
['Ik doe de deur open.','Apro la porta.','!openn',['De deur doe ik open.']],
['Wij willen uitgaan.','Vogliamo uscire.','dichtdoen',['We willen uitgaan.','Uitgaan willen wij.','Uitgaan willen we.']],
['Morgen bel ik jou op.','Domani ti telefono.','!belltt',['Ik bel jou morgen op.','Ik bel morgen jou op.','Morgen bel ik je op.','Ik bel je morgen op.','Jou bel ik morgen op.']],
['Hij doet het raam dicht.','Lui chiude la finestra.','opendoen',['Het raam doet hij dicht.']]
]});
