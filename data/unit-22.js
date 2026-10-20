import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:22,title:'Een kopje koffie',it:'I diminutivi',group:4,
explanation:`<h2>L'idea</h2><p>Un diminutivo può indicare una cosa piccola, ma anche familiarità, attenuazione o una porzione. L'italiano usa suffissi diversi, come «-ino» e «-etto»; il neerlandese ha una famiglia di terminazioni basate su <i>-je</i>. <i>Een kopje koffie</i> significa normalmente «una tazzina di caffè», senza dover insistere che sia minuscola. Non leggere quindi ogni diminutivo come un vezzeggiativo infantile.</p>
<h3>1 · Cambia l'articolo</h3><p>Il diminutivo singolare è neutro e prende <i>het</i>, anche se il nome di base usa <i>de</i>. <i>De tafel</i> diventa <i>het tafeltje</i>. Al plurale ritorna <i>de</i>: <i>de tafeltjes</i>. Questa regola influenza anche dimostrativi e aggettivi: <i>dit kleine tafeltje</i>, ma <i>een klein tafeltje</i>. Una nuova terminazione porta quindi con sé una nuova scelta grammaticale.</p>
<table><tr><th>Base</th><th>Diminutivo</th><th>Italiano</th></tr><tr><td>het boek</td><td>het boekje</td><td>libretto</td></tr><tr><td>de tafel</td><td>het tafeltje</td><td>tavolino</td></tr><tr><td>de boom</td><td>het boompje</td><td>alberello</td></tr><tr><td>de ring</td><td>het ringetje</td><td>anellino</td></tr><tr><td>de koning</td><td>het koninkje</td><td>piccolo re</td></tr></table>
<h3>2 · Riconosci le varianti del suffisso</h3><p>La terminazione dipende dal suono finale e dall'accento della parola. Trovi <i>-je</i>, <i>-tje</i>, <i>-pje</i>, <i>-etje</i> e <i>-kje</i>. Non basta guardare soltanto l'ultima lettera: confronta <i>ringetje</i> e <i>koninkje</i>, che hanno una diversa struttura accentuale. Per un principiante è efficace imparare una serie di parole frequenti e riconoscere il modello, consultando la forma quando non sei sicuro.</p>
<h3>3 · Usa il plurale e il contesto</h3><p>Il plurale del diminutivo prende normalmente <i>-s</i>: <i>boekjes</i>, <i>kopjes</i>. La scelta del diminutivo può rendere una richiesta più familiare, ma non è obbligatoria: una tazza resta una tazza anche senza suffisso. Alcune parole hanno un significato stabilizzato nella forma diminutiva, perciò la traduzione più naturale non contiene sempre «piccolo». <i>Het meisje</i> significa «la bambina» o «la ragazza»: imparalo come parola intera, con il suo articolo neutro, anche se indica una persona femminile.</p>
<p>Negli esercizi viene specificato quando trasformare un nome in diminutivo. Non aggiungerlo a una traduzione libera senza motivo, perché potrebbe cambiare il tono. Per controllare una frase, verifica nell'ordine la forma della parola, l'articolo e l'eventuale aggettivo che la precede.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>De boekje</s> → <strong>het boekje</strong>. <s>Het boekjes</s> → <strong>de boekjes</strong>. <s>Een kleine tafeltje</s> → <strong>een klein tafeltje</strong>, perché è neutro singolare indefinito.</p>`,
keywords:'-je=suffisso diminutivo|-tje=suffisso diminutivo|-pje=suffisso diminutivo|-etje=suffisso diminutivo|-kje=suffisso diminutivo',
words:'het kopje=la tazzina|het boekje=il libretto|het tafeltje=il tavolino|het boompje=l’alberello|het ringetje=l’anellino|het koninkje=il piccolo re|het broodje=il panino|het huisje=la casetta|groen=verde|de kop=la tazza|de boom=l’albero|de ring=l’anello|de koning=il re|het meisje=la bambina, la ragazza',
vlaanderen:'Un vocabolo regionale può appartenere allo standard belga oppure al parlato informale. Qui impariamo i diminutivi dello standard, utilizzabili anche nelle Fiandre.',source:'standard',practiceNote:'Diminutivo singolare: het. Plurale in s: de. Controlla la flessione dell’aggettivo.',
rules:[
['boek → ___','boekje','Libro → libretto.','Diminutivo con je.','!boektje~Non è la forma di boek.','boeken~Plurale, non diminutivo.'],
['___ boekje','het','Il libretto.','Articolo del diminutivo singolare.','de~Non per il singolare diminutivo.','een~Un, non il.'],
['tafel → ___','tafeltje','Tavolo → tavolino.','Diminutivo con tje.','!tafelje~Manca t.','tafels~Plurale.'],
['___ boekjes','de','I libretti.','Articolo definito plurale.','het~Singolare neutro.','een~Singolare indefinito.'],
['boom → ___','boompje','Albero → alberello.','La terminazione dopo questa m include p.','!boomje~Manca p.','bomen~Plurale.'],
['ring → ___','ringetje','Anello → anellino.','La sillaba è accentata.','!ringje~Non è la forma standard.','ringen~Plurale.'],
['koning → ___','koninkje','Re → piccolo re.','La parte finale non è accentata.','!koningje~Non è la forma standard.','koningen~Plurale.'],
['Een ___ tafeltje','klein','Un tavolino piccolo.','Neutro singolare indefinito.','kleine~Qui non serve e.','!kleinen~Forma errata.'],
['boekje → ___','boekjes','Libretto → libretti.','Plurale del diminutivo.','!boekjen~Non prende en.','boekje~Singolare.'],
['___ huisje','dit','Questa casetta.','Dimostrativo vicino, neutro singolare.','deze~Per de o plurale.','die~Per de o plurale lontano.']
],sentences:[
['Ik wil een kopje koffie.','Voglio una tazzina di caffè.','!kopjent',['Een kopje koffie wil ik.']],
['Dit boekje is nieuw.','Questo libretto è nuovo.','broodje',['Nieuw is dit boekje.']],
['Het tafeltje is klein.','Il tavolino è piccolo.','!tafeltjje',['Klein is het tafeltje.']],
['Wij kopen een broodje.','Compriamo un panino.','huisje',['We kopen een broodje.','Een broodje kopen wij.','Een broodje kopen we.']],
['De boekjes zijn goedkoop.','I libretti sono economici.','!boekjens',['Goedkoop zijn de boekjes.']],
['Dat huisje is mooi.','Quella casetta è bella.','boompje',['Mooi is dat huisje.']],
['Ik heb een klein ringetje.','Ho un anellino piccolo.','!ringetjje',['Een klein ringetje heb ik.']],
['Het boompje is groen.','L’alberello è verde.','koninkje',['Groen is het boompje.']],
['Dit is een mooi tafeltje.','Questo è un bel tavolino.','!tafeltjess',['Een mooi tafeltje is dit.']],
['Hij leest het boekje.','Lui legge il libretto.','kopje',['Het boekje leest hij.']]
]});
