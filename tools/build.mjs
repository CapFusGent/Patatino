import fs from 'node:fs';
import { loadUnits } from './load-data.mjs';
import { mascot } from '../src/mascot.js';
import { dependency } from './dependencies.mjs';
import { validateUnits } from './validate.mjs';
const units=await loadUnits();
validateUnits(units);
const stripExports=s=>s.replace(/^export /gm,'');
const source=fs.readFileSync('index.template.html','utf8');
const values={
  CSS:fs.readFileSync('src/style.css','utf8'),
  UNITS:JSON.stringify(units).replace(/</g,'\\u003c'),
  CORE:stripExports(fs.readFileSync('src/core.js','utf8')),
  MASCOT:stripExports(fs.readFileSync('src/mascot.js','utf8')),
  APP:fs.readFileSync('src/app.js','utf8')
};
const html=source.replace(/__(CSS|UNITS|CORE|MASCOT|APP)__/g,(_,key)=>values[key]);
fs.writeFileSync('index.html',html);
const sharp=dependency('sharp');
const svg=mascot('contento').replace('viewBox="0 0 220 240"','width="512" height="512" viewBox="-40 -30 300 300"').replace('<g stroke=','<rect x="-40" y="-30" width="300" height="300" fill="#F5D130"/><g stroke=');
for(const size of [32,180,192,512])await sharp(Buffer.from(svg)).resize(size,size).png().toFile(`icon-${size}.png`);
fs.mkdirSync('dist',{recursive:true});
for(const file of ['index.html','manifest.webmanifest','sw.js','icon-32.png','icon-180.png','icon-192.png','icon-512.png','README.md','.nojekyll'])fs.copyFileSync(file,`dist/${file}`);
console.log(`Build completo: ${units.length} unità, ${units.reduce((n,u)=>n+u.grammar.length+u.mixed.length,0)} esercizi grammaticali, ${units.reduce((n,u)=>n+u.words.length,0)} schede lessicali.`);
