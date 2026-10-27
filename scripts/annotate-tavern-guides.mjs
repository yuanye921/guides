import fs from 'node:fs/promises';
import path from 'node:path';
import annotations from '../src/data/tavern-annotations.mjs';

const escape = value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const round = n => Math.round(n * 10) / 10;

function render(image, name, id) {
  const spec = annotations[name];
  const w = Number(image.match(/width="(\d+)"/)[1]);
  const h = Number(image.match(/height="(\d+)"/)[1]);
  const top = spec.top ?? 0;
  const radius = w > 700 ? 21 : 14;
  const groups = spec.points.map(({ label, box, from, via }, i) => {
    const [x,y,bw,bh] = box;
    if (x < 0 || y < 0 || x+bw > w || y+bh > h || from[0]-radius < 0 || from[0]+radius > w || from[1]-radius < -top || from[1]+radius > h) throw new Error(`Out of bounds: ${name} ${i+1}`);
    const c=[x+bw/2,y+bh/2];
    const prev = via.at(-1) ?? from;
    const delta=[prev[0]-c[0],prev[1]-c[1]];
    const edge=1/Math.max(Math.abs(delta[0])/(bw/2+4),Math.abs(delta[1])/(bh/2+4));
    const end=[c[0]+delta[0]*edge,c[1]+delta[1]*edge];
    const next=via[0] ?? end;
    const distance=Math.hypot(next[0]-from[0],next[1]-from[1]);
    const start=[from[0]+(next[0]-from[0])*radius/distance,from[1]+(next[1]-from[1])*radius/distance];
    const d=[start,...via,end].map((p,n)=>`${n?'L':'M'}${p.map(round).join(' ')}`).join(' ');
    return `<g><title>${escape(label)}</title><rect class="guide-callout-target" x="${x}" y="${y}" width="${bw}" height="${bh}" rx="4"/><path class="guide-callout-arrow" d="${d}" marker-end="url(#${id})"/><circle class="guide-callout-badge" cx="${from[0]}" cy="${from[1]}" r="${radius}"/><text class="guide-callout-number" x="${from[0]}" y="${from[1]}" font-size="${w>700?27:19}">${i+1}</text></g>`;
  }).join('');
  const alt=image.match(/alt="([^"]*)"/)[1];
  const frame=`<span class="guide-shot-stage" style="aspect-ratio:${w}/${h+top};--shot-width:${w}px;--shot-top:${top/(h+top)*100}%">${image}<svg class="guide-shot-overlay" viewBox="0 0 ${w} ${h+top}" aria-hidden="true"><defs><marker id="${id}" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 ${top})">${groups}</g></svg></span>`;
  const legend=spec.legend===false?'':`<ol class="guide-shot-legend">${spec.points.map((p,i)=>`<li><b aria-hidden="true">${i+1}</b><span>${escape(p.label)}</span></li>`).join('')}</ol>`;
  return `<button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：${alt}">${frame}<span class="guide-shot-open-label">放大查看标注 ↗</span></button>${legend}`;
}

let total=0;
const guideFiles = ['yuyanjia-tavern.md','yuyanjia-tavern-preset.md','yuyanjia-tavern-memory.md'];
const selectedFiles = process.argv.slice(2);
if (selectedFiles.some(file => !guideFiles.includes(file))) throw new Error('Unknown tavern guide');
for (const file of selectedFiles.length ? selectedFiles : guideFiles) {
  const target=path.resolve('src/content/guides',file);
  let text=await fs.readFile(target,'utf8');
  text=text.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/g,figure=>{
    const image=figure.match(/<img\b[^>]*\/>/)?.[0];
    if (!image) return figure;
    const name=image.match(/\/yuyanjia-tavern\/([^/]+)\.webp/)?.[1];
    if (!annotations[name]) return figure;
    total++;
    const cleanImage=image.replace(/ style="[^"]*"/g,'');
    const caption=figure.match(/<figcaption>[\s\S]*?<\/figcaption>/)[0];
    return `${figure.match(/<figure\b[^>]*>/)[0]}${render(cleanImage,name,`shot-arrow-${file.replace('.md','')}-${total}`)}${caption}</figure>`;
  });
  await fs.writeFile(target,text,'utf8');
}
console.log(`Annotated ${total} figures; original screenshot files unchanged.`);
