import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:18,title:'Kom binnen!',it:'L’imperativo',group:3,
explanation:`<h2>L'idea</h2><p>L'imperativo serve per un'istruzione, un invito, un consiglio o un ordine. In neerlandese la forma corrente è spesso uguale alla radice del verbo: <i>wacht!</i>, «aspetta!» oppure «aspettate!». Non devi costruire forme diverse per ogni interlocutore come in italiano. Il contesto e il tono stabiliscono a chi parli e quanto diretto risulta il messaggio.</p>
<h3>1 · Metti il verbo all'inizio</h3><p>La normale frase imperativa non esprime il soggetto: <i>lees de brief</i>, «leggi la lettera». È un'eccezione pratica alla regola del soggetto espresso nelle dichiarative. Non confonderla con una frase dichiarativa incompleta. Il verbo iniziale indica che stai chiedendo un'azione. Con più persone puoi mantenere la stessa forma: <i>kom binnen</i> può invitare una persona o un gruppo.</p>
<table><tr><th>Infinito</th><th>Imperativo</th><th>Significato</th></tr><tr><td>wachten</td><td>wacht</td><td>aspetta / aspettate</td></tr><tr><td>lezen</td><td>lees</td><td>leggi / leggete</td></tr><tr><td>binnenkomen</td><td>kom binnen</td><td>entra / entrate</td></tr><tr><td>zijn</td><td>wees</td><td>sii / siate</td></tr><tr><td>geven</td><td>geef</td><td>dai / date</td></tr><tr><td>nemen</td><td>neem</td><td>prendi / prendete</td></tr><tr><td>herhalen</td><td>herhaal</td><td>ripeti / ripetete</td></tr><tr><td>proberen</td><td>probeer</td><td>prova / provate</td></tr><tr><td>kijken</td><td>kijk</td><td>guarda / guardate</td></tr></table>
<h3>2 · Conserva separabilità e negazione</h3><p>Un verbo separabile mantiene la particella verso la fine: <i>doe de deur dicht</i>, «chiudi la porta». Per vietare o sconsigliare, aggiungi <i>niet</i> nella posizione adatta: <i>wacht niet</i>. Se neghi un nome indefinito usa ancora <i>geen</i>: <i>drink geen koffie</i>. L'italiano usa spesso «non + infinito» al singolare, ma il neerlandese non passa all'infinito per questo motivo.</p>
<h3>3 · Modula la cortesia</h3><p>Una forma grammaticalmente corretta può risultare troppo diretta in una situazione formale. <i>Alstublieft</i> e <i>alsjeblieft</i> accompagnano richieste cortesi; una domanda con un modale può risultare ancora più morbida: <i>kunt u wachten?</i>. Parole come <i>even</i> attenuano spesso una richiesta, ma il tono e la relazione contano. Non considerare ogni imperativo scortese: nelle istruzioni brevi è normale e chiaro.</p>
<p>Il verbo <i>zijn</i> usa <i>wees</i>, da imparare a parte: <i>wees rustig</i>, «stai tranquillo». <i>Probeer het!</i> significa «provaci!». Negli esercizi usa l'imperativo personale corrente, senza soggetto espresso; le antiche forme plurali con <i>-t</i> sopravvivono in espressioni fisse, ma non sono il modello qui richiesto. Nelle traduzioni con tessere il destinatario è indicato dal significato italiano, mentre la forma neerlandese normalmente non distingue il numero.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Niet wachten!</s> → <strong>Wacht niet!</strong> come imperativo personale diretto. L'infinito è invece possibile su cartelli e istruzioni impersonali. <s>Ben rustig!</s> → <strong>Wees rustig!</strong> <s>Doe dicht de deur!</s> → <strong>Doe de deur dicht!</strong></p>`,
keywords:'alstublieft=per favore, cortese|alsjeblieft=per favore, informale|wees=sii, siate',
words:'binnenkomen=entrare|nemen=prendere|geven=dare|kijken=guardare|proberen=provare|herhalen=ripetere|de zin=la frase|het antwoord=la risposta',
vlaanderen:'U è la forma di cortesia dello standard anche in Belgio. Kunt u…? consente di trasformare un’istruzione in una richiesta rivolta cortesemente all’interlocutore.',source:'gij',practiceNote:'Imperativo diretto: radice all’inizio, normalmente senza soggetto. Zijn diventa wees.',
rules:[
['___ hier!','Wacht','Aspetta qui!','Imperativo di aspettare.','Wachten~Infinito, non imperativo personale.','Wachtte~Passato.'],
['___ de brief!','Lees','Leggi la lettera!','Imperativo personale corrente, senza soggetto, di leggere.','Lezen~Infinito: non è la forma personale richiesta.','Leest~Presente con hij/jij; come imperativo in -t è antiquato.'],
['___ rustig!','Wees','Stai tranquillo!','Imperativo irregolare di essere.','Ben~Presente con ik.','Zijn~Infinito.'],
['___ de deur dicht!','Doe','Chiudi la porta!','Imperativo personale corrente, senza soggetto, di dichtdoen.','Doet~Presente singolare; qui non serve la t.','Doen~Infinito: non è la forma personale richiesta.'],
['___ geen koffie!','Drink','Non bere caffè!','Imperativo di bere.','Drinkt~Forma con hij.','Drinken~Infinito.'],
['___ hier!','Kom','Vieni qui!','Imperativo personale corrente, senza soggetto, di venire.','Komt~Presente singolare; come imperativo in -t è antiquato.','Komen~Infinito: non è la forma personale richiesta.'],
['___ het boek mee!','Neem','Porta con te il libro!','Imperativo di meenemen.','Neemt~Terza persona.','Nemen~Infinito.'],
['Wacht ___!','niet','Non aspettare!','Nega l’azione.','geen~Richiede un nome.','nee~Risposta autonoma.'],
['___ de deur open!','Doe','Apri la porta!','Imperativo di opendoen.','Doet~Terza persona.','Doen~Infinito.'],
['___ mij op!','Bel','Telefonami!','Imperativo personale corrente, senza soggetto, di opbellen.','Belt~Presente singolare; qui non serve la t.','Bellen~Infinito: non è la forma personale richiesta.']
],sentences:[
['Kom binnen!','Entra!','!komm'],
['Geef mij het boek!','Dammi il libro!','antwoord',['Geef me het boek!']],
['Neem de fiets!','Prendi la bici!','!neemm'],
['Herhaal de zin!','Ripeti la frase!','antwoord'],
['Wees rustig!','Stai tranquillo!','!weess'],
['Probeer het!','Provaci!','zin'],
['Doe de deur dicht!','Chiudi la porta!','!doee'],
['Kijk naar het scherm!','Guarda lo schermo!','geven'],
['Drink geen koffie!','Non bere caffè!','!drinktt'],
['Geef haar de pen!','Dalle la penna!','herhalen',['Geef ze de pen!']]
]});
