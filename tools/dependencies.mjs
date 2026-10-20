import { createRequire } from 'node:module';
import path from 'node:path';
const require=createRequire(import.meta.url);
export function dependency(name) {
  try{return require(name);}catch(error){
    if(process.env.PATATINO_NODE_MODULES)return require(path.join(process.env.PATATINO_NODE_MODULES,name));
    throw new Error(`Installa le dipendenze di sviluppo con npm install (manca ${name}).`,{cause:error});
  }
}
