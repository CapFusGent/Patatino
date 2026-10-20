import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:12,title:'Niet of geen?',it:'La negazione',group:2,
explanation:`<h2>L'idea</h2><p>L'italiano usa «non» davanti al verbo in molti contesti. Il neerlandese distingue soprattutto <i>niet</i> e <i>geen</i>, e la posizione non coincide sempre con quella italiana. La prima domanda utile è: sto negando un nome indefinito, oppure un'altra parte della frase? Con «non ho una bici» neghi la presenza di una bici qualsiasi; con «la bici non è nuova» neghi una qualità di qualcosa già identificato.</p>
<h3>1 · Sostituisci een con geen</h3><p>Se una frase positiva contiene <i>een</i> davanti a un nome, la negazione normale usa <i>geen</i>: <i>ik heb een fiets</i> diventa <i>ik heb geen fiets</i>. Lo stesso vale con nomi senza articolo che indicano quantità indefinite: <i>ik drink geen koffie</i>. Anche al plurale puoi usare <i>geen</i>, come in <i>geen boeken</i>. Non cambia forma secondo il nome.</p>
<table><tr><th>Positivo</th><th>Negativo</th><th>Motivo</th></tr><tr><td>een fiets</td><td>geen fiets</td><td>nome indefinito</td></tr><tr><td>koffie</td><td>geen koffie</td><td>sostanza generica</td></tr><tr><td>de fiets</td><td>niet de fiets</td><td>riferimento definito</td></tr><tr><td>nieuw</td><td>niet nieuw</td><td>qualità</td></tr></table>
<h3>2 · Nega qualità, luogo o azione</h3><p><i>Niet</i> nega un aggettivo, un avverbio, un gruppo definito o la frase. Davanti a una qualità dici <i>het boek is niet duur</i>. Davanti a un luogo puoi dire <i>ik woon niet hier</i>, se stai contrastando quel luogo. Con una semplice azione senza altri complementi, <i>niet</i> viene spesso dopo il verbo: <i>ik werk niet</i>. Non cercare un unico posto valido per ogni frase.</p>
<h3>3 · Leggi il significato intero</h3><p>Con un modale, la negazione può stare prima dell'infinito: <i>ik kan niet komen</i>, «non posso venire». Se invece neghi l'oggetto indefinito, usa <i>geen</i>: <i>ik wil geen koffie drinken</i>. La scelta dipende da ciò che neghi, non dalla presenza del modale. Contrasti espliciti possono produrre usi diversi, come «non una, ma due»: per questo gli esercizi precisano il significato e lavorano sulla negazione neutra, senza contrasto sottinteso. Nelle frasi con tessere accettiamo anche un gruppo anticipato per metterlo in rilievo: <i>geen geld heb ik</i> conserva la negazione e porta l'oggetto all'inizio. Il verbo resta in seconda posizione.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik niet werk.</s> → <strong>Ik werk niet.</strong> Mantieni il verbo in seconda posizione. <s>Ik heb niet een fiets.</s> → <strong>Ik heb geen fiets.</strong> Questa è la negazione neutra. <s>Het boek is geen duur.</s> → <strong>Het boek is niet duur.</strong> Un aggettivo prende <i>niet</i>.</p>`,
keywords:'niet=non|geen=nessun, non un',
words:'nieuw=nuovo|oud=vecchio|klein=piccolo|groot=grande|het geld=il denaro|de tijd=il tempo|de melk=il latte|de suiker=lo zucchero',
vlaanderen:'Goesting è una parola informale del neerlandese belga per voglia o desiderio. Puoi incontrare geen goesting nel parlato; qui alleniamo la negazione con lessico già presentato.',source:'goesting',practiceNote:'Geen nega un nome indefinito; niet nega qualità, azioni o riferimenti definiti.',
rules:[
['Ik heb ___ fiets.','geen','Non ho una bici.','Negazione neutra di un nome indefinito.','niet~Con een richiederebbe un contrasto specifico.','nee~Risposta no, non determina il nome.'],
['Het huis is ___ groot.','niet','La casa non è grande.','Nega una qualità.','geen~Si usa con un nome indefinito.','nee~Risposta isolata.'],
['Ik drink ___ koffie.','geen','Non bevo caffè.','Quantità generica negata.','niet~Non è la negazione neutra di questo oggetto.','nee~Risposta no.'],
['Wij werken ___.','niet','Non lavoriamo.','Nega l’azione.','geen~Richiede un nome.','nee~Non è l’avverbio della frase.'],
['Ik kan ___ komen.','niet','Non posso venire.','Negazione prima dell’infinito.','geen~Richiede un nome indefinito.','nee~Risposta autonoma.'],
['Zij heeft ___ boeken.','geen','Lei non ha libri.','Negazione neutra di un plurale indefinito, senza contrasto.','niet~Non è la negazione neutra qui.','nee~No, isolato.'],
['De fiets is ___ nieuw.','niet','La bici non è nuova.','Nega un aggettivo.','geen~Non nega un aggettivo.','nee~Risposta no.'],
['Ik wil ___ water drinken.','geen','Non voglio bere acqua.','Nega l’oggetto acqua.','nee~Non determina il nome.','!geent~Forma inesistente.'],
['Wij hebben ___ geld.','geen','Non abbiamo denaro.','Nega una quantità non numerabile.','niet~Non è la scelta neutra.','nee~Risposta no.'],
['Het boek is ___ duur.','niet','Il libro non è caro.','Nega una qualità.','geen~Usato con nomi indefiniti.','nee~Non lega il verbo all’aggettivo.']
],sentences:[
['Ik heb geen geld.','Non ho denaro.','!geenn',['Geen geld heb ik.']],
['De fiets is niet nieuw.','La bici non è nuova.','oud',['Niet nieuw is de fiets.']],
['Wij drinken geen melk.','Non beviamo latte.','!geent',['We drinken geen melk.','Geen melk drinken wij.','Geen melk drinken we.']],
['Het huis is niet klein.','La casa non è piccola.','groot',['Niet klein is het huis.']],
['Ik wil geen suiker.','Non voglio zucchero.','!geenn',['Geen suiker wil ik.']],
['Zij heeft geen tijd.','Lei non ha tempo.','geld',['Ze heeft geen tijd.','Geen tijd heeft zij.','Geen tijd heeft ze.']],
['Wij kunnen niet komen.','Non possiamo venire.','!niett',['We kunnen niet komen.','Komen kunnen wij niet.','Komen kunnen we niet.']],
['Het boek is niet oud.','Il libro non è vecchio.','nieuw',['Niet oud is het boek.']],
['De winkel is niet open.','Il negozio non è aperto.','!niett',['Niet open is de winkel.']],
['Ik drink geen water.','Non bevo acqua.','melk',['Geen water drink ik.']]
]});
