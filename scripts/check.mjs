import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {resolve,extname} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve(import.meta.dirname,'../dist');
function walk(p){return readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(p,e.name)):[resolve(p,e.name)]);}
const html=walk(root).filter(p=>extname(p)==='.html');
assert.equal(html.length,8);
for(const path of html){const text=readFileSync(path,'utf8');assert(!/Rodrigo|Niskier/i.test(text),`Personal reference in ${path}`);assert(text.includes('cenários simulados'));assert(text.includes('lang="pt-BR"'));const ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`Duplicate IDs ${path}`);for(const m of text.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)){let target=m[1];if(target==='/')target='/index.html';else if(!extname(target))target+='.html';assert(existsSync(resolve(root,'.'+target)),`Broken local link: ${m[1]}`);}}
const js=readFileSync(resolve(root,'app.js'),'utf8');assert(!/fetch\(|XMLHttpRequest|localStorage|sessionStorage/.test(js));
console.log(`PASS: ${html.length} pages, local links, IDs, legal notes, no personal references, briefing without network transmission.`);
