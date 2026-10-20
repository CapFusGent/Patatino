import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:24,title:'In, op, naast',it:'Le preposizioni',group:4,
explanation:`<h2>L'idea</h2><p>Le preposizioni collegano persone, cose, luoghi e tempi. Una stessa preposizione italiana può corrispondere a più parole neerlandesi: «a» non si traduce sempre con <i>aan</i>, né «in» sempre con <i>in</i>. Parti dalla relazione concreta: sei dentro un luogo, vai verso una destinazione, appoggi qualcosa su una superficie, oppure specifichi un momento? Poi impara le combinazioni fisse con i verbi.</p>
<h3>1 · Descrivi lo spazio</h3><p><i>In</i> indica l'interno, <i>op</i> il contatto con una superficie, <i>onder</i> una posizione inferiore, <i>naast</i> la vicinanza laterale. <i>Tussen</i> mette qualcosa fra due riferimenti e <i>achter</i> dietro. Non sono equivalenze assolute con l'italiano, ma immagini utili. Un libro <i>op de tafel</i> è sul tavolo; un oggetto <i>in de doos</i> è nella scatola.</p>
<p>Con un movimento, <i>over</i> può indicare l'attraversamento: <i>de bus rijdt over de brug</i>, «l'autobus attraversa il ponte». Qui <i>over</i> ha un significato spaziale diverso da quello già incontrato nelle ore. <i>Met</i> significa «con», mentre <i>zonder</i> significa «senza»: <i>zonder mijn collega</i> è «senza il mio collega».</p>
<table><tr><th>Relazione</th><th>Gruppo</th><th>Italiano</th></tr><tr><td>interno</td><td>in de kamer</td><td>nella stanza</td></tr><tr><td>superficie</td><td>op de tafel</td><td>sul tavolo</td></tr><tr><td>destinazione</td><td>naar de school</td><td>verso la scuola</td></tr><tr><td>compagnia</td><td>met de buur</td><td>con il vicino</td></tr><tr><td>provenienza</td><td>uit de stad</td><td>dalla città, originario</td></tr></table>
<h3>2 · Distingui posizione e movimento</h3><p>Per andare verso una destinazione usa spesso <i>naar</i>; per dire dove ti trovi usa una preposizione di posizione. <i>Ik ga naar huis</i> significa «vado a casa», mentre <i>ik ben thuis</i> significa «sono a casa». <i>Bij</i> può indicare vicinanza o la presenza presso qualcuno: <i>bij de bakker</i>, «dal panettiere». Non tentare di ricavare queste espressioni dalla sola traduzione delle parole.</p>
<h3>3 · Impara tempo e combinazioni</h3><p><i>Om</i> introduce un orario, <i>op</i> un giorno, <i>in</i> un mese o un anno. <i>Voor</i> e <i>na</i> collocano prima e dopo. Alcuni verbi richiedono una preposizione specifica: <i>wachten op</i>, «aspettare», e <i>denken aan</i>, «pensare a». <i>Denken aan</i> può richiamare qualcosa alla mente; <i>denken over</i> può indicare una riflessione attiva su qualcosa. Guarda quindi anche il significato, non soltanto il verbo. L'italiano può non avere una preposizione nello stesso punto, ma in neerlandese resta necessaria.</p>
<p>Negli esercizi il significato italiano precisa la relazione, perché più preposizioni potrebbero formare frasi grammaticali con sensi diversi. Una scelta non è sbagliata perché non esiste, ma perché descrive una posizione o un rapporto differente da quello richiesto.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik wacht de trein.</s> → <strong>Ik wacht op de trein.</strong> <s>Ik ga in de winkel.</s> → <strong>Ik ga naar de winkel.</strong> per «vado al negozio». <s>Om maandag</s> → <strong>op maandag</strong>.</p>`,
keywords:'op=su|onder=sotto|naast=accanto|achter=dietro|tussen=fra|bij=presso|over=attraverso, sopra nel movimento|zonder=senza',
words:'de bus=l’autobus|de halte=la fermata|de brug=il ponte|de bank=la panchina, la banca|de muur=il muro|de maandag=il lunedì|de tuin=il giardino|de ingang=l’ingresso',
vlaanderen:'Om hoe laat è una domanda standard in Belgio. L’uso di om nella domanda si collega all’orario di un evento, non alla sua durata.',source:'hour',practiceNote:'Scegli la preposizione in base alla relazione e alle combinazioni del verbo: wachten op, denken aan.',
rules:[
['Het boek ligt ___ de tafel.','op','Il libro è appoggiato sul tavolo.','Contatto con la superficie.','onder~Sotto.','naast~Accanto.'],
['De pen ligt ___ de doos.','in','La penna è nella scatola.','All’interno.','op~Sopra.','achter~Dietro.'],
['Ik ga ___ de winkel.','naar','Vado al negozio.','Destinazione.','met~Con.','uit~Fuori da.'],
['Ik wacht ___ de trein.','op','Aspetto il treno.','Preposizione richiesta da wachten.','aan~Non è la combinazione.','met~Aspettare prima di fare qualcosa, altro uso.'],
['Hij denkt ___ het plan.','aan','Lui pensa al piano, lo richiama alla mente.','Lo ha in mente, non sta riflettendo su come valutarlo.','op~Non è la preposizione richiesta.','uit~Fuori da.'],
['Ik kom ___ acht uur.','om','Vengo alle otto.','Orario preciso.','op~Con giorni.','in~Con mesi o intervalli.'],
['De fiets staat ___ de tafel.','onder','La bici è sotto il tavolo.','Posizione inferiore.','op~Sopra.','naast~Accanto.'],
['Ik werk ___ mijn collega.','met','Lavoro con il mio collega.','Compagnia.','zonder~Senza.','voor~Per.'],
['Het huis staat ___ de school.','naast','La casa è accanto alla scuola.','Posizione laterale.','achter~Dietro.','onder~Sotto.'],
['Ik kom ___ de stad.','uit','Vengo dalla città, ne sono originario.','Origine.','naar~Destinazione.','met~Compagnia.']
],sentences:[
['De bus staat bij de halte.','L’autobus è presso la fermata.','!bijj',['Bij de halte staat de bus.']],
['Ik zit op de bank.','Sono seduto sulla panchina.','brug',['Op de bank zit ik.']],
['De fiets staat achter de muur.','La bici è dietro il muro.','!achterr',['Achter de muur staat de fiets.']],
['Wij gaan naar de ingang.','Andiamo verso l’ingresso.','tuin',['We gaan naar de ingang.','Naar de ingang gaan wij.','Naar de ingang gaan we.']],
['De bank staat in de tuin.','La panchina è nel giardino.','!inn',['In de tuin staat de bank.']],
['Ik werk op maandag.','Lavoro il lunedì.','halte',['Op maandag werk ik.']],
['De bus rijdt over de brug.','L’autobus attraversa il ponte.','!overr',['Over de brug rijdt de bus.']],
['Hij wacht bij de ingang.','Lui aspetta presso l’ingresso.','muur',['Bij de ingang wacht hij.']],
['De pen ligt tussen de boeken.','La penna è fra i libri.','!tussenn',['Tussen de boeken ligt de pen.']],
['Wij wandelen naar de brug.','Passeggiamo verso il ponte.','bank',['We wandelen naar de brug.','Naar de brug wandelen wij.','Naar de brug wandelen we.']]
]});
