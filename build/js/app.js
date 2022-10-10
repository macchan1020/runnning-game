!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(n,r,function(e){return t[e]}.bind(null,r));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,i){"use strict";var n=Math.floor,r=i(1);i(2),i(3);var o=(0,r.init)().canvas;(0,r.initKeys)();var s,h=40,a=1,c=3,u=document.getElementById("score"),d=document.getElementById("help-message"),l=0,f=0,p=!1,g=(0,r.Sprite)({x:o.width,y:o.height-50,color:"#ff0",width:30,height:20,dx:-3,anchor:{x:1,y:1}}),m=(0,r.Sprite)({x:0,y:o.height-50,color:"#a0a0a0",width:o.width,height:50}),y=new Image;y.src="images/character_walk_sheet.png",y.onload=function(){var t=(0,r.SpriteSheet)({image:y,frameWidth:82,frameHeight:105,animations:{walk:{frames:"0..2",frameRate:4},jump:{frames:1,frameRate:1}}}),e=(0,r.Sprite)({x:o.width/2,y:305,anchor:{x:.3,y:.5},animations:t.animations});(s=(0,r.GameLoop)({update:function(){(0,r.keyPressed)("up")?(console.log("up"),function(t){++l<h&&(t.playAnimation("jump"),t.y-=c)}(e)):l=h,305>e.y?function(t){t.y+=a}(e):function(t){t.playAnimation("walk"),l=0}(e),e.update(),g.update(),0>g.x&&(g.x=o.width),e.collidesWith(g)?(console.log("collide"),f=0,p=!0,s.stop(),d.innerHTML="Enterを押してください"):f+=.2,u.innerHTML=n(f),0==n(f)%2&&(g.dx=3*-Math.random()-3),200<f&&(p=!0,s.stop(),d.innerHTML="クリア!!もう一度やる: Enterを押してください。")},render:function(){e.render(),m.render(),g.render()}})).start()},document.addEventListener("keyup",(function(t){p&&"Enter"==t.code&&(s.start(),p=!1,console.log("Enterを押してください。"),g.x=o.width,d.innerHTML="",f=0)}))},function(t,e,i){"use strict";function n(t,e){ut[t]=ut[t]||[],ut[t].push(e)}function r(t,e){let i;!ut[t]||0>(i=ut[t].indexOf(e))||ut[t].splice(i,1)}function o(t,...e){ut[t]&&ut[t].map(t=>t(...e))}function s(){return at}function h(){return ct}function a(t){if(at=document.getElementById(t)||t||document.querySelector("canvas"),!at)throw Error("You must provide a canvas element for the game");return ct=at.getContext("2d"),ct.imageSmoothingEnabled=!1,o("init"),{canvas:at,context:ct}}function c(t){return new dt(t)}function u(t,e){return new URL(t,e).href}function d(t,e){return[t.replace(gt,""),t?e.replace(pt,""):e].filter(t=>t).join("/")}function l(t){return t.split(".").pop()}function f(t){let e=t.replace("."+l(t),"");return 2==e.split("/").length?e.replace(pt,""):e}function p(){window.__k||(window.__k={dm:mt,u:u,d:bt,i:xt})}function g(t){yt=t}function m(t){wt=t}function y(t){_t=t}function w(t){return p(),new Promise((e,i)=>{let n,r,s;return n=d(yt,t),xt[n]?e(xt[n]):(r=new Image,r.onload=function(){s=u(n,window.location.href),xt[f(t)]=xt[n]=xt[s]=this,o("assetLoaded",this,t),e(this)},r.onerror=function(){i("Unable to load image "+n)},void(r.src=n))})}function _(t){return new Promise((e,i)=>{let n,r,s,h;return n=new Audio,r=function(t){return{wav:"",mp3:t.canPlayType("audio/mpeg;"),ogg:t.canPlayType('audio/ogg; codecs="vorbis"'),aac:t.canPlayType("audio/aac;")}}(n),(t=[].concat(t).reduce((t,e)=>t||(r[l(e)]?e:null),0))?(s=d(wt,t),vt[s]?e(vt[s]):(n.addEventListener("canplay",(function(){h=u(s,window.location.href),vt[f(t)]=vt[s]=vt[h]=this,o("assetLoaded",this,t),e(this)})),n.onerror=function(){i("Unable to load audio "+s)},n.src=s,void n.load())):i("cannot play any of the audio formats provided"+t)})}function x(t){let e,i;return p(),e=d(_t,t),bt[e]?Promise.resolve(bt[e]):fetch(e).then(t=>{if(!t.ok)throw t;return t.clone().json().catch(()=>t.text())}).then(n=>(i=u(e,window.location.href),"object"==typeof n&&mt.set(n,i),bt[f(t)]=bt[e]=bt[i]=n,o("assetLoaded",n,t),n))}function v(...t){return p(),Promise.all(t.map(t=>{let e=l([].concat(t)[0]);return e.match(lt)?w(t):e.match(ft)?_(t):x(t)}))}function b(){let t=s();h().clearRect(0,0,t.width,t.height)}function A({fps:t=60,clearCanvas:e=!0,update:i,render:n}={}){function r(){if(h=requestAnimationFrame(r),a=performance.now(),c=a-s,s=a,!(1e3<c)){for(o("tick"),d+=c;d>=l;)u.update(f),d-=l;p(),u.render()}}if(!i||!n)throw Error("You must provide update() and render() functions");let s,h,a,c,u,d=0,l=1e3/t,f=1/t,p=e?b:At;return u={update:i,render:n,isStopped:!0,start(){s=performance.now(),this.isStopped=!1,requestAnimationFrame(r)},stop(){this.isStopped=!0,cancelAnimationFrame(h)},_frame:r,set _last(t){s=t}},u}function S(t){let e=jt[t.code||t.which];Et[e]=!0,St[e]&&St[e](t)}function E(t){Et[jt[t.code||t.which]]=!1}function j(){Et={}}function P(){var t=String.fromCharCode;let e;for(e=0;26>e;e++)jt[e+65]=jt["Key"+t(e+65)]=t(e+97);for(e=0;10>e;e++)jt[48+e]=jt["Digit"+e]=""+e;window.addEventListener("keydown",S),window.addEventListener("keyup",E),window.addEventListener("blur",j)}function O(t,e){[].concat(t).map(t=>St[t]=e)}function k(t){[].concat(t).map(t=>St[t]=0)}function L(t){return!!Et[t]}function I(t){let e=t.substr(t.search(/[A-Z]/));return e[0].toLowerCase()+e.substr(1)}function M(t,e){let i=t.indexOf(e);-1!==i&&t.splice(i,1)}function D(t,e){let i=t.prototype;i&&(!i._inc&&(i._inc={},i._bInc=function(t,e,...i){return this._inc[e].before.reduce((e,i)=>{let n=i(t,...e);return n||e},i)},i._aInc=function(t,e,i,...n){return this._inc[e].after.reduce((e,i)=>{let r=i(t,e,...n);return r||e},i)}),Object.getOwnPropertyNames(e).forEach(t=>{let n=I(t);i[n]&&(!i["_o"+n]&&(i["_o"+n]=i[n],i[n]=function(...t){let e=this._bInc(this,n,...t),r=i["_o"+n].call(this,...e);return this._aInc(this,n,r,...t)}),!i._inc[n]&&(i._inc[n]={before:[],after:[]}),t.startsWith("before")?i._inc[n].before.push(e[t]):t.startsWith("after")&&i._inc[n].after.push(e[t]))}))}function C(t,e){let i=t.prototype;i&&i._inc&&Object.getOwnPropertyNames(e).forEach(t=>{let n=I(t);t.startsWith("before")?M(i._inc[n].before,e[t]):t.startsWith("after")&&M(i._inc[n].after,e[t])})}function T(t,e){let i=t.prototype;i&&Object.getOwnPropertyNames(e).forEach(t=>{i[t]||(i[t]=e[t])})}function z(t,e){const i=e||Dt;let n=t.x,r=t.y;t.anchor&&(n-=t.width*t.anchor.x,r-=t.height*t.anchor.y);let o=i.x-st(n,ht(i.x,n+t.width)),s=i.y-st(r,ht(i.y,r+t.height));return o*o+s*s<i.radius*i.radius}function R(t){const e=t||Dt;let i,n,r=Ot.length?Ot:Pt;for(let t=r.length-1;0<=t;t--)if(i=r[t],n=i.collidesWithPointer?i.collidesWithPointer(e):z(i,e),n)return i}function Y(t){let e=void 0===t.button?"left":Mt[t.button];It[e]=!0,H(t,"onDown")}function W(t){let e=void 0===t.button?"left":Mt[t.button];It[e]=!1,H(t,"onUp")}function K(t){H(t,"onOver")}function U(){It={}}function H(t,e){let i=s();if(!i)return;let n,r,o=i.height/i.offsetHeight,h=i.getBoundingClientRect(),a=-1!==["touchstart","touchmove","touchend"].indexOf(t.type);if(a){Dt.touches={};for(var c=0;c<t.touches.length;c++)Dt.touches[t.touches[c].identifier]={id:t.touches[c].identifier,x:(t.touches[c].clientX-h.left)*o,y:(t.touches[c].clientY-h.top)*o,changed:!1};for(c=t.changedTouches.length;c--;){const i=t.changedTouches[c].identifier;void 0!==Dt.touches[i]&&(Dt.touches[i].changed=!0),n=t.changedTouches[c].clientX,r=t.changedTouches[c].clientY;let s=R({id:i,x:(n-h.left)*o,y:(r-h.top)*o,radius:Dt.radius});s&&s[e]&&s[e](t),kt[e]&&kt[e](t,s)}}else n=t.clientX,r=t.clientY;if(Dt.x=(n-h.left)*o,Dt.y=(r-h.top)*o,t.preventDefault(),!a){let i=R();i&&i[e]&&i[e](t),kt[e]&&kt[e](t,i)}}function X(){let t=s();t.addEventListener("mousedown",Y),t.addEventListener("touchstart",Y),t.addEventListener("mouseup",W),t.addEventListener("touchend",W),t.addEventListener("touchcancel",W),t.addEventListener("blur",U),t.addEventListener("mousemove",K),t.addEventListener("touchmove",K),n("tick",()=>{Ot.length=0,Pt.map(t=>{Ot.push(t)}),Pt.length=0})}function N(t){[].concat(t).map(t=>{t._r||(t._r=t.render,t.render=function(){Pt.push(this),this._r()},Lt.push(t))})}function $(t){[].concat(t).map(t=>{t.render=t._r,t._r=0;let e=Lt.indexOf(t);-1!==e&&Lt.splice(e,1)})}function B(t){return!!Lt.includes(t)&&R()===t}function q(t){kt.onDown=t}function F(t){kt.onUp=t}function G(t){return!!It[t]}function J(t){return new Ct(t)}function Q(t,e){let i=[],n=e.x+e.width/2,r=e.y+e.height/2,o=t.y<r&&t.y+t.height>=e.y,s=t.y+t.height>=r&&t.y<e.y+e.height;return t.x<n&&t.x+t.width>=e.x&&(o&&i.push(0),s&&i.push(2)),t.x+t.width>=n&&t.x<e.x+e.width&&(o&&i.push(1),s&&i.push(3)),i}function V(t){return new Tt(t)}function Z(t,e,i={}){let n=new zt(t,e);return i._c&&(n.clamp(i._a,i._b,i._d,i._e),n.x=t,n.y=e),n}function tt(t){return new Rt(t)}function et(t){if(+t===t)return t;let e=[],i=t.split(".."),n=+i[0],r=+i[1],o=n;if(n<r)for(;o<=r;o++)e.push(o);else for(;o>=r;o--)e.push(o);return e}function it(t){return new Yt(t)}function nt(t,e){void 0===e?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))}function rt(t){let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch(e){}return e}function ot(t={}){function e(t){return 0|t/v.tileheight}function i(t){return 0|t/v.tilewidth}function n(){v.layers&&v.layers.map(t=>{t._d=!1,w[t.name]=t,!1!==t.visible&&v._r(t,y)})}function r(t){const{width:e,height:i}=s(),n=ht(t.width,e),r=ht(t.height,i);v.context.drawImage(t,v.sx,v.sy,n,r,0,0,n,r)}let{width:o,height:a,tilewidth:c,tileheight:u,context:d=h(),tilesets:l,layers:f}=t,p=o*c,g=a*u,m=document.createElement("canvas"),y=m.getContext("2d");m.width=p,m.height=g;let w={},_={},x=[],v=Object.assign({context:d,mapwidth:p,mapheight:g,_sx:0,_sy:0,_d:!1,get sx(){return this._sx},get sy(){return this._sy},set sx(t){this._sx=ht(st(0,t),p-s().width),x.forEach(t=>t.sx=this._sx)},set sy(t){this._sy=ht(st(0,t),g-s().height),x.forEach(t=>t.sy=this._sy)},render(){this._d&&(this._d=!1,this._p()),r(m)},renderLayer(t){let e=_[t],i=w[t];e||(e=document.createElement("canvas"),e.width=p,e.height=g,_[t]=e,v._r(i,e.getContext("2d"))),i._d&&(i._d=!1,e.getContext("2d").clearRect(0,0,e.width,e.height),v._r(i,e.getContext("2d"))),r(e)},layerCollidesWith(t,n){let r=n.x,o=n.y;n.anchor&&(r-=n.width*n.anchor.x,o-=n.height*n.anchor.y);let s=e(o),h=i(r),a=e(o+n.height),c=i(r+n.width),u=w[t];for(let t=s;t<=a;t++)for(let e=h;e<=c;e++)if(u.data[e+t*this.width])return!0;return!1},tileAtLayer(t,n){let r=n.row||e(n.y),o=n.col||i(n.x);return w[t]?w[t].data[o+r*v.width]:-1},setTileAtLayer(t,n,r){let o=n.row||e(n.y),s=n.col||i(n.x);w[t]&&(w[t]._d=!0,w[t].data[s+o*v.width]=r)},setLayer(t,e){w[t]&&(w[t]._d=!0,w[t].data=e)},addObject(t){x.push(t),t.sx=this._sx,t.sy=this._sy},removeObject(t){let e=x.indexOf(t);-1!==e&&(x.splice(e,1),t.sx=t.sy=0)},_r:function(t,e){e.save(),e.globalAlpha=t.opacity,(t.data||[]).map((t,i)=>{if(!t)return;let n;for(let e=v.tilesets.length-1;0<=e&&(n=v.tilesets[e],!(1<=t/n.firstgid));e--);let r=n.tilewidth||v.tilewidth,o=n.tileheight||v.tileheight,s=n.margin||0,h=n.image,a=t-n.firstgid,c=n.columns||0|h.width/(r+s),u=i%v.width*r,d=(0|i/v.width)*o;e.drawImage(h,a%c*(r+s),(0|a/c)*(o+s),r,o,u,d,r,o)}),e.restore()},_p:n,layerCanvases:_,layerMap:w},t);return v.tilesets.map(e=>{let i=(window.__k?window.__k.dm.get(t):"")||window.location.href;if(e.source){if(!window.__k)throw Error('You must use "load" or "loadData" to resolve tileset.source');let t=window.__k.d[window.__k.u(e.source,i)];if(!t)throw Error(`You must load the tileset source "${e.source}" before loading the tileset`);Object.keys(t).map(i=>{e[i]=t[i]})}if(""+e.image===e.image){if(!window.__k)throw Error('You must use "load" or "loadImage" to resolve tileset.image');let t=window.__k.i[window.__k.u(e.image,i)];if(!t)throw Error(`You must load the image "${e.image}" before loading the tileset`);e.image=t}}),n(),v}var st=Math.max,ht=Math.min;i.r(e),i.d(e,"Animation",(function(){return c})),i.d(e,"imageAssets",(function(){return xt})),i.d(e,"audioAssets",(function(){return vt})),i.d(e,"dataAssets",(function(){return bt})),i.d(e,"setImagePath",(function(){return g})),i.d(e,"setAudioPath",(function(){return m})),i.d(e,"setDataPath",(function(){return y})),i.d(e,"loadImage",(function(){return w})),i.d(e,"loadAudio",(function(){return _})),i.d(e,"loadData",(function(){return x})),i.d(e,"load",(function(){return v})),i.d(e,"init",(function(){return a})),i.d(e,"getCanvas",(function(){return s})),i.d(e,"getContext",(function(){return h})),i.d(e,"on",(function(){return n})),i.d(e,"off",(function(){return r})),i.d(e,"emit",(function(){return o})),i.d(e,"GameLoop",(function(){return A})),i.d(e,"keyMap",(function(){return jt})),i.d(e,"initKeys",(function(){return P})),i.d(e,"bindKeys",(function(){return O})),i.d(e,"unbindKeys",(function(){return k})),i.d(e,"keyPressed",(function(){return L})),i.d(e,"registerPlugin",(function(){return D})),i.d(e,"unregisterPlugin",(function(){return C})),i.d(e,"extendObject",(function(){return T})),i.d(e,"initPointer",(function(){return X})),i.d(e,"pointer",(function(){return Dt})),i.d(e,"track",(function(){return N})),i.d(e,"untrack",(function(){return $})),i.d(e,"pointerOver",(function(){return B})),i.d(e,"onPointerDown",(function(){return q})),i.d(e,"onPointerUp",(function(){return F})),i.d(e,"pointerPressed",(function(){return G})),i.d(e,"Pool",(function(){return J})),i.d(e,"Quadtree",(function(){return V})),i.d(e,"Sprite",(function(){return tt})),i.d(e,"SpriteSheet",(function(){return it})),i.d(e,"setStoreItem",(function(){return nt})),i.d(e,"getStoreItem",(function(){return rt})),i.d(e,"TileEngine",(function(){return ot})),i.d(e,"Vector",(function(){return Z}));let at,ct,ut={};class dt{constructor({spriteSheet:t,frames:e,frameRate:i,loop:n=!0}={}){this.spriteSheet=t,this.frames=e,this.frameRate=i,this.loop=n;let{width:r,height:o,margin:s=0}=t.frame;this.width=r,this.height=o,this.margin=s,this._f=0,this._a=0}clone(){return c(this)}reset(){this._f=0,this._a=0}update(t=1/60){if(this.loop||this._f!=this.frames.length-1)for(this._a+=t;1<=this._a*this.frameRate;)this._f=++this._f%this.frames.length,this._a-=1/this.frameRate}render({x:t,y:e,width:i=this.width,height:n=this.height,context:r=h()}={}){let o=0|this.frames[this._f]/this.spriteSheet._f,s=0|this.frames[this._f]%this.spriteSheet._f;r.drawImage(this.spriteSheet.image,s*this.width+(2*s+1)*this.margin,o*this.height+(2*o+1)*this.margin,this.width,this.height,t,e,i,n)}}c.prototype=dt.prototype,c.class=dt;let lt=/(jpeg|jpg|gif|png)$/,ft=/(wav|mp3|ogg|aac)$/,pt=/^\//,gt=/\/$/,mt=new WeakMap,yt="",wt="",_t="",xt={},vt={},bt={};const At=()=>{};let St={},Et={},jt={Enter:"enter",Escape:"esc",Space:"space",ArrowLeft:"left",ArrowUp:"up",ArrowRight:"right",ArrowDown:"down",13:"enter",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"},Pt=[],Ot=[],kt={},Lt=[],It={},Mt={0:"left",1:"middle",2:"right"},Dt={x:0,y:0,radius:5};class Ct{constructor({create:t,maxSize:e=1024}={}){let i;if(!t||!(i=t())||!(i.update&&i.init&&i.isAlive))throw Error("Must provide create() function which returns an object with init(), update(), and isAlive() functions");this._c=t,this.objects=[t()],this.size=0,this.maxSize=e}get(t={}){if(this.size===this.objects.length){if(this.size===this.maxSize)return;for(let t=0;t<this.size&&this.objects.length<this.maxSize;t++)this.objects.push(this._c())}let e=this.objects[this.size];return this.size++,e.init(t),e}getAliveObjects(){return this.objects.slice(0,this.size)}clear(){this.size=this.objects.length=0,this.objects.push(this._c())}update(t){let e,i=!1;for(let n=this.size;n--;)e=this.objects[n],e.update(t),e.isAlive()||(i=!0,this.size--);i&&this.objects.sort((t,e)=>e.isAlive()-t.isAlive())}render(){for(let t=this.size;t--;)this.objects[t].render()}}J.prototype=Ct.prototype,J.class=Ct;class Tt{constructor({maxDepth:t=3,maxObjects:e=25,bounds:i}={}){this.maxDepth=t,this.maxObjects=e;let n=s();this.bounds=i||{x:0,y:0,width:n.width,height:n.height},this._b=!1,this._d=0,this._o=[],this._s=[],this._p=null}clear(){this._s.map((function(t){t.clear()})),this._b=!1,this._o.length=0}get(t){for(let e,i,n=new Set;this._s.length&&this._b;){for(e=Q(t,this.bounds),i=0;i<e.length;i++)this._s[e[i]].get(t).forEach(t=>n.add(t));return Array.from(n)}return this._o.filter(e=>e!==t)}add(){let t,e,i,n;for(e=0;e<arguments.length;e++)if(i=arguments[e],Array.isArray(i))this.add.apply(this,i);else if(this._b)this._a(i);else if(this._o.push(i),this._o.length>this.maxObjects&&this._d<this.maxDepth){for(this._sp(),t=0;n=this._o[t];t++)this._a(n);this._o.length=0}}_a(t,e,i){for(e=Q(t,this.bounds),i=0;i<e.length;i++)this._s[e[i]].add(t)}_sp(t,e,i){if(this._b=!0,!this._s.length)for(t=0|this.bounds.width/2,e=0|this.bounds.height/2,i=0;4>i;i++)this._s[i]=V({bounds:{x:this.bounds.x+(1==i%2?t:0),y:this.bounds.y+(2<=i?e:0),width:t,height:e},maxDepth:this.maxDepth,maxObjects:this.maxObjects}),this._s[i]._d=this._d+1,this._s[i]._p=this}}V.prototype=Tt.prototype,V.class=Tt;class zt{constructor(t=0,e=0){this._x=t,this._y=e}add(t,e=1){return Z(this.x+(t.x||0)*e,this.y+(t.y||0)*e,this)}clamp(t,e,i,n){this._c=!0,this._a=t,this._b=e,this._d=i,this._e=n}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?ht(st(this._a,t),this._d):t}set y(t){this._y=this._c?ht(st(this._b,t),this._e):t}}Z.prototype=zt.prototype,Z.class=zt;class Rt{constructor(t){this.init(t)}init(t={}){let{x:e,y:i,dx:n,dy:r,ddx:o,ddy:s,width:a,height:c,image:u}=t;for(let a in this.position=Z(e,i),this.velocity=Z(n,r),this.acceleration=Z(o,s),this._fx=this._fy=1,this.width=this.height=this.rotation=0,this.ttl=1/0,this.anchor={x:0,y:0},this.context=h(),t)this[a]=t[a];u&&(this.width=void 0===a?u.width:a,this.height=void 0===c?u.height:c),this.sx=0,this.sy=0}get x(){return this.position.x}get y(){return this.position.y}get dx(){return this.velocity.x}get dy(){return this.velocity.y}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}get animations(){return this._a}get viewX(){return this.x-this.sx}get viewY(){return this.y-this.sy}get width(){return this._w}get height(){return this._h}set x(t){this.position.x=t}set y(t){this.position.y=t}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}set animations(t){let e,i;for(e in this._a={},t)this._a[e]=t[e].clone(),i=i||this._a[e];this.currentAnimation=i,this.width=this.width||i.width,this.height=this.height||i.height}set viewX(t){}set viewY(t){}set width(t){let e=0>t?-1:1;this._fx=e,this._w=t*e}set height(t){let e=0>t?-1:1;this._fy=e,this._h=t*e}isAlive(){return 0<this.ttl}collidesWith(t){if(this.rotation||t.rotation)return null;let e=this.x-this.width*this.anchor.x,i=this.y-this.height*this.anchor.y,n=t.x,r=t.y;return t.anchor&&(n-=t.width*t.anchor.x,r-=t.height*t.anchor.y),e<n+t.width&&e+this.width>n&&i<r+t.height&&i+this.height>r}update(t){this.advance(t)}render(){this.draw()}playAnimation(t){this.currentAnimation=this.animations[t],this.currentAnimation.loop||this.currentAnimation.reset()}advance(t){this.velocity=this.velocity.add(this.acceleration,t),this.position=this.position.add(this.velocity,t),this.ttl--,this.currentAnimation&&this.currentAnimation.update(t)}draw(){let t=-this.width*this.anchor.x,e=-this.height*this.anchor.y;if(this.context.save(),this.context.translate(this.viewX,this.viewY),this.rotation&&this.context.rotate(this.rotation),-1==this._fx||-1==this._fy){let i=this.width/2+t,n=this.height/2+e;this.context.translate(i,n),this.context.scale(this._fx,this._fy),this.context.translate(-i,-n)}this.image?this.context.drawImage(this.image,0,0,this.image.width,this.image.height,t,e,this.width,this.height):this.currentAnimation?this.currentAnimation.render({x:t,y:e,width:this.width,height:this.height,context:this.context}):(this.context.fillStyle=this.color,this.context.fillRect(t,e,this.width,this.height)),this.context.restore()}}tt.prototype=Rt.prototype,tt.class=Rt;class Yt{constructor({image:t,frameWidth:e,frameHeight:i,frameMargin:n,animations:r}={}){if(!t)throw Error("You must provide an Image for the SpriteSheet");this.animations={},this.image=t,this.frame={width:e,height:i,margin:n},this._f=0|t.width/e,this.createAnimations(r)}createAnimations(t){let e,i;for(i in t){let{frames:n,frameRate:r,loop:o}=t[i];if(e=[],void 0===n)throw Error("Animation "+i+" must provide a frames property");[].concat(n).map(t=>{e=e.concat(et(t))}),this.animations[i]=c({spriteSheet:this,frames:e,frameRate:r,loop:o})}}}it.prototype=Yt.prototype,it.class=Yt,e.default={Animation:c,imageAssets:xt,audioAssets:vt,dataAssets:bt,setImagePath:g,setAudioPath:m,setDataPath:y,loadImage:w,loadAudio:_,loadData:x,load:v,init:a,getCanvas:s,getContext:h,on:n,off:r,emit:o,GameLoop:A,keyMap:jt,initKeys:P,bindKeys:O,unbindKeys:k,keyPressed:L,registerPlugin:D,unregisterPlugin:C,extendObject:T,initPointer:X,pointer:Dt,track:N,untrack:$,pointerOver:B,onPointerDown:q,onPointerUp:F,pointerPressed:G,Pool:J,Quadtree:V,Sprite:tt,SpriteSheet:it,setStoreItem:nt,getStoreItem:rt,TileEngine:ot,Vector:Z}},function(){},function(){}]);
//# sourceMappingURL=app.js.map