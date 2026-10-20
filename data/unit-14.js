import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:14,title:'Een mooi huis',it:'Gli aggettivi',group:2,
explanation:`<h2>L'idea</h2><p>Un aggettivo descrive una persona o una cosa. In italiano cambia spesso per genere e numero; in neerlandese la distinzione principale è la posizione. Dopo un verbo come essere la forma di base resta normalmente invariata: <i>het huis is mooi</i>, «la casa è bella». Prima del nome, invece, compare spesso una <i>-e</i>: <i>het mooie huis</i>. Non trasferire dunque il sistema italiano parola per parola.</p>
<h3>1 · Dopo il verbo: forma base</h3><p><i>De fiets is nieuw</i> e <i>de fietsen zijn nieuw</i> usano lo stesso aggettivo. Il verbo cambia al plurale, l'aggettivo no. Anche se parli di una donna o di più donne, <i>blij</i> rimane <i>blij</i>. Controlla prima se l'aggettivo è collegato al nome tramite un verbo oppure si trova direttamente davanti al nome: questa domanda risolve molti errori.</p>
<table><tr><th>Contesto</th><th>Forma</th><th>Italiano</th></tr><tr><td>dopo zijn</td><td>het huis is mooi</td><td>la casa è bella</td></tr><tr><td>nome de</td><td>een mooie fiets</td><td>una bella bici</td></tr><tr><td>het definito</td><td>het mooie huis</td><td>la bella casa</td></tr><tr><td>het indefinito singolare</td><td>een mooi huis</td><td>una bella casa</td></tr></table>
<h3>2 · Prima del nome: di solito e</h3><p>Davanti a un nome con <i>de</i> aggiungi normalmente <i>-e</i>, anche con <i>een</i>. Con un nome neutro singolare definito vale la stessa regola: <i>dit nieuwe boek</i>. Al plurale l'aggettivo davanti al nome prende normalmente <i>-e</i>. La grafia si adatta al suono: <i>groot</i> diventa <i>grote</i>, mentre <i>wit</i> diventa <i>witte</i>. Anche <i>rood</i>, «rosso», diventa <i>rode</i>, e <i>zwaar</i>, «pesante», diventa <i>zware</i>: la vocale lunga si scrive una sola volta nella sillaba aperta. Non limitarti ad attaccare una lettera senza osservare la sillaba.</p>
<h3>3 · Ricorda l'eccezione frequente</h3><p>Con un nome neutro singolare indefinito, dopo <i>een</i> o <i>geen</i>, usa in genere la forma senza <i>-e</i>: <i>een klein huis</i>, <i>geen nieuw boek</i>. Senza determinante, la stessa forma compare in molti gruppi indefiniti. Esistono espressioni fisse e altri tipi di aggettivo che richiedono attenzione ulteriore, ma per le descrizioni quotidiane questa opposizione è il punto di partenza più utile.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Het huis is mooie.</s> → <strong>Het huis is mooi.</strong> Dopo essere usa la base. <s>Een mooie huis</s> → <strong>een mooi huis</strong>. <s>Een nieuw fiets</s> → <strong>een nieuwe fiets</strong>: il nome è di tipo <i>de</i>, anche se in frase compare <i>een</i>.</p>`,
keywords:[],words:'mooi=bello|wit=bianco|rood=rosso|warm=caldo|koud=freddo|lekker=buono, gustoso|schoon=pulito|zwaar=pesante',
vlaanderen:'Le varianti belghe riconosciute appartengono allo standard in Belgio. Per le descrizioni di questa unità usiamo forme comuni allo standard, senza dedurre il genere dall’italiano.',source:'standard',practiceNote:'Aggettivo predicativo senza e; attributivo con e, tranne het singolare indefinito.',
rules:[
['mooi → Het huis is ___.','mooi','La casa è bella.','Scegli la forma dell’aggettivo dato dopo essere.','mooie~Forma attributiva.','!mooien~Forma non richiesta.'],
['Een ___ fiets','nieuwe','Una bici nuova.','Nieuw davanti a de fiets.','nieuw~Manca la e davanti al nome de.','!nieuwen~Terminazione non richiesta.'],
['mooi → Een ___ huis','mooi','Una bella casa.','Usa l’aggettivo dato con un neutro singolare indefinito.','mooie~Non dopo een con huis.','!mooien~Forma errata.'],
['Het ___ huis','mooie','La bella casa.','Mooi con neutro definito.','mooi~Manca la e.','!mooien~Forma errata.'],
['De ___ tafel','grote','Il grande tavolo.','Groot davanti al nome.','groot~Forma base.','!groote~La vocale si scrive singola.'],
['Een ___ boek','nieuw','Un libro nuovo.','Neutro singolare indefinito.','nieuwe~Qui non serve la e.','!nieuwen~Forma errata.'],
['nieuw → De fietsen zijn ___.','nieuw','Le bici sono nuove.','Usa l’aggettivo dato dopo zijn.','nieuwe~Forma attributiva.','nieuws~Significa notizie; qui serve un aggettivo.'],
['De ___ deur','witte','La porta bianca.','Wit con e, vocale breve.','wit~Manca la e.','!wite~Serve doppia t.'],
['klein → Geen ___ huis','klein','Nessuna casa piccola.','Usa l’aggettivo dato con un neutro singolare indefinito.','kleine~Qui non serve la e.','!kleinen~Forma errata.'],
['Deze ___ boeken','nieuwe','Questi libri nuovi.','Plurale attributivo.','nieuw~Manca la e.','!nieuwen~Forma errata.']
],sentences:[
['Het water is koud.','L’acqua è fredda.','!koudd',['Koud is het water.']],
['Ik heb een rode fiets.','Ho una bici rossa.','wit',['Een rode fiets heb ik.']],
['Het mooie huis is groot.','La bella casa è grande.','!mooit',['Groot is het mooie huis.']],
['Wij drinken warme koffie.','Beviamo caffè caldo.','koud',['We drinken warme koffie.','Warme koffie drinken wij.','Warme koffie drinken we.']],
['De witte deur is nieuw.','La porta bianca è nuova.','!wite',['Nieuw is de witte deur.']],
['Het brood is lekker.','Il pane è buono.','zwaar',['Lekker is het brood.']],
['Ik heb een schoon boek.','Ho un libro pulito.','!schoonn',['Een schoon boek heb ik.']],
['Deze zware tas is oud.','Questa borsa pesante è vecchia.','mooi',['Oud is deze zware tas.']],
['De rode doos is klein.','La scatola rossa è piccola.','!rodee',['Klein is de rode doos.']],
['Het café is warm.','Il bar è caldo.','koud',['Warm is het café.']]
]});
