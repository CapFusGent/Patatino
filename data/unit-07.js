import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:7,title:'Wie, wat, waar?',it:'Le domande',group:1,
explanation:`<h2>L'idea</h2><p>In italiano l'intonazione può bastare a trasformare «lavori» in una domanda. In neerlandese cambia normalmente anche l'ordine delle parole: <i>jij werkt</i> diventa <i>werk jij?</i>. Il verbo coniugato si sposta davanti al soggetto. Non devi aggiungere un ausiliare simile all'inglese <i>do</i>. Imparare questo movimento ti permette di chiedere informazioni senza costruire ogni frase da zero.</p>
<h3>1 · Chiedi sì o no</h3><p>Metti prima il verbo e subito dopo il soggetto: <i>is de winkel open?</i>, «il negozio è aperto?». Tutto il gruppo soggetto segue il verbo, anche se contiene più parole. Con una persona plurale la forma resta plurale: <i>werken jullie?</i>. La risposta breve può essere <i>ja</i> oppure <i>nee</i>, ma puoi anche riprendere il contenuto nella forma dichiarativa.</p>
<table><tr><th>Informazione</th><th>Parola</th><th>Domanda</th></tr><tr><td>persona</td><td>wie</td><td>Wie is klaar? Chi è pronto?</td></tr><tr><td>cosa</td><td>wat</td><td>Wat drink je? Che cosa bevi?</td></tr><tr><td>luogo</td><td>waar</td><td>Waar woon je? Dove abiti?</td></tr><tr><td>tempo</td><td>wanneer</td><td>Wanneer werk je? Quando lavori?</td></tr><tr><td>modo / motivo</td><td>hoe / waarom</td><td>come / perché</td></tr></table>
<h3>2 · Aggiungi una parola interrogativa</h3><p>Se cerchi un'informazione precisa, la parola interrogativa occupa l'inizio: <i>waar werkt de collega?</i>. Poi vengono verbo e soggetto. Quando <i>wie</i> è esso stesso il soggetto, non inserire un secondo pronome: <i>wie werkt?</i>, «chi lavora?». Confronta <i>wie helpt jou?</i>, «chi ti aiuta?», con <i>wie help jij?</i>, «chi aiuti tu?». Nella prima domanda <i>wie</i> compie l'azione; nella seconda la compie <i>jij</i> e <i>wie</i> è l'oggetto.</p>
<p>In <i>wanneer komt de trein?</i>, «quando arriva il treno?», <i>komen</i> significa «arrivare». La traduzione di un verbo dipende anche dal contesto, non solo dalla sua prima definizione nel lessico.</p>
<h3>3 · Osserva la t di jij</h3><p>Con <i>jij</i> o <i>je</i> soggetto dopo il verbo, la terminazione <i>t</i> del presente regolare cade: <i>jij woont</i>, ma <i>woon jij?</i>. Non togliere una <i>t</i> che appartiene già alla radice, come in <i>zit je?</i>. Con <i>u</i> e con gli altri soggetti la terminazione resta. Leggi sempre la funzione di <i>je</i>: se significa «tuo» davanti a un nome, non è il soggetto personale cui si applica questa regola.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Waar jij woont?</s> → <strong>Waar woon jij?</strong> Nella domanda diretta inverti. <s>Werkt jij?</s> → <strong>Werk jij?</strong> Cade la terminazione. <s>Werk u?</s> → <strong>Werkt u?</strong> La cortesia conserva la forma con <i>t</i>.</p>`,
keywords:'wie=chi|wat=che cosa|waar=dove|wanneer=quando|hoe=come|waarom=perché|ja=sì|nee=no',
words:'de winkel=il negozio|het station=la stazione|de markt=il mercato|de trein=il treno|komen=venire, arrivare|gaan=andare|open=aperto|gesloten=chiuso',
vlaanderen:'In Belgio anche om hoe laat è standard per chiedere a che ora. Hoe laat è utilizzabile in tutta l’area neerlandofona.',source:'hour',practiceNote:'Domanda sì/no: verbo + soggetto. Con un interrogativo: interrogativo + verbo + soggetto, salvo quando l’interrogativo è già il soggetto. Con jij/je soggetto dopo il verbo cade la t di desinenza.',
rules:[
['___ woont Nora?','Waar','Dove abita Nora?','Chiedi il luogo.','Wie~Chi, non dove.','Wanneer~Quando, non dove.'],
['___ is klaar?','Wie','Chi è pronto?','Chiedi una persona.','Waar~Dove.','Wanneer~Quando.'],
['___ drink jij?','Wat','Che cosa bevi?','Chiedi una cosa.','Wie~Chi.','Waar~Dove.'],
['___ jij?','Werk','Lavori?','Lavorare, domanda informale.','werkt~Con jij dopo il verbo la t cade.','werken~Forma plurale.'],
['___ u?','Werkt','Lei lavora?','Lavorare, domanda di cortesia.','werk~Forma con ik o inversione jij.','werken~Plurale.'],
['___ is de winkel gesloten?','Waarom','Perché il negozio è chiuso?','Chiedi il motivo.','Wie~Chi.','Waar~Dove.'],
['___ komt de trein?','Wanneer','Quando arriva il treno?','Chiedi il momento.','Wie~Chi.','Waarom~Perché.'],
['___ de markt open?','Is','Il mercato è aperto?','Essere con soggetto singolare.','Zijn~Forma plurale.','Ben~Forma con ik.'],
['___ woont u?','Waar','Dove abita Lei?','Chiedi un luogo con cortesia.','Wie~Chi.','Wanneer~Quando.'],
['___ jullie koffie?','Drinken','Bevete caffè?','Bere con voi.','Drink~Forma singolare con ik.','Drinkt~Singolare.']
],sentences:[
['Werk jij?','Lavori?','!werktt',['Werk je?']],
['Is de winkel open?','Il negozio è aperto?','gesloten'],
['Waar woont hij?','Dove abita lui?','!waarrr'],
['Wat drink je?','Che cosa bevi?','komen',['Wat drink jij?']],
['Wanneer komt de trein?','Quando arriva il treno?','!komtt'],
['Is het station gesloten?','La stazione è chiusa?','open'],
['Wie helpt haar?','Chi la aiuta?','!helptt',['Wie helpt ze?'],'Haar indica la donna aiutata; nello standard belga anche ze può essere oggetto femminile singolare. Qui wie è il soggetto.'],
['Waar is de markt?','Dov’è il mercato?','trein'],
['Waarom werkt u?','Perché Lei lavora?','!werktt'],
['Gaan jullie?','Voi andate?','komen']
]});
