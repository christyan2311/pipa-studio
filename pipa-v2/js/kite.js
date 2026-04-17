/* ═══════════════════════════════════════════════════════
   kite.js — Estado global, geometria e desenho da pipa
   Exporta (globais): C, curId, logoImg, logoSz, logoOp, curCat, activeSheet
                      kiteCoords, bodyPath, withClip, fill, drawFrame
   ═══════════════════════════════════════════════════════ */

/* ─── STATE ─── */
const C={bg:'#1a1a2e',c1:'#f5c518',c2:'#e63946',c3:'#2a9d8f'};
let curId='cruz_dupla',logoImg=null,logoSz=0.3,logoOp=1,curCat='todos',activeSheet=null;

/* ─── KITE GEOMETRY ─── */
function kiteCoords(w,h){return{vergTop:h*.02,vergH:h*.24,midBot:h*.72,bot:h*.97,left:w*.03,right:w*.97,cx:w/2}}
function bodyPath(ctx,w,h){const k=kiteCoords(w,h);ctx.beginPath();ctx.moveTo(k.cx,k.vergH);ctx.lineTo(k.right,k.vergH);ctx.lineTo(k.right,k.midBot);ctx.lineTo(k.cx,k.bot);ctx.lineTo(k.left,k.midBot);ctx.lineTo(k.left,k.vergH);ctx.closePath()}
function withClip(ctx,w,h,fn){ctx.save();bodyPath(ctx,w,h);ctx.clip();fn();ctx.restore()}
function fill(ctx,w,h,col){ctx.fillStyle=col;ctx.fillRect(0,0,w,h)}
function drawFrame(ctx,w,h){
  const k=kiteCoords(w,h);
  ctx.save();bodyPath(ctx,w,h);ctx.strokeStyle='rgba(0,0,0,.8)';ctx.lineWidth=4.5;ctx.stroke();ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=1.5;ctx.stroke();ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(180,140,70,.75)';ctx.lineWidth=3;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(k.left,k.vergH);ctx.lineTo(k.right,k.vergH);ctx.stroke();
  ctx.beginPath();ctx.moveTo(k.cx,k.vergH);ctx.lineTo(k.cx,k.bot);ctx.stroke();ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(180,140,70,.6)';ctx.lineWidth=2.5;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(k.left,k.vergH);ctx.lineTo(k.cx,k.vergTop);ctx.stroke();
  ctx.beginPath();ctx.moveTo(k.right,k.vergH);ctx.lineTo(k.cx,k.vergTop);ctx.stroke();ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(220,200,150,.28)';ctx.lineWidth=1.2;ctx.setLineDash([5,6]);
  ctx.beginPath();ctx.moveTo(k.left,k.vergH);ctx.lineTo(k.cx,k.vergTop-16);ctx.lineTo(k.right,k.vergH);ctx.stroke();ctx.restore();
}
