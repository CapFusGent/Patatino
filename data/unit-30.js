import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:30,title:'Goed geschreven',it:'Punteggiatura e ortografia',group:5,
explanation:`<h2>L'idea</h2><p>Scrivere correttamente non significa riprodurre ogni pausa della voce. Il neerlandese usa convenzioni che aiutano a riconoscere parole e confini della frase: maiuscole, segni di punteggiatura, apostrofi e dieresi svolgono ruoli diversi. Per un italiano sono particolarmente importanti le vocali lunghe e brevi e la scrittura unita di molti composti. Questa unità raccoglie le regole incontrate lungo il percorso.</p>
<h3>1 · Conserva il suono nella grafia</h3><p>Una vocale lunga può richiedere due lettere in una sillaba chiusa e una sola in una sillaba aperta: <i>maan</i> e <i>manen</i>. Una vocale breve può richiedere una doppia consonante quando aggiungi una sillaba: <i>man</i> e <i>mannen</i>. Non è una scelta estetica: cambiare il raddoppiamento può creare un'altra parola. Osserva quindi struttura sillabica e suono, non soltanto la lunghezza visiva.</p>
<table><tr><th>Segno o regola</th><th>Forma</th><th>Funzione</th></tr><tr><td>apostrofo</td><td>auto's</td><td>conserva la vocale del plurale</td></tr><tr><td>dieresi</td><td>België</td><td>separa suoni vocalici</td></tr><tr><td>trattino</td><td>e-mail</td><td>fa parte della parola</td></tr><tr><td>composto</td><td>huisdeur</td><td>unisce due elementi</td></tr></table>
<h3>2 · Distingui segni di parola e di frase</h3><p>L'apostrofo in <i>auto's</i> non è equivalente a un punto finale: appartiene alla grafia della parola. Anche la dieresi in <i>België</i>, «Belgio», e il trattino in <i>e-mail</i> devono essere conservati. L'apostrofo diritto e quello tipografico rappresentano lo stesso segno ortografico. La dieresi segnala che la vocale inizia una nuova sillaba; eliminarla non equivale a cambiare una pausa della frase.</p>
<h3>3 · Segna i confini</h3><p>Una frase dichiarativa termina normalmente con un punto; una domanda diretta con un punto interrogativo. Una domanda indiretta dentro una dichiarazione non richiede automaticamente il punto interrogativo: <i>ik weet niet waar hij woont</i>. La virgola può rendere leggibile il confine dopo una subordinata iniziale. Non separare abitualmente soggetto e verbo con una virgola solo perché nella lettura fai una pausa.</p>
<p>Nomi propri e nomi delle lingue prendono la maiuscola; giorni e mesi normalmente no. Molti composti si scrivono uniti: <i>huisdeur</i>, «porta di casa». Per rendere leggibile un composto difficile è ammesso anche un trattino facoltativo; negli esercizi usiamo la grafia comune del lessico. Quando una forma ti è nuova, controlla la parola intera. Gli esercizi sulle tessere allenano la struttura; le lacune scritte chiedono una sola parola e permettono di esercitare i segni interni.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Belgie</s> → <strong>België</strong>. <s>Autos</s> → <strong>auto's</strong>. <s>E mail</s> → <strong>e-mail</strong>. <s>Huis deur</s> → <strong>huisdeur</strong>, quando intendi il nome composto.</p>`,
keywords:'de punt=il punto|de komma=la virgola|het vraagteken=il punto interrogativo|de apostrof=l’apostrofo|het trema=la dieresi|het koppelteken=il trattino',
words:'de e-mail=l’e-mail|de huisdeur=la porta di casa|de maan=la luna|het woord=la parola|de letter=la lettera dell’alfabeto|de regel=la regola, riga|schrijven=scrivere|controleren=controllare',
vlaanderen:'Le indicazioni ufficiali sulla lingua standard belga distinguono varianti riconosciute e usi non standard. Per la grafia, consulta un repertorio ortografico quando una parola non è familiare.',source:'standard',practiceNote:'Conserva i segni interni nelle grafie studiate: België, auto’s, e-mail. Mantieni il tipo di frase e il significato della traduzione.',
rules:[
['Il nome del Belgio: ___','België','Belgio.','Conserva il segno che separa le vocali.','!Belgie~Manca la dieresi.','!Belgiëe~Lettera in più.'],
['Plurale di auto: ___',"auto's",'Automobili.','Conserva la vocale finale.','!autos~Manca l’apostrofo.','auto~Singolare.'],
['Plurale di foto: ___',"foto's",'Foto al plurale.','Usa il segno interno necessario.','!fotos~Manca l’apostrofo.','foto~Singolare.'],
['22 = ___','tweeëntwintig','Ventidue.','Le vocali hanno bisogno di separazione.','!tweeentwintig~Manca la dieresi.','twaalf~Dodici.'],
['Una lettera elettronica: ___','e-mail','E-mail.','Scrivi il termine del lessico con il suo trattino.','email~Senza trattino indica lo smalto, non la posta elettronica nella grafia standard.','brief~Lettera, non necessariamente elettronica.'],
['Plurale di man: ___','mannen','Uomini.','Mantieni la vocale breve.','manen~Lune o criniere, altra parola.','man~Singolare.'],
['Plurale di raam: ___','ramen','Finestre.','La vocale lunga entra in una sillaba aperta.','!raamen~Una a in più.','raam~Singolare.'],
['Plurale di bed: ___','bedden','Letti.','La vocale breve richiede doppia consonante.','beden~È un’altra parola, non il plurale di bed.','bed~Singolare.'],
['Plurale di maan: ___','manen','Lune.','Conserva la vocale lunga nella sillaba aperta.','mannen~Uomini, vocale breve.','maan~Singolare.'],
['Huis + deur: ___','huisdeur','Porta di casa.','Usa la grafia comune del lessico, tutta unita.','!huizdeur~Huis conserva la s nel composto.','!huisdeurr~Consonante in più.']
],sentences:[
['Ik woon in België.','Abito in Belgio.','!Belgiëe',['In België woon ik.']],
['Ik schrijf een e-mail.','Scrivo un’e-mail.','woord',['Een e-mail schrijf ik.']],
["Wij hebben twee auto's.",'Abbiamo due automobili.','!autos',["We hebben twee auto's.","Twee auto's hebben wij.","Twee auto's hebben we."]],
['De huisdeur is open.','La porta di casa è aperta.','e-mail',['Open is de huisdeur.']],
['Ik controleer het woord.','Controllo la parola.','!controleerr',['Het woord controleer ik.']],
['De letter is klein.','La lettera dell’alfabeto è piccola.','regel',['Klein is de letter.']],
['Hoe schrijf je dit woord?','Come scrivi questa parola?','!schrijfft',['Hoe schrijf jij dit woord?']],
['De regel is moeilijk.','La regola è difficile.','maan',['Moeilijk is de regel.']],
["Ik heb drie foto's.",'Ho tre foto.','!fotoos',["Drie foto's heb ik."]],
['Ik weet niet waar hij woont.','Non so dove abita lui.','controleren']
]});
