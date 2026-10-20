import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:27,title:'De man die hier woont',it:'Le frasi relative',group:5,
explanation:`<h2>L'idea</h2><p>Una relativa aggiunge informazioni a un nome: «il libro che leggo». In neerlandese la parola che introduce la relativa dipende spesso dal tipo del nome: <i>het boek dat ik lees</i>, ma <i>de brief die ik lees</i>. L'italiano «che» non cambia, quindi devi ricordarti di controllare articolo e numero prima di scegliere <i>die</i> o <i>dat</i>.</p>
<h3>1 · Trova il nome ripreso</h3><p>Il nome a cui si riferisce la relativa viene chiamato antecedente. Con un singolare di tipo <i>de</i> usa <i>die</i>; con un singolare neutro usa <i>dat</i>; al plurale usa <i>die</i> per tutti i nomi. Non scegliere in base alla vicinanza o lontananza: qui <i>die</i> e <i>dat</i> non sono dimostrativi, anche se hanno la stessa forma.</p>
<table><tr><th>Antecedente</th><th>Relativa</th><th>Italiano</th></tr><tr><td>de man</td><td>die hier woont</td><td>che abita qui</td></tr><tr><td>het boek</td><td>dat ik lees</td><td>che leggo</td></tr><tr><td>de boeken</td><td>die ik lees</td><td>che leggo</td></tr><tr><td>de vrouw</td><td>met wie ik praat</td><td>con cui parlo</td></tr></table>
<h3>2 · Metti il verbo in fondo</h3><p>Una relativa è una subordinata: il verbo coniugato va verso la fine. <i>De man die hier woont</i> non contiene un secondo <i>hij</i>, perché <i>die</i> è già il soggetto della relativa. In <i>het boek dat ik lees</i>, invece, <i>ik</i> è il soggetto e <i>dat</i> è l'oggetto. La stessa parola relativa può dunque svolgere ruoli diversi senza cambiare forma.</p>
<h3>3 · Gestisci le preposizioni</h3><p>Con una persona, dopo una preposizione usi spesso <i>wie</i>: <i>de collega met wie ik werk</i>. Con una cosa puoi usare <i>waar</i> e la preposizione: <i>het boek waarover ik praat</i>, «il libro di cui parlo». <i>Praten over</i> significa «parlare di»; è possibile anche separare i due elementi: <i>het boek waar ik over praat</i>. La preposizione dipende dal verbo e dal senso; non si può ometterla soltanto perché l'italiano impiega «che» in altre costruzioni.</p>
<p>Una relativa può identificare quale oggetto intendi oppure aggiungere un commento su un oggetto già identificato. Nello scritto, le virgole aiutano a distinguere queste funzioni. Qui iniziamo dalle relative che identificano il nome. Prima individua l'antecedente, poi scegli il relativo, quindi verifica soggetto e posizione verbale dentro la subordinata. Se sposti un gruppo, mantieni la relativa collegata allo stesso nome: «lo studente che abita qui è stanco» non identifica lo studente tramite la stanchezza, ma tramite il luogo in cui abita.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Het boek die ik lees</s> → <strong>het boek dat ik lees</strong>. <s>De man die hij hier woont</s> → <strong>de man die hier woont</strong>. <s>De vrouw met die ik praat</s> → <strong>de vrouw met wie ik praat</strong>.</p>`,
keywords:'die=che, relativo de/plurale|dat=che, relativo het singolare|wie=chi, cui dopo preposizione|waarover=di cui',
words:'de buurvrouw=la vicina|de leraar=l’insegnante|de student=lo studente|het verhaal=il racconto|het bericht=il messaggio|ontmoeten=incontrare|sturen=inviare|begrijpen=capire',
vlaanderen:'Le relative fanno parte dello standard condiviso. Le note regionali riguardano l’uso effettivo: non occorre una grammatica relativa separata per comunicare nelle Fiandre.',source:'standard',practiceNote:'Relativo die con de/plurale, dat con het singolare; verbo in fondo alla relativa.',
rules:[
['De man ___ hier woont','die','L’uomo che abita qui.','Usa un relativo presentato nell’unità; man usa de.','dat~Per het singolare.','wat~Non riprende questo nome.'],
['Het boek ___ ik lees','dat','Il libro che leggo.','Boek è neutro singolare.','die~Con de o plurale.','wie~Persone dopo preposizione.'],
['De boeken ___ ik lees','die','I libri che leggo.','Usa un relativo presentato nell’unità; antecedente plurale.','dat~Solo het singolare.','wat~Non è il relativo qui.'],
['De vrouw met ___ ik praat','wie','La donna con cui parlo.','Persona dopo preposizione.','die~Non si usa qui dopo met.','dat~Neutro.'],
['Het huis ___ groot is','dat','La casa che è grande.','Relativo studiato dello standard: huis è het singolare.','die~Per de o plurale.','wie~Persona.'],
['De fiets ___ ik koop','die','La bici che compro.','Fiets usa de.','dat~Per het singolare.','wie~Persona dopo preposizione.'],
['De man die hier ___','werkt','L’uomo che lavora qui.','Werken, terza persona nella relativa.','werk~Prima persona.','werken~Plurale.'],
['Het boek dat ik ___','lees','Il libro che leggo.','Verbo con ik.','leest~Terza persona.','lezen~Plurale.'],
['werken → De collega met wie wij ___','werken','Il collega con cui lavoriamo.','Accorda il verbo dato con il soggetto plurale nella relativa.','werkt~Singolare.','werk~Prima persona singolare.'],
['De huizen ___ hier staan','die','Le case che si trovano qui.','Antecedente plurale.','dat~Solo singolare.','wie~Persona.']
],sentences:[
['De student die hier woont is moe.','Lo studente che abita qui è stanco.','!diie',['Moe is de student die hier woont.']],
['Het verhaal dat ik lees is goed.','Il racconto che leggo è bello.','bericht',['Goed is het verhaal dat ik lees.']],
['De leraar die ik ken is hier.','L’insegnante che conosco è qui.','!kentt',['Hier is de leraar die ik ken.']],
['Het bericht dat zij stuurt is kort.','Il messaggio che lei invia è breve.','verhaal',['Het bericht dat ze stuurt is kort.','Kort is het bericht dat zij stuurt.','Kort is het bericht dat ze stuurt.']],
['De buurvrouw met wie ik praat is blij.','La vicina con cui parlo è contenta.','!wiie',['Blij is de buurvrouw met wie ik praat.']],
['Ik lees het boek dat jij hebt.','Leggo il libro che hai.','bericht',['Ik lees het boek dat je hebt.','Het boek dat jij hebt lees ik.','Het boek dat je hebt lees ik.']],
['De studenten die hier werken zijn moe.','Gli studenti che lavorano qui sono stanchi.','!werkent',['Moe zijn de studenten die hier werken.']],
['Dit is het verhaal dat ik begrijp.','Questo è il racconto che capisco.','bericht'],
['De man die ik ontmoet is rustig.','L’uomo che incontro è tranquillo.','!ontmoett',['Rustig is de man die ik ontmoet.']],
['Het boek waarover ik praat is nieuw.','Il libro di cui parlo è nuovo.','verhaal',['Het boek waar ik over praat is nieuw.','Nieuw is het boek waarover ik praat.','Nieuw is het boek waar ik over praat.']]
]});
