import http from 'node:http';
import {readFileSync,existsSync,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
const root=resolve(import.meta.dirname,'../dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return;}
 let file=resolve(root,'.'+pathname);
 if(!file.startsWith(root+sep)&&file!==root){res.writeHead(403);res.end();return;}
 if(file===root) file=resolve(root,'index.html');
 else if(!extname(file)) file+='.html';
 let status=200;
 if(!existsSync(file)||!statSync(file).isFile()){file=resolve(root,'404.html');status=404;}
 res.writeHead(status,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(readFileSync(file));
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
