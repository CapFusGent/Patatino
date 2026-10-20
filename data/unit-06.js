import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:6,title:'Boeken en tafels',it:'Il plurale',group:1,
explanation:`<h2>L'idea</h2><p>In italiano il plurale cambia spesso l'ultima vocale; in neerlandese aggiungi di solito una terminazione. Le due più comuni sono <i>-en</i> e <i>-s</i>. Non si sceglie però soltanto guardando l'articolo: un nome con <i>het</i> può avere il plurale in <i>-en</i> oppure in <i>-s</i>. Impara il nome al singolare insieme al suo plurale e osserva come resta riconoscibile il suono della parola.</p>
<h3>1 · Aggiungi la terminazione</h3><p><i>Boek</i> diventa <i>boeken</i>; <i>stoel</i> diventa <i>stoelen</i>. Molti nomi che terminano in una sillaba non accentata, come <i>tafel</i> e <i>kamer</i>, prendono <i>-s</i>. Non è una regola senza eccezioni, ma offre un punto di partenza. Il plurale definito prende sempre <i>de</i>, anche quando il singolare usa <i>het</i>: <i>het boek</i> diventa <i>de boeken</i>.</p>
<table><tr><th>Singolare</th><th>Plurale</th><th>Cambiamento</th></tr><tr><td>het boek</td><td>de boeken</td><td>aggiungi en</td></tr><tr><td>de tafel</td><td>de tafels</td><td>aggiungi s</td></tr><tr><td>de auto</td><td>de auto's</td><td>apostrofo + s</td></tr><tr><td>het bed</td><td>de bedden</td><td>raddoppia d</td></tr><tr><td>het huis</td><td>de huizen</td><td>cambia s in z</td></tr></table>
<h3>2 · Mantieni il suono</h3><p>In <i>bedden</i> la doppia consonante conserva la vocale breve. In altre parole una vocale lunga scritta doppia diventa singola nella sillaba aperta: <i>raam</i> dà <i>ramen</i>. Questi cambiamenti sono ortografici, non un invito a cambiare arbitrariamente la pronuncia. Anche consonanti come <i>s</i> e <i>f</i> possono cambiare nel plurale; impara le forme effettive invece di dedurle sempre.</p>
<p>Confronta <i>tas</i> e <i>tassen</i>: anche qui raddoppi la consonante perché la vocale rimanga breve. In <i>deur</i> e <i>deuren</i>, invece, il gruppo vocalico resta uguale. Controlla ogni volta sia la terminazione sia la grafia della base: conoscere solo <i>-en</i> non basta per scrivere il plurale.</p>
<h3>3 · Attenzione alle vocali finali</h3><p>Alcuni nomi che terminano in vocale usano l'apostrofo prima di <i>s</i>: <i>auto's</i> e <i>foto's</i>. L'apostrofo aiuta a conservare la lettura della vocale. Non aggiungerlo a tutti i plurali: <i>tafels</i> non lo vuole. Esistono infine plurali irregolari come <i>kinderen</i>, «bambini». L'articolo indefinito <i>een</i> scompare normalmente al plurale: «ho dei libri» diventa <i>ik heb boeken</i>, senza tradurre separatamente «dei».</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Het boeken</s> → <strong>de boeken</strong>. Tutti i plurali definiti usano <i>de</i>. <s>Autos</s> → <strong>auto's</strong>. Conserva l'apostrofo. <s>Een boeken</s> → <strong>boeken</strong>: l'articolo singolare non accompagna un gruppo di libri.</p>`,
keywords:'-en=terminazione plurale|-s=terminazione plurale',
words:'de auto=l’automobile|de foto=la foto|het bed=il letto|de kamer=la stanza|het kind=il bambino|de tas=la borsa|de deur=la porta|de straat=la strada',
vlaanderen:'Le differenze regionali non rendono ogni forma colloquiale una forma standard. Per scrivere il plurale nelle Fiandre usa le forme della lingua standard presentate qui.',source:'standard',practiceNote:'Il plurale definito usa de. Conserva il suono della radice e gli apostrofi richiesti.',
rules:[
['boek → ___','boeken','Libro → libri.','Plurale con terminazione più comune.','!boeks~Non è il plurale di boek.','boek~Singolare.'],
['tafel → ___','tafels','Tavolo → tavoli.','Sillaba finale non accentata.','!tafelss~Consonante duplicata senza motivo.','tafel~Singolare.'],
['auto → ___',"auto's",'Automobile → automobili.','Proteggi la vocale finale con un segno.','!autos~Manca l’apostrofo.','auto~Singolare.'],
['bed → ___','bedden','Letto → letti.','Mantieni la vocale breve.','!beden~Non è il plurale di bed.','bed~Singolare.'],
['huis → ___','huizen','Casa → case.','La consonante interna cambia.','!huisen~La s diventa z.','huis~Singolare.'],
['kind → ___','kinderen','Bambino → bambini.','Plurale irregolare.','!kinds~Non è il plurale standard.','kind~Singolare.'],
['foto → ___',"foto's",'Foto singolare → foto plurale.','Conserva la lettura della vocale finale.','!fotos~Manca l’apostrofo.','foto~Singolare.'],
['___ boeken','de','I libri.','Articolo definito plurale.','het~Solo singolare neutro.','een~Un solo esemplare.'],
['tas → ___','tassen','Borsa → borse.','Conserva la vocale breve.','!tasen~Manca una s.','tas~Singolare.'],
['kamer → ___','kamers','Stanza → stanze.','Finale non accentata.','!kamerss~S duplicata.','kamer~Singolare.']
],sentences:[
['Ik heb boeken.','Ho dei libri.','!boekss',['Boeken heb ik.']],
["Wij hebben twee auto's.",'Abbiamo due automobili.','bed',["We hebben twee auto's.","Twee auto's hebben wij.","Twee auto's hebben we."]],
['De kamers zijn klaar.','Le stanze sono pronte.','!kamerens',['Klaar zijn de kamers.']],
['Ik zie drie kinderen.','Vedo tre bambini.','deur',['Drie kinderen zie ik.']],
['De tafels zijn duur.','I tavoli sono cari.','!tafelenen',['Duur zijn de tafels.']],
["Zij heeft vijf foto's.",'Lei ha cinque foto.','straat',["Ze heeft vijf foto's.","Vijf foto's heeft zij.","Vijf foto's heeft ze."]],
['Wij hebben twee bedden.','Abbiamo due letti.','!beds',['We hebben twee bedden.','Twee bedden hebben wij.','Twee bedden hebben we.']],
['De deuren zijn klaar.','Le porte sono pronte.','auto',['Klaar zijn de deuren.']],
['Ik zie de huizen.','Vedo le case.','!huisens',['De huizen zie ik.']],
['De tassen zijn goedkoop.','Le borse sono economiche.','kamer',['Goedkoop zijn de tassen.']]
]});
