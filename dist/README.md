# Patatino

PWA originale per adulti italiani che imparano il neerlandese parlato in Belgio.

## Sviluppo e build

Richiede Node.js 18+ (solo per il build e i test):

```powershell
node tools/build.mjs
node tools/validate.mjs
node tools/e2e.mjs
```

Il build concatena `data/unit-*.js` dentro `index.template.html` e produce `index.html` autosufficiente. Per GitHub Pages crea un repository pubblico, carica i file della cartella `dist/` (oppure la root del progetto), poi seleziona **Settings → Pages → Deploy from branch → main → root**. Sul telefono apri l’URL e scegli “Aggiungi alla schermata Home”.

## Offline

Servire la cartella con un server statico (non `file://`), per esempio `npx serve .`; il service worker usa rete prima per la pagina e cache prima per icone/font.

Tutti i contenuti e i disegni sono originali. Le note su uso belga sono formulate prudentemente come indicazioni d’uso regionale, non come regole assolute.
