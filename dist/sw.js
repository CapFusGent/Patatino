const VERSION = 'patatino-v2.0.0';
const CACHE = VERSION + ':' + self.registration.scope;
const CORE = ['./','./index.html','./manifest.webmanifest','./icon-32.png','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>
    key.startsWith('patatino-')&&key.endsWith(':'+self.registration.scope)&&key!==CACHE
  ).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
async function store(request,response){
  if(response.ok||response.type==='opaque'){
    try{const cache=await caches.open(CACHE);await cache.put(request,response.clone());}catch{}
  }
  return response;
}
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  const own=url.origin===self.location.origin&&url.href.startsWith(self.registration.scope);
  const font=['fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname);
  if(!own&&!font)return;
  if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.href===self.registration.scope){
    event.respondWith((async()=>{
      try{
        const response=await fetch(event.request);
        if(response.ok){
          const cache=await caches.open(CACHE);
          await cache.put(new URL('./index.html',self.registration.scope),response.clone());
          return store(event.request,response);
        }
        const cache=await caches.open(CACHE);
        return (await cache.match(new URL('./index.html',self.registration.scope)))||response;
      }catch{
        const cache=await caches.open(CACHE);
        return (await cache.match(new URL('./index.html',self.registration.scope)))||new Response('Apri Patatino online una volta per attivare la copia offline.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
  }else{
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE),cached=await cache.match(event.request);
      if(cached)return cached;
      try{return await store(event.request,await fetch(event.request));}
      catch{return new Response('',{status:503});}
    })());
  }
});
