import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:26,title:'Omdat ik hier woon',it:'Le subordinate',group:5,
explanation:`<h2>L'idea</h2><p>Una subordinata dipende da un'altra parte della frase. In italiano l'ordine dei verbi cambia poco; in neerlandese una congiunzione subordinante porta il verbo coniugato verso la fine: <i>ik werk hier omdat ik hier woon</i>, «lavoro qui perché abito qui». Non applicare V2 dentro questa subordinata. Prima riconosci dove comincia e dove finisce il gruppo introdotto dalla congiunzione.</p>
<h3>1 · Riconosci le congiunzioni</h3><p><i>Omdat</i> introduce una causa, <i>dat</i> un contenuto, <i>als</i> una condizione o una situazione temporale ripetuta, <i>hoewel</i> una concessione. Dopo queste parole compare normalmente il soggetto, poi le altre informazioni e infine il verbo. <i>Omdat ik moe ben</i> significa «perché sono stanco». Il verbo si coniuga ancora in base al soggetto: soltanto la sua posizione cambia.</p>
<table><tr><th>Principale</th><th>Subordinata</th></tr><tr><td>ik ben moe</td><td>omdat ik moe ben</td></tr><tr><td>hij werkt hier</td><td>dat hij hier werkt</td></tr><tr><td>wij komen morgen</td><td>als wij morgen komen</td></tr><tr><td>zij belt mij op</td><td>omdat zij mij opbelt</td></tr></table>
<h3>2 · Gestisci più verbi</h3><p>Con modale e infinito, il gruppo verbale si concentra alla fine: <i>omdat ik moet werken</i>. Anche <i>omdat ik werken moet</i> è possibile, ma meno comune. Con ausiliare e participio sono possibili ordini diversi, come <i>omdat ik heb gewerkt</i> e <i>omdat ik gewerkt heb</i>. Non trasformare una preferenza di ordine in una regola assoluta. Gli esercizi accettano le varianti standard indicate quando mantengono lo stesso significato.</p>
<h3>3 · Metti la subordinata all'inizio</h3><p>Una subordinata intera può occupare il primo posto della principale: <i>omdat ik moe ben, blijf ik hier</i>, «siccome sono stanco, resto qui». Dopo la virgola viene il verbo della principale e poi il soggetto. Non ricominciare come se il primo posto fosse ancora libero. La virgola aiuta a leggere il confine fra i due gruppi.</p>
<p>Non tutte le congiunzioni fanno questo lavoro. <i>En</i> («e»), <i>maar</i> («ma») e <i>want</i> («perché») collegano normalmente frasi senza imporre l'ordine subordinato. Per dire «perché» puoi incontrare <i>omdat</i> o <i>want</i>, ma la costruzione seguente cambia. Impara parola e struttura insieme: tradurre soltanto il significato italiano lascia fuori una parte essenziale dell'informazione. Quando sposti una subordinata, conserva il rapporto iniziale: una causa non diventa una condizione e una dichiarazione non diventa una domanda.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Omdat ik ben moe</s> → <strong>omdat ik moe ben</strong>. <s>Omdat ik moe ben, ik blijf hier.</s> → <strong>Omdat ik moe ben, blijf ik hier.</strong> <s>Want ik moe ben</s> → <strong>want ik ben moe</strong>.</p>`,
keywords:'omdat=perché, subordinante|dat=che, congiunzione|als=se, quando|hoewel=benché|terwijl=mentre|voordat=prima che|want=perché, coordinante|maar=ma',
words:'regenen=piovere|weten=sapere|zeggen=dire|blijven=rimanere|de regen=la pioggia|het weer=il tempo atmosferico|de reden=il motivo|thuis=a casa',
vlaanderen:'Lo standard belga comprende varianti regionali riconosciute. L’ordine subordinato qui presentato fa parte della grammatica comune, utilizzabile anche nelle Fiandre.',source:'standard',practiceNote:'Subordinante + soggetto + resto + verbo. Una subordinata iniziale occupa il primo posto della principale.',
rules:[
['Omdat ik moe ___.','ben','Perché sono stanco.','Essere con ik, in fondo.','is~Terza persona.','zijn~Plurale.'],
['Dat hij hier ___.','woont','Che lui abita qui.','Wonen, terza persona.','woon~Prima persona.','wonen~Plurale.'],
['komen → Als wij morgen ___.','komen','Se veniamo domani.','Accorda il verbo dato con wij, nella subordinata.','komt~Singolare.','kom~Prima persona.'],
['Omdat zij koffie ___.','drinkt','Perché lei beve caffè.','Drinken, lei singolare.','drink~Prima persona.','drinken~Plurale.'],
['Ik blijf hier ___ ik moe ben.','omdat','Resto qui perché sono stanco.','Usa la congiunzione causale subordinante presentata tra le parole chiave.','want~Richiede ordine principale.','maar~Ma, altro rapporto.'],
['Ik blijf hier, ___ ik ben moe.','want','Resto qui, perché sono stanco.','Causa con ordine principale.','omdat~Richiederebbe ben alla fine.','hoewel~Concessione e ordine subordinato.'],
['Omdat ik moe ben, ___ ik hier.','blijf','Siccome sono stanco, resto qui.','Blijven, prima persona.','blijft~Terza persona.','blijven~Plurale.'],
['Omdat hij mij ___.','opbelt','Perché lui mi telefona.','Separabile coniugato in fondo.','!beltop~Ordine scritto errato.','opbellen~Infinito, non concorda.'],
['Omdat ik heb ___.','gewerkt','Perché ho lavorato.','Participio di werken dopo l’ausiliare.','werk~Presente.','werken~Infinito.'],
['Omdat ik ___ werken.','moet','Perché devo lavorare.','Modale con ik.','moeten~Plurale.','!moett~Forma inesistente.']
],sentences:[
['Ik blijf thuis omdat het regent.','Resto a casa perché piove.','!regentt',['Omdat het regent blijf ik thuis.']],
['Hij zegt dat hij moe is.','Lui dice che è stanco.','weten'],
['Als het regent blijf ik hier.','Se piove resto qui.','!blijff',['Ik blijf hier als het regent.']],
['Ik weet dat zij thuis is.','So che lei è a casa.','blijven',['Ik weet dat ze thuis is.']],
['Wij komen hoewel wij moe zijn.','Veniamo benché siamo stanchi.','!zijnn',['Hoewel wij moe zijn komen wij.','We komen hoewel we moe zijn.','Hoewel we moe zijn komen we.','Wij komen hoewel we moe zijn.','We komen hoewel wij moe zijn.','Hoewel wij moe zijn komen we.','Hoewel we moe zijn komen wij.']],
['Hij zegt dat hij heeft gewerkt.','Lui dice che ha lavorato.','regenen',['Hij zegt dat hij gewerkt heeft.']],
['Ik lees terwijl hij kookt.','Leggo mentre lui cucina.','!kooktt',['Terwijl hij kookt lees ik.']],
['Zij blijft thuis omdat zij ziek is.','Lei resta a casa perché è malata.','zeggen',['Omdat zij ziek is blijft zij thuis.','Ze blijft thuis omdat ze ziek is.','Omdat ze ziek is blijft ze thuis.','Zij blijft thuis omdat ze ziek is.','Ze blijft thuis omdat zij ziek is.','Omdat zij ziek is blijft ze thuis.','Omdat ze ziek is blijft zij thuis.'],'Zij e ze possono riferirsi alla stessa donna nelle due proposizioni. Conserva la causa introdotta da omdat.'],
['Omdat hij mij opbelt wacht ik.','Poiché lui mi telefona, aspetto.','!opbeltt',['Ik wacht omdat hij mij opbelt.','Omdat hij me opbelt wacht ik.','Ik wacht omdat hij me opbelt.']],
['Ik weet dat wij morgen moeten werken.','So che domani dobbiamo lavorare.','weer',['Ik weet dat we morgen moeten werken.','Ik weet dat wij morgen werken moeten.','Ik weet dat we morgen werken moeten.'],'Moeten werken è l’ordine più comune; werken moeten è possibile. Morgen indica quando lavoriamo, non quando lo so.']
]});
