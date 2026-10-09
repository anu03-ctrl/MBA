function bottle(h,o){o=o||{};var dark=o.dark,body=dark?'#4A0D0B':'#EAF0FF',op=dark?.95:.7,cap=o.cap||'#E3B93C',lab=dark?'#350807':'#F3E57E',ink=dark?'#FFE066':'#3A2A14',acc=dark?'#FFE066':'#C0561B',sc=o.scene||0;
var s='<svg viewBox="0 0 100 260" height="'+h+'" role="img" aria-label="'+(o.label||'Water bottle')+'"><rect x="37" y="3" width="26" height="15" rx="3" fill="'+cap+'"/><rect x="33" y="18" width="34" height="4" rx="2" fill="#fff" fill-opacity=".5"/><path d="M40 22h20v12c0 9 22 14 22 36v170c0 10-8 18-18 18H36c-10 0-18-8-18-18V70c0-22 22-27 22-36z" fill="'+body+'" fill-opacity="'+op+'" stroke="#D9A441" stroke-width="1.5"/><rect x="18" y="102" width="64" height="60" fill="'+lab+'"/>';
if(sc==2)s+='<path d="M22 154v-12h6l3-6h10l3 6h6v12z" fill="'+ink+'" opacity=".85"/><circle cx="30" cy="154" r="4" fill="'+lab+'" stroke="'+ink+'"/><circle cx="46" cy="154" r="4" fill="'+lab+'" stroke="'+ink+'"/>';
else if(!dark)s+='<path d="M22 154v-14a12 12 0 0 1 24 0v14z" fill="'+ink+'" opacity=".85"/><rect x="48" y="130" width="8" height="24" fill="'+ink+'" opacity=".85"/>';
else s+='<path d="M50 112l10 14-10 14-10-14z" fill="none" stroke="'+ink+'" stroke-width="1.5"/>';
s+='<text x="'+(dark?50:64)+'" y="'+(dark?154:122)+'" font-size="'+(dark?7:8)+'" font-family="Noto Serif Kannada,serif" font-weight="700" fill="'+acc+'" text-anchor="'+(dark?'middle':'start')+'">'+(o.txt||'ನಮ್ಮ ಊರು')+'</text>';
if(!dark)s+='<text x="64" y="134" font-size="8" font-family="Noto Serif Kannada,serif" font-weight="700" fill="'+acc+'">ನಮ್ಮ ನೀರು</text>';
return s+'</svg>'}
function can(h){return '<svg viewBox="0 0 120 150" height="'+h+'" role="img" aria-label="20 litre can"><path d="M40 10h40v14H40z" fill="#E3B93C"/><path d="M80 22h14c10 0 16 8 16 18v80c0 8-6 14-14 14H24c-8 0-14-6-14-14V50c0-12 8-26 30-26z" fill="#EAF0FF" fill-opacity=".7" stroke="#D9A441" stroke-width="1.5"/><path d="M82 32h14c5 0 8 4 8 9v22c0 5-3 8-8 8H82z" fill="none" stroke="#D9A441" stroke-width="3"/><rect x="14" y="64" width="92" height="46" fill="#F3E57E"/><text x="60" y="84" font-size="10" font-family="Noto Serif Kannada,serif" font-weight="700" fill="#C0561B" text-anchor="middle">ನಮ್ಮ ಊರು</text><text x="60" y="100" font-size="10" font-family="Noto Serif Kannada,serif" font-weight="700" fill="#C0561B" text-anchor="middle">ನಮ್ಮ ನೀರು</text></svg>'}
function ice(n){var s='<svg viewBox="0 0 120 150" height="'+(120+n*14)+'" role="img" aria-label="Ice cube pack"><path d="M16 20h88l6 118c0 6-4 10-10 10H20c-6 0-10-4-10-10z" fill="#EAF0FF" fill-opacity=".8" stroke="#D9A441" stroke-width="1.5"/><path d="M16 20h88" stroke="#D4AF5A" stroke-width="5"/>';
for(var i=0;i<9;i++)s+='<rect x="'+(24+(i%3)*30)+'" y="'+(52+Math.floor(i/3)*30)+'" width="24" height="24" rx="3" fill="#fff" fill-opacity=".9" stroke="#E8C46A"/>';return s+'</svg>'}
function B(a,b){return '<span class="l-en">'+a+'</span><span class="l-kn">'+b+'</span>'}
function $(i){return document.getElementById(i)}
var LANG='kn';try{LANG=localStorage.getItem('nn_lang')||'kn'}catch(e){}
var PB=[['Clean, safe drinking water','ಸ್ವಚ್ಛ, ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರು'],['A regional landmark and its story on the label','ಲೇಬಲ್‌ನಲ್ಲಿ ಪ್ರಾದೇಶಿಕ ಸ್ಮಾರಕ ಮತ್ತು ಅದರ ಕಥೆ'],['Distributed widely, with brand promotion on labels','ವ್ಯಾಪಕ ವಿತರಣೆ ಮತ್ತು ಲೇಬಲ್‌ನಲ್ಲಿ ಬ್ರ್ಯಾಂಡ್ ಪ್ರಚಾರ']];
var data=[
{g:'Available now',gk:'ಈಗ ಲಭ್ಯ',t:1,s:'In stock',sk:'ಲಭ್ಯವಿದೆ',items:[
 {id:'b500',n:'500 ml bottle',nk:'500 ಮಿ.ಲೀ ಬಾಟಲಿ',p:'A pocket-friendly bottle with the Hampi stone chariot label. Right for travel, meetings and daily use.',pk:'ಹಂಪಿಯ ಕಲ್ಲಿನ ರಥದ ಲೇಬಲ್ ಇರುವ ಕೈಗೆಟುಕುವ ಬಾಟಲಿ. ಪ್ರಯಾಣ, ಸಭೆ ಮತ್ತು ದಿನನಿತ್ಯದ ಬಳಕೆಗೆ ಸೂಕ್ತ.',i:function(){return bottle(210,{scene:2,label:'500 ml bottle'})}},
 {id:'b1l',n:'1 litre bottle',nk:'1 ಲೀಟರ್ ಬಾಟಲಿ',p:'The family and travel size with the Gol Gumbaz label of Vijayapura.',pk:'ವಿಜಯಪುರದ ಗೋಳಗುಮ್ಮಟದ ಲೇಬಲ್ ಇರುವ ಕುಟುಂಬ ಮತ್ತು ಪ್ರಯಾಣದ ಗಾತ್ರ.',i:function(){return bottle(270,{label:'1 litre bottle'})}}]},
{g:'Launching soon',gk:'ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ',s:'Next',sk:'ಮುಂದಿನದು',items:[
 {id:'b300',n:'300 ml bottle',nk:'300 ಮಿ.ಲೀ ಬಾಟಲಿ',p:'A small bottle for events, meetings and on-the-go. Ideal for brand promotion at gatherings.',pk:'ಕಾರ್ಯಕ್ರಮ, ಸಭೆ ಮತ್ತು ಪ್ರಯಾಣಕ್ಕೆ ಸಣ್ಣ ಬಾಟಲಿ. ಸಮಾರಂಭಗಳಲ್ಲಿ ಬ್ರ್ಯಾಂಡ್ ಪ್ರಚಾರಕ್ಕೆ ಸೂಕ್ತ.',i:function(){return bottle(160,{label:'300 ml bottle'})}},
 {id:'c20',n:'20 litre can',nk:'20 ಲೀಟರ್ ಕ್ಯಾನ್',p:'A large can for homes, shops and offices, with a regional label.',pk:'ಮನೆ, ಅಂಗಡಿ ಮತ್ತು ಕಚೇರಿಗಳಿಗೆ ದೊಡ್ಡ ಕ್ಯಾನ್, ಪ್ರಾದೇಶಿಕ ಲೇಬಲ್‌ನೊಂದಿಗೆ.',i:function(){return can(210)}}]},
{g:'Coming in a few months',gk:'ಕೆಲವು ತಿಂಗಳಲ್ಲಿ ಬರಲಿದೆ',s:'Planned',sk:'ಯೋಜನೆಯಲ್ಲಿ',items:[
 {id:'i250',n:'Ice cubes, 250 g',nk:'ಐಸ್ ಕ್ಯೂಬ್ಸ್, 250 ಗ್ರಾಂ',p:'Clean drinking-grade ice in a small pack.',pk:'ಕುಡಿಯಲು ಯೋಗ್ಯವಾದ ಶುದ್ಧ ಐಸ್, ಸಣ್ಣ ಪ್ಯಾಕ್‌ನಲ್ಲಿ.',i:function(){return ice(1)}},
 {id:'i500',n:'Ice cubes, 500 g',nk:'ಐಸ್ ಕ್ಯೂಬ್ಸ್, 500 ಗ್ರಾಂ',p:'The everyday pack for home and shop.',pk:'ಮನೆ ಮತ್ತು ಅಂಗಡಿಗೆ ದಿನನಿತ್ಯದ ಪ್ಯಾಕ್.',i:function(){return ice(2)}},
 {id:'i1k',n:'Ice cubes, 1 kg',nk:'ಐಸ್ ಕ್ಯೂಬ್ಸ್, 1 ಕೆ.ಜಿ',p:'The large pack for parties and caterers.',pk:'ಸಮಾರಂಭ ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್‌ಗೆ ದೊಡ್ಡ ಪ್ಯಾಕ್.',i:function(){return ice(3)}}]},
{g:'Premium range',gk:'ಪ್ರೀಮಿಯಂ ಶ್ರೇಣಿ',cls:1,s:'Coming',sk:'ಶೀಘ್ರದಲ್ಲಿ',items:[
 {id:'alk',n:'Alkaline water',nk:'ಆಲ್ಕಲೈನ್ ನೀರು',p:'Alkaline water in a premium bottle, for those who want a finer drink.',pk:'ವಿಶೇಷ ಅನುಭವ ಬಯಸುವವರಿಗೆ ಪ್ರೀಮಿಯಂ ಬಾಟಲಿಯಲ್ಲಿ ಆಲ್ಕಲೈನ್ ನೀರು.',i:function(){return bottle(250,{dark:1,txt:'ALKALINE',cap:'#E3C57A',label:'Alkaline water bottle'})}},
 {id:'min',n:'Mineral water',nk:'ಮಿನರಲ್ ನೀರು',p:'Water with balanced minerals, in a premium bottle.',pk:'ಸಮತೋಲಿತ ಖನಿಜಗಳಿರುವ ನೀರು, ಪ್ರೀಮಿಯಂ ಬಾಟಲಿಯಲ್ಲಿ.',i:function(){return bottle(250,{dark:1,txt:'MINERAL',cap:'#E3C57A',label:'Mineral water bottle'})}}]}];
var ALL=[];data.forEach(function(d){d.items.forEach(function(x){x.g=d.gk;x.ge=d.g;x.t=d.t;ALL.push(x)})});
function first(s){return s.split('.')[0]+'.'}
$('groups').innerHTML=data.map(function(d){return '<div class="group'+(d.cls?' prem-g':'')+'"><h3>'+B(d.g,d.gk)+'<span class="tag'+(d.t?' live':'')+'">'+B(d.s,d.sk)+'</span></h3><div class="cards">'+d.items.map(function(x){return '<div class="card rv" data-id="'+x.id+'" tabindex="0" role="button"><div class="ic">'+x.i()+'</div><h4>'+B(x.n,x.nk)+'</h4><p>'+B(first(x.p),first(x.pk))+'</p><span class="go">'+B('View details','ವಿವರ ನೋಡಿ')+'</span></div>'}).join('')+'</div></div>'}).join('');
$('heroArch').innerHTML='<figure>'+bottle(270,{label:'1 litre bottle'})+'<figcaption>'+B('Gol Gumbaz','ಗೋಳಗುಮ್ಮಟ')+'</figcaption></figure><figure>'+bottle(210,{scene:2,label:'500 ml bottle'})+'<figcaption>'+B('Hampi','ಹಂಪಿ')+'</figcaption></figure>';
$('soonArch').innerHTML='<figure>'+ice(2)+'<figcaption>'+B('Ice','ಐಸ್')+'</figcaption></figure><figure>'+bottle(250,{dark:1,txt:'ALKALINE',cap:'#E3C57A'})+'<figcaption>'+B('Alkaline','ಆಲ್ಕಲೈನ್')+'</figcaption></figure>';
document.querySelectorAll('.place,.why-c,.brands li,.qt,.vbox,.gal img,.chk li').forEach(function(e){e.classList.add('rv')});
var cur=0,sl=document.querySelectorAll('.slide'),dt=document.querySelectorAll('#dots i'),tm;
function go(n){cur=(n+sl.length)%sl.length;sl.forEach(function(e,i){e.classList.toggle('on',i==cur);dt[i].classList.toggle('on',i==cur)});clearInterval(tm);tm=setInterval(function(){go(cur+1)},7000)}
$('prev').onclick=function(){go(cur-1)};$('next').onclick=function(){go(cur+1)};dt.forEach(function(d,i){d.onclick=function(){go(i)}});go(0);
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll('.rv').forEach(function(e){io.observe(e)})}else document.querySelectorAll('.rv').forEach(function(e){e.classList.add('in')});
$('menu').onclick=function(){$('navl').classList.toggle('open')};document.querySelectorAll('#navl a').forEach(function(a){a.onclick=function(){$('navl').classList.remove('open')}});
window.addEventListener('scroll',function(){$('top2').style.display=scrollY>500?'block':'none'});$('top2').onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var E=[];try{E=JSON.parse(localStorage.getItem('nn_enq')||'[]')}catch(e){}
function save(){try{localStorage.setItem('nn_enq',JSON.stringify(E))}catch(e){}render()}
function byId(id){return ALL.filter(function(x){return x.id==id})[0]}
function render(){var n=0;E.forEach(function(r){n+=r.q});$('cnt').textContent=n;
$('lst').innerHTML=E.length?E.map(function(r,i){var x=byId(r.id);return '<div class="row"><span>'+B(x.n,x.nk)+' &times; '+r.q+'</span><button data-rm="'+i+'">'+B('Remove','ತೆಗೆಯಿರಿ')+'</button></div>'}).join(''):'<p>'+B('Your list is empty. Open a product and choose Add to enquiry.','ನಿಮ್ಮ ಪಟ್ಟಿ ಖಾಲಿಯಿದೆ. ಉತ್ಪನ್ನವನ್ನು ತೆರೆದು "ವಿಚಾರಣೆ ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ" ಆಯ್ಕೆಮಾಡಿ.')+'</p>';
var kn=LANG=='kn',t=(kn?'ನಮಸ್ಕಾರ, ನಾನು ಈ ಉತ್ಪನ್ನಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ: ':'Hello, I would like to enquire about: ')+E.map(function(r){var x=byId(r.id);return (kn?x.nk:x.n)+' x '+r.q}).join(', ');
$('wa').href='https://wa.me/919880211386?text='+encodeURIComponent(t);$('wa').style.display=E.length?'block':'none'}
$('lst').onclick=function(e){var b=e.target.closest('button'),i=b&&b.getAttribute('data-rm');if(i!==null&&i!==undefined){E.splice(+i,1);save()}};
function closeAll(){['ov','modal','drawer'].forEach(function(i){$(i).classList.remove('on')})}
$('ov').onclick=closeAll;document.addEventListener('keydown',function(e){if(e.key=='Escape')closeAll()});
$('enqBtn').onclick=function(){$('ov').classList.add('on');$('drawer').classList.add('on')};
function openP(id){var x=byId(id),q=1;closeAll();
$('modal').innerHTML='<button class="x" aria-label="Close">&times;</button><div class="mi">'+x.i()+'</div><div class="mb"><span class="tag'+(x.t?' live':'')+'">'+(x.t?B('Available now','ಈಗ ಲಭ್ಯ'):B(x.ge,x.g))+'</span><h3>'+B(x.n,x.nk)+'</h3><p>'+B(x.p,x.pk)+'</p><ul>'+PB.map(function(b){return '<li>'+B(b[0],b[1])+'</li>'}).join('')+'</ul><p><span class="q"><button data-d="-1">&minus;</button><span id="qq">1</span><button data-d="1">+</button></span></p><button class="btn full" id="add">'+B('Add to enquiry','ವಿಚಾರಣೆ ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ')+'</button></div>';
$('modal').classList.add('on');$('ov').classList.add('on');
$('modal').onclick=function(e){var bt=e.target.closest('button');if(!bt)return;var d=bt.getAttribute('data-d');if(d){q=Math.max(1,q+ +d);$('qq').textContent=q}if(bt.className=='x')closeAll();if(bt.id=='add'){var r=E.filter(function(z){return z.id==id})[0];if(r)r.q+=q;else E.push({id:id,q:q});save();closeAll();$('drawer').classList.add('on');$('ov').classList.add('on')}}}
$('groups').onclick=function(e){var c=e.target.closest('.card');if(c)openP(c.getAttribute('data-id'))};
$('groups').onkeydown=function(e){if(e.key=='Enter'){var c=e.target.closest('.card');if(c)openP(c.getAttribute('data-id'))}};
$('q').oninput=function(){var v=this.value.trim().toLowerCase(),r=$('sres');if(!v){r.style.display='none';return}
var m=ALL.filter(function(x){return (x.n+' '+x.nk+' '+x.p+' '+x.pk+' '+x.g+' '+x.ge).toLowerCase().indexOf(v)>-1});
r.innerHTML=m.length?m.map(function(x){return '<button data-id="'+x.id+'">'+B(x.n,x.nk)+' <small>'+(x.t?B('Available now','ಈಗ ಲಭ್ಯ'):B(x.ge,x.g))+'</small></button>'}).join(''):'<button>'+B('No match. Try 500 ml, ice or alkaline.','ಹೊಂದಾಣಿಕೆ ಇಲ್ಲ. 500 ಮಿ.ಲೀ, ಐಸ್ ಅಥವಾ ಆಲ್ಕಲೈನ್ ಹುಡುಕಿ.')+'</button>';r.style.display='block'};
$('sres').onclick=function(e){var b=e.target.closest('button'),id=b&&b.getAttribute('data-id');if(id){$('sres').style.display='none';$('q').value='';openP(id)}};
document.addEventListener('click',function(e){if(!e.target.closest('.sbox'))$('sres').style.display='none'});
function setLang(l){LANG=l;document.documentElement.setAttribute('data-lang',l);document.documentElement.lang=l;$('lang').textContent=l=='kn'?'English':'ಕನ್ನಡ';$('q').placeholder=l=='kn'?'ಹುಡುಕಿ: 500 ಮಿ.ಲೀ, 20 ಲೀಟರ್, ಐಸ್, ಆಲ್ಕಲೈನ್...':'Search 500 ml, 20 litre, ice, alkaline...';try{localStorage.setItem('nn_lang',l)}catch(e){}render()}
$('lang').onclick=function(){setLang(LANG=='kn'?'en':'kn')};
if(!(matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)&&document.body.animate){var F=$('fall');setInterval(function(){if(document.hidden||F.children.length>14)return;var d=document.createElement('i'),w=8+Math.random()*10;d.style.left=Math.random()*100+'%';d.style.width=w+'px';d.style.height=w*1.3+'px';F.appendChild(d);var a=d.animate([{transform:'translate(0,0)',opacity:0},{opacity:.8,offset:.1},{transform:'translate('+(Math.random()*80-40)+'px,'+(innerHeight+60)+'px)',opacity:0}],{duration:9000+Math.random()*7000});a.onfinish=function(){d.remove()}},1100)}
setLang(LANG);
