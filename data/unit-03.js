import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:3,title:'De, het, een',it:'Gli articoli',group:0,
explanation:`<h2>L'idea</h2><p>L'italiano distingue il, lo, la e altre forme; il neerlandese usa soprattutto <i>de</i> e <i>het</i>. Non puoi prevedere l'articolo traducendo il genere italiano: «la casa» è <i>het huis</i>, mentre «il libro» è <i>het boek</i>. Imparare un nome senza articolo significa lasciare incompleta una parte utile della parola. Nelle schede, pronuncia sempre insieme articolo e nome, anche quando una traduzione italiana sembra suggerire il contrario.</p>
<h3>1 · Distingui definito e indefinito</h3><p><i>De</i> e <i>het</i> indicano qualcosa di identificabile: la bici di cui stiamo parlando, il libro sul tavolo. <i>Een</i> introduce invece un esemplare non ancora identificato, come «un» o «una». La sua forma è identica davanti a tutti i nomi singolari numerabili. Non aggiungere apostrofi davanti alle vocali: <i>een appel</i> resta scritto con due parole intere.</p>
<table><tr><th>Tipo</th><th>Definito</th><th>Indefinito</th></tr><tr><td>nome de</td><td>de fiets, la bici</td><td>een fiets, una bici</td></tr><tr><td>nome het</td><td>het huis, la casa</td><td>een huis, una casa</td></tr><tr><td>plurale</td><td>de boeken, i libri</td><td>boeken, dei libri</td></tr></table>
<h3>2 · Conserva l'articolo nel vocabolario</h3><p>Esistono regolarità, ma non una formula universale capace di assegnare l'articolo a ogni nome. I diminutivi singolari usano <i>het</i>; i plurali definiti usano <i>de</i>. Vedrai queste forme nelle unità successive. Per ora associa <i>de fiets</i> a un'unica scheda mentale. Quando incontri <i>een fiets</i>, il nome resta un nome di tipo <i>de</i>: l'articolo indefinito non cancella la sua categoria grammaticale.</p>
<h3>3 · Non mettere un articolo dappertutto</h3><p>Un nome di sostanza può comparire senza articolo quando indica una quantità generica: <i>ik drink water</i>, «bevo acqua». Con un riferimento specifico puoi dire <i>het water</i>, «l'acqua». Non esiste una traduzione automatica di «del» o «dei»: spesso il neerlandese non aggiunge niente. La scelta dipende da cosa stai indicando, non soltanto dal nome. Negli esercizi leggi se viene chiesto l'articolo definito: questo evita di confondere una risposta grammaticalmente possibile con il significato richiesto.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>De huis</s> → <strong>het huis</strong>. Il genere italiano non decide l'articolo. <s>Het fiets</s> → <strong>de fiets</strong>. <s>Een water</s> → <strong>water</strong> quando parli della sostanza in generale, senza sottintendere un bicchiere o una bottiglia.</p>`,
keywords:'de=articolo definito comune e plurale|het=articolo definito neutro|een=un, una',
words:'de fiets=la bici|het huis=la casa|het boek=il libro|de tafel=il tavolo|de stoel=la sedia|de appel=la mela|het brood=il pane|het raam=la finestra',
vlaanderen:'Lo standard usato in Belgio comprende anche parole regionali riconosciute. Questo non permette di ricavare de o het dalla traduzione italiana: registra sempre l’articolo con il nome.',source:'standard',practiceNote:'De e het dipendono dal nome; een è identico per entrambi i tipi.',
rules:[
['___ huis','het','La casa.','Articolo definito del nome neutro.','de~Articolo del tipo comune.','een~Una, non la.','Huis è un nome het.'],
['___ fiets','de','La bici.','Articolo definito.','het~Non è l’articolo di fiets.','een~Una, non la.','Si impara de fiets.'],
['___ boek','het','Il libro.','Articolo definito neutro.','de~Non è l’articolo di boek.','een~Un, non il.','Boek è neutro.'],
['___ tafel','de','Il tavolo.','Articolo definito.','het~Tafel non è neutro.','een~Un tavolo.','Tafel usa de.'],
['___ stoel','de','La sedia.','Articolo definito.','het~Non è l’articolo di stoel.','een~Una sedia.','Stoel usa de.'],
['___ appel','een','Una mela.','Articolo indefinito.','de~La mela.','het~Articolo neutro, qui errato.','Een vale sia un sia una.'],
['___ brood','het','Il pane.','Articolo definito neutro.','de~Non è l’articolo di brood.','een~Un pane, non il pane.','Brood usa het.'],
['___ raam','het','La finestra.','Articolo definito.','de~Non è l’articolo di raam.','een~Una finestra.','Raam è un nome het.'],
['___ huis','een','Una casa.','Articolo indefinito.','de~Articolo errato per huis.','het~La casa, definito.','Een non cambia davanti ai nomi neutri.'],
['___ appel','de','La mela.','Articolo definito.','het~Appel non è un nome het.','een~Una mela.','Appel usa de.']
],sentences:[
['Ik heb een fiets.','Ho una bici.','!eenn',['Een fiets heb ik.']],
['Hij heeft het boek.','Lui ha il libro.','huis',['Het boek heeft hij.']],
['Zij heeft de appel.','Lei ha la mela.','!hett',['Ze heeft de appel.','De appel heeft zij.','De appel heeft ze.']],
['Wij hebben een tafel.','Abbiamo un tavolo.','stoel',['We hebben een tafel.','Een tafel hebben wij.','Een tafel hebben we.']],
['Ik heb het brood.','Ho il pane.','!deee',['Het brood heb ik.']],
['Jij hebt een stoel.','Hai una sedia.','fiets',['Je hebt een stoel.','Een stoel heb jij.','Een stoel heb je.']],
['De vrouw heeft een boek.','La donna ha un libro.','!eeen',['Een boek heeft de vrouw.']],
['De man heeft een fiets.','L’uomo ha una bici.','boek',['Een fiets heeft de man.']],
['Wij hebben het huis.','Abbiamo la casa.','!hett',['We hebben het huis.','Het huis hebben wij.','Het huis hebben we.']],
['Ik heb de appel.','Ho la mela.','stoel',['De appel heb ik.']]
]});
