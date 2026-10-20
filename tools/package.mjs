import fs from 'node:fs';
import path from 'node:path';
import { deflateRawSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const qa=JSON.parse(fs.readFileSync('qa/e2e-report.json','utf8'));
assert.equal(qa.status,'passed','Complete the end-to-end tests before packaging');
assert.equal(qa.buildSHA256,createHash('sha256').update(fs.readFileSync('dist/index.html')).digest('hex'),'Build changed since the end-to-end test');
assert.equal(JSON.parse(fs.readFileSync('qa/unit-test-report.json','utf8')).status,'passed');

// Small standards-based ZIP writer; no packaging dependency at runtime or build time.
const table=Array.from({length:256},(_,n)=>{
  for(let k=0;k<8;k++)n=(n&1)?0xedb88320^(n>>>1):n>>>1;
  return n>>>0;
});
function crc32(buffer){
  let crc=0xffffffff;
  for(const byte of buffer)crc=table[(crc^byte)&255]^(crc>>>8);
  return (crc^0xffffffff)>>>0;
}
function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(entry=>{
    const file=path.join(dir,entry.name);
    return entry.isDirectory()?walk(file):[file];
  });
}
function zip(filename,entries){
  const records=[],central=[];let offset=0;
  const now=new Date(),time=(now.getHours()<<11)|(now.getMinutes()<<5)|(now.getSeconds()>>1);
  const date=((now.getFullYear()-1980)<<9)|((now.getMonth()+1)<<5)|now.getDate();
  for(const [name,file] of entries){
    if(name.startsWith('/')||name.split('/').includes('..'))throw Error('Invalid ZIP path: '+name);
    const plain=fs.readFileSync(file),data=deflateRawSync(plain),encoded=Buffer.from(name,'utf8'),crc=crc32(plain);
    const local=Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50,0);local.writeUInt16LE(20,4);local.writeUInt16LE(0x800,6);
    local.writeUInt16LE(8,8);local.writeUInt16LE(time,10);local.writeUInt16LE(date,12);
    local.writeUInt32LE(crc,14);local.writeUInt32LE(data.length,18);local.writeUInt32LE(plain.length,22);local.writeUInt16LE(encoded.length,26);
    records.push(local,encoded,data);
    const item=Buffer.alloc(46);
    item.writeUInt32LE(0x02014b50,0);item.writeUInt16LE(20,4);item.writeUInt16LE(20,6);item.writeUInt16LE(0x800,8);
    item.writeUInt16LE(8,10);item.writeUInt16LE(time,12);item.writeUInt16LE(date,14);
    item.writeUInt32LE(crc,16);item.writeUInt32LE(data.length,20);item.writeUInt32LE(plain.length,24);
    item.writeUInt16LE(encoded.length,28);item.writeUInt32LE(offset,42);
    central.push(item,encoded);offset+=local.length+encoded.length+data.length;
  }
  const directory=Buffer.concat(central),end=Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50,0);end.writeUInt16LE(entries.length,8);end.writeUInt16LE(entries.length,10);
  end.writeUInt32LE(directory.length,12);end.writeUInt32LE(offset,16);
  const archive=Buffer.concat([...records,directory,end]);
  fs.writeFileSync(filename,archive);
  return {filename,files:entries.length,bytes:archive.length,sha256:createHash('sha256').update(archive).digest('hex')};
}
const deployment=['.nojekyll','index.html','manifest.webmanifest','sw.js','icon-32.png','icon-180.png','icon-192.png','icon-512.png','README.md'];
const deployEntries=deployment.map(file=>[file,path.join('dist',file)]);
const sources=[
  ...deployment,
  '.gitignore','index.template.html','package.json','package-lock.json',
  ...['src','data','tools'].flatMap(walk),
  ...walk('qa').filter(file=>/\.(?:md|json)$/.test(file))
];
const results=[
  zip('patatino-v2-github-pages.zip',deployEntries),
  zip('patatino-v2-sorgenti.zip',[...new Set(sources)].map(file=>[file.replaceAll('\\','/'),file]))
];
console.log(JSON.stringify(results,null,2));
