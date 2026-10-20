import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:29,title:'Niet meer, nog niet',it:'Negazione II',group:5,
explanation:`<h2>L'idea</h2><p>Dire che qualcosa non accade può implicare tempi diversi: «non ancora» lascia aperta un'attesa, «non più» indica un cambiamento. Il neerlandese rende questa distinzione con <i>nog niet</i> e <i>niet meer</i>. Conoscere soltanto <i>niet</i> non basta a esprimere questi significati. In questa unità allarghi la negazione a persone, cose, luoghi e quantità senza aggiungere automaticamente il «non» italiano.</p>
<h3>1 · Colloca l'evento nel tempo</h3><p><i>Ik werk nog niet</i> significa «non lavoro ancora»: la situazione potrebbe cambiare. <i>Ik werk niet meer</i> significa «non lavoro più»: prima lavoravo. In questa frase è possibile anche <i>niet langer</i>, con lo stesso senso di cessazione. Con un nome indefinito usa <i>nog geen</i> oppure <i>geen … meer</i>: <i>ik heb nog geen fiets</i>, «non ho ancora una bici», e <i>ik heb geen fiets meer</i>, «non ho più una bici».</p>
<table><tr><th>Forma</th><th>Significato</th><th>Frase breve</th></tr><tr><td>nog niet</td><td>non ancora</td><td>ik ben nog niet klaar</td></tr><tr><td>niet meer</td><td>non più</td><td>ik werk niet meer</td></tr><tr><td>niemand</td><td>nessuno</td><td>niemand komt</td></tr><tr><td>niets</td><td>niente</td><td>ik zie niets</td></tr><tr><td>nergens</td><td>da nessuna parte</td><td>ik ga nergens heen</td></tr></table>
<p>In <i>nergens heen</i>, <i>heen</i> indica una direzione, «verso un luogo». Il gruppo significa «verso nessun luogo» e accompagna qui <i>gaan</i>; non aggiunge una seconda negazione.</p>
<h3>2 · Evita la doppia negazione automatica</h3><p>In italiano «non vedo nessuno» contiene due elementi negativi. Nello standard neerlandese, <i>ik zie niemand</i> basta. Lo stesso vale con <i>niets</i>, «niente», e <i>nooit</i>, «mai». Anche <i>niks</i> significa «niente»: è corretto, ma generalmente più informale di <i>niets</i>. Una seconda negazione può cambiare il significato oppure produrre una forma regionale, ma non è la costruzione neutra esercitata qui. Quando <i>niemand</i> è soggetto, il verbo è normalmente singolare.</p>
<h3>3 · Leggi cosa viene negato</h3><p>La posizione di <i>niet</i> può mettere in contrasto una parte specifica: <i>niet vandaag, maar morgen</i>, «non oggi, ma domani». Non giudicare una frase soltanto dalla presenza della parola negativa. Per «non ho proprio niente», <i>helemaal niets</i> intensifica la negazione senza ripetere <i>niet</i>. <i>Nog nooit</i> significa «mai fino ad ora», mentre <i>nooit meer</i> indica «mai più». È corretto anche <i>nooit weer</i>, meno frequente: qui <i>weer</i> significa «di nuovo», non «tempo atmosferico».</p>
<p>Per costruire la risposta, decidi prima se parli di tempo, quantità, persona o cosa. Poi scegli il gruppo negativo completo. Il corso separa questi significati nella traduzione: una frase con <i>nog niet</i> è grammaticalmente valida, ma non traduce una richiesta che dice «non più».</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik zie niet niemand.</s> → <strong>Ik zie niemand.</strong> <s>Ik heb niet meer een fiets.</s> → <strong>Ik heb geen fiets meer.</strong> <s>Niemand komen.</s> → <strong>Niemand komt.</strong></p>`,
keywords:'nog niet=non ancora|niet meer=non più|nog geen=non ancora un/nessun|niemand=nessuno|niets=niente|nergens=da nessuna parte|nooit meer=mai più|nog nooit=mai finora',
words:'beschikbaar=disponibile|volledig=completo|leeg=vuoto|nodig=necessario|vinden=trovare|ontbreken=mancare|de voorraad=la scorta|de hulp=l’aiuto',
vlaanderen:'In Belgio goesting è usato informalmente per “voglia”. Nog geen goesting significa “non ancora voglia”; geen goesting meer significa “non più voglia”.',source:'goesting',practiceNote:'Nog niet = non ancora; niet meer = non più. Niemand/niets/nooit normalmente bastano senza niet.',
rules:[
['Ik werk niet ___.','meer','Non lavoro più.','Una situazione passata è terminata.','nog~Ancora, posizione diversa.','nooit~Mai.','Niet meer e niet langer indicano qui che il lavoro non continua.',['langer']],
['Ik ben ___ niet klaar.','nog','Non sono ancora pronto.','La preparazione è attesa.','meer~Non più, altro ordine.','geen~Nega un nome.'],
['Ik heb ___ fiets meer.','geen','Non ho più una bici.','Negazione di un nome indefinito.','niet~Non determina questo nome.','nee~Risposta isolata.'],
['___ komt.','Niemand','Non viene nessuno.','Nega una persona, soggetto singolare.','Niets~Niente, non persona.','Nergens~Luogo.'],
['Ik zie ___.','niets','Non vedo niente.','Nega una cosa.','niemand~Nessuna persona.','nergens~Luogo.','Niets e il più informale niks significano entrambi niente.',['niks']],
['Ik heb nog ___ boek.','geen','Non ho ancora un libro.','Nome indefinito.','niet~Non determina il nome.','nee~Risposta no.'],
['Ik kom nooit ___.','meer','Non verrò mai più.','Negazione rivolta al futuro.','nog~Non completa questo significato.','geen~Determina nomi.','Nooit meer e nooit weer significano entrambi mai più; meer è più comune.',['weer']],
['Ik heb ___ nooit gereisd.','nog','Non ho mai viaggiato finora.','Periodo fino al presente.','meer~Mai più, ordine diverso.','geen~Nega nomi.'],
['Ik werk niet vandaag, ___ morgen.','maar','Non lavoro oggi, ma domani.','Congiunzione avversativa: corregge il giorno scelto.','omdat~Causa.','of~Oppure.'],
['Niemand ___ hier.','woont','Nessuno abita qui.','Wonen, soggetto singolare.','wonen~Plurale.','woon~Prima persona.']
],sentences:[
['Ik ben nog niet klaar.','Non sono ancora pronto.','!niett',['Klaar ben ik nog niet.']],
['De hulp is niet meer beschikbaar.','L’aiuto non è più disponibile.','volledig',['Beschikbaar is de hulp niet meer.','De hulp is niet langer beschikbaar.','Beschikbaar is de hulp niet langer.']],
['Niemand kan mij helpen.','Nessuno può aiutarmi.','!niemannd',['Niemand kan me helpen.','Mij kan niemand helpen.','Helpen kan niemand mij.','Helpen kan niemand me.']],
['Ik vind niets.','Non trovo niente.','ontbreken',['Niets vind ik.','Ik vind niks.','Niks vind ik.']],
['De voorraad is nog niet leeg.','La scorta non è ancora vuota.','!leegg',['Leeg is de voorraad nog niet.']],
['Wij hebben geen hulp meer nodig.','Non abbiamo più bisogno di aiuto.','voorraad',['We hebben geen hulp meer nodig.']],
['Ik heb hier nog nooit gewerkt.','Non ho mai lavorato qui finora.','!nooitt',['Ik heb nog nooit hier gewerkt.','Hier heb ik nog nooit gewerkt.','Nog nooit heb ik hier gewerkt.'],'Nog nooit riguarda il periodo fino a ora; hier resta il luogo del lavoro.'],
['De informatie is nog niet volledig.','L’informazione non è ancora completa.','beschikbaar',['Volledig is de informatie nog niet.']],
['Ik ga nergens heen.','Non vado da nessuna parte.','!nergenss',['Nergens ga ik heen.'],'Heen indica la direzione; nergens heen significa verso nessun luogo.'],
['Wij vinden niemand.','Non troviamo nessuno.','nodig',['We vinden niemand.','Niemand vinden wij.','Niemand vinden we.']]
]});
