# Patatino

Un corso originale di neerlandese per adulti italiani, con attenzione all’uso in Belgio: 30 unità in 6 tappe, 600 esercizi di grammatica e traduzione, 250 schede lessicali. App statica installabile, senza account, pubblicità o server applicativo.

**Apri il corso:** [capfusgent.github.io/Patatino](https://capfusgent.github.io/Patatino/).

## Pubblicare lo ZIP su GitHub Pages

1. Estrai `patatino-v2-github-pages.zip`. Lo ZIP contiene direttamente `index.html`, `manifest.webmanifest`, `sw.js`, le quattro icone, questo README e `.nojekyll`.
2. Crea un repository pubblico su GitHub, oppure usa quello esistente.
3. Carica i **file estratti**, non lo ZIP e non una cartella che li contiene. `index.html` deve essere nella radice del repository.
4. Apri **Settings → Pages → Deploy from a branch → main → / (root)** e salva.
5. Attendi che il deployment termini. Il link segue il formato `https://NOMEUTENTE.github.io/NOMEREPOSITORY/`.
6. Apri il link sul telefono. Chrome Android: menu ⋮ → **Installa app** o **Aggiungi a schermata Home**. Safari iPhone: Condividi → **Aggiungi alla schermata Home**.

Nel repository completo sono già presenti i file pubblicabili nella radice e una copia in `dist/`. È quindi sufficiente pubblicare `main` dalla radice. Non occorre un workflow di build su GitHub.

Per passare l’app a un amico basta inviare il link pubblico. Un indirizzo `127.0.0.1` funziona solo sul dispositivo che ospita il server locale.

## Studiare, ascoltare, ripassare

Ogni unità contiene una spiegazione italiana di 300–600 parole, una nota “In Vlaanderen” con fonte, parole chiave e lessico. Prima si studia il lessico; poi le parole chiave, 6 domande sulla regola e 8 frasi miste. Le domande ruotano fra i tentativi per coprire l’intero insieme di 20 esercizi.

Il lessico genera riconoscimento, produzione e ascolto. I distrattori sono parole già presentate. Quando occorrono più blocchi, ciascuno contiene 7–9 parole; con 11–13 parole totali alcuni termini ricompaiono per non creare un blocco troppo breve.

La soglia è l’80% delle risposte al primo tentativo. Gli errori ritornano a fine sessione senza gonfiare il punteggio e restano nel ripasso finché vengono risolti lì. L’unità è completata quando tutti i blocchi lessicali e la parte grammaticale sono superati. Un successivo tentativo peggiore non cancella un risultato già raggiunto.

Tocca parole, tessere e alternative neerlandesi per ascoltarle; ripeti il tocco sullo stesso testo per rallentare. Le alternative italiane e le forme volutamente inesistenti restano mute. L’app usa soltanto voci neerlandesi del dispositivo, preferibilmente belghe (`nl-BE`), senza sostituirle con voci di altre lingue. Se mancano, mostra un avviso e rende leggibili gli esercizi di ascolto. Le impostazioni spiegano come cercare e scaricare le voci.

## Offline e progressi

Apri l’app almeno una volta online e attendi che la pagina sia pronta prima di provare offline. Serve HTTPS o localhost: aprire il file con `file://` non permette di installare il service worker.

La pagina usa la rete quando disponibile e la copia salvata in assenza di connessione. Icone e font usano prima la cache. I font di sistema sostituiscono Google Fonts se non disponibili. Per l’audio offline serve una voce **locale**: l’app non può garantire quali voci il browser esponga.

I progressi sono salvati in questo browser nella sola chiave `patatino-progress` di `localStorage`. Non sono sincronizzati fra dispositivi o browser; cancellare i dati del sito li elimina. Quando il salvataggio è vietato o lo spazio è esaurito, un avviso segnala che i progressi potrebbero andare persi.

La versione 2 conserva XP e dati precedenti come archivio interno, ma richiede di completare il nuovo corso, perché gli esercizi sono cambiati. Il precedente completamento non viene spacciato per un risultato sui nuovi contenuti.

## Sorgenti e sviluppo

`patatino-v2-sorgenti.zip` contiene anche sorgenti, strumenti e rapporti QA. Il runtime pubblicato non importa librerie JavaScript o CSS: tutti i dati, lo stile e il codice sono incorporati in `index.html`; gli unici collegamenti esterni necessari al disegno originale sono i font opzionali.

Struttura:

- `data/unit-01.js` … `data/unit-30.js`: contenuti originali separati per unità.
- `data/helpers.mjs`: schema compatto e costruzione delle domande/tessere.
- `src/core.js`: correzione, sessioni, progressi, XP, serie e palette.
- `src/app.js`, `src/style.css`, `src/mascot.js`: interfaccia e mascotte SVG originale.
- `index.template.html`: modello per la pagina autosufficiente.
- `tools/`: build, validazione, test, server locale e creazione ZIP.
- `qa/`: rapporti di revisione e risultati delle verifiche.

Per sviluppare servono Node.js 20+ e npm. Le dipendenze servono soltanto per generare icone ed eseguire i test, non per usare l’app:

```sh
npm install
npx playwright install chromium webkit
npm run build
npm run validate
npm test
npm run package
npm run serve
```

Il server locale serve `dist/` su `http://127.0.0.1:8787/` e accetta anche il prefisso `/Patatino/` usato dai test. In alternativa, passa una porta a `node tools/serve.mjs 8788`.

Il build aggiorna la pagina e le icone sia nella radice sia in `dist/`. A ogni pubblicazione che modifica l’app **incrementa `VERSION` in `sw.js`**, poi ricompila. Mantieni il medesimo scope per conservare i progressi. Non copiare soltanto `index.html` se sono cambiati icone, manifest o service worker.

## Verifiche e limiti

Il validatore controlla tutte le unità, le sezioni e lunghezze delle spiegazioni, le traduzioni, le opzioni, gli indici, il lessico, i distrattori e la disponibilità delle tessere per le risposte ammesse.

I test di logica controllano 1.176 forme di risposta, maiuscole e punteggiatura, accenti/apostrofi/trattini richiesti, rotazione degli esercizi, distrattori già studiati, soglia dell’80%, XP senza doppio accredito, serie e contrasto. Il test end-to-end completa realmente le 30 unità tramite i controlli renderizzati, con errori e senza, quindi azzera il ripasso rispondendo alle domande. Controlla inoltre cronologia, persistenza, layout a 360 px nelle quattro palette, offline, criteri di installabilità di Chrome e logica della sintesi vocale.

Nel pacchetto sorgenti, vedi `qa/verification.md`, `qa/unit-test-report.json`, `qa/e2e-report.json` e i sei rapporti `qa/review-*.md` per gli esiti effettivi. I test di audio usano voci simulate: non certificano la pronuncia di ogni voce reale. Un controllo WebKit non equivale a una prova fisica su iPhone né certifica specificamente Safari 15.4. L’installazione tramite il menu del telefono va verificata sul dispositivo di destinazione.

Le revisioni linguistiche sono state svolte da istanze AI indipendenti dalla scrittura, non da un revisore umano madrelingua. Hanno corretto ambiguità, varianti, traduzioni e note regionali. Le risposte alternative sono un insieme finito controllato: non una garanzia di riconoscere ogni parafrasi grammaticalmente possibile.

## Originalità e fonti

Spiegazioni, frasi, esercizi e disegni sono originali. L’ordine degli argomenti segue quello richiesto di *Basic Dutch: A Grammar and Workbook*, senza riprodurne testi o esercizi; nessun libro o PDF è incluso nella distribuzione.

Le note regionali rimandano a fonti linguistiche esplicite, fra cui Taaladvies.net, Team Taaladvies Vlaanderen e Taalunie. Distinguono neerlandese standard, varianti standard belghe e usi colloquiali, senza presentare il fiammingo come una grammatica unica separata.
