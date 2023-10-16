(function(a,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("@arcgis/core/Map"),require("@arcgis/core/views/SceneView"),require("@arcgis/core/views/MapView")):typeof define=="function"&&define.amd?define(["exports","@arcgis/core/Map","@arcgis/core/views/SceneView","@arcgis/core/views/MapView"],l):(a=typeof globalThis<"u"?globalThis:a||self,l(a["webgis-arcgis"]={},a["@arcgis"].core.Map,a["@arcgis"].core.views.SceneView,a["@arcgis"].core.views.MapView))})(this,function(a,l,g,x){var b,v,z,pt,U,gt,M,F,dt,m,w,W,ut,O,et,V,T,L,D,N,$,_,R,A,X,j,rt,J,mt,K,wt,E,it,H,Q,yt,q,at,Y,Ct,G,ot,Z,vt,k,At,I,y,P;"use strict";var nt=(a,l,g)=>{if(!l.has(a))throw TypeError("Cannot "+g)};var n=(a,l,g)=>(nt(a,l,"read from private field"),g?g.call(a):l.get(a)),r=(a,l,g)=>{if(l.has(a))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(a):l.set(a,g)},f=(a,l,g,x)=>(nt(a,l,"write to private field"),x?x.call(a,g):l.set(a,g),g);var h=(a,l,g)=>(nt(a,l,"access private method"),g);var u=(o=>(o[o.none=0]="none",o[o.funOnly=1]="funOnly",o[o.propOnly=2]="propOnly",o[o.always=3]="always",o))(u||{});const ht=o=>i=>(i.prototype._manifest=It(o),customElements.define(o.tagName,i),i),It=o=>(o=Object.assign({hasConfig:!1,mode:u.always},o),o),ct=o=>{Promise?Promise.resolve().then(o):requestAnimationFrame?requestAnimationFrame(o):setTimeout(o,0)},_t="",bt=`<div class="error">\r
    <div class="info">\r
        <div>\r
            <p>软件未授权，请联系软件提供商，获取授权码！</p>\r
            <a href="">刷新</a>\r
        </div>\r
    </div>\r
</div>`,Mt=`<div class="develop">\r
    开发预览版，有限期至【】@山维科技\r
</div>`,S=class{constructor(){r(this,z);r(this,U);r(this,F);r(this,W);r(this,O);r(this,v,"开发版");r(this,M,null);r(this,m,null);r(this,w,null);if(new.target===S)return n(S,b)||f(S,b,this),n(S,b)}get authtype(){return n(this,v)}get authorized(){return h(this,U,gt).call(this)}};let B=S;b=new WeakMap,v=new WeakMap,z=new WeakSet,pt=function(i,t){try{if(!i||i.length<8)return"";t||(t="sunway_webgis_auth_code"),t=encodeURIComponent(t);let e="";for(let C=0;C<t.length;C+=1)e+=t.charCodeAt(C).toString();let s=Math.floor(e.length/5),c=parseInt(e.charAt(s)+e.charAt(s*2)+e.charAt(s*3)+e.charAt(s*4)+e.charAt(s*5)),p=Math.round(t.length/2),d=Math.pow(2,31)-1,st=parseInt(i.substring(i.length-8,i.length),16);for(i=i.substring(0,i.length-8),e+=st;e.length>10;)e=(parseInt(e.substring(0,10))+parseInt(e.substring(10,e.length))).toString();e=(c*e+p)%d;let tt="",ft="";for(let C=0;C<i.length;C+=2)tt=parseInt(i.substring(C,C+2),16)^Math.floor(e/d*255),ft+=String.fromCharCode(tt),e=(c*e+p)%d;return decodeURIComponent(ft)}catch{return""}},U=new WeakSet,gt=function(){const i=h(this,z,pt).call(this,window.licenses),t=i.split("|")[0],e=i.split("|")[1];f(this,v,i.split("|")[2]);let s=window.location.hostname.toUpperCase();if(s==="LOCALHOST"||s=="127.0.0.1")return!0;let c=!1;if(t.split(",").forEach(tt=>{if(tt.toUpperCase()===s){c=!0;return}}),!c)return h(this,O,et).call(this,"软件未授权，请联系软件提供商，获取授权码！"),!1;if(typeof e>"u")return h(this,O,et).call(this,"软件未授权，请联系软件提供商，获取授权码！"),!1;const d=h(this,F,dt).call(this),st=new Date(e);return d.getTime()>st.getTime()?(h(this,O,et).call(this,n(this,v)+"有限期至【"+e+"】已过期，请重新授权！@山维科技"),!1):(n(this,v)!="正式版"&&h(this,W,ut).call(this,"开发预览版，有限期至【"+e+"】@山维科技"),!0)},M=new WeakMap,F=new WeakSet,dt=function(){if(!n(this,M)){const i=new window.XMLHttpRequest;i.open("GET","/",!1),i.send(null);const t=i.getResponseHeader("Date");f(this,M,new Date(t))}return n(this,M)},m=new WeakMap,w=new WeakMap,W=new WeakSet,ut=function(i){n(this,w)||(f(this,w,document.createElement("div")),n(this,w).style.zIndex="999",n(this,w).classList.add("auth"),n(this,w).innerHTML=Mt,document.body.appendChild(n(this,w)));const t=n(this,w).getElementsByClassName("develop")[0];t.innerHTML=i},O=new WeakSet,et=function(i){n(this,m)||(f(this,m,document.createElement("div")),n(this,m).style.zIndex="1000",n(this,m).classList.add("auth"),n(this,m).innerHTML=bt,document.body.appendChild(n(this,m)));const t=n(this,m).getElementsByTagName("p")[0];t.innerHTML=i},r(B,b,void 0);class Ot extends HTMLElement{constructor(){super();r(this,j);r(this,J);r(this,K);r(this,E);r(this,Q);r(this,q);r(this,Y);r(this,G);r(this,Z);r(this,k);r(this,y);r(this,V,void 0);r(this,T,void 0);r(this,L,void 0);r(this,D,void 0);r(this,N,void 0);r(this,$,void 0);r(this,_,"w-l");r(this,R,!1);r(this,A,u.none);r(this,X,["value","src","title"]);r(this,H,!1);r(this,I,"unInited");new B().authorized&&(this.manifest.hasConfig&&h(this,j,rt).call(this,this.getAttribute("config")||this.getAttribute("configUrl")),f(this,A,this.manifest.mode??u.always),ct(()=>{h(this,K,wt).call(this),h(this,y,P).call(this)}))}startup(t){this.mapView=t.mapView,this.map=t.map,this.mapConfig=t.mapConfig,this.config=t.config}get manifest(){return this._manifest}get mapConfig(){return n(this,V)}set mapConfig(t){!n(this,V)&&t&&(f(this,V,t),h(this,y,P).call(this))}get mapView(){return n(this,T)}set mapView(t){!n(this,T)&&t&&(f(this,T,t),h(this,y,P).call(this))}get map(){return n(this,L)}set map(t){!n(this,L)&&t&&(f(this,L,t),h(this,y,P).call(this))}get config(){return n(this,D)}set config(t){if(typeof t=="string"){h(this,j,rt).call(this,t);return}else typeof t=="object"&&!n(this,D)&&t&&(f(this,D,t),h(this,y,P).call(this))}get loading(){return!!n(this,N)}set loading(t){f(this,N,t),h(this,J,mt).call(this)}get $data(){return n(this,$)}set $data(t){(n(this,A)&u.propOnly)==u.propOnly?(f(this,$,h(this,E,it).call(this,t)),h(this,q,at).call(this)):f(this,$,t)}isReady(){return!!(this.map&&this.mapView&&this.mapConfig&&(this.config||!this.manifest.hasConfig))}async onInit(){}afterInit(){}onOpen(){}onClose(){}}V=new WeakMap,T=new WeakMap,L=new WeakMap,D=new WeakMap,N=new WeakMap,$=new WeakMap,_=new WeakMap,R=new WeakMap,A=new WeakMap,X=new WeakMap,j=new WeakSet,rt=async function(t){if(!this.config&&t){this.loading=!0;const e=await fetch(t);this.config=e&&e.ok&&await e.json()||{},this.loading=!1}},J=new WeakSet,mt=function(){this.loading?this.classList.add("loading"):this.classList.remove("loading")},K=new WeakSet,wt=function(){const t=this.manifest.className||this.manifest.tagName;if(this.classList.add(t),this.manifest.template){let e=this.manifest.template;(n(this,A)&u.propOnly)==u.propOnly&&(e=e.replace(/\{\{(.+?)\}\}/g,(...s)=>`<${n(this,_)}>${s[1]}</${n(this,_)}>`)),this.innerHTML=e,(n(this,A)&u.funOnly)==u.funOnly&&h(this,k,At).call(this)}f(this,R,!0)},E=new WeakSet,it=function(t){return typeof t=="object"&&t!==null?(Object.keys(t).forEach(e=>{t[e]=h(this,E,it).call(this,t[e])}),new Proxy(t,{set:(e,s,c)=>(e[s]=h(this,E,it).call(this,c),h(this,Q,yt).call(this),!0)})):t},H=new WeakMap,Q=new WeakSet,yt=function(){n(this,H)||(f(this,H,!0),ct(()=>{h(this,q,at).call(this),f(this,H,!1)}))},q=new WeakSet,at=function(){n(this,X).forEach(e=>{h(this,Y,Ct).call(this,e)}),this.querySelectorAll(n(this,_)).forEach(e=>{const s=h(this,G,ot).call(this,e.origin);String(s)!==e.innerHTML&&(e.innerHTML=s)})},Y=new WeakSet,Ct=function(t){const e=`s-${t}`;this.querySelectorAll(`[${e}]`).forEach(c=>{const p=c.getAttribute(e),d=h(this,G,ot).call(this,p);d!==c[t]&&(c[t]=d)})},G=new WeakSet,ot=function(t){try{return t.split(".").reduce((e,s)=>e[s],this.$data)}catch(e){console.error(e);return}},Z=new WeakSet,vt=function(t,e){let s=this.$data,c=t.split(".");for(let p=0;p<c.length;p++){const d=c[p];p==c.length-1?s[d]=e:s=s[d]}},k=new WeakSet,At=function(){this.querySelectorAll("*").forEach(e=>{e.$this||(e.$this=this,e.$set=(s,c)=>{h(this,Z,vt).call(this,s,c)})})},I=new WeakMap,y=new WeakSet,P=async function(){n(this,R)&&(n(this,I)==="initing"||n(this,I)==="inited"||this.isReady()&&(f(this,I,"initing"),this.loading=!0,await this.onInit(),this.loading=!1,f(this,I,"inited"),this.afterInit()))};class lt extends Ot{constructor(){super()}isReady(){return!!this.config}afterInit(){this.mapConfig=this.config,this.mapView=this;const i=this.mapConfig.widgetManager||"webgis-widget-manager",t=document.createElement(i);t.startup({mapView:this,map:this.map,config:this.mapConfig.widgets,mapConfig:this.mapConfig}),this.childNodes[0]?this.insertBefore(t,this.childNodes[0]):this.appendChild(t)}}const Et="";var St=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Tt=(o,i,t,e)=>{for(var s=e>1?void 0:e?Vt(i,t):i,c=o.length-1,p;c>=0;c--)(p=o[c])&&(s=(e?p(i,t,s):p(s))||s);return e&&s&&St(i,t,s),s};a.ArcGISMapView=class extends lt{constructor(){super()}async onInit(){const i=new l({basemap:"satellite",ground:"world-elevation"}),t=new g({scale:123456789,container:this,map:i,spatialReference:{wkid:3857}});this.map=t}},a.ArcGISMapView=Tt([ht({tagName:"arcgis-map",className:"arcgis-map",hasConfig:!0})],a.ArcGISMapView);const Ht="";var Lt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,$t=(o,i,t,e)=>{for(var s=e>1?void 0:e?Dt(i,t):i,c=o.length-1,p;c>=0;c--)(p=o[c])&&(s=(e?p(i,t,s):p(s))||s);return e&&s&&Lt(i,t,s),s};a.ArcGIS2DMapView=class extends lt{constructor(){super()}async onInit(){const i=new l({basemap:"satellite"}),t=new x({scale:123456789,container:this,map:i,spatialReference:{wkid:3857}});this.map=t}},a.ArcGIS2DMapView=$t([ht({tagName:"arcgis2d-map",className:"arcgis2d-map",hasConfig:!0})],a.ArcGIS2DMapView),Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});