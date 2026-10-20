import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:5,title:'Een, twee, drie',it:'I numeri',group:0,
explanation:`<h2>L'idea</h2><p>I numeri servono subito per prezzi, indirizzi e appuntamenti. In neerlandese la parte più insolita per un italiano è l'ordine delle decine: ventiquattro si costruisce letteralmente come «quattro e venti», <i>vierentwintig</i>. Non devi invertire le cifre quando le scrivi: cambia soltanto il modo di comporre la parola. Parti dalle unità, poi memorizza le decine e infine collegale.</p>
<h3>1 · Costruisci le basi</h3><p>Da zero a dieci trovi <i>nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien</i>. Undici e dodici sono <i>elf</i> e <i>twaalf</i>. Da tredici a diciannove molte forme terminano in <i>-tien</i>, ma alcune basi cambiano: <i>dertien</i> e <i>veertien</i> vanno riconosciute come parole intere. Pronuncia i gruppi più volte senza cercare di ricostruire ogni suono dall'italiano.</p>
<table><tr><th>Cifre</th><th>Parola</th><th>Struttura</th></tr><tr><td>20</td><td>twintig</td><td>decina</td></tr><tr><td>21</td><td>eenentwintig</td><td>uno + e + venti</td></tr><tr><td>22</td><td>tweeëntwintig</td><td>due + e + venti</td></tr><tr><td>30 / 40</td><td>dertig / veertig</td><td>decine irregolari</td></tr><tr><td>100 / 1000</td><td>honderd / duizend</td><td>cento / mille</td></tr></table>
<h3>2 · Collega unità e decina</h3><p>Per un numero fra ventuno e novantanove, se non è una decina esatta, metti prima l'unità, poi <i>en</i>, poi la decina. Il risultato si scrive unito. Il segno in <i>tweeëntwintig</i> separa due suoni vocalici e si chiama dieresi: non è una decorazione facoltativa. Quando la risposta attesa contiene questo segno, l'app lo richiede. Il numero uno può avere accenti, <i>één</i>, per distinguerlo dall'articolo, ma non occorrono in ogni contesto.</p>
<h3>3 · Leggi una quantità nel contesto</h3><p>Dopo un numero maggiore di uno il nome numerabile è normalmente plurale: imparerai le forme nella prossima unità. Alcune unità di misura restano singolari dopo una quantità, come <i>twee euro</i>. Per prezzi con decimali si usa la virgola nella scrittura corrente. Negli esercizi sui numeri scrivi la parola richiesta, non la cifra: stiamo allenando la forma linguistica. Nei numeri lunghi, riconosci prima centinaia e migliaia e poi la parte finale. Le forme usuali sono <i>honderd</i> e <i>duizend</i>; in documenti finanziari puoi incontrare anche <i>eenhonderd</i> ed <i>eenduizend</i>.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Twintigvier</s> → <strong>vierentwintig</strong>. L'unità precede la decina. <s>Tweeentwintig</s> → <strong>tweeëntwintig</strong>. Conserva la dieresi. <s>Twee euros</s> → <strong>twee euro</strong> quando esprimi una somma.</p>`,
keywords:'een=uno|twee=due|drie=tre|vier=quattro|vijf=cinque|tien=dieci|twintig=venti|honderd=cento',
words:'de euro=l’euro|het nummer=il numero|de prijs=il prezzo|de rekening=il conto|betalen=pagare|kosten=costare|duur=caro|goedkoop=economico',
vlaanderen:'In Belgio voormiddag indica la seconda parte della mattina. Per un appuntamento, aggiungere l’ora numerica aiuta a evitare equivoci fra usi regionali.',source:'time',practiceNote:'Nelle quantità composte: unità + en + decina. Euro resta singolare dopo il numero.',
rules:[
['21 = ___','eenentwintig','Ventuno.','Unità prima della decina.','!twintigeen~Ordine errato.','twaalf~Dodici.','Si uniscono een, en, twintig.'],
['24 = ___','vierentwintig','Ventiquattro.','Prima quattro, poi venti.','!twintigvier~Ordine errato.','veertig~Quaranta.','Vier precede twintig.'],
['22 = ___','tweeëntwintig','Ventidue.','Serve un segno che separa le vocali.','!tweeentwintig~Manca la dieresi.','twaalf~Dodici.','La dieresi è obbligatoria.'],
['30 = ___','dertig','Trenta.','Una decina esatta.','dertien~Tredici.','drie~Tre.','Dertig e dertien sono numeri diversi.'],
['40 = ___','veertig','Quaranta.','Decina corrispondente a quattro.','veertien~Quattordici.','vier~Quattro.','La forma è veertig.'],
['12 = ___','twaalf','Dodici.','Numero immediatamente dopo undici.','twintig~Venti.','twee~Due.','Twaalf è irregolare.'],
['13 = ___','dertien','Tredici.','Numero prima di quattordici.','dertig~Trenta.','drie~Tre.','Dertien termina in tien.'],
['100 = ___','honderd','Cento.','Dieci volte dieci.','duizend~Mille.','tien~Dieci.','Honderd indica cento; eenhonderd si incontra in contesti finanziari.',['eenhonderd']],
['1000 = ___','duizend','Mille.','Dieci volte cento.','honderd~Cento.','twintig~Venti.','Duizend indica mille; eenduizend si incontra in contesti finanziari.',['eenduizend']],
['Ik betaal twee ___.','euro','Pago due euro.','Unità monetaria dopo una quantità.','!euros~Non è la forma della quantità monetaria.','nummer~Numero, non moneta.','Dopo una somma euro resta singolare.']
],sentences:[
['Ik betaal drie euro.','Pago tre euro.','!driee',['Drie euro betaal ik.']],
['Het boek kost tien euro.','Il libro costa dieci euro.','duur',['Tien euro kost het boek.']],
['De prijs is twintig euro.','Il prezzo è venti euro.','!twintigg',['Twintig euro is de prijs.']],
['Ik heb vijf euro.','Ho cinque euro.','goedkoop',['Vijf euro heb ik.']],
['Ik betaal de rekening.','Pago il conto.','!duurr',['De rekening betaal ik.']],
['Het brood is goedkoop.','Il pane è economico.','duur',['Goedkoop is het brood.']],
['Het nummer is vier.','Il numero è quattro.','!vierr',['Vier is het nummer.']],
['Wij betalen tien euro.','Paghiamo dieci euro.','nummer',['We betalen tien euro.','Tien euro betalen wij.','Tien euro betalen we.']],
['De fiets kost honderd euro.','La bici costa cento euro.','!hondertt',['Honderd euro kost de fiets.','De fiets kost eenhonderd euro.','Eenhonderd euro kost de fiets.']],
['Zij betaalt twee euro.','Lei paga due euro.','prijs',['Ze betaalt twee euro.','Twee euro betaalt zij.','Twee euro betaalt ze.']]
]});
