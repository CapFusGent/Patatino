import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:8,title:'Mijn huis, jouw fiets',it:'I possessivi',group:1,
explanation:`<h2>L'idea</h2><p>«Il mio libro» contiene in italiano un articolo e un possessivo. In neerlandese normalmente basta il possessivo: <i>mijn boek</i>. Non aggiungere <i>het</i> davanti a <i>mijn</i>. La parola scelta indica chi possiede qualcosa e, con una sola distinzione importante, non cambia secondo il genere o il numero della cosa posseduta. Questa differenza rende il sistema più semplice di quello italiano, purché tu parta dal possessore.</p>
<h3>1 · Guarda il possessore</h3><p><i>Mijn</i> significa «mio», <i>jouw</i> significa «tuo», <i>zijn</i> significa «suo» riferito a un possessore maschile, e <i>haar</i> «suo» riferito a una donna. «Il suo libro» da solo è ambiguo in italiano; in neerlandese devi sapere di chi parli. La forma di cortesia è <i>uw</i>. Non confonderla con <i>u</i>, che indica la persona e non introduce il nome posseduto.</p>
<table><tr><th>Possessore</th><th>Possessivo</th><th>Uso</th></tr><tr><td>io / tu</td><td>mijn / jouw, je</td><td>mijn fiets</td></tr><tr><td>lui / lei</td><td>zijn / haar</td><td>haar boek</td></tr><tr><td>noi</td><td>ons / onze</td><td>ons huis, onze fiets</td></tr><tr><td>voi / loro</td><td>jullie / hun</td><td>jullie kamer, hun boeken</td></tr><tr><td>Lei</td><td>uw</td><td>uw naam</td></tr></table>
<h3>2 · Scegli ons oppure onze</h3><p>Solo «nostro» cambia regolarmente in questo modo: davanti a un nome singolare con <i>het</i> usa <i>ons</i>; davanti a un nome con <i>de</i>, oppure a qualsiasi plurale, usa <i>onze</i>. Quindi <i>ons huis</i>, ma <i>onze huizen</i>. L'articolo non viene scritto, tuttavia devi conoscerlo per scegliere la forma. È uno dei motivi per cui conviene imparare articolo e nome insieme.</p>
<h3>3 · Riconosci il parlato naturale</h3><p><i>Je</i> è anche un possessivo non accentato: <i>je naam</i> significa «il tuo nome». Il contesto distingue il soggetto <i>je</i>, l'oggetto <i>je</i> e il possessivo. Per rendere una contrapposizione, <i>jouw</i> mette più enfasi. Non serve però la forma piena in ogni frase. Nella scrittura informale puoi incontrare <i>m'n</i> per <i>mijn</i>, <i>z'n</i> per <i>zijn</i> e <i>d'r</i> o <i>'r</i> per <i>haar</i>. Dopo <i>zijn</i> con significato di «essere», un possessore può essere espresso con <i>van</i>, «di»: <i>het boek is van mij</i>, «il libro è mio». È una struttura diversa da quella prima del nome.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Het mijn huis</s> → <strong>mijn huis</strong>. Togli l'articolo. <s>Onze huis</s> → <strong>ons huis</strong>. <s>Ons fietsen</s> → <strong>onze fietsen</strong>: al plurale serve <i>onze</i>.</p>`,
keywords:'mijn=mio|jouw=tuo|zijn=suo, di lui|haar=suo, di lei|ons=nostro, singolare het|onze=nostro, de o plurale|uw=Suo di cortesia|hun=loro possessivo',
words:'de naam=il nome|het adres=l’indirizzo|de sleutel=la chiave|de telefoon=il telefono|de jas=la giacca|het kantoor=l’ufficio|de baan=il lavoro, impiego|de familie=la famiglia',
vlaanderen:'Je/jij sono le forme familiari dello standard; u è la forma di cortesia. Nella stessa distinzione, jouw/je e uw permettono di scegliere come rivolgersi all’interlocutore.',source:'gij',practiceNote:'Il possessivo sostituisce l’articolo. Ons davanti a het singolare, onze davanti a de e al plurale.',
rules:[
['___ huis','mijn','La mia casa.','Il possessore sono io.','ik~Pronome soggetto.','mij~Pronome oggetto.','Mijn indica il possessore io; m’n è la grafia informale della forma non accentata.',["m'n"]],
['___ fiets','jouw','La tua bici.','Il possessore è il tu informale.','jij~Soggetto.','jou~Oggetto.'],
['___ huis','ons','La nostra casa.','Huis è singolare neutro.','onze~Con de o plurale.','wij~Pronome soggetto.'],
['___ fiets','onze','La nostra bici.','Fiets usa de.','ons~Con het singolare.','wij~Soggetto.'],
['___ boeken','onze','I nostri libri.','Il nome è plurale.','ons~Solo neutro singolare.','wij~Soggetto.'],
['___ naam','uw','Il Suo nome.','Forma di cortesia.','u~Persona, non possessivo.','jij~Soggetto informale.'],
['___ sleutel','haar','La sua chiave, di lei.','La proprietaria è una donna.','zij~Soggetto.','hem~Oggetto maschile.','Haar indica una proprietaria; d’r e ’r sono grafie informali della forma non accentata.',["d'r","'r"]],
['___ telefoon','zijn','Il suo telefono, di lui.','Il proprietario è un uomo.','hij~Soggetto.','hem~Oggetto.'],
['___ kantoor','hun','Il loro ufficio.','Più persone possiedono l’ufficio.','hen~Pronome oggetto.','zij~Pronome soggetto.'],
['___ adres','ons','Il nostro indirizzo.','Adres usa het ed è singolare.','onze~Con de o plurale.','wij~Soggetto.']
],sentences:[
['Mijn naam is Nora.','Il mio nome è Nora.','!mijnn',['Nora is mijn naam.']],
['Ik heb jouw sleutel.','Ho la tua chiave.','jas',['Ik heb je sleutel.','Jouw sleutel heb ik.','Je sleutel heb ik.']],
['Ons huis is klaar.','La nostra casa è pronta.','!onss',['Klaar is ons huis.']],
['Onze fiets is goedkoop.','La nostra bici è economica.','telefoon',['Goedkoop is onze fiets.']],
['Haar familie is rustig.','La sua famiglia, di lei, è tranquilla.','!haarr',['Rustig is haar familie.']],
['Zijn kantoor is open.','Il suo ufficio, di lui, è aperto.','adres',['Open is zijn kantoor.']],
['Wij kennen uw naam.','Conosciamo il Suo nome.','!uww',['We kennen uw naam.','Uw naam kennen wij.','Uw naam kennen we.']],
['Hun telefoon is duur.','Il loro telefono è caro.','jas',['Duur is hun telefoon.']],
['Onze boeken zijn klaar.','I nostri libri sono pronti.','!onzze',['Klaar zijn onze boeken.']],
['Ik ken jullie familie.','Conosco la vostra famiglia.','baan',['Jullie familie ken ik.']]
]});
