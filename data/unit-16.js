import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:16,title:'Vaak, soms, nooit',it:'Gli avverbi',group:3,
explanation:`<h2>L'idea</h2><p>Un avverbio precisa come, quando, dove o con quale frequenza succede qualcosa. In italiano spesso riconosci il finale «-mente»; in neerlandese molti avverbi hanno la stessa forma dell'aggettivo. <i>Snel</i> può descrivere un treno veloce oppure il modo in cui qualcuno cammina; anche <i>vlug</i> e <i>rap</i> possono significare «velocemente». La funzione dipende dal collegamento nella frase, non da una terminazione obbligatoria.</p>
<h3>1 · Separa qualità e modo</h3><p><i>Een snelle trein</i> contiene un aggettivo prima del nome e quindi la flessione in <i>-e</i>. In <i>de trein rijdt snel</i>, «il treno va veloce», <i>snel</i> precisa l'azione e non prende quella terminazione. Non aggiungere una <i>-e</i> solo perché il soggetto è plurale. La forma avverbiale rimane stabile anche quando cambia il numero delle persone.</p>
<table><tr><th>Funzione</th><th>Parole</th><th>Significato</th></tr><tr><td>frequenza</td><td>altijd, vaak, soms, nooit</td><td>sempre, spesso, talvolta, mai</td></tr><tr><td>tempo</td><td>nu, later</td><td>adesso, più tardi</td></tr><tr><td>modo</td><td>snel, rustig</td><td>velocemente, tranquillamente</td></tr><tr><td>grado</td><td>heel, erg</td><td>molto</td></tr></table>
<h3>2 · Trova una posizione naturale</h3><p>Nelle frasi semplici un avverbio di frequenza sta spesso dopo il verbo coniugato: <i>ik wandel vaak</i>. Con un modale può stare fra modale e infinito: <i>ik wil nu vertrekken</i>. Se lo porti all'inizio, applica V2: <i>soms wandel ik</i>. Questa possibilità non significa che tutte le parole possano essere spostate liberamente; conserva i gruppi e controlla ciò che vuoi mettere in evidenza. Riprendi anche le forme del presente: <i>slapen → zij slaapt</i>, <i>rijden → hij rijdt</i>, <i>praten → wij praten</i>, <i>luisteren → ik luister</i>, <i>vertrekken → wij vertrekken</i>.</p>
<h3>3 · Distingui intensità e quantità</h3><p><i>Heel</i> può intensificare un aggettivo: <i>heel rustig</i>, «molto tranquillo». Per una quantità, invece, userai spesso <i>veel</i>: <i>veel koffie</i>. Non tradurre ogni «molto» con la stessa parola. Alcuni avverbi, come <i>nooit</i>, esprimono già una negazione. Nello standard non aggiungere automaticamente <i>niet</i> solo perché l'italiano dice «non vengo mai».</p>
<p>Quando sono possibili due ordini naturali, il corso li accetta. Per capire una frase ascoltata, cerca prima il verbo coniugato e poi chiediti quale parola indica tempo, modo o frequenza. Non confondere <i>soms</i>, che esprime occasionalità, con <i>vaak</i>, che indica un'abitudine frequente: entrambi lasciano possibili eccezioni, mentre <i>altijd</i> è più assoluto. <i>Dikwijls</i> è un sinonimo di <i>vaak</i>; il più formale <i>nimmer</i> significa <i>nooit</i>.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Hij loopt snelle.</s> → <strong>Hij loopt snel.</strong> L'avverbio non prende la flessione attributiva. <s>Soms ik werk.</s> → <strong>Soms werk ik.</strong> <s>Ik kom niet nooit.</s> → <strong>Ik kom nooit.</strong> Per «non vengo mai» basta la parola negativa.</p>`,
keywords:'altijd=sempre|vaak=spesso|soms=talvolta|nooit=mai|nu=adesso|later=più tardi|heel=molto, intensità|erg=molto, intensità',
words:'wandelen=passeggiare|rijden=guidare, viaggiare su un mezzo|vertrekken=partire|slapen=dormire|praten=parlare|luisteren=ascoltare|gemakkelijk=facile|moeilijk=difficile',
vlaanderen:'Vannamiddag è standard in Belgio e indica questo pomeriggio, all’incirca fra le 14 e le 18. È particolarmente usato nella conversazione informale.',source:'afternoon',practiceNote:'Negli esempi l’avverbio di modo non prende e. All’inizio della principale provoca inversione.',
rules:[
['Hij loopt ___.','snel','Lui cammina velocemente.','Forma avverbiale di veloce.','snelle~Aggettivo flesso.','!snelen~Forma inesistente.','Snel è invariabile come avverbio; anche vlug e rap significano velocemente.',['vlug','rap']],
['___ werk ik.','Soms','Talvolta lavoro.','Frequenza occasionale.','Altijd~Sempre.','Nooit~Mai.'],
['Ik kom ___.','nooit','Non vengo mai.','Una parola negativa.','vaak~Spesso.','altijd~Sempre.','Nooit significa mai; nimmer è un sinonimo più formale.',['nimmer']],
['Het huis is ___ groot.','heel','La casa è molto grande.','Intensifica un aggettivo.','veel~Quantità, non intensifica groot qui.','nooit~Mai, altro significato.'],
['Ik drink ___ koffie.','veel','Bevo molto caffè.','Indica una quantità.','heel~Non indica questa quantità.','erg~Intensità, non quantità.'],
['Nu ___ ik werken.','wil','Adesso voglio lavorare.','Volere, prima persona.','willen~Plurale.','wilt~Forma con jij/u, non con ik.'],
['Zij werkt ___.','vaak','Lei lavora spesso.','Frequenza alta ma non assoluta.','nooit~Mai.','soms~Talvolta.','Vaak e dikwijls significano spesso.',['dikwijls']],
['Wij komen ___.','later','Veniamo più tardi.','Tempo successivo.','nu~Adesso.','nooit~Mai.'],
['Soms ___ wij koffie.','drinken','Talvolta beviamo caffè.','Bere, plurale dopo inversione.','drink~Singolare.','drinkt~Singolare.'],
['Hij werkt ___.','rustig','Lui lavora tranquillamente.','Modo, senza flessione.','rustige~Forma attributiva.','rustiger~Più tranquillamente: comparativo, altro significato.']
],sentences:[
['Ik wandel vaak.','Passeggio spesso.','!vaakk',['Vaak wandel ik.']],
['Zij slaapt nu.','Lei dorme adesso.','praten',['Nu slaapt zij.','Ze slaapt nu.','Nu slaapt ze.']],
['Wij vertrekken later.','Partiamo più tardi.','!laterr',['Later vertrekken wij.','We vertrekken later.','Later vertrekken we.']],
['Hij rijdt snel.','Lui guida velocemente.','slapen',['Snel rijdt hij.']],
['Soms praten wij.','Talvolta parliamo.','!somss',['Wij praten soms.','Soms praten we.','We praten soms.']],
['Ik luister altijd.','Ascolto sempre.','vertrekken',['Altijd luister ik.']],
['Dit is heel moeilijk.','Questo è molto difficile.','!heell',['Heel moeilijk is dit.']],
['Wij wandelen nooit.','Non passeggiamo mai.','rijden',['We wandelen nooit.','Nooit wandelen wij.','Nooit wandelen we.']],
['De les is erg gemakkelijk.','La lezione è molto facile.','!ergg',['Erg gemakkelijk is de les.']],
['Nu wil ik slapen.','Adesso voglio dormire.','praten',['Ik wil nu slapen.','Slapen wil ik nu.']]
]});
