/* ═══════════════════════════════════════════════════════
   sheet.js — Bottom sheet mobile (padrões, cores, logo, ações)
              + Inicialização geral
   ═══════════════════════════════════════════════════════ */

/* ─── BOTTOM SHEET ─── */
const SHEET_TITLES={padroes:'🎨 Padrões',cores:'🖌️ Cores',logo:'🏷️ Logo',acoes:'⚡ Ações'};

function openSheet(name){
  if(activeSheet===name){closeSheet();return}
  activeSheet=name;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const nb=document.getElementById('nb-'+name);if(nb)nb.classList.add('active');
  document.getElementById('sh-title').textContent=SHEET_TITLES[name]||name;
  buildSheetContent(name);
  document.getElementById('bottom-sheet').classList.add('open');
  document.getElementById('overlay').classList.add('vis');
}
function closeSheet(){
  activeSheet=null;
  document.getElementById('bottom-sheet').classList.remove('open');
  document.getElementById('overlay').classList.remove('vis');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
}

function buildSheetContent(name){
  const body=document.getElementById('sh-body');body.innerHTML='';

  if(name==='padroes'){
    const cats=[{key:'todos',label:'Todos'},{key:'cruz',label:'Cruz'},{key:'listras',label:'Listras'},{key:'diagonal',label:'Diagonal'},{key:'geo',label:'Geométrico'},{key:'especial',label:'Especial'},{key:'selecoes',label:'⚽ Seleções'}];
    const cDiv=document.createElement('div');cDiv.className='mob-cats';
    cats.forEach(ct=>{
      const btn=document.createElement('button');btn.className='mob-cat'+(curCat===ct.key?' active':'');btn.textContent=ct.label;
      btn.addEventListener('click',()=>{
        curCat=ct.key;cDiv.querySelectorAll('.mob-cat').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
        buildMobGallery(gDiv);
        document.querySelectorAll('#tabs .tab').forEach(t=>t.classList.toggle('active',t.dataset.cat===curCat));
        buildGallery();
      });
      cDiv.appendChild(btn);
    });
    body.appendChild(cDiv);
    const gDiv=document.createElement('div');gDiv.className='mob-gallery';body.appendChild(gDiv);
    buildMobGallery(gDiv);
  }

  else if(name==='cores'){
    const wrap=document.createElement('div');wrap.className='mob-colors';body.appendChild(wrap);
    [['bg','Fundo'],['c1','Cor 1'],['c2','Cor 2'],['c3','Cor 3']].forEach(([key,label])=>{
      const row=document.createElement('div');row.className='mob-c-row';
      const lbl=document.createElement('div');lbl.className='mob-c-label';lbl.textContent=label;
      const sw=document.createElement('div');sw.className='mob-swatch';
      const si=document.createElement('div');si.className='mob-swatch-inner';si.id='msi-'+key;si.style.background=C[key];
      const inp=document.createElement('input');inp.type='color';inp.id='mc-'+key;inp.value=C[key];
      inp.addEventListener('input',()=>{C[key]=inp.value;si.style.background=inp.value;const ds=document.getElementById('si-'+key);if(ds)ds.style.background=inp.value;const di=document.getElementById(key==='bg'?'cb':key);if(di)di.value=inp.value;buildGallery();renderKite()});
      sw.appendChild(si);sw.appendChild(inp);
      const dots=document.createElement('div');dots.className='mob-dots';dots.id='md-'+key;
      row.appendChild(lbl);row.appendChild(sw);row.appendChild(dots);wrap.appendChild(row);
      buildPresets('md-'+key,key,'mob-dot');
    });
  }

  else if(name==='logo'){
    const uz=document.createElement('div');uz.className='mob-upload';
    const inp=document.createElement('input');inp.type='file';inp.id='mob-logo-inp';inp.accept='image/*';
    inp.addEventListener('change',e=>handleLogoFile(e.target.files[0]));
    const thumb=document.createElement('img');thumb.id='mob-logo-thumb';thumb.style.display='none';
    if(logoImg&&document.getElementById('logo-thumb').src){thumb.src=document.getElementById('logo-thumb').src;thumb.style.display='block'}
    const ph=document.createElement('div');ph.id='mob-uph';if(logoImg)ph.style.display='none';
    ph.innerHTML='<div class="uico">📁</div><p>Toque para adicionar<br>logo ao centro da pipa</p>';
    uz.appendChild(inp);uz.appendChild(thumb);uz.appendChild(ph);body.appendChild(uz);

    const ctrls=document.createElement('div');ctrls.id='mob-logo-ctrls';ctrls.style.display=logoImg?'block':'none';
    const lszVal=Math.round(logoSz*100),lopVal=Math.round(logoOp*100);
    ctrls.innerHTML=`<div class="mob-sl-row"><label>Tamanho <span id="mlsv">${lszVal}%</span></label><input type="range" id="mlsz" min="8" max="65" value="${lszVal}"></div><div class="mob-sl-row"><label>Opacidade <span id="mlov">${lopVal}%</span></label><input type="range" id="mlop" min="10" max="100" value="${lopVal}"></div>`;
    const rm=document.createElement('button');rm.className='btn btn-ghost';rm.style.cssText='margin-top:10px;font-size:0.8rem;padding:10px';rm.textContent='✕ Remover imagem';rm.addEventListener('click',removeLogo);
    ctrls.appendChild(rm);body.appendChild(ctrls);
    setTimeout(()=>{
      const mlsz=document.getElementById('mlsz');if(mlsz)mlsz.addEventListener('input',e=>{logoSz=e.target.value/100;document.getElementById('mlsv').textContent=e.target.value+'%';document.getElementById('lsv').textContent=e.target.value+'%';document.getElementById('lsz').value=e.target.value;renderKite()});
      const mlop=document.getElementById('mlop');if(mlop)mlop.addEventListener('input',e=>{logoOp=e.target.value/100;document.getElementById('mlov').textContent=e.target.value+'%';document.getElementById('lov').textContent=e.target.value+'%';document.getElementById('lop').value=e.target.value;renderKite()});
    },0);
  }

  else if(name==='acoes'){
    const wrap=document.createElement('div');wrap.className='mob-actions';
    const rBtn=document.createElement('button');rBtn.className='btn btn-rand';rBtn.textContent='🎲 Design Aleatório';rBtn.addEventListener('click',doRandom);
    const dBtn=document.createElement('button');dBtn.className='btn btn-gold';dBtn.textContent='⬇ Baixar PNG';dBtn.addEventListener('click',doDownload);
    const cBtn=document.createElement('button');cBtn.className='btn btn-ghost';cBtn.textContent='✕ Fechar';cBtn.addEventListener('click',closeSheet);
    wrap.appendChild(rBtn);wrap.appendChild(dBtn);wrap.appendChild(cBtn);body.appendChild(wrap);
  }
}

function buildMobGallery(container){
  container.innerHTML='';
  const list=curCat==='todos'?PATTERNS:PATTERNS.filter(p=>p.cat===curCat);
  list.forEach(p=>makeCard(p,container,closeSheet));
  document.getElementById('count-pill').textContent=PATTERNS.length+' padrões';
}

/* ─── INIT ─── */
buildPresets('pb','bg');buildPresets('p1','c1');buildPresets('p2','c2');buildPresets('p3','c3');
buildGallery();renderKite();
