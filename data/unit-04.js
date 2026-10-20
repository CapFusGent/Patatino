import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:4,title:'Mij, jou, hem',it:'I pronomi oggetto',group:0,
explanation:`<h2>L'idea</h2><p>Confronta «io vedo lui» e «lui vede me». Le persone sono le stesse, ma cambia il loro ruolo. Anche il neerlandese distingue il soggetto da chi riceve l'azione: <i>ik zie hem</i>, «lo vedo», e <i>hij ziet mij</i>, «lui mi vede». Diversamente dall'italiano, il pronome oggetto non si mette normalmente prima del verbo coniugato. Per iniziare usa la sequenza soggetto, verbo, oggetto.</p>
<h3>1 · Cambia forma quando cambia il ruolo</h3><p><i>Ik</i> diventa <i>mij</i> o <i>me</i>; <i>jij</i> diventa <i>jou</i> o <i>je</i>; <i>hij</i> diventa <i>hem</i>. Il femminile singolare usa <i>haar</i>; in Belgio è standard anche <i>ze</i> senza accento: <i>ik zie ze</i> può significare «la vedo». La forma di cortesia <i>u</i> e il plurale <i>jullie</i> rimangono uguali. Non tradurre parola per parola il «lo» italiano senza prima capire a chi si riferisce.</p>
<table><tr><th>Soggetto</th><th>Oggetto</th><th>Significato</th></tr><tr><td>ik</td><td>mij / me</td><td>me, mi</td></tr><tr><td>jij / je</td><td>jou / je</td><td>te, ti</td></tr><tr><td>hij / zij</td><td>hem / haar</td><td>lui / lei</td></tr><tr><td>wij / we</td><td>ons</td><td>noi, ci</td></tr><tr><td>zij plurale</td><td>hen / ze</td><td>loro, oggetto diretto</td></tr></table>
<h3>2 · Usa le forme leggere</h3><p><i>Me</i> e <i>je</i> sono molto naturali se non vuoi contrapporre una persona a un'altra. <i>De collega helpt me</i> significa «il collega mi aiuta». Con un contrasto esplicito serve la forma piena: «me, non te». Negli esercizi senza enfasi obbligatoria sono accettate entrambe. Per oggetti plurali <i>ze</i> è spesso una scelta semplice nel parlato; nello scritto sorvegliato distingui <i>hen</i> e <i>hun</i> secondo la funzione. Le grafie <i>’m</i> per <i>hem</i> e <i>d’r / ’r</i> per <i>haar</i> rappresentano il parlato e sono soprattutto informali; queste ultime sono tipiche dei Paesi Bassi.</p>
<h3>3 · Dopo una preposizione</h3><p>Una preposizione come <i>met</i>, «con», richiede una forma oggetto: <i>met mij</i>, non <i>met ik</i>. Per le persone al plurale puoi usare <i>met hen</i> o, senza enfasi, <i>met ze</i>. Questa unità esercita soprattutto oggetti diretti, per esempio la persona che senti o aiuti; non estendere automaticamente <i>hun</i> a tutti i complementi. Nell'ordine neutro l'oggetto segue il verbo. Per metterlo in contrasto puoi anticiparlo: <i>hem zie ik</i>. Qui serve la forma piena, non una forma ridotta.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Hij helpt ik.</s> → <strong>Hij helpt mij.</strong> La persona aiutata richiede la forma oggetto. <s>Ik hem zie.</s> → <strong>Ik zie hem.</strong> Non importare la posizione italiana di «lo». <s>Met wij</s> → <strong>met ons</strong>: dopo la preposizione cambia il pronome.</p>`,
keywords:'mij=me, mi|jou=te, ti|hem=lui, lo|haar=lei, la|ons=noi, ci|jullie=voi, vi|hen=loro, oggetto|met=con',
words:'zien=vedere|horen=sentire|helpen=aiutare|bellen=telefonare a|kennen=conoscere|zoeken=cercare|de buur=il vicino|de vriend=l’amico',
vlaanderen:'Nel parlato belga informale puoi incontrare ge/gij al posto di je/jij. Per riconoscere il ruolo dei pronomi, qui manteniamo il sistema dello standard.',source:'gij',practiceNote:'Nell’ordine neutro il pronome oggetto segue il verbo: ik zie hem. Per anticiparlo con enfasi usa la forma piena.',
rules:[
['Hij ziet ___.','mij','Lui mi vede.','Prima persona, oggetto.','ik~Io, soggetto.','wij~Noi, soggetto.','Mij e me sono oggetti.',['me']],
['Ik help ___.','hem','Lo aiuto.','Uomo di cui parli.','hij~Lui, soggetto.','zij~Lei/loro, soggetto.','Hem è oggetto maschile singolare; ’m è una grafia informale.',["'m"]],
['Zij hoort ___.','jou','Lei ti sente.','Seconda persona informale.','jij~Tu, soggetto.','ik~Io, soggetto.','Jou e je significano te.',['je']],
['De man kent ___.','ons','L’uomo ci conosce.','Prima persona plurale.','wij~Noi, soggetto.','ik~Io, soggetto.','Ons è l’oggetto di wij.'],
['Wij bellen ___.','haar','Le telefoniamo.','Una donna di cui parliamo.','zij~Lei, soggetto.','hij~Lui, soggetto.','Bellen prende un oggetto diretto: haar, oppure ze nello standard belga. D’r e ’r sono grafie informali.',["ze","d'r","'r"]],
['Ik zie ___.','hen','Li vedo.','Più persone, oggetto diretto.','zij~Loro, soggetto.','wij~Noi, soggetto.','Hen è corretto come oggetto diretto; senza enfasi è corretto anche ze.',['ze']],
['Hij helpt ___.','jullie','Lui vi aiuta.','Più interlocutori informali.','wij~Noi, soggetto.','ik~Io, soggetto.','Jullie vale anche come oggetto.'],
['Ik hoor ___.','u','La sento, signora.','Forma di cortesia.','jij~Tu, soggetto.','zij~Lei di cui si parla.','U è anche pronome oggetto.'],
['De buur zoekt ___.','mij','Il vicino mi cerca.','Chi parla riceve l’azione.','ik~Soggetto.','wij~Soggetto plurale.','Usa mij o me.',['me']],
['Zij kent ___.','hem','Lei lo conosce.','Oggetto maschile singolare.','hij~Forma soggetto.','wij~Forma soggetto plurale.','Hem è l’oggetto di kennen; ’m è una grafia informale.',["'m"]]
],sentences:[
['Ik zie hem.','Lo vedo.','!hemm',['Hem zie ik.']],
['Hij hoort mij.','Lui mi sente.','zoeken',['Hij hoort me.','Mij hoort hij.']],
['Wij helpen haar.','L’aiutiamo.','!haarr',['We helpen haar.','Wij helpen ze.','We helpen ze.','Haar helpen wij.','Haar helpen we.']],
['Zij belt jou.','Lei ti telefona.','kennen',['Ze belt jou.','Zij belt je.','Ze belt je.','Jou belt zij.','Jou belt ze.']],
['De buur kent ons.','Il vicino ci conosce.','!onss',['Ons kent de buur.']],
['Ik zoek jullie.','Vi cerco.','horen',['Jullie zoek ik.']],
['Jullie zien mij.','Voi mi vedete.','!mijj',['Jullie zien me.','Mij zien jullie.']],
['Hij helpt u.','Lui La aiuta.','bellen',['U helpt hij.']],
['Wij horen hen.','Li sentiamo.','!henn',['We horen hen.','Wij horen ze.','We horen ze.','Hen horen wij.','Hen horen we.']],
['De vriend belt haar.','L’amico le telefona.','helpen',['De vriend belt ze.','Haar belt de vriend.']]
]});
