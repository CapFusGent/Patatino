import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:13,title:'Deze, die, dit, dat',it:'I dimostrativi',group:2,
explanation:`<h2>L'idea</h2><p>«Questo» e «quello» indicano qualcosa vicino o lontano, nello spazio oppure nel discorso. Il neerlandese distingue anche il tipo del nome: <i>deze fiets</i>, «questa bici», ma <i>dit huis</i>, «questa casa». Il genere italiano non decide la forma. Ti serve conoscere l'articolo neerlandese, anche se nella frase non lo scrivi. È lo stesso lavoro di riconoscimento già fatto con <i>ons</i> e <i>onze</i>.</p>
<h3>1 · Usa una matrice semplice</h3><p>Per un nome singolare con <i>de</i> scegli <i>deze</i> se è vicino e <i>die</i> se è lontano. Per un singolare con <i>het</i> scegli <i>dit</i> e <i>dat</i>. Al plurale usa sempre <i>deze</i> o <i>die</i>. Non aggiungere l'articolo dopo il dimostrativo: esso occupa già quella posizione davanti al nome.</p>
<table><tr><th>Nome</th><th>Vicino</th><th>Lontano</th></tr><tr><td>de fiets</td><td>deze fiets</td><td>die fiets</td></tr><tr><td>het huis</td><td>dit huis</td><td>dat huis</td></tr><tr><td>de boeken</td><td>deze boeken</td><td>die boeken</td></tr></table>
<h3>2 · Riprendi un nome già noto</h3><p>Il dimostrativo può anche comparire senza nome se il riferimento è chiaro. Parlando di una bici puoi dire <i>die is duur</i>, «quella è cara». Parlando di un libro, <i>dat is duur</i> può riferirsi a quel libro oppure a una situazione, secondo il contesto. Nelle prime risposte è più facile conservare il nome: così puoi controllare articolo, numero e forma del dimostrativo insieme.</p>
<h3>3 · Presenta qualcuno o qualcosa</h3><p>Per presentare una persona dici anche <i>dit is mijn collega</i>, «questo è il mio collega», indipendentemente da <i>de collega</i>. Non è la stessa struttura di <i>deze collega</i>: nella presentazione <i>dit</i> funziona da soggetto e non accompagna direttamente il nome. Davanti a un plurale puoi trovare <i>dit zijn mijn boeken</i>. La forma iniziale resta <i>dit</i>, mentre il verbo concorda con ciò che viene identificato.</p>
<p>Vicino e lontano non sono misure rigide in metri: possono indicare anche una frase appena detta o una scelta fra due oggetti. Negli esercizi il suggerimento specifica quale distanza è richiesta, così la selezione resta univoca senza obbligarti a immaginare una scena nascosta.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Deze huis</s> → <strong>dit huis</strong>. <s>Dit boeken</s> → <strong>deze boeken</strong>. <s>Deze de fiets</s> → <strong>deze fiets</strong>. Il dimostrativo sostituisce l'articolo, non si aggiunge davanti a esso.</p>`,
keywords:'deze=questo, de o plurale|die=quello, de o plurale|dit=questo, het singolare|dat=quello, het singolare',
words:'de kaart=la carta, mappa|het formulier=il modulo|de pen=la penna|het scherm=lo schermo|de computer=il computer|het pakket=il pacco|de doos=la scatola|het document=il documento',
vlaanderen:'Deze middag è standard ed è più frequente in Belgio che nei Paesi Bassi. Può significare oggi a mezzogiorno o oggi pomeriggio secondo l’uso e il contesto: per un appuntamento preciso aggiungi l’ora.',source:'afternoon',practiceNote:'De singolare e ogni plurale: deze/die. Het singolare: dit/dat.',
rules:[
['___ fiets','deze','Questa bici.','Vicino; fiets è de.','dit~Solo het singolare.','die~Quella, lontano.'],
['___ huis','dat','Quella casa.','Lontano; huis è het.','die~Con de o plurale.','dit~Questa, vicino.'],
['___ boek','dit','Questo libro.','Vicino; boek è het.','deze~Con de o plurale.','dat~Quello.'],
['___ tafels','die','Quei tavoli.','Lontano; plurale.','dat~Solo neutro singolare.','deze~Questi.'],
['___ boeken','deze','Questi libri.','Vicino; plurale.','dit~Solo singolare.','die~Quelli.'],
['___ stoel','die','Quella sedia.','Lontano; stoel è de.','dat~Solo het singolare.','deze~Questa.'],
['___ is mijn collega.','Dit','Questo è il mio collega.','Presenta qualcuno vicino con il dimostrativo neutro di presentazione.','Deze~Può riprendere un nome de, ma qui è richiesto il dimostrativo neutro.','Die~Quello, non questo.'],
['___ raam','dat','Quella finestra.','Lontano; raam è het.','die~Con de o plurale.','dit~Questa.'],
['___ appel','deze','Questa mela.','Vicino; appel è de.','dit~Solo het.','die~Quella.'],
['___ huizen','die','Quelle case.','Lontano; plurale.','dat~Solo singolare.','deze~Queste.']
],sentences:[
['Deze kaart is nieuw.','Questa mappa è nuova.','!dezze',['Nieuw is deze kaart.']],
['Dat formulier is klaar.','Quel modulo è pronto.','document',['Klaar is dat formulier.']],
['Ik heb deze pen.','Ho questa penna.','!ditt',['Deze pen heb ik.']],
['Dit scherm is groot.','Questo schermo è grande.','formulier',['Groot is dit scherm.']],
['Die computer is duur.','Quel computer è caro.','!diie',['Duur is die computer.']],
['Wij hebben dit pakket.','Abbiamo questo pacco.','formulier',['We hebben dit pakket.','Dit pakket hebben wij.','Dit pakket hebben we.']],
['Deze doos is klein.','Questa scatola è piccola.','!dezee',['Klein is deze doos.']],
['Dat document is oud.','Quel documento è vecchio.','scherm',['Oud is dat document.']],
['Dit zijn mijn boeken.','Questi sono i miei libri.','!zijnt',['Mijn boeken zijn dit.','Deze zijn mijn boeken.','Mijn boeken zijn deze.'],'Dit presenta; deze può indicare libri già identificabili. Sono accettate entrambe le letture e l’ordine inverso.'],
['Die dozen zijn groot.','Quelle scatole sono grandi.','pakket',['Groot zijn die dozen.']]
]});
