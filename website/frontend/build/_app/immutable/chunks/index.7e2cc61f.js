function v(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function T(){return Object.create(null)}function k(t){t.forEach(K)}function B(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Bt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function lt(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t){let e;return Q(t,n=>e=n)(),e}function Rt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function Ft(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Tt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,l){if(r){const s=W(e,n,i,l);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let ut=U?()=>window.performance.now():()=>Date.now(),L=U?t=>requestAnimationFrame(t):v;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&L(V)}function at(t){let e;return b.size===0&&L(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let P=!1;function ft(){P=!0}function _t(){P=!1}function dt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:dt(1,r,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<l.length&&s[o].claim_order>=l[c].claim_order;)c++;const f=c<l.length?l[c]:null;t.insertBefore(s[o],f)}}function mt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Z("style");return yt(X(t),e),e.sheet}function yt(t,e){return mt(t.head||t,e),e.sheet}function gt(t,e){if(P){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){P&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function Kt(){return R(" ")}function Qt(){return R("")}function Wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){$t(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function bt(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return bt(t,e,n,Z)}function wt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Xt(t){return wt(t," ")}function Yt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Zt(t,e){t.value=e??""}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function vt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){return new t(e)}const j=new Map;let M=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:pt(e),rules:{}};return j.set(t,n),n}function At(t,e,n,i,r,l,s,u=0){const o=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*l(m);c+=m*100+`%{${s(g,1-g)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Et(f)}_${u}`,_=X(t),{stylesheet:d,rules:h}=j.get(_)||Nt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||kt())}function kt(){L(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),j.clear())})}let A;function N(t){A=t}function et(){if(!A)throw new Error("Function called outside component initialization");return A}function ne(t){et().$$.on_mount.push(t)}function ie(t){et().$$.after_update.push(t)}const $=[],I=[];let w=[];const G=[],nt=Promise.resolve();let z=!1;function it(){z||(z=!0,nt.then(rt))}function re(){return it(),nt}function O(t){w.push(t)}const D=new Set;let x=0;function rt(){if(x!==0)return;const t=A;do{try{for(;x<$.length;){const e=$[x];x++,N(e),Ct(e.$$)}}catch(e){throw $.length=0,x=0,e}for(N(null),$.length=0,x=0;I.length;)I.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];D.has(n)||(D.add(n),n())}w.length=0}while($.length);for(;G.length;)G.pop()();z=!1,D.clear(),N(t)}function Ct(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function St(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let E;function jt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function J(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const S=new Set;let p;function se(){p={r:0,c:[],p}}function oe(){p.r||k(p.c),p=p.p}function Mt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function le(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,u,o=0;function c(){s&&H(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=ot,tick:y=v,css:m}=r||Ot;m&&(s=At(t,0,1,d,_,h,m,o++)),y(0,1);const g=ut()+_,st=g+d;u&&u.abort(),l=!0,O(()=>J(t,!0,"start")),u=at(q=>{if(l){if(q>=st)return y(1,0),J(t,!0,"end"),c(),l=!1;if(q>=g){const F=h((q-g)/d);y(F,1-F)}}return l})}let a=!1;return{start(){a||(a=!0,H(t),B(r)?(r=r(i),jt().then(f)):f())},invalidate(){a=!1},end(){l&&(c(),l=!1)}}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(K).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...s):k(s),t.$$.on_mount=[]}),l.forEach(O)}function qt(t,e){const n=t.$$;n.fragment!==null&&(St(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&($.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,l,s,u=[-1]){const o=A;N(t);const c=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Dt(t,a)),_}):[],c.update(),f=!0,k(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){ft();const a=xt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),_t(),rt()}N(o)}class _e{$destroy(){qt(this,1),this.$destroy=v}$on(e,n){if(!B(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,qt as B,Ft as C,gt as D,Ht as E,It as F,Tt as G,v as H,Rt as I,Jt as J,Bt as K,O as L,le as M,Lt as N,Zt as O,Wt as P,k as Q,_e as S,Kt as a,Gt as b,Xt as c,ce as d,Qt as e,oe as f,Mt as g,Y as h,fe as i,ie as j,Z as k,Vt as l,xt as m,Ut as n,ne as o,te as p,R as q,wt as r,zt as s,re as t,Yt as u,se as v,I as w,ee as x,ue as y,ae as z};
