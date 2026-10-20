import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:10,title:'Vandaag werk ik',it:'L’ordine delle parole: V2',group:1,
explanation:`<h2>L'idea</h2><p>In una frase dichiarativa principale il verbo coniugato occupa normalmente la seconda posizione. La sigla V2 significa proprio «verbo secondo». Attenzione: si contano i gruppi di parole, non le singole parole. <i>Mijn collega</i> può essere tutto un soggetto in prima posizione. Questa regola rende l'ordine neerlandese meno libero di quello italiano, ma ti offre un punto fermo per costruire la frase.</p>
<h3>1 · Parti dal soggetto</h3><p>La struttura più semplice è <i>ik werk vandaag</i>, «lavoro oggi». Il soggetto viene prima, il verbo secondo e l'indicazione temporale dopo. Se ci sono due verbi, soltanto quello coniugato occupa la seconda posizione: <i>ik wil vandaag werken</i>. L'infinito resta verso la fine. Per controllare una frase, trova dunque prima il verbo che cambia secondo la persona.</p>
<table><tr><th>Primo gruppo</th><th>Verbo</th><th>Resto</th></tr><tr><td>Ik</td><td>werk</td><td>vandaag.</td></tr><tr><td>Vandaag</td><td>werk</td><td>ik.</td></tr><tr><td>In de winkel</td><td>werkt</td><td>Nora.</td></tr><tr><td>Morgen</td><td>moet</td><td>ik werken.</td></tr></table>
<h3>2 · Metti in evidenza tempo o luogo</h3><p>Puoi iniziare con «oggi», «domani» o un luogo per collegarti alla conversazione. Quando quel gruppo occupa il primo posto, il soggetto passa dopo il verbo: <i>vandaag werk ik</i>. Questo si chiama inversione. Non è una domanda: c'è già un altro elemento prima del verbo. La frase mantiene il valore dichiarativo e cambia soltanto il punto di partenza dell'informazione.</p>
<h3>3 · Sposta gruppi completi</h3><p><i>In de winkel</i> significa «nel negozio» e forma un unico gruppo. <i>Naar</i> indica la destinazione: <i>naar het park</i> significa «al parco», quando ci vai. Anche questo gruppo può iniziare la frase. Non separare l'articolo dal nome per ottenere artificiosamente una seconda posizione. Anche «oggi» e il soggetto non possono occupare insieme due posti prima del verbo nella normale frase principale. Con <i>jij</i> dopo il verbo ricompare la regola sulla <i>t</i>: <i>vandaag werk jij</i>. Con <i>u</i> l'inversione non cambia la forma verbale: <i>vandaag werkt u</i>, oppure, con il modale già studiato, <i>vandaag kunt u werken</i> o <i>vandaag kan u werken</i>.</p>
<p>Le frasi con tessere possono ammettere più inizi naturali. Se sono presenti le stesse informazioni, l'app accetta le alternative indicate, per esempio soggetto iniziale oppure tempo iniziale. Non devi indovinare la preferenza stilistica dell'autore. Concentrati sull'accordo verbale e sulla posizione del verbo coniugato.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Vandaag ik werk.</s> → <strong>Vandaag werk ik.</strong> Il verbo resta secondo. <s>Morgen ik moet werken.</s> → <strong>Morgen moet ik werken.</strong> Si sposta il modale, non l'infinito.</p>`,
keywords:'vandaag=oggi|morgen=domani|hier=qui|daar=lì|in=in, dentro|naar=a, verso una destinazione',
words:'de school=la scuola|het park=il parco|de bibliotheek=la biblioteca|het café=il bar|de keuken=la cucina|de bakker=il panettiere|eten=mangiare|kopen=comprare',
vlaanderen:'Vannamiddag è standard in Belgio e indica il pomeriggio, soprattutto nel parlato informale. Come altre indicazioni di tempo può occupare il primo posto della principale.',source:'afternoon',practiceNote:'Il verbo coniugato resta al secondo posto: tempo + verbo + soggetto oppure soggetto + verbo + tempo.',
rules:[
['Vandaag ___ ik.','werk','Oggi lavoro.','Lavorare, il soggetto è ik.','werkt~Singolare con hij, non ik.','werken~Plurale.'],
['Morgen ___ wij.','werken','Domani lavoriamo.','Lavorare, soggetto plurale.','werk~Singolare.','werkt~Singolare.'],
['Hier ___ hij.','woont','Qui abita lui.','Abitare, terza persona.','woon~Prima persona.','wonen~Plurale.'],
['Vandaag werk ___.','ik','Oggi lavoro.','Chi parla in prima persona.','hij~Richiederebbe werkt.','wij~Richiederebbe werken.'],
['Morgen moet ik ___.','werken','Domani devo lavorare.','L’azione dopo il modale.','werk~Forma coniugata.','werkt~Forma coniugata.'],
['Vandaag ___ jij.','werk','Oggi lavori tu.','Inversione con jij.','werkt~La t di desinenza cade.','werken~Plurale.'],
['Daar ___ de vrouw.','werkt','Lì lavora la donna.','Lavorare, soggetto singolare.','werk~Prima persona.','werken~Plurale.'],
['In de winkel ___ ik.','werk','Lavoro nel negozio.','Verbo con soggetto ik dopo il gruppo di luogo.','werkt~Non concorda con ik.','werken~Plurale.'],
['Vandaag ___ u.','werkt','Oggi Lei lavora.','La cortesia conserva la terminazione.','werk~Non è la forma con u.','werken~Plurale.'],
['Morgen ___ zij komen.','wil','Domani lei vuole venire.','Volere, lei singolare.','willen~Plurale.','wilt~Forma corretta con jij/u, non con zij singolare.']
],sentences:[
['Vandaag werk ik.','Oggi lavoro.','!werktt',['Ik werk vandaag.']],
['Morgen kopen wij brood.','Domani compriamo pane.','eten',['Wij kopen morgen brood.','Morgen kopen we brood.','We kopen morgen brood.','Wij kopen brood morgen.','We kopen brood morgen.','Brood kopen wij morgen.','Brood kopen we morgen.']],
['Hier woont hij.','Qui abita lui.','!woontt',['Hij woont hier.']],
['Vandaag eet ik brood.','Oggi mangio pane.','kopen',['Ik eet vandaag brood.','Ik eet brood vandaag.','Brood eet ik vandaag.']],
['In de keuken kookt Nora.','Nora cucina in cucina.','!kooktt',['Nora kookt in de keuken.']],
['Morgen moet ik werken.','Domani devo lavorare.','eten',['Ik moet morgen werken.','Ik moet werken morgen.','Werken moet ik morgen.']],
['Daar is de school.','La scuola è lì.','!iss',['De school is daar.']],
['Vandaag lezen wij.','Oggi leggiamo.','keuken',['Wij lezen vandaag.','Vandaag lezen we.','We lezen vandaag.']],
['In het café drinkt hij koffie.','Lui beve caffè al bar.','!drinktt',['Hij drinkt koffie in het café.','Hij drinkt in het café koffie.','Koffie drinkt hij in het café.']],
['Morgen gaat zij naar het park.','Domani lei va al parco.','school',['Zij gaat morgen naar het park.','Morgen gaat ze naar het park.','Ze gaat morgen naar het park.','Zij gaat naar het park morgen.','Ze gaat naar het park morgen.','Naar het park gaat zij morgen.','Naar het park gaat ze morgen.']]
]});
