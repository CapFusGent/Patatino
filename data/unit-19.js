import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:19,title:'Ik heb gewerkt',it:'Il passato prossimo',group:3,
explanation:`<h2>L'idea</h2><p>Il passato prossimo neerlandese collega un ausiliare al participio: <i>ik heb gewerkt</i>, «ho lavorato». La somiglianza con l'italiano aiuta, ma non basta: ausiliare e participio possono essere separati da altre informazioni, e il participio non si accorda con il genere del soggetto. Per raccontare un fatto concluso nella conversazione quotidiana questa struttura è molto utile.</p>
<h3>1 · Costruisci la cornice</h3><p>L'ausiliare coniugato occupa la normale posizione del verbo; il participio si trova verso la fine. In <i>ik heb gisteren gewerkt</i>, «ho lavorato ieri», l'avverbio entra fra i due. Se inizi con il tempo, inverti soltanto ausiliare e soggetto: <i>gisteren heb ik gewerkt</i>. Il participio rimane stabile.</p>
<table><tr><th>Infinito</th><th>Passato prossimo</th><th>Italiano</th></tr><tr><td>werken</td><td>ik heb gewerkt</td><td>ho lavorato</td></tr><tr><td>maken</td><td>ik heb gemaakt</td><td>ho fatto</td></tr><tr><td>bellen</td><td>ik heb gebeld</td><td>ho telefonato</td></tr><tr><td>gaan</td><td>ik ben gegaan</td><td>sono andato</td></tr><tr><td>aankomen</td><td>ik ben aangekomen</td><td>sono arrivato</td></tr><tr><td>drinken</td><td>ik heb gedronken</td><td>ho bevuto</td></tr><tr><td>kopen</td><td>ik heb gekocht</td><td>ho comprato</td></tr><tr><td>bezoeken</td><td>ik heb bezocht</td><td>ho visitato</td></tr><tr><td>blijven</td><td>ik ben gebleven</td><td>sono rimasto</td></tr><tr><td>reizen</td><td>ik heb gereisd</td><td>ho viaggiato</td></tr><tr><td>verhuizen</td><td>ik ben verhuisd</td><td>ho traslocato</td></tr><tr><td>zijn</td><td>ik ben geweest</td><td>sono stato</td></tr><tr><td>hebben</td><td>ik heb gehad</td><td>ho avuto</td></tr></table>
<h3>2 · Forma il participio</h3><p>Molti verbi regolari prendono <i>ge-</i>, radice e <i>-t</i> oppure <i>-d</i>. La scelta finale dipende dal suono della consonante originaria della base: dopo consonanti sorde come quelle di <i>'t kofschip</i> compare <i>-t</i>; negli altri casi compare <i>-d</i>. Usa l'infinito per riconoscere la consonante, perché la grafia della radice può nascondere una <i>v</i> o una <i>z</i>: <i>reizen</i> dà <i>gereisd</i>, <i>verhuizen</i> dà <i>verhuisd</i>. I verbi irregolari hanno participi da imparare: <i>lezen → gelezen</i>, <i>drinken → gedronken</i>, <i>kopen → gekocht</i>, <i>bezoeken → bezocht</i>, <i>blijven → gebleven</i>.</p>
<h3>3 · Scegli l'ausiliare</h3><p>Molti verbi usano <i>hebben</i>. <i>Zijn</i> compare con diversi cambiamenti di stato e movimenti orientati a una destinazione, oltre a verbi specifici. Non applicare ciecamente l'ausiliare italiano: memorizza la combinazione. Con un separabile, <i>ge</i> entra fra particella e verbo: <i>opgebeld</i>. Con prefissi non separabili come <i>be-</i> e <i>ver-</i>, normalmente non compare un ulteriore <i>ge-</i>.</p>
<p>Il participio non cambia fra uomo, donna e plurale: <i>zij is gegaan</i> e <i>zij zijn gegaan</i>. È l'ausiliare a rendere evidente il numero. Per iniziare, impara coppie complete e usale in racconti di una sola frase, prima di combinare più eventi.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik heb werk.</s> → <strong>Ik heb gewerkt.</strong> Per «ho lavorato» serve il participio. <s>Zij is gegane.</s> → <strong>Zij is gegaan.</strong> Nessun accordo femminile. <s>Ik heb geopbeld.</s> → <strong>Ik heb opgebeld.</strong></p>`,
keywords:'gisteren=ieri|gewerkt=lavorato|gemaakt=fatto|gebeld=telefonato|gegaan=andato|gelezen=letto|geweest=stato|gehad=avuto',
words:'reizen=viaggiare|blijven=rimanere|bezoeken=visitare|verhuizen=traslocare|het weekend=il fine settimana|de reis=il viaggio|het museum=il museo|de stad=la città',
vlaanderen:'In Belgio namiddag indica il periodo dopo mezzogiorno fino a sera. Quando racconti quando sei arrivato, l’ora può chiarire il riferimento temporale.',source:'time',practiceNote:'Ausiliare coniugato + participio in fondo. Ge entra dopo la particella separabile.',
rules:[
['Ik heb ___.','gewerkt','Ho lavorato.','Participio di lavorare.','werk~Presente con ik.','werken~Infinito.'],
['Hij ___ koffie gemaakt.','heeft','Lui ha fatto il caffè.','Ausiliare con hij.','heb~Prima persona.','hebben~Plurale.'],
['Wij zijn ___.','gegaan','Siamo andati.','Participio di gaan.','gaan~Infinito.','gaat~Presente singolare.'],
['Zij ___ aangekomen.','is','Lei è arrivata.','Ausiliare con aankomen e lei.','heeft~Ausiliare errato qui.','ben~Prima persona.'],
['Ik heb het boek ___.','gelezen','Ho letto il libro.','Participio irregolare di leggere.','lezen~Infinito.','lees~Presente.'],
['Wij ___ water gedronken.','hebben','Abbiamo bevuto acqua.','Ausiliare di drinken, plurale.','zijn~Non si usa qui.','heeft~Singolare.'],
['Ik heb jou ___.','opgebeld','Ti ho telefonato.','Participio di opbellen.','!geopbeld~Ge nel posto sbagliato.','opbellen~Infinito.'],
['Hij heeft brood ___.','gekocht','Lui ha comprato pane.','Participio irregolare di kopen.','kopen~Infinito.','koopt~Presente.'],
['Gisteren ___ ik gewerkt.','heb','Ieri ho lavorato.','Ausiliare con ik dopo inversione.','heeft~Terza persona.','hebben~Plurale.'],
['Zij zijn moe ___.','geweest','Loro sono stati stanchi.','Participio di zijn.','zijn~Infinito.','is~Presente.']
],sentences:[
['Ik heb gisteren gewerkt.','Ho lavorato ieri.','!gewerktt',['Gisteren heb ik gewerkt.']],
['Wij zijn naar de stad gegaan.','Siamo andati in città.','museum',['We zijn naar de stad gegaan.','Naar de stad zijn wij gegaan.','Naar de stad zijn we gegaan.','Wij zijn gegaan naar de stad.','We zijn gegaan naar de stad.']],
['Zij heeft het museum bezocht.','Lei ha visitato il museo.','!bezochtt',['Ze heeft het museum bezocht.','Het museum heeft zij bezocht.','Het museum heeft ze bezocht.']],
['Ik ben hier gebleven.','Sono rimasto qui.','reizen',['Hier ben ik gebleven.']],
['Hij is gisteren verhuisd.','Lui ha traslocato ieri.','!verhuisdt',['Gisteren is hij verhuisd.']],
['Wij hebben koffie gedronken.','Abbiamo bevuto caffè.','blijven',['We hebben koffie gedronken.','Koffie hebben wij gedronken.','Koffie hebben we gedronken.']],
['Ik heb de brief gelezen.','Ho letto la lettera.','!gelezent',['De brief heb ik gelezen.']],
['Hij heeft veel gereisd.','Lui ha viaggiato molto.','bezoeken',['Veel heeft hij gereisd.','Gereisd heeft hij veel.']],
['De trein is aangekomen.','Il treno è arrivato.','!geaan',['Aangekomen is de trein.']],
['Ik heb een goed weekend gehad.','Ho trascorso un buon fine settimana.','reis',['Een goed weekend heb ik gehad.']]
]});
