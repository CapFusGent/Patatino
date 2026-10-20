import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:25,title:'Om te leren',it:'L’infinito con te',group:4,
explanation:`<h2>L'idea</h2><p>In italiano dici «provo a leggere», «decido di partire» e «posso venire». Il neerlandese non riproduce ogni preposizione italiana: alcuni verbi richiedono <i>te</i> prima dell'infinito, altri no. <i>Ik probeer te lezen</i> contiene <i>te</i>, mentre <i>ik kan lezen</i> non lo contiene. Conviene imparare la costruzione insieme al verbo principale, anziché tradurre «a» o «di» in modo automatico.</p>
<h3>1 · Riconosci i verbi che prendono te</h3><p><i>Proberen</i>, «provare», <i>besluiten</i>, «decidere», e <i>vergeten</i>, «dimenticare», possono introdurre un infinito con <i>te</i>. Nella frase semplice la struttura è <i>ik probeer het boek te lezen</i>. Il verbo principale si coniuga, mentre <i>te</i> sta immediatamente prima dell'infinito, salvo il caso particolare dei separabili.</p>
<p>Con verbi come <i>proberen</i> e <i>beloven</i> puoi anche introdurre il gruppo con <i>om</i>: <i>ik probeer om te lezen</i> resta «provo a leggere». Qui <i>om</i> non esprime uno scopo separato. Non estendere questa possibilità a tutti i verbi: impara per esempio <i>beginnen te lezen</i>, senza aggiungere <i>om</i>.</p>
<table><tr><th>Costruzione</th><th>Frase</th><th>Italiano</th></tr><tr><td>proberen + te</td><td>ik probeer te leren</td><td>provo a imparare</td></tr><tr><td>modale senza te</td><td>ik wil leren</td><td>voglio imparare</td></tr><tr><td>scopo</td><td>om te leren</td><td>per imparare</td></tr><tr><td>separabile</td><td>om op te staan</td><td>per alzarsi</td></tr></table>
<h3>2 · Esprimi uno scopo</h3><p><i>Om … te</i> può introdurre il fine di un'azione: <i>ik kom om te helpen</i>, «vengo per aiutare». L'oggetto e altre informazioni si inseriscono prima di <i>te</i>: <i>om het boek te lezen</i>. In altre costruzioni, come <i>het is moeilijk om te slapen</i>, <i>om</i> può essere facoltativo. Le risposte ammesse tengono conto di questa possibilità quando il significato resta uguale.</p>
<p>Puoi anticipare tutto lo scopo: <i>om te helpen kom ik</i>. Con <i>komen</i> che indica un movimento volontario esiste anche <i>ik kom helpen</i>, «vengo ad aiutare», senza <i>om te</i>. Non è una regola per eliminare <i>te</i> dopo ogni verbo.</p>
<h3>3 · Apri il verbo separabile</h3><p>Con un separabile, <i>te</i> si colloca fra particella e verbo: <i>op te staan</i>, <i>mee te nemen</i>. Le parti si scrivono separate. Non usare <i>te opstaan</i>, e non confondere questa costruzione con l'infinito unito dopo un modale. Il riflessivo, se presente, continua a dipendere dal soggetto: <i>ik probeer me die dag te herinneren</i>, «provo a ricordarmi quel giorno».</p>
<p>La distinzione più utile è quindi triplice: modale con infinito senza <i>te</i>, verbo che richiede <i>te</i>, e gruppo di scopo con <i>om</i>. Quando leggi un testo, sottolinea il verbo principale e osserva quali parole introduce. Imparare piccoli gruppi completi è più affidabile di una lista di traduzioni isolate.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Ik probeer lezen.</s> → <strong>Ik probeer te lezen.</strong> <s>Ik kan te komen.</s> → <strong>Ik kan komen.</strong> <s>Om te opstaan</s> → <strong>om op te staan</strong>: la particella precede <i>te</i>.</p>`,
keywords:'te=particella prima dell’infinito|om=per, introduzione dello scopo',
words:'besluiten=decidere|vergeten=dimenticare|beloven=promettere|beginnen=cominciare|hopen=sperare|het doel=l’obiettivo|de cursus=il corso|de taal=la lingua|volgen=seguire',
vlaanderen:'Goesting è una parola informale belga legata a voglia e desiderio. Negli esercizi manteniamo costruzioni standard con verbi come hopen e proberen.',source:'goesting',practiceNote:'Te precede l’infinito; nei separabili entra fra particella e verbo. Om può introdurre lo scopo.',
rules:[
['Ik probeer om ___ lezen.','te','Provo a leggere.','Completa il gruppo infinitivo dopo om con una parola.','om~È già presente.','naar~Preposizione di destinazione.'],
['Ik kom om ___ helpen.','te','Vengo per aiutare.','Completa la costruzione di scopo.','naar~Destinazione.','met~Compagnia.'],
['Ik probeer op ___ staan.','te','Provo ad alzarmi.','Fra particella e verbo.','om~Non va in questa posizione.','aan~Altra particella.'],
['Het is moeilijk ___ slapen.','te','È difficile dormire.','Particella davanti all’infinito.','naar~Non introduce questo infinito.','met~Con.'],
['Ik wil het boek ___.','lezen','Voglio leggere il libro.','Infinito dopo un modale.','lees~Forma coniugata.','leest~Forma coniugata.'],
['Wij proberen koffie ___ maken.','te','Proviamo a fare il caffè.','La particella richiesta da proberen.','naar~Verso.','aan~A, non particella infinitiva.'],
['Ik kom ___ te werken.','om','Vengo per lavorare.','Introduci lo scopo.','naar~Destinazione.','met~Compagnia.'],
['Ik probeer het boek mee te ___.','nemen','Provo a portare con me il libro.','Seconda parte di meenemen.','neem~Forma coniugata.','neemt~Terza persona.'],
['Wij gaan naar school om te ___.','leren','Andiamo a scuola per imparare.','Infinito di imparare.','leer~Forma con ik.','leert~Singolare.'],
['Ik probeer haar op te ___.','bellen','Provo a telefonarle.','Parte finale dell’infinito.','bel~Forma con ik.','belt~Terza persona.']
],sentences:[
['Ik besluit te vertrekken.','Decido di partire.','!besluitt',['Ik besluit om te vertrekken.']],
['Wij hopen te komen.','Speriamo di venire.','vergeten',['We hopen te komen.']],
['Hij vergeet te betalen.','Lui dimentica di pagare.','!vergeett',['Hij vergeet om te betalen.']],
['Ik kom om de taal te leren.','Vengo per imparare la lingua.','cursus',['Om de taal te leren kom ik.','Ik kom de taal leren.','De taal kom ik leren.','De taal leren kom ik.']],
['Zij belooft te helpen.','Lei promette di aiutare.','!belooftt',['Ze belooft te helpen.','Zij belooft om te helpen.','Ze belooft om te helpen.']],
['Wij beginnen te lezen.','Cominciamo a leggere.','hopen',['We beginnen te lezen.']],
['Ik probeer op te staan.','Provo ad alzarmi.','!opstaant',['Ik probeer om op te staan.']],
['De cursus is moeilijk om te volgen.','Il corso è difficile da seguire.','taal',['De cursus is moeilijk te volgen.','Moeilijk is de cursus om te volgen.','Moeilijk is de cursus te volgen.','Moeilijk om te volgen is de cursus.','Moeilijk te volgen is de cursus.']],
['Hij komt om te werken.','Lui viene per lavorare.','!werkent',['Om te werken komt hij.','Hij komt werken.','Werken komt hij.']],
['Ik vergeet het boek mee te nemen.','Dimentico di portare con me il libro.','doel',['Ik vergeet om het boek mee te nemen.','Het boek vergeet ik mee te nemen.']]
]});
