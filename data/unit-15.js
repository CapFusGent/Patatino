import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:15,title:'Groter, het grootst',it:'Comparativo e superlativo',group:2,
explanation:`<h2>L'idea</h2><p>Per confrontare due cose, in italiano dici spesso «più grande». Il neerlandese forma di solito una sola parola: <i>groter</i>. Per indicare il massimo grado usa il superlativo: <i>het grootst</i>, «il più grande» in funzione predicativa. Non aggiungere automaticamente una parola equivalente a «più» davanti a ogni aggettivo: il suffisso svolge già quel lavoro.</p>
<h3>1 · Forma il comparativo</h3><p>Aggiungi normalmente <i>-er</i> alla base. La grafia segue le regole già viste: <i>groot</i> diventa <i>groter</i>, <i>dik</i> diventa <i>dikker</i>. Se la base termina in <i>r</i>, spesso compare <i>-der</i>, come in <i>duurder</i>. Per introdurre il secondo termine del confronto usa <i>dan</i>: <i>de fiets is goedkoper dan de auto</i>, «la bici è più economica dell'auto».</p>
<table><tr><th>Base</th><th>Comparativo</th><th>Superlativo</th></tr><tr><td>klein</td><td>kleiner</td><td>het kleinst</td></tr><tr><td>groot</td><td>groter</td><td>het grootst</td></tr><tr><td>duur</td><td>duurder</td><td>het duurst</td></tr><tr><td>goed</td><td>beter</td><td>het best</td></tr><tr><td>veel</td><td>meer</td><td>het meest</td></tr></table>
<h3>2 · Forma il superlativo</h3><p>La terminazione più comune è <i>-st</i>. Dopo il verbo, usa di solito <i>het</i> davanti al superlativo: <i>dit boek is het goedkoopst</i>. Prima del nome il superlativo prende normalmente <i>-e</i>: <i>het goedkoopste boek</i>. Non confondere l'articolo del nome con il <i>het</i> della costruzione predicativa: anche un nome con <i>de</i> può comparire in <i>de fiets is het goedkoopst</i>. Nel parlato e nello scritto informale è comune anche <i>het goedkoopste</i> dopo il verbo. Se sottintendi il nome, conserva invece il suo articolo e la forma in <i>-e</i>: <i>de fiets is de goedkoopste</i>, «la bici è la più economica». Gli esercizi accettano queste varianti quando compatibili con la frase.</p>
<h3>3 · Impara eccezioni e uguaglianza</h3><p><i>Goed</i>, «buono», diventa <i>beter</i> e <i>best</i>; <i>veel</i>, «molto», diventa <i>meer</i> e <i>meest</i>; <i>weinig</i>, «poco», diventa <i>minder</i> e <i>minst</i>. Per un confronto di uguaglianza usa <i>even … als</i>: <i>even groot als</i>, «grande quanto». La parola dopo il confronto cambia dunque con il tipo di rapporto: <i>dan</i> per differenza, <i>als</i> per uguaglianza.</p>
<p>Alcuni aggettivi lunghi o particolari preferiscono costruzioni con <i>meer</i> e <i>meest</i>. Qui alleniamo le forme frequenti in tabella. Il secondo termine può essere espresso, come in «più veloce della bici», oppure restare implicito: <i>dit boek is beter</i>, «questo libro è migliore», presuppone un confronto già noto.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Meer groot</s> → <strong>groter</strong>. <s>Groter als</s> → <strong>groter dan</strong> nel confronto standard. <s>Goeder</s> → <strong>beter</strong>: questa forma è irregolare.</p>`,
keywords:'dan=di, nel confronto|als=come, nel confronto uguale|even=ugualmente|meer=più quantità|meest=massimo di quantità|minder=meno|minst=minimo di quantità',
words:'goed=buono|snel=veloce|traag=lento|lang=lungo|kort=corto|licht=leggero|dik=spesso, di grosso spessore|dun=sottile',
vlaanderen:'Lo standard distingue le forme riconosciute dagli usi regionali informali. Qui esercitiamo groter dan, la costruzione standard per esprimere una differenza.',source:'standard',practiceNote:'Comparativo in er + dan; superlativo predicativo con het. Goed ha beter/best.',
rules:[
['groot → ___','groter','Grande → più grande.','Comparativo, attenzione alla vocale.','!grooter~Una o nella sillaba aperta.','grootst~Superlativo.'],
['goed → ___','beter','Buono → migliore.','Comparativo irregolare.','!goeder~Non è la forma standard.','best~Superlativo.'],
['duur → ___','duurder','Caro → più caro.','Dopo r compare d.','duur~Base.','duurst~Superlativo.'],
['De fiets is goedkoper ___ de auto.','dan','La bici è più economica dell’auto.','Confronto di differenza: scegli la forma dello standard curato.','als~Dopo un comparativo si incontra nel parlato, ma non è la forma qui richiesta.','met~Con.'],
['Het huis is even groot ___ de school.','als','La casa è grande quanto la scuola.','Confronto di uguaglianza.','dan~Per differenza.','voor~Prima o per.'],
['klein → het ___','kleinst','Piccolo → il più piccolo.','Superlativo dopo het.','kleiner~Comparativo.','klein~Base.'],
['goed → het ___','best','Buono → il migliore.','Superlativo irregolare.','beter~Comparativo.','!goedst~Forma errata.','Het best e het beste sono entrambi possibili; l’uso dipende dalla costruzione e dal registro.',['beste']],
['veel → ___','meer','Molto → più.','Comparativo di quantità.','meest~Superlativo.','!veeler~Forma errata.'],
['weinig → ___','minder','Poco → meno.','Comparativo irregolare.','minst~Superlativo.','!weiniger~Non la forma richiesta.'],
['Het ___ huis','grootste','La casa più grande.','Superlativo prima del nome.','groter~Comparativo senza flessione.','grootst~Forma senza e.']
],sentences:[
['De trein is sneller dan de fiets.','Il treno è più veloce della bici.','!snellerr',['Sneller dan de fiets is de trein.','Sneller is de trein dan de fiets.']],
['Dit boek is beter.','Questo libro è migliore.','traag',['Beter is dit boek.']],
['Deze jas is het lichtst.','Questa giacca è la più leggera.','!lichtsst',['Het lichtst is deze jas.','Deze jas is het lichtste.','Het lichtste is deze jas.','Deze jas is de lichtste.','De lichtste is deze jas.'],'Het lichtst è la forma predicativa; het lichtste è comune nel parlato. De lichtste sottintende de jas.'],
['De brief is korter dan het document.','La lettera è più corta del documento.','lang',['Korter dan het document is de brief.','Korter is de brief dan het document.']],
['Het huis is groter dan het kantoor.','La casa è più grande dell’ufficio.','!grooter',['Groter dan het kantoor is het huis.','Groter is het huis dan het kantoor.']],
['Dit boek is het dikst.','Questo libro è il più spesso.','dun',['Het dikst is dit boek.','Dit boek is het dikste.','Het dikste is dit boek.'],'Dik significa spesso nello spessore, non spesso nel senso di frequentemente. Sono validi het dikst e het dikste.'],
['De fiets is even duur als de computer.','La bici costa quanto il computer.','!evven',['Even duur als de computer is de fiets.','Even duur is de fiets als de computer.','De computer is even duur als de fiets.','Even duur als de fiets is de computer.','Even duur is de computer als de fiets.'],'Il confronto di uguaglianza conserva il significato anche scambiando i due termini.'],
['Deze trein is trager.','Questo treno è più lento.','snel',['Trager is deze trein.']],
['Dit is de langste straat.','Questa è la strada più lunga.','!langsst',['De langste straat is dit.','Deze is de langste straat.','De langste straat is deze.'],'Dit presenta; deze può riprendere de straat quando la strada è già identificabile.'],
['Ik heb minder geld.','Ho meno denaro.','goed',['Minder geld heb ik.']]
]});
