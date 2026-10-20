import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
export function startServer(port=8787,root=path.resolve('dist'),options={}){
  const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css','.webmanifest':'application/manifest+json','.png':'image/png','.md':'text/plain; charset=utf-8'};
  const server=http.createServer((req,res)=>{
    let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
    // A project path is supported to exercise GitHub Pages-style scope.
    name=name.replace(/^\/Patatino(?=\/|$)/,'');
    if(name==='/'||name==='')name='/index.html';
    const file=path.resolve(root,'.'+name);
    if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
    if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404).end('Not found');return;}
    const headers={'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'};
    if(options.offlineFonts)headers['Content-Security-Policy']="style-src 'self' 'unsafe-inline'; font-src 'self'";
    res.writeHead(200,headers);
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(resolve=>server.listen(port,'127.0.0.1',()=>resolve(server)));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const port=Number(process.argv[2]||process.env.PORT||8787);await startServer(port);console.log(`Patatino: http://127.0.0.1:${port}/Patatino/`);
}
