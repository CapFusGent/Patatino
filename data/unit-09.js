import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:9,title:'Kunnen, moeten, mogen',it:'I verbi modali',group:1,
explanation:`<h2>L'idea</h2><p>Per dire «posso lavorare» il neerlandese usa due verbi, come l'italiano, ma li distribuisce diversamente: <i>ik kan werken</i>. Il modale si coniuga e il verbo dell'azione rimane all'infinito, normalmente verso la fine della frase. Se aggiungi un oggetto, questo entra fra i due verbi: <i>ik wil koffie drinken</i>. Pensa a una cornice che contiene le altre informazioni.</p>
<h3>1 · Scegli il significato</h3><p><i>Kunnen</i> indica capacità o possibilità; <i>moeten</i> una necessità; <i>mogen</i> un permesso; <i>willen</i> una volontà. Non ogni «potere» italiano corrisponde dunque a <i>kunnen</i>. Se chiedi un'autorizzazione, <i>mogen</i> è spesso la scelta più precisa. <i>Zullen</i> compare nelle proposte, nelle previsioni e in altri usi modali: qui lo riconosci soprattutto nella proposta <i>zullen we…?</i>.</p>
<table><tr><th>Infinito</th><th>Ik</th><th>Hij</th><th>Wij</th></tr><tr><td>kunnen</td><td>kan</td><td>kan</td><td>kunnen</td></tr><tr><td>moeten</td><td>moet</td><td>moet</td><td>moeten</td></tr><tr><td>mogen</td><td>mag</td><td>mag</td><td>mogen</td></tr><tr><td>willen</td><td>wil</td><td>wil</td><td>willen</td></tr><tr><td>zullen</td><td>zal</td><td>zal</td><td>zullen</td></tr></table>
<h3>2 · Non aggiungere te</h3><p>Dopo questi modali l'infinito non prende <i>te</i>. Dire <i>ik moet betalen</i> significa «devo pagare». Non coniugare anche il secondo verbo: il numero e la persona sono già espressi dal modale. Quando il soggetto è plurale, cambia il primo verbo: <i>wij moeten betalen</i>. La forma dell'azione rimane uguale.</p>
<h3>3 · Accetta le varianti corrette</h3><p>Con <i>jij</i> e <i>u</i> esistono varianti come <i>kan/kunt</i>, <i>wil/wilt</i> e <i>zal/zult</i>. Non tutte le differenze che senti sono errori: dipendono anche dal registro. Con <i>hij</i>, invece, lo standard è <i>hij wil</i>, senza una <i>t</i> aggiunta per analogia. Nelle domande il modale precede il soggetto: <i>mag ik zitten?</i>, «posso sedermi?». Con <i>jij</i> dopo il verbo sono corrette <i>kun jij?</i> e <i>kan jij?</i>; non conservare la terminazione di <i>kunt</i>. Con <i>u</i> invece puoi dire <i>kunt u?</i> o <i>kan u?</i>. La presenza di una variante non elimina quindi la regola dell'inversione.</p>
<p>Nell'ordine neutro l'infinito resta in fondo: <i>ik kan fietsen</i>. Per mettere in evidenza l'azione puoi anche anticiparlo: <i>fietsen kan ik</i>, «andare in bici, lo so fare». Cambia l'enfasi, mentre il modale coniugato resta in seconda posizione. Negli esercizi sono accettate anche queste disposizioni grammaticali delle stesse tessere.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik moet te werken.</s> → <strong>Ik moet werken.</strong> Nessun <i>te</i> dopo il modale. <s>Hij wilt betalen.</s> → <strong>Hij wil betalen.</strong> <s>Wij kunnen werkt.</s> → <strong>Wij kunnen werken.</strong> Il secondo verbo deve restare all'infinito.</p>`,
keywords:'kunnen=potere, essere capace|moeten=dovere|mogen=avere il permesso|willen=volere|zullen=modale di proposta o previsione',
words:'fietsen=andare in bici|lopen=camminare|wachten=aspettare|zitten=stare seduto|lezen=leggere|schrijven=scrivere|de brief=la lettera|het ticket=il biglietto',
vlaanderen:'Lo standard in Belgio ammette proprie varianti riconosciute. Una variante regionale non è automaticamente un errore: negli esercizi distinguiamo il significato richiesto dalla preferenza di registro.',source:'standard',practiceNote:'Coniuga il modale; nell’ordine neutro l’azione resta all’infinito in fondo, senza te. Se anticipi l’azione, il modale coniugato resta secondo.',
rules:[
['Ik ___ lezen.','kan','So leggere.','Capacità, prima persona.','mag~Permesso, non capacità.','moet~Obbligo.'],
['Wij ___ betalen.','moeten','Dobbiamo pagare.','Necessità, plurale.','moet~Singolare.','mag~Permesso singolare.'],
['Hij ___ zitten.','mag','Lui può sedersi: ha il permesso.','Autorizzazione, non capacità.','kan~Capacità o possibilità.','wil~Volontà.'],
['Zij ___ koffie drinken.','wil','Lei vuole bere caffè.','Volontà, lei singolare.','wilt~Forma corretta con jij/u, non con zij singolare.','willen~Plurale.'],
['Jullie kunnen ___.','fietsen','Sapete andare in bici.','Verbo di movimento su due ruote.','fietst~Forma coniugata.','fiets~Radice o nome.'],
['Ik moet een brief ___.','schrijven','Devo scrivere una lettera.','L’azione resta all’infinito.','schrijf~Forma con ik.','schrijft~Forma singolare.'],
['___ we gaan?','Zullen','Andiamo? Proposta.','Modale per proporre qualcosa insieme.','Zal~Singolare.','Zult~Seconda persona.'],
['Hij kan ___.','lezen','Lui sa leggere.','Azione all’infinito.','leest~Forma coniugata.','lees~Radice.'],
['U ___ wachten.','kunt','Lei può aspettare.','Possibilità, forma di cortesia.','kunnen~Plurale.','moet~Necessità.','Con u sono corretti kunt e kan.',['kan']],
['Wij willen water ___.','drinken','Vogliamo bere acqua.','Dopo il modale usa l’infinito.','drink~Radice.','drinkt~Singolare.']
],sentences:[
['Ik kan fietsen.','So andare in bici.','!kannt',['Fietsen kan ik.']],
['Wij moeten wachten.','Dobbiamo aspettare.','lezen',['We moeten wachten.','Wachten moeten wij.','Wachten moeten we.']],
['Mag ik zitten?','Posso sedermi? Chiedo permesso.','!magg'],
['Hij wil een brief schrijven.','Lui vuole scrivere una lettera.','ticket',['Een brief wil hij schrijven.','Een brief schrijven wil hij.','Schrijven wil hij een brief.']],
['Jullie kunnen het boek lezen.','Voi sapete leggere il libro.','!lezent',['Het boek kunnen jullie lezen.','Het boek lezen kunnen jullie.','Lezen kunnen jullie het boek.']],
['Ik moet het ticket betalen.','Devo pagare il biglietto.','brief',['Het ticket moet ik betalen.','Het ticket betalen moet ik.','Betalen moet ik het ticket.']],
['Zullen we gaan?','Andiamo? Proposta.','!zullent',['Zullen wij gaan?']],
['Zij mag koffie drinken.','Lei ha il permesso di bere caffè.','lopen',['Ze mag koffie drinken.','Koffie mag zij drinken.','Koffie mag ze drinken.','Koffie drinken mag zij.','Koffie drinken mag ze.','Drinken mag zij koffie.','Drinken mag ze koffie.']],
['U kunt werken.','Lei può lavorare.','!kunnent',['U kan werken.','Werken kunt u.','Werken kan u.']],
['Wij willen lopen.','Vogliamo camminare.','zitten',['We willen lopen.','Lopen willen wij.','Lopen willen we.']]
]});
