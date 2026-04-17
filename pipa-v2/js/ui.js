/* ═══════════════════════════════════════════════════════
   ui.js — Render, galeria desktop, presets, cores,
           logo, aleatório e download
   ═══════════════════════════════════════════════════════ */

/* ─── RENDER ─── */
function renderKite(){
  const canvas=document.getElementById('kite-canvas');
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);
  const pat=PATTERNS.find(p=>p.id===curId);if(!pat)return;
  withClip(ctx,W,H,()=>pat.fn(ctx,W,H,C));
  drawFrame(ctx,W,H);
  if(logoImg){
    const k=kiteCoords(W,H);const cy=(k.vergH+k.midBot)/2,cx=W/2;
    const maxW=W*logoSz,maxH=(k.midBot-k.vergH)*logoSz*.85;
    const ratio=logoImg.width/logoImg.height;
    let lw=maxW,lh=maxW/ratio;if(lh>maxH){lh=maxH;lw=maxH*ratio}
    ctx.save();ctx.globalAlpha=logoOp;ctx.drawImage(logoImg,cx-lw/2,cy-lh/2,lw,lh);ctx.restore();
  }
  document.getElementById('pname').textContent=pat.name;
}

/* ─── GALLERY ─── */
function makeCard(p,container,onClickExtra){
  const card=document.createElement('div');card.className='pat-card'+(p.id===curId?' active':'');card.dataset.id=p.id;
  const cv=document.createElement('canvas');cv.width=62;cv.height=70;
  const ctx=cv.getContext('2d');withClip(ctx,62,70,()=>p.fn(ctx,62,70,C));
  ctx.save();bodyPath(ctx,62,70);ctx.strokeStyle='#00000066';ctx.lineWidth=1.5;ctx.stroke();ctx.restore();
  const badge=document.createElement('div');badge.className='chk';badge.textContent='✓';
  const label=document.createElement('span');label.textContent=p.name;
  card.appendChild(badge);card.appendChild(cv);card.appendChild(label);
  card.addEventListener('click',()=>{
    curId=p.id;
    document.querySelectorAll('.pat-card').forEach(c=>c.classList.remove('active'));
    document.querySelectorAll('[data-id="'+p.id+'"]').forEach(c=>c.classList.add('active'));
    renderKite();
    if(onClickExtra)onClickExtra();
  });
  container.appendChild(card);
}
function buildGallery(){
  const container=document.getElementById('pat-gallery');if(!container)return;
  container.innerHTML='';
  const list=curCat==='todos'?PATTERNS:PATTERNS.filter(p=>p.cat===curCat);
  list.forEach(p=>makeCard(p,container));
  document.getElementById('count-pill').textContent=PATTERNS.length+' padrões';
}

/* ─── PRESETS ─── */
function buildPresets(cid,key,dotClass){
  const el=document.getElementById(cid);if(!el)return;el.innerHTML='';
  CLRS.forEach(hex=>{
    const d=document.createElement('div');d.className=dotClass||'dot';d.style.background=hex;
    if(hex==='#fff')d.style.boxShadow='0 0 0 1px #ffffff40';
    d.addEventListener('click',()=>{
      C[key]=hex;
      ['si-','msi-'].forEach(pre=>{const e=document.getElementById(pre+key);if(e)e.style.background=hex});
      const di=document.getElementById(key==='bg'?'cb':key);if(di)di.value=hex;
      const mc=document.getElementById('mc-'+key);if(mc)mc.value=hex;
      buildGallery();renderKite();
    });
    el.appendChild(d);
  });
}

/* ─── COLOR SYNC ─── */
function syncColor(key,hex){
  C[key]=hex;
  ['si-','msi-'].forEach(pre=>{const e=document.getElementById(pre+key);if(e)e.style.background=hex});
  buildGallery();renderKite();
}
[['cb','bg'],['c1','c1'],['c2','c2'],['c3','c3']].forEach(([id,key])=>{
  const el=document.getElementById(id);if(el)el.addEventListener('input',()=>syncColor(key,el.value));
});

/* ─── DESKTOP TABS ─── */
document.querySelectorAll('#tabs .tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('#tabs .tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');curCat=tab.dataset.cat;buildGallery();
  });
});

/* ─── LOGO ─── */
function handleLogoFile(file){
  if(!file)return;
  const reader=new FileReader();
  reader.onload=ev=>{const img=new Image();img.onload=()=>{
    logoImg=img;
    ['logo-thumb','mob-logo-thumb'].forEach(id=>{const e=document.getElementById(id);if(e){e.src=ev.target.result;e.style.display='block'}});
    ['uph','mob-uph'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='none'});
    ['logo-ctrls','mob-logo-ctrls'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='block'});
    renderKite();
  };img.src=ev.target.result};
  reader.readAsDataURL(file);
}
function removeLogo(){
  logoImg=null;
  ['logo-thumb','mob-logo-thumb'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='none'});
  ['uph','mob-uph'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='block'});
  ['logo-ctrls','mob-logo-ctrls'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='none'});
  ['logo-inp','mob-logo-inp'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=''});
  renderKite();
}
document.getElementById('logo-inp').addEventListener('change',e=>handleLogoFile(e.target.files[0]));
document.getElementById('rm-logo').addEventListener('click',removeLogo);
document.getElementById('lsz').addEventListener('input',e=>{logoSz=e.target.value/100;document.getElementById('lsv').textContent=e.target.value+'%';renderKite()});
document.getElementById('lop').addEventListener('input',e=>{logoOp=e.target.value/100;document.getElementById('lov').textContent=e.target.value+'%';renderKite()});

/* ─── ALEATÓRIO ─── */
function doRandom(){
  const pal=PALETTES[Math.floor(Math.random()*PALETTES.length)];Object.assign(C,pal);
  [['cb','bg'],['c1','c1'],['c2','c2'],['c3','c3']].forEach(([id,key])=>{
    if(!C[key])return;
    const e=document.getElementById(id);if(e)e.value=C[key];
    const mc=document.getElementById('mc-'+key);if(mc)mc.value=C[key];
    ['si-','msi-'].forEach(pre=>{const el=document.getElementById(pre+key);if(el)el.style.background=C[key]});
  });
  const geo=PATTERNS.filter(p=>p.cat!=='selecoes');
  curId=geo[Math.floor(Math.random()*geo.length)].id;
  buildGallery();renderKite();
}
document.getElementById('btn-rand').addEventListener('click',doRandom);
document.getElementById('btn-apply').addEventListener('click',()=>{buildGallery();renderKite()});

/* ─── DOWNLOAD ─── */
function doDownload(){
  const canvas=document.getElementById('kite-canvas');
  const link=document.createElement('a');link.download='pipa-'+curId+'.png';link.href=canvas.toDataURL('image/png');link.click();
}
document.getElementById('btn-dl').addEventListener('click',doDownload);
document.getElementById('fab-dl').addEventListener('click',doDownload);
