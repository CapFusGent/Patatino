import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:23,title:'Er is nog koffie',it:'La parola er',group:4,
explanation:`<h2>L'idea</h2><p><i>Er</i> è una parola breve con più funzioni. Non ha una traduzione italiana unica: può corrispondere a «ci», «ne», «lì» oppure non avere un equivalente separato. Cercare una sola definizione porta fuori strada. È meglio imparare alcune costruzioni frequenti e chiedersi quale ruolo svolge nella frase: presentare qualcosa, riprendere una quantità, richiamare un luogo o sostituire un gruppo con preposizione.</p>
<h3>1 · Presenta qualcosa che c'è</h3><p><i>Er is een probleem</i> significa «c'è un problema». Il nome introdotto è spesso indefinito: stai presentando una nuova informazione. Al plurale usa <i>zijn</i>: <i>er zijn twee stoelen</i>. <i>Er</i> non decide da solo il numero del verbo; guarda il nome. Se un altro gruppo occupa l'inizio, puoi trovare <i>hier is er een probleem</i>, benché la presenza di <i>er</i> dipenda anche dal contesto.</p>
<p>Per la posizione usa anche <i>liggen</i>, «essere disteso o posato in orizzontale», e <i>staan</i>, «stare in piedi o in posizione verticale»: <i>er ligt een boek</i>, <i>er staan drie fietsen</i>. Conta anche la posizione normale dell'oggetto: per una bici sulle ruote si usa <i>staan</i>. Impara <i>ik lig, het boek ligt</i> e <i>ik sta, de fiets staat</i>. Nel titolo <i>nog</i> significa «ancora»: c'è ancora caffè.</p>
<table><tr><th>Funzione</th><th>Struttura</th><th>Italiano</th></tr><tr><td>esistenza</td><td>er is koffie</td><td>c'è caffè</td></tr><tr><td>quantità</td><td>ik heb er twee</td><td>ne ho due</td></tr><tr><td>luogo</td><td>ik woon er</td><td>ci abito</td></tr><tr><td>preposizione</td><td>ik wacht erop</td><td>lo aspetto</td></tr></table>
<h3>2 · Riprendi un nome contato</h3><p>Se sai già di cosa parli, puoi evitare di ripetere il nome: alla domanda sui libri rispondi <i>ik heb er drie</i>, «ne ho tre». Il numero o un'altra espressione di quantità resta presente. Non trattare <i>er</i> come un sostituto universale di ogni oggetto: <i>ik lees het</i> e <i>ik heb er drie</i> hanno strutture diverse.</p>
<h3>3 · Riconosci luogo e preposizione</h3><p><i>Er</i> può richiamare un luogo già noto, con meno enfasi di <i>daar</i>. In combinazione con una preposizione può riprendere una cosa: <i>erop</i>, <i>eraan</i>, <i>ermee</i>. Impara <i>wachten op</i>, «aspettare», <i>denken aan</i>, «pensare a», e <i>rekenen op</i>, «contare su». <i>Met</i> diventa <i>mee</i> in questa costruzione. Se le parti sono vicine si scrivono unite: <i>ik wacht erop</i>. Si separano quando intervengono altre parole: <i>ik wacht er morgen op</i>. Per persone, molte costruzioni preferiscono la preposizione con un pronome personale.</p>
<p>Questa unità allena soprattutto esistenza e quantità, poi mostra alcuni gruppi preposizionali frequenti. Quando incontri <i>er</i> all'ascolto, non fermarti a tradurlo isolatamente: aspetta il nome, il numero o la preposizione che completa la struttura.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Er is twee stoelen.</s> → <strong>Er zijn twee stoelen.</strong> <s>Ik heb twee</s> → <strong>ik heb er twee</strong> per «ne ho due». <s>Ermet</s> → <strong>ermee</strong>: la forma della preposizione cambia.</p>`,
keywords:'er=ci, ne, lì secondo il contesto|erop=su ciò, in attesa di ciò|eraan=a ciò|ermee=con ciò|nog=ancora',
words:'het probleem=il problema|de vraag=la domanda|de plaats=il posto|de oplossing=la soluzione|het plan=il piano|denken=pensare|rekenen=contare, fare affidamento|genoeg=abbastanza, sufficiente|liggen=essere disteso o posato in orizzontale|staan=stare in piedi, in posizione verticale',
vlaanderen:'Le parole belghe riconosciute come standard sono adatte anche alla comunicazione pubblica in Belgio. Er appartiene alla grammatica comune: qui ne studiamo costruzioni utilizzabili nelle Fiandre.',source:'standard',practiceNote:'Er is con singolare; er zijn con plurale. Er riprende il nome quando rimane una quantità. Er + preposizione si scrive unito se non intervengono altre parole.',
rules:[
['Er ___ een fiets.','is','C’è una bici.','Essere, con un nome singolare dopo er.','zijn~Plurale.','ben~Prima persona.'],
['Er ___ twee boeken.','zijn','Ci sono due libri.','Il nome è plurale.','is~Singolare.','ben~Prima persona.'],
['Ik heb ___ drie.','er','Ne ho tre, di libri.','Riprendi il nome con una quantità.','het~Oggetto definito, non partitivo.','ze~Pronome oggetto, altra struttura.'],
['___ is koffie.','Er','C’è caffè.','Introduci la presenza di qualcosa.','Hij~Persona maschile.','Wij~Soggetto plurale.'],
['Er ___ geen water.','is','Non c’è acqua.','Essere, con una sostanza non numerabile.','zijn~Plurale.','heb~Prima persona di avere.'],
['Er zijn ___ stoelen.','geen','Non ci sono sedie.','Negazione di un plurale indefinito.','niet~Non è la negazione neutra qui.','nee~Risposta isolata.'],
['Wij hebben ___ vijf.','er','Ne abbiamo cinque.','Riprendi un nome già noto.','het~Non accompagna questa quantità.','hij~Persona soggetto.'],
['Er ___ een boek.','ligt','C’è un libro appoggiato.','Liggen, soggetto singolare.','liggen~Plurale.','lig~Prima persona.'],
['Ik woon ___.','er','Ci abito.','Riprendi un luogo già noto.','het~Non indica un luogo.','hem~Persona, non luogo.','Er riprende il luogo; daar è possibile con maggiore enfasi.',['daar']],
['Er ___ drie fietsen.','staan','Ci sono tre bici.','Staan, soggetto plurale.','staat~Singolare.','sta~Prima persona.']
],sentences:[
['Er is een probleem.','C’è un problema.','!err',['Een probleem is er.']],
['Er zijn twee vragen.','Ci sono due domande.','plan',['Twee vragen zijn er.']],
['Ik heb er drie.','Ne ho tre.','!errr',['Drie heb ik er.']],
['Er is geen oplossing.','Non c’è una soluzione.','plaats',['Geen oplossing is er.']],
['Er zijn genoeg plaatsen.','Ci sono abbastanza posti.','!genoegg',['Genoeg plaatsen zijn er.']],
['Wij denken er vandaag aan.','Oggi ci pensiamo, a quel piano.','rekenen',['We denken er vandaag aan.','Vandaag denken wij eraan.','Vandaag denken we eraan.','Wij denken vandaag eraan.','We denken vandaag eraan.','Wij denken eraan vandaag.','We denken eraan vandaag.']],
['Ik wacht erop.','Lo aspetto, quel pacco.','!eropp'],
['Er is een goed plan.','C’è un buon piano.','probleem',['Een goed plan is er.']],
['Ik reken erop.','Ci conto.','!eropp'],
['Wij hebben er genoeg.','Ne abbiamo abbastanza.','denken',['We hebben er genoeg.','Genoeg hebben wij er.','Genoeg hebben we er.']]
]});
