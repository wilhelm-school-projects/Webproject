import{H as b,s as m}from"./index.c5e23121.js";const c=[];function I(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=b){let n;const o=new Set;function a(s){if(m(e,s)&&(e=s,n)){const u=!c.length;for(const i of o)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function l(s){a(s(e))}function r(s,u=b){const i=[s,u];return o.add(i),o.size===1&&(n=t(a)||b),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:r}}var g;const E=((g=globalThis.__sveltekit_16o1en1)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_16o1en1)==null?void 0:k.assets)??E,A="1684933301594",x="sveltekit:snapshot",O="sveltekit:scroll",U="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function L(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function N(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...p,"":p.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function P(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function V(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:l}}function Y(e){let t=null,n=null,o=null,a=null,l=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);return{preload_code:_[o??"off"],preload_data:_[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:l==="off"?!1:l===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function h(e){const t=d(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function l(r){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&r(s=u)})}return{notify:o,set:a,subscribe:l}}function R(){const{set:e,subscribe:t}=d(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let T;function j(e){T=e.client}const q={url:h({}),page:h({}),navigating:d(null),updated:R()};export{U as I,p as P,O as S,x as a,V as b,Y as c,N as d,E as e,P as f,L as g,j as h,S as i,T as j,I as r,q as s,d as w};
