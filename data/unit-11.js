import { defineUnit } from './helpers.mjs';
export default defineUnit({
id:11,title:'Hoe laat is het?',it:'L’ora',group:2,
explanation:`<h2>L'idea</h2><p>La domanda <i>hoe laat is het?</i> significa «che ora è?». La risposta usa un soggetto impersonale: <i>het is drie uur</i>. Il passaggio più delicato per un italiano è <i>half</i>: <i>half vier</i> significa le tre e mezza, non le quattro e mezza. Si guarda all'ora che sta arrivando, come se fosse già stata percorsa metà del cammino verso di essa.</p>
<h3>1 · Parti dall'ora intera</h3><p>Con l'ora esatta usa numero e <i>uur</i>: <i>acht uur</i>, le otto. <i>Uur</i> resta singolare dopo un numero che indica l'ora. Il formato di ventiquattro ore è utile per orari ufficiali e appuntamenti: leggere «14:00» come <i>veertien uur</i> evita dubbi fra mattina e pomeriggio. Nella conversazione il contesto rende spesso naturale il formato di dodici ore.</p>
<table><tr><th>Ora</th><th>Espressione parlata</th><th>Come pensarla</th></tr><tr><td>3:00</td><td>drie uur</td><td>tre in punto</td></tr><tr><td>3:15</td><td>kwart over drie</td><td>un quarto dopo le tre</td></tr><tr><td>3:30</td><td>half vier</td><td>metà verso le quattro</td></tr><tr><td>3:45</td><td>kwart voor vier</td><td>un quarto prima delle quattro</td></tr></table>
<h3>2 · Usa over e voor</h3><p><i>Over</i> conta i minuti trascorsi dopo l'ora; <i>voor</i> conta quelli che mancano all'ora successiva. <i>Tien over drie</i> sono le tre e dieci; <i>tien voor vier</i> sono le quattro meno dieci. Non confondere il numero pronunciato con l'ora digitale: dopo <i>voor</i> stai nominando l'ora futura. <i>Kwart</i> significa quindici minuti, mentre <i>half</i> introduce una costruzione diversa, senza aggiungere <i>over</i>. In Fiandra sentirai anche <i>na</i> al posto di <i>over</i>: <i>tien na vier</i> indica le quattro e dieci. Accettiamo anche questa variante.</p>
<h3>3 · Fissa un appuntamento</h3><p>Per dire a che ora succede qualcosa, usa <i>om</i>: <i>ik kom om acht uur</i>, «vengo alle otto». Per una durata, invece, puoi dire <i>ik werk acht uur</i>, «lavoro otto ore». La presenza di <i>om</i> cambia quindi il significato. Se sposti l'indicazione all'inizio, conserva V2: <i>om acht uur kom ik</i>. Negli esercizi leggi se è richiesta una forma parlata o numerica, perché entrambe possono essere valide nella vita reale.</p>
<h3>Attenzione: errori tipici di chi parla italiano</h3><p><s>Half drie = 3:30</s> → <strong>half drie = 2:30</strong>. <s>Ik kom in acht uur.</s> → <strong>Ik kom om acht uur.</strong> Per l'appuntamento serve <i>om</i>, non una traduzione automatica di «in».</p>`,
keywords:'uur=ora|half=mezza verso l’ora successiva|kwart=quarto d’ora|over=dopo, nell’ora|voor=prima, nell’ora|om=alle, con un orario',
words:'de afspraak=l’appuntamento|de les=la lezione|de pauze=la pausa|de ochtend=la mattina|de avond=la sera|beginnen=cominciare|stoppen=fermarsi, finire|laat=tardi',
vlaanderen:'In Belgio voormiddag è circa la fascia 9–12 e namiddag il periodo fra mezzogiorno e sera. Indicare anche l’ora rende più chiaro un appuntamento.',source:'time',practiceNote:'Half nomina l’ora successiva. Om introduce l’orario di un evento.',
rules:[
['3:00: Het is drie ___.','uur','Sono le tre.','Completa l’ora intera.','!uuren~Non è la forma richiesta.','half~Mezza.'],
['3:15: Het is kwart ___ drie.','over','Sono le tre e un quarto.','I minuti sono dopo le tre.','voor~Prima: darebbe le 2:45.','om~Introduce un appuntamento.'],
['3:30: Het is half ___.','vier','Sono le tre e mezza.','Scrivi in lettere l’ora successiva.','drie~Darebbe le 2:30.','vijf~Darebbe le 4:30.'],
['3:45: Het is kwart ___ vier.','voor','Sono le quattro meno un quarto.','Manca un quarto alle quattro.','over~Darebbe le 4:15.','om~Introduce un evento.'],
['Ik kom ___ acht uur.','om','Vengo alle otto.','Preposizione per un orario.','in~Dentro o fra un intervallo.','met~Con.'],
['2:30: Het is ___ drie.','half','Sono le due e mezza.','La metà verso le tre.','kwart~Un quarto, costruzione incompleta.','uur~Ora, ordine errato.'],
['4:10: Het is tien ___ vier.','over','Sono le quattro e dieci.','Dieci minuti trascorsi.','voor~Darebbe le 3:50.','om~Alle.','Over indica i minuti dopo l’ora; in Fiandra si usa anche na.',['na']],
['4:50: Het is tien ___ vijf.','voor','Sono le cinque meno dieci.','Dieci minuti prima della prossima ora.','over~Darebbe le 5:10.','in~Non è la preposizione dell’ora parlata.'],
['Hoe ___ is het?','laat','Che ora è?','Completa con una parola la domanda per l’ora.','lang~Quanto a lungo: chiede una durata.','vaak~Quanto spesso: chiede una frequenza.','La domanda per l’ora è hoe laat is het?; qui laat fa parte dell’espressione interrogativa.'],
['De les begint ___ negen uur.','om','La lezione comincia alle nove.','L’orario di un evento.','met~Con.','voor~Prima delle nove, significato diverso.']
],sentences:[
['Het is drie uur.','Sono le tre.','!uurr',['Drie uur is het.','Het is drie.','Drie is het.']],
['De les begint om acht uur.','La lezione comincia alle otto.','pauze',['Om acht uur begint de les.','De les begint om acht.','Om acht begint de les.']],
['Het is half vier.','Sono le tre e mezza.','!halff',['Half vier is het.']],
['Ik kom om tien uur.','Vengo alle dieci.','stoppen',['Om tien uur kom ik.','Ik kom om tien.','Om tien kom ik.']],
['Het is kwart over vijf.','Sono le cinque e un quarto.','!kwartt',['Kwart over vijf is het.','Het is kwart na vijf.','Kwart na vijf is het.']],
['De pauze begint om twaalf uur.','La pausa comincia alle dodici.','afspraak',['Om twaalf uur begint de pauze.','De pauze begint om twaalf.','Om twaalf begint de pauze.']],
['Het is kwart voor drie.','Sono le tre meno un quarto.','!voorr',['Kwart voor drie is het.']],
['De trein komt laat.','Il treno arriva tardi.','beginnen',['Laat komt de trein.']],
['Hoe laat is het?','Che ora è?','!hoee'],
['Wij stoppen om vier uur.','Finiamo alle quattro.','beginnen',['Om vier uur stoppen wij.','We stoppen om vier uur.','Om vier uur stoppen we.','Wij stoppen om vier.','Om vier stoppen wij.','We stoppen om vier.','Om vier stoppen we.']]
]});
