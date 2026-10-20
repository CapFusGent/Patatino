# Verifica Patatino 2

Data: 20 ottobre 2026.

**Esito funzionale: superato.** Il ciclo completo ha verificato 30 unità, azzeramento del ripasso, 160 combinazioni di layout, offline, installabilità Chromium, cronologia, audio e assenza di errori JavaScript. Anche lo smoke test WebKit è passato. L’HTML provato ha SHA-256 `680eb550c90f2b81c8138ad6396fa94b10e377b1adb078a41064cad1823a9234`.

Nota sull’ambiente di prova: dopo il completamento delle asserzioni, Chrome ha superato il tempo limite di chiusura automatica. Il test gestisce ora la pulizia forzata soltanto del proprio profilo temporaneo univoco, registrando un avviso senza confonderlo con un errore dell’app. Il controllo separato è riportato in `pwa-report.json`; nessun browser personale è un bersaglio della pulizia.

## Contenuti e revisione

30 unità in sei gruppi, 600 esercizi scritti e 250 schede lessicali. Le spiegazioni contengono fra 329 e 426 parole, inclusi titoli e tabelle, secondo il conteggio del validatore. Tutte hanno confronto con l’italiano, regole, tabella ed errori tipici.

Tre istanze AI indipendenti dalla scrittura hanno revisionato il corso, in sei gruppi di cinque unità. I rapporti `review-01-05.md` … `review-26-30.md` indicano gli esercizi controllati, le correzioni e le fonti linguistiche. Coprono unicità delle scelte nel contesto, traduzioni, progressione lessicale, distrattori, varianti valide e uso belga.

Non si tratta di una certificazione da parte di un madrelingua umano. Le alternative accettate sono un insieme finito revisionato, non tutte le parafrasi possibili della lingua.

## Logica e distribuzione

`node tools/validate.mjs` e `node tools/unit-tests.mjs` controllano:

- schema delle 30 unità; quantità, lunghezze e sezioni richieste;
- traduzioni, indici e opzioni duplicate; distrattori e tessere sufficienti per ogni variante;
- tutte le 1.176 forme di risposta dichiarate, anche con maiuscole e punteggiatura aggiunta;
- accenti, apostrofi e trattini quando necessari alla grafia attesa;
- distribuzione dei blocchi da 7–9 parole, distrattori già presentati e rotazione di tutti i 600 esercizi;
- soglia dell’80%, completamento, conservazione del miglior risultato, accredito XP una sola volta per sessione e serie di giorni;
- sintassi dello script incorporato, assenza di dipendenze JS esterne, identità della pagina in radice e in `dist/`, manifest e dimensioni PNG 32/180/192/512;
- contrasto fra testo `#171717` e sfondi di lettura: il minimo misurato fra le quattro palette è 11,99:1, superiore a 4,5:1. Il colore d’accento è usato per ombre e decorazioni, non come sfondo del testo. Logo e controlli disabilitati non sono inclusi in questa misura.

Risultati dettagliati: `unit-test-report.json`.

## Prova end-to-end

`node tools/e2e.mjs` apre un profilo temporaneo dedicato di Chromium e usa gli input e i pulsanti dell’interfaccia. Non modifica i progressi per dichiarare completate le unità: legge le risposte canoniche dalla sessione, scrive o seleziona i controlli renderizzati e verifica l’esito del correttore.

Per ogni unità completa tutti i blocchi lessicali, una sessione grammaticale con quattro errori iniziali (71%) e una senza errori (100%). Completa poi il ripasso fino a zero, controlla il salvataggio con un ricaricamento e l’assenza di doppio accredito tornando avanti/indietro nei risultati.

Controlla 160 combinazioni schermata/palette a 360×800: tutte le 30 pagine-unità, percorso, impostazioni, scheda di studio, domanda, correzione, tessere vuote/composte/corrette, risultati e ripasso. Cerca sia elementi fuori dal viewport sia uno `scrollWidth` della pagina eccessivo, e salva schermate PNG per il controllo visivo.

Le prove PWA controllano il manifest e i criteri di installabilità tramite Chrome DevTools, ricaricano con la rete disattivata e completano un’altra sessione. Le prove di cronologia includono ricaricamento di unità, esercizi e risultati. Le voci simulate verificano selezione `nl-BE`, velocità 0,92/0,62, esclusione di voci non neerlandesi e silenzio per italiano e forme inesistenti. Un’ulteriore sessione verifica il funzionamento quando `localStorage` e sintesi vocale non sono disponibili.

Il server di test blocca i font esterni tramite una policy temporanea per verificare il fallback e non dipendere dalla connessione a Google. Questa policy non è incorporata nel sito distribuito. Lo script può usare Chrome installato se il Chromium di Playwright non è disponibile.

Esiti, hash SHA-256 dell’HTML effettivamente provato e limitazioni di WebKit: `e2e-report.json`. Le immagini di QA vengono generate localmente e non sono incluse nel repository o negli ZIP.

## Limiti della prova su dispositivi

I controlli di installabilità non equivalgono a un’installazione manuale tramite il menu di ogni telefono. Non è stato collegato un dispositivo fisico Android o iPhone. Un eventuale smoke test WebKit prova una versione del motore, non certifica Safari 15.4 né ogni versione successiva.

La pronuncia e la disponibilità di voci locali dipendono dal sistema operativo e dal browser. La suite verifica la selezione e i parametri, non la qualità fonetica di ogni voce. L’audio offline richiede una voce effettivamente scaricata e accessibile al browser.

Prima di affidarsi all’app su un telefono specifico: aprire il sito online, aggiungerlo alla Home, scaricare una voce neerlandese e provare una sessione in modalità aereo.
