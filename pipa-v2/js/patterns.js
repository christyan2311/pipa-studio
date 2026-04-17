/* ═══════════════════════════════════════════════════════
   patterns.js — Biblioteca de designs (132 padrões)

   ╔══ COMO ADICIONAR UM NOVO PADRÃO ═══════════════════╗
   ║ Insira um novo objeto dentro do array PATTERNS:     ║
   ║                                                     ║
   ║   {                                                 ║
   ║     id:   'meu_id',        // único, sem espaços    ║
   ║     name: 'Meu Nome',      // aparece na galeria    ║
   ║     cat:  'categoria',     // veja lista abaixo     ║
   ║     fn: (ctx, w, h, c) => {                        ║
   ║       // ctx = CanvasRenderingContext2D              ║
   ║       // w, h = largura e altura do canvas          ║
   ║       // c = { bg, c1, c2, c3 } (cores escolhidas) ║
   ║       fill(ctx, w, h, c.bg); // fundo               ║
   ║       ctx.fillStyle = c.c1;  // cor 1               ║
   ║       // ... seu desenho aqui                       ║
   ║     }                                               ║
   ║   },                                                ║
   ║                                                     ║
   ║ Categorias disponíveis:                             ║
   ║   cruz | listras | diagonal | geo | especial        ║
   ║   selecoes                                          ║
   ╚═════════════════════════════════════════════════════╝
   ═══════════════════════════════════════════════════════ */

/* ─── PATTERNS ─── */
const PATTERNS=[
  {id:'cruz_dupla',name:'Cruz Dupla',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.11;ctx.fillStyle=c.c1;ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h*.38-t/2,w,t);ctx.fillStyle=c.c2;ctx.fillRect(w*.28-t*.35,0,t*.7,h);ctx.fillRect(w*.72-t*.35,0,t*.7,h);ctx.fillRect(0,h*.58-t*.35,w,t*.7)}},
  {id:'grade3x3',name:'Grade 3×3',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.09;ctx.fillStyle=c.c1;[.33,.67].forEach(x=>ctx.fillRect(w*x-t/2,0,t,h));[.3,.56].forEach(y=>ctx.fillRect(0,h*y-t/2,w,t))}},
  {id:'grade2x2',name:'Grade 2×2',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.1;ctx.fillStyle=c.c1;ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h*.42-t/2,w,t);ctx.fillStyle=c.c2;ctx.fillRect(w/2-t*.25,0,t*.5,h);ctx.fillRect(0,h*.42-t*.25,w,t*.5)}},
  {id:'hash',name:'Hash #',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.08;ctx.fillStyle=c.c1;[.28,.72].forEach(x=>ctx.fillRect(w*x,0,t,h));ctx.fillStyle=c.c2;[.3,.54].forEach(y=>ctx.fillRect(0,h*y,w,t))}},
  {id:'catavento',name:'Catavento',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(w/2,h*.5);ctx.lineTo(w,0);ctx.lineTo(w,h*.5);ctx.fill();ctx.beginPath();ctx.moveTo(w/2,h*.5);ctx.lineTo(0,h);ctx.lineTo(0,h*.5);ctx.fill();ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w/2,h*.5);ctx.lineTo(0,0);ctx.lineTo(w/2,0);ctx.fill();ctx.beginPath();ctx.moveTo(w/2,h*.5);ctx.lineTo(w,h);ctx.lineTo(w/2,h);ctx.fill()}},
  {id:'cruz_x',name:'Cruz X',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.12;ctx.save();ctx.translate(w/2,h*.5);ctx.rotate(Math.PI/4);ctx.fillStyle=c.c1;ctx.fillRect(-t/2,-h*.8,t,h*1.6);ctx.fillRect(-h*.7,-t/2,h*1.4,t);ctx.restore();ctx.save();ctx.translate(w/2,h*.5);ctx.rotate(-Math.PI/4);ctx.fillStyle=c.c2;ctx.fillRect(-t/2,-h*.8,t,h*1.6);ctx.fillRect(-h*.7,-t/2,h*1.4,t);ctx.restore()}},
  {id:'cruz_off',name:'Cruz Offset',cat:'cruz',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.13;ctx.fillStyle=c.c1;ctx.fillRect(w*.3-t/2,0,t,h);ctx.fillRect(0,h*.35-t/2,w,t);ctx.fillStyle=c.c2;ctx.fillRect(w*.3-t/2,h*.35-t/2,t*2.2,t*2.2)}},
  {id:'l2h',name:'2 Faixas H',cat:'listras',fn:(ctx,w,h,c)=>{ctx.fillStyle=c.c1;ctx.fillRect(0,0,w,h*.45);ctx.fillStyle=c.bg;ctx.fillRect(0,h*.45,w,h*.55)}},
  {id:'l3h',name:'3 Faixas H',cat:'listras',fn:(ctx,w,h,c)=>{[c.c1,c.bg,c.c2].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(0,i*h/3,w,h/3+1)})}},
  {id:'l4h',name:'4 Faixas H',cat:'listras',fn:(ctx,w,h,c)=>{[c.c1,c.bg,c.c2,c.c1].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(0,i*h/4,w,h/4+1)})}},
  {id:'l5h',name:'5 Faixas H',cat:'listras',fn:(ctx,w,h,c)=>{[c.c1,c.c2,c.bg,c.c2,c.c1].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(0,i*h/5,w,h/5+1)})}},
  {id:'l3v',name:'3 Faixas V',cat:'listras',fn:(ctx,w,h,c)=>{[c.bg,c.c1,c.c2].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(i*w/3,0,w/3+1,h)})}},
  {id:'l5v',name:'5 Faixas V',cat:'listras',fn:(ctx,w,h,c)=>{[c.c1,c.bg,c.c2,c.bg,c.c1].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(i*w/5,0,w/5+1,h)})}},
  {id:'lgrossa',name:'Faixa Grossa',cat:'listras',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.fillRect(0,h*.28,w,h*.38);ctx.fillStyle=c.c2;ctx.fillRect(0,h*.3,w,h*.06);ctx.fillRect(0,h*.58,w,h*.06)}},
  {id:'alternada',name:'Alternada',cat:'listras',fn:(ctx,w,h,c)=>{for(let i=0;i<7;i++){ctx.fillStyle=i%2===0?c.bg:c.c1;ctx.fillRect(0,i*h/7,w,h/7+1)}ctx.fillStyle=c.c2;ctx.fillRect(w/2-w*.04,0,w*.08,h)}},
  {id:'diag',name:'Diagonal',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,0);ctx.lineTo(w,h*.5);ctx.lineTo(0,h);ctx.fill()}},
  {id:'diag2',name:'Diag. Dupla',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,0);ctx.lineTo(w,h*.45);ctx.lineTo(0,h*.85);ctx.fill();ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(0,h*.6);ctx.lineTo(w,h*.2);ctx.lineTo(w,h*.55);ctx.lineTo(0,h*.95);ctx.fill()}},
  {id:'diag3',name:'Diag. 3 Cor',cat:'diagonal',fn:(ctx,w,h,c)=>{[c.c1,c.bg,c.c2].forEach((col,i)=>{ctx.fillStyle=col;const y0=i*h/3,y1=(i+1)*h/3;ctx.beginPath();ctx.moveTo(0,y0);ctx.lineTo(w,y0-h*.1);ctx.lineTo(w,y1-h*.1);ctx.lineTo(0,y1);ctx.fill()})}},
  {id:'corteX',name:'Corte X',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,0);ctx.lineTo(0,h);ctx.fill();ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w,0);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill()}},
  {id:'chevron',name:'Chevron',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);for(let r=0;r<5;r++){ctx.fillStyle=r%2===0?c.c1:c.c2;const y=r*h/5;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w/2,y+h/7);ctx.lineTo(w,y);ctx.lineTo(w,y+h/5);ctx.lineTo(w/2,y+h/5+h/7);ctx.lineTo(0,y+h/5);ctx.closePath();ctx.fill()}}},
  {id:'setas',name:'Setas',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);for(let i=0;i<4;i++){ctx.fillStyle=i%2===0?c.c1:c.c2;const y=i*h/4;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.lineTo(w/2,y+h/4*.75);ctx.closePath();ctx.fill()}}},
  {id:'sash',name:'Faixa Cruzada',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const t=w*.22;ctx.save();ctx.translate(w/2,h*.5);ctx.rotate(Math.PI/4);ctx.fillStyle=c.c1;ctx.fillRect(-w,-t/2,w*2,t);ctx.restore();ctx.save();ctx.translate(w/2,h*.5);ctx.rotate(-Math.PI/4);ctx.fillStyle=c.c2;ctx.fillRect(-w,-t/2,w*2,t);ctx.restore()}},
  {id:'serra',name:'Dente Serra',cat:'diagonal',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);for(let i=0;i<=8;i++)ctx.lineTo(i*w/8,(i%2===0)?h*.08:h*.32);ctx.lineTo(w,0);ctx.closePath();ctx.fill();ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(0,h*.55);for(let i=0;i<=8;i++)ctx.lineTo(i*w/8,(i%2===0)?h*.55:h*.75);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill()}},
  {id:'losango',name:'Losango',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);[[c.c1,.32],[c.c2,.2],[c.bg,.1],[c.c3,.04]].forEach(([col,r])=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(w/2,h*.5-h*r);ctx.lineTo(w/2+w*r*1.1,h*.5);ctx.lineTo(w/2,h*.5+h*r);ctx.lineTo(w/2-w*r*1.1,h*.5);ctx.closePath();ctx.fill()})}},
  {id:'losangos_m',name:'Losangos',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);function loz(cx,cy,rx,ry,col){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(cx,cy-ry);ctx.lineTo(cx+rx,cy);ctx.lineTo(cx,cy+ry);ctx.lineTo(cx-rx,cy);ctx.closePath();ctx.fill()}loz(w/2,h*.22,w*.24,h*.16,c.c1);loz(w*.24,h*.55,w*.19,h*.13,c.c2);loz(w*.76,h*.55,w*.19,h*.13,c.c1);loz(w/2,h*.72,w*.17,h*.11,c.c3)}},
  {id:'quad',name:'Quadrantes',cat:'geo',fn:(ctx,w,h,c)=>{[[0,0,w/2,h/2,c.bg],[w/2,0,w/2,h/2,c.c1],[0,h/2,w/2,h/2,c.c2],[w/2,h/2,w/2,h/2,c.c3]].forEach(([x,y,ww,hh,col])=>{ctx.fillStyle=col;ctx.fillRect(x,y,ww,hh)})}},
  {id:'triangulos',name:'Triângulos',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);[[0,0,w/2,0,0,h*.5,c.c1],[w/2,0,w,0,w,h*.5,c.c2],[0,h*.5,w,h*.5,w/2,h,c.c3],[w*.25,0,w*.75,0,w/2,h*.5,c.c2]].forEach(([x1,y1,x2,y2,x3,y3,col])=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);ctx.closePath();ctx.fill()})}},
  {id:'estrela5',name:'Estrela 5P',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);function star(cx,cy,r1,r2,n,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<n*2;i++){const a=i*Math.PI/n-Math.PI/2,r=i%2===0?r1:r2;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}star(w/2,h*.5,w*.33,w*.13,5,c.c1);star(w/2,h*.5,w*.2,w*.08,5,c.c2)}},
  {id:'estrela8',name:'Estrela 8P',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);function s8(cx,cy,r1,r2,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<16;i++){const a=i*Math.PI/8-Math.PI/2,r=i%2===0?r1:r2;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}s8(w/2,h*.5,w*.33,w*.14,c.c1);s8(w/2,h*.5,w*.2,w*.08,c.c2)}},
  {id:'hex',name:'Hexágono',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);function hex(cx,cy,r,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/6;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}hex(w/2,h*.5,w*.36,c.c1);hex(w/2,h*.5,w*.23,c.c2);hex(w/2,h*.5,w*.12,c.c3)}},
  {id:'borda',name:'Borda Dupla',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const b1=w*.11,b2=w*.06;ctx.fillStyle=c.c1;ctx.fillRect(0,0,w,b1);ctx.fillRect(0,0,b1,h);ctx.fillRect(w-b1,0,b1,h);ctx.fillRect(0,h-b1,w,b1);ctx.fillStyle=c.c2;ctx.fillRect(b1,b1,w-2*b1,b2);ctx.fillRect(b1,b1,b2,h-2*b1);ctx.fillRect(w-b1-b2,b1,b2,h-2*b1);ctx.fillRect(b1,h-b1-b2,w-2*b1,b2)}},
  {id:'moldura',name:'Moldura',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.c1);const b=w*.13;ctx.fillStyle=c.bg;ctx.fillRect(b,b*.6,w-2*b,h-b*1.2);ctx.fillStyle=c.c2;ctx.fillRect(b,b*.6,w-2*b,b*.08);ctx.fillRect(b,b*.6,b*.08,h-b*1.2);ctx.fillRect(w-b-b*.08,b*.6,b*.08,h-b*1.2)}},
  {id:'espiral',name:'Espiral',cat:'geo',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);let x=0,y=0,ww=w,hh=h;const cols=[c.c1,c.c2,c.c3,c.bg];for(let i=0;i<10&&ww>12&&hh>12;i++){const bw=Math.min(ww,hh)*.18;ctx.fillStyle=cols[i%4];ctx.fillRect(x,y,ww,bw);ctx.fillRect(x,y+bw,bw,hh-bw);ctx.fillRect(x+ww-bw,y+bw,bw,hh-bw);ctx.fillRect(x+bw,y+hh-bw,ww-2*bw,bw);x+=bw;y+=bw;ww-=2*bw;hh-=2*bw}}},
  {id:'lisa',name:'Lisa',cat:'especial',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg)}},
  {id:'meia',name:'Meia & Meia',cat:'especial',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill()}},
  {id:'tercos',name:'3 Terços',cat:'especial',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w*.5,0);ctx.lineTo(0,h);ctx.fill();ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w,0);ctx.lineTo(w*.5,0);ctx.lineTo(w,h);ctx.fill()}},
  {id:'xadrez',name:'Xadrez',cat:'especial',fn:(ctx,w,h,c)=>{const sq=w*.12;const cols=Math.ceil(w/sq)+1,rows=Math.ceil(h/sq)+1;for(let r=0;r<rows;r++)for(let cl=0;cl<cols;cl++){ctx.fillStyle=(r+cl)%2===0?c.bg:c.c1;ctx.fillRect(cl*sq,r*sq,sq,sq)}}},
  {id:'vitral',name:'Vitral',cat:'especial',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);[[0,0,w*.45,0,w*.3,h*.4,c.c1],[w*.55,0,w,0,w*.7,h*.4,c.c2],[w*.45,0,w*.55,0,w/2,h*.45,c.c3],[w*.3,h*.4,w*.7,h*.4,w/2,h*.75,c.c1],[0,h*.4,w*.3,h*.4,w/2,h*.75,c.c2],[w*.7,h*.4,w,h*.4,w/2,h*.75,c.c3]].forEach(([x1,y1,x2,y2,x3,y3,col])=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);ctx.closePath();ctx.fill();ctx.strokeStyle=c.bg;ctx.lineWidth=2.5;ctx.stroke()})}},
  {id:'raios',name:'Raios Sol',cat:'especial',fn:(ctx,w,h,c)=>{fill(ctx,w,h,c.bg);const cx=w/2,cy=h*.45,n=16;for(let i=0;i<n;i++){ctx.fillStyle=i%2===0?c.c1:c.c2;ctx.beginPath();ctx.moveTo(cx,cy);const a1=i/n*Math.PI*2-Math.PI/2,a2=(i+1)/n*Math.PI*2-Math.PI/2;ctx.arc(cx,cy,Math.max(w,h),a1,a2);ctx.closePath();ctx.fill()}}},
  {id:'mosaico',name:'Mosaico',cat:'especial',fn:(ctx,w,h,c)=>{[[0,0,w/2,h*.45,c.c1],[w/2,0,w/2,h*.45,c.bg],[0,h*.45,w/3,h*.45,c.c2],[w/3,h*.45,w/3,h*.45,c.c3],[2*w/3,h*.45,w/3,h*.45,c.c1]].forEach(([x,y,ww,hh,col])=>{ctx.fillStyle=col;ctx.fillRect(x,y,ww,hh)});ctx.strokeStyle='#00000044';ctx.lineWidth=2.5;ctx.strokeRect(0,0,w/2,h*.45);ctx.strokeRect(w/2,0,w/2,h*.45)}},

  // ── NOVOS: CRUZ ──
  {id:'cruz_tripla',name:'Cruz Tripla',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.08;
    ctx.fillStyle=c.c1;
    [w*.2,w*.5,w*.8].forEach(x=>ctx.fillRect(x-t/2,0,t,h));
    [h*.28,h*.5,h*.68].forEach(y=>ctx.fillRect(0,y-t/2,w,t));
    ctx.fillStyle=c.c2;
    [w*.35,w*.65].forEach(x=>ctx.fillRect(x-t*.4,0,t*.8,h));
  }},
  {id:'pinha',name:'Pinha',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.1;
    // Cruz grande com losango no centro
    ctx.fillStyle=c.c1;ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h*.4-t/2,w,t);
    ctx.fillStyle=c.c2;
    ctx.beginPath();ctx.moveTo(w/2,h*.25);ctx.lineTo(w*.65,h*.4);ctx.lineTo(w/2,h*.55);ctx.lineTo(w*.35,h*.4);ctx.closePath();ctx.fill();
  }},
  {id:'janela',name:'Janela',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.c1);const t=w*.12,m=w*.06;
    ctx.fillStyle=c.bg;ctx.fillRect(m,m*.5,w/2-t-m,h*.4-m);
    ctx.fillRect(w/2+t/2,m*.5,w/2-t/2-m,h*.4-m);
    ctx.fillRect(m,h*.4+t/2,w-2*m,h*.5-m);
    ctx.fillStyle=c.c2;ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h*.4-t/2,w,t);
  }},
  {id:'grade_fino',name:'Grade Fina',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.05;ctx.fillStyle=c.c1;
    [.2,.4,.6,.8].forEach(x=>ctx.fillRect(w*x-t/2,0,t,h));
    [.2,.4,.6].forEach(y=>ctx.fillRect(0,h*y-t/2,w,t));
    ctx.fillStyle=c.c2;ctx.fillRect(w*.4-t/2,0,t*2,h);ctx.fillRect(0,h*.4-t/2,w,t*2);
  }},
  {id:'tabuleiro',name:'Tabuleiro',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.1;ctx.fillStyle=c.c1;
    [.25,.5,.75].forEach(x=>ctx.fillRect(w*x-t/2,0,t,h));
    [.25,.5,.75].forEach(y=>ctx.fillRect(0,h*y-t/2,w,t));
    // preenche quadrantes alternados
    ctx.fillStyle=c.c2+'66';
    [[0,0],[.5,0],[0,.5],[.5,.5]].forEach(([x,y])=>{ctx.fillRect(w*x,h*y,w*.25,h*.25);ctx.fillRect(w*(x+.25),h*(y+.25),w*.25,h*.25)});
  }},

  // ── NOVOS: LISTRAS ──
  {id:'l6h',name:'6 Faixas H',cat:'listras',fn:(ctx,w,h,c)=>{
    [c.c1,c.c2,c.bg,c.c1,c.c2,c.bg].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(0,i*h/6,w,h/6+1)});
  }},
  {id:'l4v',name:'4 Faixas V',cat:'listras',fn:(ctx,w,h,c)=>{
    [c.c1,c.bg,c.c2,c.c1].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(i*w/4,0,w/4+1,h)});
  }},
  {id:'faixa_lateral',name:'Lateral',cat:'listras',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w*.22,h);ctx.fillRect(w*.78,0,w*.22,h);
    ctx.fillStyle=c.c2;ctx.fillRect(w*.22,0,w*.06,h);ctx.fillRect(w*.72,0,w*.06,h);
  }},
  {id:'duplo_centro',name:'Duplo Centro',cat:'listras',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;ctx.fillRect(w*.3,0,w*.4,h);
    ctx.fillStyle=c.c2;ctx.fillRect(w*.38,0,w*.24,h);
    ctx.fillStyle=c.c1;ctx.fillRect(w*.44,0,w*.12,h);
  }},
  {id:'faixas_assym',name:'Assimétr.',cat:'listras',fn:(ctx,w,h,c)=>{
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w,h*.18);
    ctx.fillStyle=c.bg;ctx.fillRect(0,h*.18,w,h*.5);
    ctx.fillStyle=c.c2;ctx.fillRect(0,h*.68,w,h*.32);
  }},
  {id:'listras_finas',name:'Listras Finas',cat:'listras',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const n=12;
    for(let i=0;i<n;i++){if(i%3!==2){ctx.fillStyle=i%3===0?c.c1:c.c2;ctx.fillRect(0,i*h/n,w,h/n+1)}}
  }},
  {id:'painel',name:'Painel 3D',cat:'listras',fn:(ctx,w,h,c)=>{
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w,h*.5);
    ctx.fillStyle=c.c2;ctx.fillRect(0,h*.5,w,h*.5);
    ctx.fillStyle=c.bg;ctx.fillRect(w*.08,h*.08,w*.84,h*.35);ctx.fillRect(w*.08,h*.57,w*.84,h*.35);
    ctx.fillStyle=c.c1+'aa';ctx.fillRect(w*.08,h*.08,w*.84,h*.02);
    ctx.fillStyle=c.c2+'aa';ctx.fillRect(w*.08,h*.57,w*.84,h*.02);
  }},

  // ── NOVOS: DIAGONAL ──
  {id:'diag_quatro',name:'Diag. 4 Cor',cat:'diagonal',fn:(ctx,w,h,c)=>{
    [c.c1,c.bg,c.c2,c.c3].forEach((col,i)=>{
      ctx.fillStyle=col;const y0=i*h/4,y1=(i+1)*h/4;
      ctx.beginPath();ctx.moveTo(0,y0);ctx.lineTo(w,y0-h*.08);ctx.lineTo(w,y1-h*.08);ctx.lineTo(0,y1);ctx.fill();
    });
  }},
  {id:'diag_inversa',name:'Diag. Inv.',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;
    ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w*.5,0);ctx.lineTo(w,h*.5);ctx.lineTo(w,h);ctx.lineTo(w*.5,h);ctx.lineTo(0,h*.5);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w*.5,0);ctx.lineTo(w,0);ctx.lineTo(w*.5,h*.5);ctx.closePath();ctx.fill();
    ctx.beginPath();ctx.moveTo(0,h*.5);ctx.lineTo(w*.5,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill();
  }},
  {id:'diag_larga',name:'Faixa Diag.',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=h*.28;
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,h*.3-t);ctx.lineTo(w,h*.3-t-h*.3);ctx.lineTo(w,h*.3+t-h*.3);ctx.lineTo(0,h*.3+t);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(0,h*.7-t*.4);ctx.lineTo(w,h*.7-t*.4-h*.3);ctx.lineTo(w,h*.7+t*.4-h*.3);ctx.lineTo(0,h*.7+t*.4);ctx.fill();
  }},
  {id:'zigue',name:'Ziguezague',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const rows=6;
    for(let r=0;r<rows;r++){
      ctx.fillStyle=r%2===0?c.c1:c.c2;
      const y=r*h/rows,yn=(r+1)*h/rows;
      ctx.beginPath();ctx.moveTo(0,y);
      for(let i=0;i<=10;i++)ctx.lineTo(i*w/10,i%2===0?y:yn);
      ctx.lineTo(w,yn);ctx.lineTo(0,yn);ctx.closePath();ctx.fill();
    }
  }},
  {id:'w_shape',name:'Forma W',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;
    ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w/4,h*.5);ctx.lineTo(w/2,0);ctx.lineTo(w*3/4,h*.5);ctx.lineTo(w,0);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w/4,h*.5);ctx.lineTo(w/2,0);ctx.lineTo(w*3/4,h*.5);ctx.lineTo(w,0);ctx.lineTo(w,h*.2);ctx.lineTo(w*3/4,h*.7);ctx.lineTo(w/2,h*.2);ctx.lineTo(w/4,h*.7);ctx.lineTo(0,h*.2);ctx.closePath();ctx.fill();
  }},
  {id:'escada',name:'Escada',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;
    const steps=5;for(let i=0;i<steps;i++){const x=i*w/steps,y=i*h/steps;ctx.fillRect(x,y,w/steps,h/steps)}
    ctx.fillStyle=c.c2;
    for(let i=0;i<steps;i++){const x=(steps-1-i)*w/steps,y=i*h/steps;ctx.fillRect(x,y,w/steps,h/steps)}
  }},

  // ── NOVOS: GEOMÉTRICO ──
  {id:'circulo',name:'Círculo',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.arc(w/2,h*.48,w*.35,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(w/2,h*.48,w*.22,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.arc(w/2,h*.48,w*.1,0,Math.PI*2);ctx.fill();
  }},
  {id:'alvo',name:'Alvo',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.c1);
    [.38,.28,.18,.1].forEach((r,i)=>{ctx.fillStyle=i%2===0?c.bg:c.c2;ctx.beginPath();ctx.arc(w/2,h*.48,w*r,0,Math.PI*2);ctx.fill()});
  }},
  {id:'meia_lua',name:'Meia Lua',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.arc(w/2,h*.48,w*.4,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.arc(w*.68,h*.38,w*.3,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(w/2,h*.48,w*.08,0,Math.PI*2);ctx.fill();
  }},
  {id:'arco_iris',name:'Arco-íris',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    [[c.c1,.45],[c.c2,.35],[c.c3,.25],[c.bg,.15]].forEach(([col,r])=>{
      ctx.fillStyle=col;ctx.beginPath();ctx.arc(w/2,h*.85,w*r,Math.PI,0);ctx.closePath();ctx.fill();
    });
  }},
  {id:'estrela6',name:'Estrela 6P',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    function star6(cx,cy,r1,r2,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<12;i++){const a=i*Math.PI/6-Math.PI/2,r=i%2===0?r1:r2;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}
    star6(w/2,h*.48,w*.34,w*.18,c.c1);star6(w/2,h*.48,w*.22,w*.11,c.c2);star6(w/2,h*.48,w*.1,w*.05,c.c3);
  }},
  {id:'estrela4',name:'Estrela 4P',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    function star4(cx,cy,r1,r2,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/4,r=i%2===0?r1:r2;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}
    star4(w/2,h*.48,w*.38,w*.16,c.c1);star4(w/2,h*.48,w*.25,w*.1,c.c2);
  }},
  {id:'pentagono',name:'Pentágono',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    function penta(cx,cy,r,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<5;i++){const a=i*2*Math.PI/5-Math.PI/2;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}
    penta(w/2,h*.46,w*.36,c.c1);penta(w/2,h*.46,w*.24,c.c2);penta(w/2,h*.46,w*.13,c.c3);
  }},
  {id:'flecha',name:'Flecha',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;
    ctx.beginPath();ctx.moveTo(w*.5,h*.08);ctx.lineTo(w*.9,h*.45);ctx.lineTo(w*.65,h*.45);ctx.lineTo(w*.65,h*.88);ctx.lineTo(w*.35,h*.88);ctx.lineTo(w*.35,h*.45);ctx.lineTo(w*.1,h*.45);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w*.5,h*.18);ctx.lineTo(w*.78,h*.45);ctx.lineTo(w*.62,h*.45);ctx.lineTo(w*.62,h*.78);ctx.lineTo(w*.38,h*.78);ctx.lineTo(w*.38,h*.45);ctx.lineTo(w*.22,h*.45);ctx.closePath();ctx.fill();
  }},
  {id:'diamante',name:'Diamante',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    // topo (triangle) c1
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(w*.25,h*.35);ctx.lineTo(w*.75,h*.35);ctx.lineTo(w*.5,h*.08);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w*.1,h*.35);ctx.lineTo(w*.9,h*.35);ctx.lineTo(w*.5,h*.85);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c3;ctx.beginPath();ctx.moveTo(w*.1,h*.35);ctx.lineTo(w*.25,h*.35);ctx.lineTo(w*.5,h*.6);ctx.lineTo(w*.2,h*.55);ctx.closePath();ctx.fill();
    ctx.beginPath();ctx.moveTo(w*.9,h*.35);ctx.lineTo(w*.75,h*.35);ctx.lineTo(w*.5,h*.6);ctx.lineTo(w*.8,h*.55);ctx.closePath();ctx.fill();
  }},
  {id:'octogono',name:'Octógono',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    function octo(cx,cy,r,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4+Math.PI/8;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}
    octo(w/2,h*.48,w*.38,c.c1);octo(w/2,h*.48,w*.26,c.c2);octo(w/2,h*.48,w*.14,c.c3);
  }},
  {id:'triangulo_inv',name:'Tri. Invertido',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(w/2,h*.85);ctx.lineTo(w*.05,h*.12);ctx.lineTo(w*.95,h*.12);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w/2,h*.7);ctx.lineTo(w*.18,h*.2);ctx.lineTo(w*.82,h*.2);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.moveTo(w/2,h*.55);ctx.lineTo(w*.32,h*.28);ctx.lineTo(w*.68,h*.28);ctx.closePath();ctx.fill();
  }},

  // ── NOVOS: ESPECIAL ──
  {id:'bandeira_h',name:'Bandeira H',cat:'especial',fn:(ctx,w,h,c)=>{
    // tipo bandeira com faixas horizontais e símbolo central
    [c.c1,c.bg,c.c2].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(0,i*h/3,w,h/3+1)});
    ctx.fillStyle=c.c3;ctx.beginPath();ctx.arc(w/2,h*.5,w*.12,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.arc(w/2,h*.5,w*.07,0,Math.PI*2);ctx.fill();
  }},
  {id:'xadrez_grande',name:'Xadrez Grande',cat:'especial',fn:(ctx,w,h,c)=>{
    const sq=w*.25;const cols=Math.ceil(w/sq)+1,rows=Math.ceil(h/sq)+1;
    for(let r=0;r<rows;r++)for(let cl=0;cl<cols;cl++){ctx.fillStyle=(r+cl)%2===0?c.bg:c.c1;ctx.fillRect(cl*sq,r*sq,sq,sq)}
  }},
  {id:'xadrez_trio',name:'Xadrez Trio',cat:'especial',fn:(ctx,w,h,c)=>{
    const sq=w*.17;const cols=Math.ceil(w/sq)+1,rows=Math.ceil(h/sq)+1;const palette=[c.bg,c.c1,c.c2];
    for(let r=0;r<rows;r++)for(let cl=0;cl<cols;cl++){ctx.fillStyle=palette[(r+cl)%3];ctx.fillRect(cl*sq,r*sq,sq,sq)}
  }},
  {id:'pop_art',name:'Pop Art',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const sz=w*.14;const cols=Math.ceil(w/sz)+1,rows=Math.ceil(h/sz)+1;
    for(let r=0;r<rows;r++)for(let cl=0;cl<cols;cl++){
      ctx.fillStyle=(r+cl)%2===0?c.c1:c.c2;
      ctx.beginPath();ctx.arc(cl*sz+sz/2,r*sz+sz/2,sz*.38,0,Math.PI*2);ctx.fill();
    }
  }},
  {id:'confete',name:'Confete',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const palette=[c.c1,c.c2,c.c3];
    // seed determinístico para reprodução consistente
    let s=42;function rand(){s=(s*9301+49297)%233280;return s/233280}
    for(let i=0;i<40;i++){
      const x=rand()*w,y=rand()*h,sz=w*(.04+rand()*.06),ang=rand()*Math.PI;
      ctx.save();ctx.translate(x,y);ctx.rotate(ang);ctx.fillStyle=palette[i%3];
      ctx.fillRect(-sz/2,-sz*.25,sz,sz*.5);ctx.restore();
    }
  }},
  {id:'ondas',name:'Ondas',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const n=5;
    for(let b=0;b<n;b++){
      ctx.fillStyle=b%2===0?c.c1:c.c2;
      ctx.beginPath();ctx.moveTo(0,b*h/n);
      for(let x=0;x<=w;x+=8)ctx.lineTo(x,b*h/n+Math.sin(x/w*Math.PI*2.5)*h*.06);
      ctx.lineTo(w,(b+1)*h/n);ctx.lineTo(0,(b+1)*h/n);ctx.closePath();ctx.fill();
    }
  }},
  {id:'plaid',name:'Plaid',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.08;
    // horizontal stripes
    ctx.fillStyle=c.c1+'88';[.2,.5,.8].forEach(y=>ctx.fillRect(0,h*y-t/2,w,t));
    ctx.fillStyle=c.c1+'44';[.35,.65].forEach(y=>ctx.fillRect(0,h*y-t*.4,w,t*.8));
    // vertical stripes
    ctx.fillStyle=c.c2+'88';[.2,.5,.8].forEach(x=>ctx.fillRect(w*x-t/2,0,t,h));
    ctx.fillStyle=c.c2+'44';[.35,.65].forEach(x=>ctx.fillRect(w*x-t*.4,0,t*.8,h));
    // intersections bright
    ctx.fillStyle=c.c3;[.2,.5,.8].forEach(x=>[.2,.5,.8].forEach(y=>ctx.fillRect(w*x-t/2,h*y-t/2,t,t)));
  }},
  {id:'listra_borda',name:'Listra+Borda',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const b=w*.1;
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w,b);ctx.fillRect(0,h-b,w,b);
    ctx.fillRect(0,0,b,h);ctx.fillRect(w-b,0,b,h);
    ctx.fillStyle=c.c2;ctx.fillRect(b,h*.45-b*.4,w-2*b,b*.8);
  }},
  {id:'espinha',name:'Espinha Peixe',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.07;ctx.fillStyle=c.c1;ctx.fillRect(w/2-t/2,0,t,h);
    const n=8;ctx.fillStyle=c.c2;
    for(let i=0;i<n;i++){
      const y=i*h/n+h/(n*2),len=w*.32,ang=Math.PI/4;
      ctx.save();ctx.translate(w/2,y);
      ctx.rotate(ang);ctx.fillRect(0,-t/2,len,t);ctx.restore();
      ctx.save();ctx.translate(w/2,y);
      ctx.rotate(-ang);ctx.fillRect(-len,-t/2,len,t);ctx.restore();
    }
  }},
  {id:'manta',name:'Manta',cat:'especial',fn:(ctx,w,h,c)=>{
    // padrão estilo manta geométrica nativa
    fill(ctx,w,h,c.bg);const s=w*.12;
    for(let r=0;r<Math.ceil(h/s)+1;r++){
      for(let cl=0;cl<Math.ceil(w/s)+1;cl++){
        const x=cl*s,y=r*s;const alt=(r+cl)%2;
        ctx.fillStyle=alt?c.c1:c.c2;
        ctx.beginPath();ctx.moveTo(x+s/2,y);ctx.lineTo(x+s,y+s/2);ctx.lineTo(x+s/2,y+s);ctx.lineTo(x,y+s/2);ctx.closePath();ctx.fill();
        ctx.fillStyle=c.bg;ctx.beginPath();ctx.moveTo(x+s/2,y+s*.2);ctx.lineTo(x+s*.8,y+s/2);ctx.lineTo(x+s/2,y+s*.8);ctx.lineTo(x+s*.2,y+s/2);ctx.closePath();ctx.fill();
      }
    }
  }},

  // ── NOVOS: CRUZ ──
  {id:'asterisco',name:'Asterisco',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.09,cx=w/2,cy=h*.5;
    ctx.fillStyle=c.c1;
    [0,Math.PI/4,Math.PI/2,Math.PI*3/4].forEach(a=>{
      ctx.save();ctx.translate(cx,cy);ctx.rotate(a);
      ctx.fillRect(-t/2,-h*.5,t,h);ctx.restore();
    });
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(cx,cy,t*.9,0,Math.PI*2);ctx.fill();
  }},
  {id:'dupla_cruz_rot',name:'Cruz 45°',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.13;
    ctx.save();ctx.translate(w/2,h*.5);ctx.rotate(Math.PI/4);
    ctx.fillStyle=c.c1;ctx.fillRect(-t/2,-h*.65,t,h*1.3);ctx.fillRect(-w*.65,-t/2,w*1.3,t);ctx.restore();
    ctx.save();ctx.translate(w/2,h*.5);ctx.fillStyle=c.c2;
    ctx.fillRect(-t*.35,-h*.65,t*.7,h*1.3);ctx.fillRect(-w*.65,-t*.35,w*1.3,t*.7);ctx.restore();
  }},
  {id:'grade_losango',name:'Grade Losango',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.07;
    ctx.save();ctx.translate(w/2,h*.5);ctx.rotate(Math.PI/4);
    ctx.fillStyle=c.c1;
    [-w*.3,0,w*.3].forEach(x=>ctx.fillRect(x-t/2,-h*.8,t,h*1.6));
    [-h*.3,0,h*.3].forEach(y=>ctx.fillRect(-w*.8,y-t/2,w*1.6,t));
    ctx.restore();
  }},
  {id:'canto_duplo',name:'Canto Duplo',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w*.5,h*.5);ctx.fillRect(w*.5,h*.5,w*.5,h*.5);
    ctx.fillStyle=c.c2;ctx.fillRect(w*.5,0,w*.5,h*.5);ctx.fillRect(0,h*.5,w*.5,h*.5);
    const t=w*.1;ctx.fillStyle=c.c3;
    ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h/2-t/2,w,t);
  }},
  {id:'cruz_dupla_v2',name:'Cruz Grossa',cat:'cruz',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.2;
    ctx.fillStyle=c.c1;ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h*.42-t/2,w,t);
    ctx.fillStyle=c.c2;const ti=t*.35;
    ctx.fillRect(w/2-ti/2,0,ti,h);ctx.fillRect(0,h*.42-ti/2,w,ti);
  }},

  // ── NOVOS: LISTRAS ──
  {id:'listras_v_assym',name:'V Assimétr.',cat:'listras',fn:(ctx,w,h,c)=>{
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w*.15,h);
    ctx.fillStyle=c.bg;ctx.fillRect(w*.15,0,w*.5,h);
    ctx.fillStyle=c.c2;ctx.fillRect(w*.65,0,w*.35,h);
    ctx.fillStyle=c.c3;ctx.fillRect(w*.15,0,w*.04,h);ctx.fillRect(w*.65,0,w*.04,h);
  }},
  {id:'lista_degradê',name:'Centro Foco',cat:'listras',fn:(ctx,w,h,c)=>{
    [c.c1,c.c2,c.bg,c.bg,c.c2,c.c1].forEach((col,i)=>{ctx.fillStyle=col;ctx.fillRect(i*w/6,0,w/6+1,h)});
  }},
  {id:'listras_h_trio',name:'Trio+Faixa',cat:'listras',fn:(ctx,w,h,c)=>{
    ctx.fillStyle=c.c1;ctx.fillRect(0,0,w,h*.3);
    ctx.fillStyle=c.bg;ctx.fillRect(0,h*.3,w,h*.4);
    ctx.fillStyle=c.c2;ctx.fillRect(0,h*.7,w,h*.3);
    ctx.fillStyle=c.c3;ctx.fillRect(0,h*.28,w,h*.04);ctx.fillRect(0,h*.68,w,h*.04);
  }},
  {id:'linhas_duplas',name:'Linhas Duplas',cat:'listras',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.06,g=w*.04;
    [[h*.2,h*.24],[h*.46,h*.5],[h*.7,h*.74]].forEach(([y1,y2])=>{
      ctx.fillStyle=c.c1;ctx.fillRect(0,y1,w,t);
      ctx.fillStyle=c.c2;ctx.fillRect(0,y2,w,t);
    });
  }},
  {id:'banda_diagonal_h',name:'Banda+H',cat:'listras',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.fillRect(0,h*.4,w,h*.2);
    ctx.fillStyle=c.c2;
    ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w*.4,0);ctx.lineTo(0,h*.4);ctx.fill();
    ctx.beginPath();ctx.moveTo(w*.6,0);ctx.lineTo(w,0);ctx.lineTo(w,h*.4);ctx.fill();
  }},

  // ── NOVOS: DIAGONAL ──
  {id:'diag_centro',name:'Diag. Centro',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;
    ctx.beginPath();ctx.moveTo(w*.2,0);ctx.lineTo(w*.8,0);ctx.lineTo(w*.6,h);ctx.lineTo(w*.4,h);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w*.35,0);ctx.lineTo(w*.65,0);ctx.lineTo(w*.52,h);ctx.lineTo(w*.48,h);ctx.fill();
  }},
  {id:'leque',name:'Leque',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const n=8,cx=w/2,cy=h*.98;
    for(let i=0;i<n;i++){
      ctx.fillStyle=i%2===0?c.c1:c.c2;
      const a1=Math.PI+i*(Math.PI/n),a2=Math.PI+(i+1)*(Math.PI/n);
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,Math.max(w,h)*1.1,a1,a2);ctx.closePath();ctx.fill();
    }
  }},
  {id:'trapezio',name:'Trapézio',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(w*.1,0);ctx.lineTo(w*.9,0);ctx.lineTo(w*.7,h*.5);ctx.lineTo(w*.3,h*.5);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w*.3,h*.5);ctx.lineTo(w*.7,h*.5);ctx.lineTo(w*.85,h);ctx.lineTo(w*.15,h);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c3;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w*.1,0);ctx.lineTo(w*.3,h*.5);ctx.lineTo(w*.15,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill();
    ctx.beginPath();ctx.moveTo(w*.9,0);ctx.lineTo(w,0);ctx.lineTo(w,h);ctx.lineTo(w*.85,h);ctx.lineTo(w*.7,h*.5);ctx.closePath();ctx.fill();
  }},
  {id:'paralelas',name:'Paralelas Diag.',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const t=w*.15,n=5;
    for(let i=0;i<n;i++){
      ctx.fillStyle=i%2===0?c.c1:c.c2;
      const off=(i-n/2)*t*1.8;
      ctx.save();ctx.translate(w/2+off,h/2);ctx.rotate(-Math.PI/5);
      ctx.fillRect(-t*.45,-h*1.2,t*.9,h*2.4);ctx.restore();
    }
  }},
  {id:'triangulos_diag',name:'Tri. Diagonal',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    [[0,0,w*.5,0,0,h*.5,c.c1],[w*.5,0,w,0,w,h*.5,c.c2],[0,h*.5,w*.5,h,0,h,c.c2],[w*.5,h,w,h*.5,w,h,c.c1],[w*.25,h*.25,w*.75,h*.25,w*.5,h*.5,c.c3],[w*.25,h*.75,w*.75,h*.75,w*.5,h*.5,c.c3]].forEach(([x1,y1,x2,y2,x3,y3,col])=>{
      ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);ctx.closePath();ctx.fill();
    });
  }},
  {id:'seta_dupla',name:'Seta Dupla',cat:'diagonal',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);ctx.fillStyle=c.c1;
    // seta para cima
    ctx.beginPath();ctx.moveTo(w*.5,h*.05);ctx.lineTo(w*.85,h*.45);ctx.lineTo(w*.63,h*.45);ctx.lineTo(w*.63,h*.55);ctx.lineTo(w*.37,h*.55);ctx.lineTo(w*.37,h*.45);ctx.lineTo(w*.15,h*.45);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;
    ctx.beginPath();ctx.moveTo(w*.5,h*.95);ctx.lineTo(w*.85,h*.55);ctx.lineTo(w*.63,h*.55);ctx.lineTo(w*.63,h*.45);ctx.lineTo(w*.37,h*.45);ctx.lineTo(w*.37,h*.55);ctx.lineTo(w*.15,h*.55);ctx.closePath();ctx.fill();
  }},

  // ── NOVOS: GEO ──
  {id:'yin_yang',name:'Yin Yang',cat:'geo',fn:(ctx,w,h,c)=>{
    const cx=w/2,cy=h*.48,r=w*.35;
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,Math.PI/2);ctx.arc(cx,cy+r/2,r/2,Math.PI/2,-Math.PI/2,true);ctx.arc(cx,cy-r/2,r/2,-Math.PI/2,Math.PI/2);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.arc(cx,cy-r/2,r*.1,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(cx,cy+r/2,r*.1,0,Math.PI*2);ctx.fill();
  }},
  {id:'grade_hex',name:'Grade Hex.',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const r=w*.12,h3=r*Math.sqrt(3);
    function hexFill(cx,cy,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3;i===0?ctx.moveTo(cx+Math.cos(a)*r*.88,cy+Math.sin(a)*r*.88):ctx.lineTo(cx+Math.cos(a)*r*.88,cy+Math.sin(a)*r*.88)}ctx.closePath();ctx.fill()}
    let row=0;for(let y=-r;y<h+r;y+=h3,row++){const offx=row%2===0?0:r*1.5;for(let x=-r*1.5+offx;x<w+r;x+=r*3){hexFill(x,y,row%2===0?c.c1:c.c2)}}
  }},
  {id:'teia',name:'Teia',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const cx=w/2,cy=h*.48;
    ctx.strokeStyle=c.c1;ctx.lineWidth=w*.025;
    [.12,.22,.32,.4].forEach(r=>{ctx.beginPath();ctx.arc(cx,cy,w*r,0,Math.PI*2);ctx.stroke()});
    ctx.strokeStyle=c.c2;ctx.lineWidth=w*.018;
    for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*w*.42,cy+Math.sin(a)*w*.42);ctx.stroke()}
  }},
  {id:'espiral_curva',name:'Espiral Log.',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const cx=w/2,cy=h*.48;
    ctx.strokeStyle=c.c1;ctx.lineWidth=w*.06;ctx.lineCap='round';
    ctx.beginPath();
    for(let a=0;a<Math.PI*6;a+=0.05){const r=a/20*w*.4;ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}
    ctx.stroke();
    ctx.strokeStyle=c.c2;ctx.lineWidth=w*.025;ctx.beginPath();
    for(let a=Math.PI;a<Math.PI*7;a+=0.05){const r=a/20*w*.4;ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}
    ctx.stroke();
  }},
  {id:'sol',name:'Sol',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const cx=w/2,cy=h*.48,n=12;
    ctx.fillStyle=c.c1;
    for(let i=0;i<n;i++){
      const a=i*Math.PI*2/n;ctx.save();ctx.translate(cx,cy);ctx.rotate(a);
      ctx.beginPath();ctx.moveTo(0,-w*.15);ctx.lineTo(w*.06,-w*.3);ctx.lineTo(-w*.06,-w*.3);ctx.closePath();ctx.fill();ctx.restore();
    }
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(cx,cy,w*.18,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.arc(cx,cy,w*.11,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.arc(cx,cy,w*.06,0,Math.PI*2);ctx.fill();
  }},
  {id:'flor',name:'Flor',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const cx=w/2,cy=h*.48,r=w*.28,n=6;
    ctx.fillStyle=c.c1;
    for(let i=0;i<n;i++){const a=i*Math.PI*2/n;ctx.beginPath();ctx.arc(cx+Math.cos(a)*r*.5,cy+Math.sin(a)*r*.5,r*.5,0,Math.PI*2);ctx.fill()}
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(cx,cy,r*.35,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c.c3;ctx.beginPath();ctx.arc(cx,cy,r*.18,0,Math.PI*2);ctx.fill();
  }},
  {id:'dois_triangulos',name:'Dois Tri.',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(w*.5,h*.06);ctx.lineTo(w*.92,h*.72);ctx.lineTo(w*.08,h*.72);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(w*.5,h*.88);ctx.lineTo(w*.08,h*.3);ctx.lineTo(w*.92,h*.3);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.moveTo(w*.5,h*.3);ctx.lineTo(w*.67,h*.58);ctx.lineTo(w*.33,h*.58);ctx.closePath();ctx.fill();
  }},
  {id:'cruz_grega',name:'Cruz Grega',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const s=w*.28,cx=w/2,cy=h*.48;
    ctx.fillStyle=c.c1;
    ctx.fillRect(cx-s/2,cy-s*1.5,s,s*3);
    ctx.fillRect(cx-s*1.5,cy-s/2,s*3,s);
    ctx.fillStyle=c.c2;const si=s*.4;
    ctx.fillRect(cx-si/2,cy-s*1.5,si,s*3);
    ctx.fillRect(cx-s*1.5,cy-si/2,s*3,si);
  }},
  {id:'mandala',name:'Mandala',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const cx=w/2,cy=h*.48;
    // aneis alternados
    [[.38,c.c1],[.3,c.c2],[.22,c.bg],[.16,c.c1],[.1,c.c2],[.05,c.bg]].forEach(([r,col])=>{
      ctx.fillStyle=col;ctx.beginPath();ctx.arc(cx,cy,w*r,0,Math.PI*2);ctx.fill();
    });
    // pétalas externas
    ctx.fillStyle=c.c1+'99';
    for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.save();ctx.translate(cx,cy);ctx.rotate(a);
      ctx.beginPath();ctx.ellipse(0,-w*.3,w*.06,w*.12,0,0,Math.PI*2);ctx.fill();ctx.restore();
    }
  }},
  {id:'losango_grade',name:'Losangos Grade',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const sz=w*.18;
    ctx.save();ctx.translate(w/2,h*.48);ctx.rotate(Math.PI/4);
    for(let r=-3;r<4;r++)for(let cl=-3;cl<4;cl++){
      ctx.fillStyle=(r+cl)%2===0?c.c1:c.c2;
      ctx.fillRect(cl*sz-sz/2,r*sz-sz/2,sz,sz);
    }
    ctx.restore();
  }},
  {id:'ampulheta',name:'Ampulheta',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,0);ctx.lineTo(w/2,h*.5);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(w,h);ctx.lineTo(w/2,h*.5);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c3;ctx.beginPath();ctx.moveTo(w*.3,0);ctx.lineTo(w*.7,0);ctx.lineTo(w/2,h*.3);ctx.closePath();ctx.fill();
    ctx.beginPath();ctx.moveTo(w*.3,h);ctx.lineTo(w*.7,h);ctx.lineTo(w/2,h*.7);ctx.closePath();ctx.fill();
  }},
  {id:'decagono',name:'Decágono',cat:'geo',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    function poly(cx,cy,r,n,rot,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<n;i++){const a=rot+i*Math.PI*2/n;i===0?ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath();ctx.fill()}
    poly(w/2,h*.48,w*.38,10,0,c.c1);poly(w/2,h*.48,w*.28,10,Math.PI/10,c.c2);poly(w/2,h*.48,w*.18,10,0,c.c3);poly(w/2,h*.48,w*.1,10,Math.PI/10,c.bg);
  }},

  // ── NOVOS: ESPECIAL ──
  {id:'mosaico_tri',name:'Mosaico Tri.',cat:'especial',fn:(ctx,w,h,c)=>{
    const sz=w*.18;const cols=Math.ceil(w/sz)+1,rows=Math.ceil(h/sz)+1;const pal=[c.c1,c.c2,c.c3,c.bg];
    for(let r=0;r<rows;r++)for(let cl=0;cl<cols;cl++){
      const x=cl*sz,y=r*sz;
      ctx.fillStyle=pal[(r*2+cl)%4];ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+sz,y);ctx.lineTo(x,y+sz);ctx.closePath();ctx.fill();
      ctx.fillStyle=pal[(r*2+cl+1)%4];ctx.beginPath();ctx.moveTo(x+sz,y+sz);ctx.lineTo(x+sz,y);ctx.lineTo(x,y+sz);ctx.closePath();ctx.fill();
    }
  }},
  {id:'patchwork',name:'Patchwork',cat:'especial',fn:(ctx,w,h,c)=>{
    const blocks=[[0,0,w*.4,h*.35,c.c1],[w*.4,0,w*.6,h*.25,c.c2],[0,h*.35,w*.55,h*.3,c.c3],[w*.55,h*.25,w*.45,h*.45,c.c1],[0,h*.65,w*.3,h*.35,c.c2],[w*.3,h*.65,w*.4,h*.35,c.bg],[w*.7,h*.7,w*.3,h*.3,c.c3]];
    blocks.forEach(([x,y,ww,hh,col])=>{ctx.fillStyle=col;ctx.fillRect(x,y,ww,hh)});
    ctx.strokeStyle=c.bg;ctx.lineWidth=w*.018;
    blocks.forEach(([x,y,ww,hh])=>{ctx.strokeRect(x+2,y+2,ww-4,hh-4)});
  }},
  {id:'escamas',name:'Escamas',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const r=w*.14;
    let row=0;for(let y=-r*.5;y<h+r;y+=r,row++){
      const offx=row%2===0?0:r;
      for(let x=-r+offx;x<w+r;x+=r*2){
        ctx.fillStyle=row%2===0?c.c1:c.c2;
        ctx.beginPath();ctx.arc(x,y,r*.95,Math.PI,0);ctx.closePath();ctx.fill();
      }
    }
  }},
  {id:'tijolo',name:'Tijolo',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.c1);const bw=w*.28,bh=h*.12,gap=w*.02;
    let row=0;for(let y=0;y<h;y+=bh+gap,row++){
      const offx=row%2===0?0:bw/2;
      for(let x=-bw/2+offx;x<w;x+=bw+gap){
        ctx.fillStyle=row%2===0?c.c1:c.c2;
        ctx.fillRect(x,y,bw,bh);
        ctx.strokeStyle=c.bg;ctx.lineWidth=gap;ctx.strokeRect(x,y,bw,bh);
      }
    }
  }},
  {id:'arco_duplo',name:'Arco Duplo',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();ctx.arc(w*.5,h*.95,w*.55,Math.PI,0);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();ctx.arc(w*.5,h*.95,w*.38,Math.PI,0);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.bg;ctx.beginPath();ctx.arc(w*.5,h*.95,w*.22,Math.PI,0);ctx.closePath();ctx.fill();
    ctx.fillStyle=c.c3;ctx.beginPath();ctx.arc(w*.5,h*.95,w*.1,Math.PI,0);ctx.closePath();ctx.fill();
  }},
  {id:'piramide',name:'Pirâmide',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const n=5;
    for(let i=0;i<n;i++){
      ctx.fillStyle=[c.c1,c.c2,c.c3,c.c1,c.c2][i];
      const pct=i/n,pct2=(i+1)/n;
      const x1=w*pct*.45,x2=w*(1-pct*.45);
      const x1b=w*pct2*.45,x2b=w*(1-pct2*.45);
      ctx.beginPath();ctx.moveTo(x1,h*pct*.85);ctx.lineTo(x2,h*pct*.85);ctx.lineTo(x2b,h*pct2*.85);ctx.lineTo(x1b,h*pct2*.85);ctx.closePath();ctx.fill();
    }
  }},
  {id:'folha',name:'Folha',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);
    ctx.fillStyle=c.c1;ctx.beginPath();
    ctx.moveTo(w*.5,h*.05);ctx.bezierCurveTo(w*.95,h*.2,w*.95,h*.75,w*.5,h*.92);
    ctx.bezierCurveTo(w*.05,h*.75,w*.05,h*.2,w*.5,h*.05);ctx.fill();
    ctx.fillStyle=c.c2;ctx.beginPath();
    ctx.moveTo(w*.5,h*.12);ctx.bezierCurveTo(w*.85,h*.25,w*.85,h*.7,w*.5,h*.85);
    ctx.bezierCurveTo(w*.15,h*.7,w*.15,h*.25,w*.5,h*.12);ctx.fill();
    ctx.strokeStyle=c.c3;ctx.lineWidth=w*.02;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(w*.5,h*.1);ctx.lineTo(w*.5,h*.88);ctx.stroke();
    [.3,.5,.68].forEach(y=>{ctx.beginPath();ctx.moveTo(w*.5,h*y);ctx.lineTo(w*.72,h*(y-.08));ctx.stroke();ctx.beginPath();ctx.moveTo(w*.5,h*y);ctx.lineTo(w*.28,h*(y-.08));ctx.stroke()});
  }},
  {id:'grade_pontos',name:'Grade Pontos',cat:'especial',fn:(ctx,w,h,c)=>{
    fill(ctx,w,h,c.bg);const sz=w*.12;
    for(let r=0;r<Math.ceil(h/sz)+1;r++)for(let cl=0;cl<Math.ceil(w/sz)+1;cl++){
      ctx.fillStyle=(r+cl)%2===0?c.c1:c.c2;
      ctx.beginPath();ctx.arc(cl*sz,r*sz,sz*.3,0,Math.PI*2);ctx.fill();
    }
  }},

  // SELEÇÕES
  {id:'sel_brasil',name:'Brasil 🇧🇷',cat:'selecoes',fn:(ctx,w,h,c)=>{fill(ctx,w,h,'#009c3b');ctx.fillStyle='#ffdf00';ctx.beginPath();ctx.moveTo(w*.5,h*.1);ctx.lineTo(w*.95,h*.48);ctx.lineTo(w*.5,h*.86);ctx.lineTo(w*.05,h*.48);ctx.closePath();ctx.fill();ctx.fillStyle='#002776';ctx.beginPath();ctx.arc(w*.5,h*.48,w*.175,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(w*.5,h*.48,w*.13,0,Math.PI*2);ctx.fill();ctx.fillStyle='#009c3b';ctx.beginPath();ctx.arc(w*.5,h*.48,w*.085,0,Math.PI*2);ctx.fill()}},
  {id:'sel_argentina',name:'Argentina 🇦🇷',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#74acdf',0],['#fff',.33],['#74acdf',.66]].forEach(([col,y])=>{ctx.fillStyle=col;ctx.fillRect(0,h*y,w,h*.34)});ctx.fillStyle='#f6b40e';ctx.save();ctx.translate(w/2,h*.5);for(let i=0;i<16;i++){ctx.save();ctx.rotate(i*Math.PI/8);ctx.fillRect(-w*.015,w*.09,w*.03,w*.07);ctx.restore()}ctx.beginPath();ctx.arc(0,0,w*.09,0,Math.PI*2);ctx.fill();ctx.fillStyle='#843511';ctx.beginPath();ctx.arc(0,0,w*.055,0,Math.PI*2);ctx.fill();ctx.restore()}},
  {id:'sel_alemanha',name:'Alemanha 🇩🇪',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#000',0],['#d00',h/3],['#ffce00',2*h/3]].forEach(([col,y])=>{ctx.fillStyle=col;ctx.fillRect(0,y,w,h/3+1)})}},
  {id:'sel_franca',name:'França 🇫🇷',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#002395',0],['#fff',w/3],['#ed2939',2*w/3]].forEach(([col,x])=>{ctx.fillStyle=col;ctx.fillRect(x,0,w/3+1,h)})}},
  {id:'sel_espanha',name:'Espanha 🇪🇸',cat:'selecoes',fn:(ctx,w,h,c)=>{ctx.fillStyle='#c60b1e';ctx.fillRect(0,0,w,h);ctx.fillStyle='#ffc400';ctx.fillRect(0,h*.25,w,h*.5)}},
  {id:'sel_portugal',name:'Portugal 🇵🇹',cat:'selecoes',fn:(ctx,w,h,c)=>{ctx.fillStyle='#006600';ctx.fillRect(0,0,w*.38,h);ctx.fillStyle='#FF0000';ctx.fillRect(w*.38,0,w*.62,h);ctx.fillStyle='#ffff00';ctx.beginPath();ctx.arc(w*.38,h*.5,w*.14,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(w*.38,h*.5,w*.09,0,Math.PI*2);ctx.fill();ctx.fillStyle='#002776';ctx.beginPath();ctx.arc(w*.38,h*.5,w*.06,0,Math.PI*2);ctx.fill()}},
  {id:'sel_italia',name:'Itália 🇮🇹',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#009246',0],['#fff',w/3],['#ce2b37',2*w/3]].forEach(([col,x])=>{ctx.fillStyle=col;ctx.fillRect(x,0,w/3+1,h)})}},
  {id:'sel_inglaterra',name:'Inglaterra',cat:'selecoes',fn:(ctx,w,h,c)=>{fill(ctx,w,h,'#fff');const t=w*.12;ctx.fillStyle='#cf142b';ctx.fillRect(w/2-t/2,0,t,h);ctx.fillRect(0,h/2-t/2,w,t)}},
  {id:'sel_holanda',name:'Holanda 🇳🇱',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#ae1c28',0],['#fff',h/3],['#21468b',2*h/3]].forEach(([col,y])=>{ctx.fillStyle=col;ctx.fillRect(0,y,w,h/3+1)})}},
  {id:'sel_japao',name:'Japão 🇯🇵',cat:'selecoes',fn:(ctx,w,h,c)=>{fill(ctx,w,h,'#fff');ctx.fillStyle='#bc002d';ctx.beginPath();ctx.arc(w*.5,h*.5,w*.3,0,Math.PI*2);ctx.fill()}},
  {id:'sel_mexico',name:'México 🇲🇽',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#006847',0],['#fff',w/3],['#ce1126',2*w/3]].forEach(([col,x])=>{ctx.fillStyle=col;ctx.fillRect(x,0,w/3+1,h)});ctx.fillStyle='#006847';ctx.beginPath();ctx.arc(w/2,h*.5,w*.08,0,Math.PI*2);ctx.fill()}},
  {id:'sel_uruguai',name:'Uruguai 🇺🇾',cat:'selecoes',fn:(ctx,w,h,c)=>{fill(ctx,w,h,'#fff');for(let i=0;i<9;i++){if(i%2===0){ctx.fillStyle='#5EB6E4';ctx.fillRect(0,i*h/9,w,h/9+1)}}ctx.fillStyle='#fff';ctx.fillRect(0,0,w*.4,h*.4);ctx.fillStyle='#f6b40e';ctx.save();ctx.translate(w*.2,h*.2);ctx.beginPath();ctx.arc(0,0,w*.08,0,Math.PI*2);ctx.fill();ctx.restore()}},
  {id:'sel_coreia',name:'Coreia Sul 🇰🇷',cat:'selecoes',fn:(ctx,w,h,c)=>{fill(ctx,w,h,'#fff');ctx.fillStyle='#c60c30';ctx.beginPath();ctx.arc(w*.5,h*.5,w*.2,Math.PI,0);ctx.closePath();ctx.fill();ctx.fillStyle='#003478';ctx.beginPath();ctx.arc(w*.5,h*.5,w*.2,0,Math.PI);ctx.closePath();ctx.fill()}},
  {id:'sel_senegal',name:'Senegal 🇸🇳',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#00853f',0],['#fdef42',w/3],['#e31b23',2*w/3]].forEach(([col,x])=>{ctx.fillStyle=col;ctx.fillRect(x,0,w/3+1,h)});ctx.fillStyle='#00853f';ctx.save();ctx.translate(w*.5,h*.5);ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2===0?w*.1:w*.04;i===0?ctx.moveTo(Math.cos(a)*r,Math.sin(a)*r):ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r)}ctx.closePath();ctx.fill();ctx.restore()}},
  {id:'sel_marrocos',name:'Marrocos 🇲🇦',cat:'selecoes',fn:(ctx,w,h,c)=>{fill(ctx,w,h,'#c1272d');ctx.strokeStyle='#006233';ctx.lineWidth=w*.025;ctx.save();ctx.translate(w*.5,h*.5);ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2===0?w*.22:w*.09;i===0?ctx.moveTo(Math.cos(a)*r,Math.sin(a)*r):ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r)}ctx.closePath();ctx.stroke();ctx.restore()}},
  {id:'sel_croacia',name:'Croácia 🇭🇷',cat:'selecoes',fn:(ctx,w,h,c)=>{[['#FF0000',0],['#fff',h/3],['#0000CC',2*h/3]].forEach(([col,y])=>{ctx.fillStyle=col;ctx.fillRect(0,y,w,h/3+1)});const sq=w*.055,ox=w*.5-sq*2.5,oy=h*.35;for(let r=0;r<3;r++)for(let cl=0;cl<5;cl++){ctx.fillStyle=(r+cl)%2===0?'#FF0000':'#fff';ctx.fillRect(ox+cl*sq,oy+r*sq,sq,sq)}}},
  {id:'sel_usa',name:'EUA 🇺🇸',cat:'selecoes',fn:(ctx,w,h,c)=>{for(let i=0;i<13;i++){ctx.fillStyle=i%2===0?'#b22234':'#fff';ctx.fillRect(0,i*h/13,w,h/13+1)}ctx.fillStyle='#3c3b6e';ctx.fillRect(0,0,w*.4,h*.55);ctx.fillStyle='#fff';for(let r=0;r<5;r++)for(let cl=0;cl<6;cl++){ctx.beginPath();ctx.arc(w*(.04+cl*.062),h*(.06+r*.09),w*.016,0,Math.PI*2);ctx.fill()}}},
];
