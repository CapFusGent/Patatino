import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
export async function loadUnits() {
  const files = fs.readdirSync('data').filter(f=>/^unit-\d\d\.js$/.test(f)).sort();
  return Promise.all(files.map(async file => (await import(pathToFileURL(path.resolve('data',file)))).default));
}
