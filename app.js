(function(){
var EN={"faqh": "Frequently asked questions", "h1": "Create your QR code <span class=\"g\">in seconds</span>", "sub": "Links, WiFi, WhatsApp or email. Customize the colors and download in high-quality PNG or SVG. Your content is generated in your browser and we never store it.", "bdg": "100% free · no sign-up", "des": "🎨 Design", "cc": "Code color", "bg": "Background", "sh": "Module shape", "ec": "Error correction", "ps": "PNG size", "em": "Type something on the left to see your QR code", "dp": "Download PNG", "ds": "Download SVG", "ad": "Advertisement", "fa": "<b>Easy</b>Pick the type, fill in the details, done.", "fb": "<b>Reliable</b>No expiry and no middlemen: the QR points straight to your content.", "fc": "<b>Private</b>Generated in your browser; we don’t store your data.", "q1": "Do QR codes expire?", "q1a": "No. They are static codes: they hold your link or text directly, so they work forever as long as that content still exists.", "q2": "Is it really free? Are there limits?", "q2a": "Yes. There is no limit on codes, no watermarks and no sign-up. The site is supported by advertising.", "q3": "How do I make a WiFi QR code?", "q3a": "Choose the WiFi tab, enter the network name and password, and download the code. Anyone who scans it connects without typing anything.", "q4": "How do I create a WhatsApp QR code?", "q4a": "Choose the WhatsApp tab, enter your number with country code (no + or spaces) and, optionally, a prefilled message. The code opens a chat with you.", "more": "See all questions →", "t_i": "Free QR code generator · WiFi, WhatsApp, links | QrReady!", "d_i": "Create free QR codes with no sign-up: links, WiFi, WhatsApp and email. Customize colors and download as PNG or SVG. No expiry.", "n1": "Generator", "n2": "FAQ", "n3": "Contact", "f1": "Privacy policy", "faqs": "Everything you need to know about QR codes and this generator.", "q5": "PNG or SVG?", "q5a": "Use PNG for screens, social media and documents. Use SVG to print at any size (posters, banners, labels) without losing sharpness.", "q6": "What is error correction?", "q6a": "It lets the code be read even if it is dirty or damaged. Levels L, M, Q and H recover roughly 7%, 15%, 25% and 30% of the data. A higher level makes the code denser.", "q7": "My QR code won’t scan. What can I do?", "q7a": "Use a dark code on a light background with good contrast, print it at least 2 × 2 cm, leave a white margin around it, shorten the content and test it with your phone before printing.", "q8": "Can I use the codes on products or printed material?", "q8a": "Yes, you can use them freely in personal and commercial projects, with no attribution.", "q9": "What is the difference between a static and a dynamic QR code?", "q9a": "A static code stores the data inside the code itself and cannot be edited. A dynamic one redirects through a service, letting you change the destination and track scans. This generator creates static codes.", "q10": "Do you store my data?", "q10a": "No. The code is generated in your browser and the content you type is not sent to any server. See the privacy policy for details about advertising and cookies.", "t_f": "QR code FAQ | QrReady!", "d_f": "Answers about QR codes: expiry, WiFi, WhatsApp, PNG vs SVG, error correction and more.", "ch": "Contact", "cs": "Questions, suggestions or problems? Write to us and we’ll reply as soon as we can.", "c1": "Your name", "c2": "Your email", "c3": "Message", "c4": "Send message", "c5": "Your email app will open with the message ready to send. You can also write directly to", "t_c": "Contact | QrReady!", "d_c": "Contact the QrReady! team with questions, suggestions or issues.", "p0": "What information we handle", "p0a": "The content you type to create a QR code (links, WiFi passwords, messages, etc.) is processed only in your browser. It is not sent to or stored on our servers.", "p1": "Local storage", "p1a": "We save a single preference in your browser: your chosen language. It contains no personal data and you can delete it from your browser settings.", "p2": "Advertising and cookies", "p2a": "This site may display Google AdSense ads. Google and its advertising partners may use cookies and identifiers to show ads based on your visits to this and other sites. You can manage or turn off personalized ads at google.com/settings/ads, and learn how Google uses data at policies.google.com/technologies/partner-sites.", "p3": "Server logs", "p3a": "The site is hosted on GitHub Pages. GitHub may log technical data such as your IP address and browser when serving pages, according to its own privacy policy.", "p4": "Contact by email", "p4a": "If you write to us, we will use your email and message only to reply, and we will not share them with third parties.", "p5": "Children", "p5a": "This site is not directed to children under 13 and we do not knowingly collect information from them.", "p6": "Changes to this policy", "p6a": "We may update this policy from time to time. The date of the latest update appears at the top of the page.", "ph": "Privacy policy", "pu": "Last updated: November 23, 2026", "pc": "Questions? Write to us from the", "t_p": "Privacy policy | QrReady!", "d_p": "How QrReady! handles your data, cookies and advertising."};
var lang='es';try{var sv=localStorage.getItem('qr_lang');lang=sv||((navigator.language||'es').slice(0,2)==='en'?'en':'es')}catch(e){}
var $=function(i){return document.getElementById(i)};
function L(x){return Array.isArray(x)?x[lang==='en'?1:0]:x}
function tr(sel,attr,get,set){document.querySelectorAll(sel).forEach(function(e){if(e._es===undefined)e._es=get(e);var k=e.getAttribute(attr);set(e,(lang==='en'&&EN[k]!==undefined)?EN[k]:e._es)})}
function apply(){document.documentElement.lang=lang;
 tr('[data-i]','data-i',function(e){return e.innerHTML},function(e,v){e.innerHTML=v});
 tr('[data-ic]','data-ic',function(e){return e.content},function(e,v){e.content=v});
 var b=$('lang');if(b)b.textContent=lang==='en'?'ES':'EN';
 if(window.QR)QR.refresh()}
var lb=$('lang');if(lb)lb.onclick=function(){lang=lang==='en'?'es':'en';try{localStorage.setItem('qr_lang',lang)}catch(e){}apply()};

var cb=$('cbtn');if(cb)cb.onclick=function(){var n=$('cn').value,e=$('ce').value,m=$('cm').value;
 var s=lang==='en'?'Message from QrReady! contact form':'Mensaje desde el formulario de QrReady!';
 location.href='mailto:TU-CORREO@ejemplo.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(m+'\n\n— '+n+' ('+e+')')};

if($('cv')){
var TYPES={
 url:{n:['Enlace / Texto','Link / Text'],f:[{k:'v',l:['Enlace o texto','Link or text'],t:'area',p:'https://tusitio.com',d:'https://tusitio.com'}],b:function(v){return v.v.trim()}},
 wifi:{n:['WiFi','WiFi'],f:[{k:'s',l:['Nombre de la red (SSID)','Network name (SSID)']},{k:'p',l:['Contraseña','Password']},{k:'t',l:['Seguridad','Security'],t:'sel',o:[['WPA','WPA/WPA2/WPA3'],['WEP','WEP'],['nopass',['Sin contraseña','No password']]]}],
   b:function(v){if(!v.s.trim())return '';var e=function(x){return x.replace(/([\\;,:"])/g,'\\$1')};return 'WIFI:T:'+v.t+';S:'+e(v.s)+';'+(v.t==='nopass'?'':'P:'+e(v.p)+';')+';'}},
 wa:{n:['WhatsApp','WhatsApp'],f:[{k:'n',l:['Número con código de país','Number with country code'],p:'593991234567'},{k:'m',l:['Mensaje (opcional)','Message (optional)'],t:'area'}],
   b:function(v){var n=v.n.replace(/\D/g,'');if(!n)return '';return 'https://wa.me/'+n+(v.m.trim()?'?text='+encodeURIComponent(v.m.trim()):'')}},
 mail:{n:['Correo','Email'],f:[{k:'a',l:['Dirección de correo','Email address'],p:'hola@ejemplo.com'},{k:'s',l:['Asunto (opcional)','Subject (optional)']},{k:'m',l:['Mensaje (opcional)','Message (optional)'],t:'area'}],
   b:function(v){if(!v.a.trim())return '';var q=[];if(v.s)q.push('subject='+encodeURIComponent(v.s));if(v.m)q.push('body='+encodeURIComponent(v.m));return 'mailto:'+v.a.trim()+(q.length?'?'+q.join('&'):'')}}
};
var FG=['#111111','#4f2fe0','#0f8a5f','#d6336c','#e8590c'],BG=['#ffffff','#f3f0ff','#e6fcf5','#fff4e6'];
var SH=[['sq',['Cuadrado','Square']],['rd',['Redondeado','Rounded']],['dt',['Puntos','Dots']]];
var M={inv:['⚠ Colores invertidos: muchos lectores no los reconocen. Usa un código oscuro sobre fondo claro.','⚠ Inverted colors: many scanners can’t read them. Use a dark code on a light background.'],
 low:['⚠ Poco contraste: es posible que no se pueda escanear.','⚠ Low contrast: it may not scan.'],
 big:['Mucho contenido: el QR será denso. Considera acortar el texto.','A lot of content: the QR will be dense. Consider shortening the text.'],
 ok:['✓ Listo para escanear.','✓ Ready to scan.'],long:['El contenido es demasiado largo para un código QR.','The content is too long for a QR code.'],dl:['✓ Descargado: ','✓ Downloaded: ']};
var st={type:'url',vals:{},fg:'#111111',bg:'#ffffff',shape:'sq'},qr=null,text='',cv=$('cv');

function mkTabs(){var t=$('tabs');t.innerHTML='';Object.keys(TYPES).forEach(function(k){var b=document.createElement('button');b.className='tab';b.setAttribute('role','tab');b.textContent=L(TYPES[k].n);b.setAttribute('aria-selected',k===st.type);b.onclick=function(){st.type=k;mkTabs();mkFields();render()};t.appendChild(b)})}
function mkFields(){var box=$('fields');box.innerHTML='';TYPES[st.type].f.forEach(function(f){
  var key=st.type+'.'+f.k;if(st.vals[key]===undefined)st.vals[key]=f.d||(f.o?f.o[0][0]:'');
  var w=document.createElement('div');w.className='f';var l=document.createElement('label');l.textContent=L(f.l);l.htmlFor='in-'+f.k;var el;
  if(f.t==='area')el=document.createElement('textarea');
  else if(f.t==='sel'){el=document.createElement('select');f.o.forEach(function(o){var op=document.createElement('option');op.value=o[0];op.textContent=L(o[1]);el.appendChild(op)})}
  else{el=document.createElement('input');el.type='text'}
  el.id='in-'+f.k;if(f.p)el.placeholder=f.p;el.value=st.vals[key];
  el.oninput=el.onchange=function(){st.vals[key]=el.value;render()};
  w.appendChild(l);w.appendChild(el);box.appendChild(w)})}
function mkSw(id,list,prop){var c=$(id);c.innerHTML='';list.forEach(function(col){var b=document.createElement('button');b.style.background=col;b.setAttribute('aria-label',col);b.setAttribute('aria-pressed',st[prop]===col);b.onclick=function(){st[prop]=col;mkSw(id,list,prop);render()};c.appendChild(b)});
  var i=document.createElement('input');i.type='color';i.value=st[prop];i.setAttribute('aria-label','Color');i.oninput=function(){st[prop]=i.value;c.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed','false')});render()};c.appendChild(i)}
function mkShape(){var s=$('shape');s.innerHTML='';SH.forEach(function(o){var b=document.createElement('button');b.textContent=L(o[1]);b.setAttribute('aria-pressed',st.shape===o[0]);b.onclick=function(){st.shape=o[0];mkShape();render()};s.appendChild(b)})}

function lum(h){var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);var f=function(c){c/=255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)};return .2126*f(r)+.7152*f(g)+.0722*f(b)}
function contrast(){var a=lum(st.fg),b=lum(st.bg);return {r:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),inv:a>b}}
function build(){var v={};TYPES[st.type].f.forEach(function(f){v[f.k]=st.vals[st.type+'.'+f.k]||''});text=TYPES[st.type].b(v);qr=null;
  if(!text)return;try{qrcode.stringToBytes=qrcode.stringToBytesFuncs['UTF-8'];var q=qrcode(0,$('ecl').value);q.addData(text,'Byte');q.make();qr=q}catch(e){qr=null}}
function fin(r,c,n){return (r<7&&c<7)||(r<7&&c>=n-7)||(r>=n-7&&c<7)}
function shapes(size){var n=qr.getModuleCount(),m=3,u=size/(n+2*m),out=[];
  for(var r=0;r<n;r++)for(var c=0;c<n;c++){if(qr.isDark(r,c))out.push({x:(c+m)*u,y:(r+m)*u,u:u,f:fin(r,c,n)})}return out}
function draw(canvas,size){var ctx=canvas.getContext('2d');canvas.width=canvas.height=size;ctx.fillStyle=st.bg;ctx.fillRect(0,0,size,size);ctx.fillStyle=st.fg;
  shapes(size).forEach(function(o){
    if(st.shape==='sq'||o.f){ctx.fillRect(o.x,o.y,o.u+.5,o.u+.5)}
    else if(st.shape==='dt'){ctx.beginPath();ctx.arc(o.x+o.u/2,o.y+o.u/2,o.u*.46,0,6.2832);ctx.fill()}
    else{ctx.beginPath();if(ctx.roundRect)ctx.roundRect(o.x,o.y,o.u,o.u,o.u*.35);else ctx.rect(o.x,o.y,o.u,o.u);ctx.fill()}})}
function svg(){var p='';shapes(1000).forEach(function(o){var x=o.x.toFixed(2),y=o.y.toFixed(2),u=o.u.toFixed(2);
    if(st.shape==='sq'||o.f)p+='<rect x="'+x+'" y="'+y+'" width="'+u+'" height="'+u+'"/>';
    else if(st.shape==='dt')p+='<circle cx="'+(o.x+o.u/2).toFixed(2)+'" cy="'+(o.y+o.u/2).toFixed(2)+'" r="'+(o.u*.46).toFixed(2)+'"/>';
    else p+='<rect x="'+x+'" y="'+y+'" width="'+u+'" height="'+u+'" rx="'+(o.u*.35).toFixed(2)+'"/>'});
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" shape-rendering="geometricPrecision"><rect width="1000" height="1000" fill="'+st.bg+'"/><g fill="'+st.fg+'">'+p+'</g></svg>'}
function render(){build();var ok=!!qr,m=$('msg');$('empty').style.display=ok?'none':'grid';cv.style.visibility=ok?'visible':'hidden';$('dlpng').disabled=$('dlsvg').disabled=!ok;
  if(!ok){m.textContent=text?L(M.long):'';return}
  draw(cv,600);var c=contrast(),w=function(s){m.innerHTML='<span class="warn"></span>';m.firstChild.textContent=s};
  if(c.inv)w(L(M.inv));else if(c.r<3)w(L(M.low));else if(text.length>350)w(L(M.big));else m.textContent=L(M.ok)}
function save(name,data,mime){var blob=data instanceof Blob?data:new Blob([data],{type:mime}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);$('msg').textContent=L(M.dl)+name}
$('dlpng').onclick=function(){var c=document.createElement('canvas');draw(c,parseInt($('px').value,10));c.toBlob(function(b){if(b)save('qrready.png',b,'image/png')},'image/png')};
$('dlsvg').onclick=function(){save('qrready.svg',svg(),'image/svg+xml')};
$('ecl').onchange=render;
window.QR={refresh:function(){mkTabs();mkFields();render();mkShape()}};
mkSw('fgsw',FG,'fg');mkSw('bgsw',BG,'bg');
}
apply();
})();
