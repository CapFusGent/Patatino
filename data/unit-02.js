import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:2,title:'Ik werk, jij werkt',it:'Il presente',group:0,
explanation:`<h2>L'idea</h2>
<p>Il presente neerlandese serve per abitudini, fatti attuali e, con un'indicazione temporale, programmi futuri. Non corrisponde soltanto a ciò che succede proprio adesso. Rispetto all'italiano le desinenze sono poche, ma il soggetto deve restare visibile. Per costruire una frase come <i>ik werk</i>, «lavoro», parti dall'infinito <i>werken</i> e individua la radice. Il presente non richiede un verbo ausiliare aggiuntivo.</p>
<h3>1 · Trova la radice</h3>
<p>In molti verbi togli <i>-en</i>: <i>werken</i> diventa <i>werk</i>. La grafia della radice può però cambiare per conservare il suono. Da <i>wonen</i> ottieni <i>woon</i>, con due vocali nella sillaba chiusa; da <i>maken</i> ottieni <i>maak</i>. Da <i>zitten</i> ricavi <i>zit</i>, senza raddoppiare la consonante finale. Impara quindi insieme infinito e forma con <i>ik</i>, senza applicare un semplice taglio meccanico.</p>
<table><tr><th>Soggetto</th><th>Regola regolare</th><th>Forma</th></tr><tr><td>ik</td><td>radice</td><td>werk</td></tr><tr><td>jij, hij, zij, u</td><td>radice + t</td><td>werkt</td></tr><tr><td>wij, jullie, zij plurale</td><td>infinito</td><td>werken</td></tr></table>
<h3>2 · Controlla persona e numero</h3>
<p><i>Hij woont hier</i> significa «lui abita qui», mentre <i>wij wonen hier</i> significa «noi abitiamo qui». Con <i>wonen</i> indica il luogo: <i>hier</i> significa «qui». Un nome singolare usa normalmente la stessa forma di <i>hij</i>: <i>Nora werkt</i>. Se la radice termina già in <i>t</i>, non aggiungere una seconda lettera: <i>zitten</i> dà <i>hij zit</i>. La forma verbale va scelta dopo aver capito il soggetto, anche quando la frase contiene un altro nome.</p>
<h3>3 · Impara le forme frequenti</h3>
<p><i>Zijn</i>, essere, è irregolare e l'hai già incontrato. Anche <i>hebben</i>, avere, va imparato: <i>ik heb</i>, <i>jij hebt</i>, <i>hij heeft</i>, <i>wij hebben</i>. Con <i>u</i> sono corrette sia <i>hebt</i> sia <i>heeft</i>. Come modello usiamo il soggetto prima del verbo. Nelle domande o dopo un elemento anticipato il soggetto può seguire il verbo: <i>hier woon je</i>, «qui abiti tu». Con <i>jij/je</i> dopo il verbo cade la <i>t</i> aggiunta alla radice, ma resta quella che appartiene alla radice stessa.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3>
<p><s>Ik werken.</s> → <strong>Ik werk.</strong> Non usare l'infinito con <i>ik</i>. <s>Hij woon.</s> → <strong>Hij woont.</strong> Alla terza persona serve la terminazione. <s>Wij werkt.</s> → <strong>Wij werken.</strong> La forma plurale coincide con l'infinito.</p>`,
keywords:'ben=sono, con ik|bent=sei, è con u|is=è|zijn=essere; siamo, siete, sono|heb=ho|hebt=hai, ha con u|heeft=ha|hebben=avere; abbiamo, avete, hanno',
words:'werken=lavorare|wonen=abitare|leren=imparare|maken=fare, creare|koken=cucinare|drinken=bere|de koffie=il caffè|het water=l’acqua|hier=qui',
vlaanderen:'Ge/gij appartiene al parlato informale di molte zone belghe e ha proprie forme verbali. Qui usa le persone dello standard indicate nella frase.',source:'gij',
practiceNote:'Nel presente regolare: ik + radice, singolare + t, plurale + infinito.',
rules:[
['Ik ___ koffie.','drink','Bevo caffè.','Bere, prima persona singolare.','drinkt~Forma singolare con hij/jij.','drinken~Infinito e plurale.','Con ik usa la radice.'],
['Hij ___ koffie.','drinkt','Lui beve caffè.','Bere, terza persona singolare.','drink~Forma con ik.','drinken~Forma plurale.','Hij richiede la t.'],
['Wij ___ water.','drinken','Beviamo acqua.','Bere, prima persona plurale.','drink~Singolare con ik.','drinkt~Terza persona singolare.','Il plurale coincide con l’infinito.'],
['Jij ___ koffie.','hebt','Hai caffè.','Avere, seconda persona singolare.','heb~Ho.','hebben~Avere o forme plurali.','Jij hebt; hij heeft.'],
['Zij ___ water.','heeft','Lei ha acqua.','Avere, con lei singolare.','heb~Ho.','hebben~Forma plurale.','Zij singolare richiede heeft.'],
['Ik ___.','werk','Lavoro.','Lavorare, prima persona.','werkt~Terza persona.','werken~Plurale o infinito.','La radice di werken è werk.'],
['Hij ___ hier.','woont','Lui abita qui.','Abitare, terza persona.','woon~Forma con ik.','wonen~Plurale o infinito.','La vocale lunga richiede oo nella radice.'],
['Jullie ___.','leren','Voi imparate.','Imparare, plurale.','leer~Forma con ik.','leert~Forma singolare.','Jullie usa la forma plurale.'],
['Ik ___.','kook','Cucino.','Cucinare, prima persona.','koken~Infinito.','kookt~Terza persona.','Koken diventa ik kook.'],
['We ___ koffie.','maken','Facciamo il caffè.','Fare, prima persona plurale.','maak~Forma con ik.','maakt~Forma singolare.','We richiede la forma plurale.']
],
sentences:[
['Ik werk.','Lavoro.','!werktt'],
['Jij woont hier.','Tu abiti qui.','koken',['Je woont hier.','Hier woon jij.','Hier woon je.']],
['Hij leert.','Lui impara.','!leerent'],
['Wij koken.','Cuciniamo.','werken',['We koken.']],
['Ik drink water.','Bevo acqua.','!drinktt',['Water drink ik.']],
['Zij drinkt koffie.','Lei beve caffè.','water',['Ze drinkt koffie.','Koffie drinkt zij.','Koffie drinkt ze.']],
['Jullie maken koffie.','Voi fate il caffè.','!makent',['Koffie maken jullie.']],
['Ik heb water.','Ho acqua.','koffie',['Water heb ik.']],
['Hij heeft koffie.','Lui ha caffè.','!hebbt',['Koffie heeft hij.']],
['Wij hebben water.','Abbiamo acqua.','koffie',['We hebben water.','Water hebben wij.','Water hebben we.']]
]});
