import{S as rt,i as st,s as nt,k as c,a as $,y as Q,l as i,m as u,c as x,z as W,h as o,n as e,b as R,G as a,A as X,g as Y,d as Z,P as Nt,B as tt,o as ft,q as A,r as M,H as T,N as et,L as kt,O as Ht}from"../chunks/index.c5e23121.js";import{B as Bt,a as At,G as Mt}from"../chunks/Game.e5d13072.js";import{s as Ot}from"../chunks/index.eaa444e6.js";import{a as Vt,g as at}from"../chunks/stores.bfaa330b.js";function Tt(g,t){let n=document.getElementById(g);n==null&&console.log("Trying to fuse attributes to "+g+", but it is null or undifined!");for(const[r,s]of Object.entries(t))n==null||n.setAttribute(r,s)}function Ct(g){let t=document.getElementById(g);document.getElementsByClassName("modal-backdrop")[0].remove(),t.style.display="none"}function wt(g,t,n){const r=g.slice();return r[3]=t[n],r[5]=n,r}function Dt(g){let t,n=g[1][g[5]]+"",r;return{c(){t=c("a"),r=A(n),this.h()},l(s){t=i(s,"A",{id:!0,class:!0,href:!0});var l=u(t);r=M(l,n),l.forEach(o),this.h()},h(){e(t,"id","anchor-"+g[3]),e(t,"class","col text-center btn btn-outline-secondary svelte-1d4vcpx"),e(t,"href",g[3])},m(s,l){R(s,t,l),a(t,r)},p:T,d(s){s&&o(t)}}}function jt(g){let t,n,r,s,l=g[0],f=[];for(let m=0;m<l.length;m+=1)f[m]=Dt(wt(g,l,m));return r=new Bt({}),{c(){t=c("nav");for(let m=0;m<f.length;m+=1)f[m].c();n=$(),Q(r.$$.fragment),this.h()},l(m){t=i(m,"NAV",{id:!0,class:!0});var h=u(t);for(let d=0;d<f.length;d+=1)f[d].l(h);n=x(h),W(r.$$.fragment,h),h.forEach(o),this.h()},h(){e(t,"id","bottom-navbar"),e(t,"class","navbar fixed-bottom row padding-bottom justify-content-center d-flex svelte-1d4vcpx")},m(m,h){R(m,t,h);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(t,null);a(t,n),X(r,t,null),s=!0},p(m,[h]){if(h&3){l=m[0];let d;for(d=0;d<l.length;d+=1){const p=wt(m,l,d);f[d]?f[d].p(p,h):(f[d]=Dt(p),f[d].c(),f[d].m(t,n))}for(;d<f.length;d+=1)f[d].d(1);f.length=l.length}},i(m){s||(Y(r.$$.fragment,m),s=!0)},o(m){Z(r.$$.fragment,m),s=!1},d(m){m&&o(t),Nt(f,m),tt(r)}}}function Lt(g){let t=["/home",""],n=["Settings","I am bored"];function r(){let s={"data-bs-toggle":"modal","data-bs-target":"#modal-game-type"},l="anchor-"+t.at(1);Tt(l,s)}return ft(r),[t,n]}class Pt extends rt{constructor(t){super(),st(this,t,Lt,jt,nt,{})}}function Ut(g){let t,n,r,s,l,f,m,h,d,p,b,v,k;return{c(){t=c("main"),n=c("div"),r=c("form"),s=c("div"),l=c("label"),f=A("Canvas Name"),m=$(),h=c("input"),d=$(),p=c("div"),b=c("div"),v=c("a"),k=A("Connect"),this.h()},l(y){t=i(y,"MAIN",{});var _=u(t);n=i(_,"DIV",{class:!0});var H=u(n);r=i(H,"FORM",{class:!0,action:!0});var I=u(r);s=i(I,"DIV",{class:!0});var E=u(s);l=i(E,"LABEL",{class:!0,for:!0});var C=u(l);f=M(C,"Canvas Name"),C.forEach(o),m=x(E),h=i(E,"INPUT",{class:!0,type:!0}),E.forEach(o),d=x(I),p=i(I,"DIV",{class:!0});var w=u(p);b=i(w,"DIV",{class:!0});var B=u(b);v=i(B,"A",{id:!0,class:!0,href:!0});var D=u(v);k=M(D,"Connect"),D.forEach(o),B.forEach(o),w.forEach(o),I.forEach(o),H.forEach(o),_.forEach(o),this.h()},h(){e(l,"class","col"),e(l,"for",""),e(h,"class","col rounded"),e(h,"type","text"),e(s,"class","row"),e(v,"id","anchor-game-client"),e(v,"class","col text-center btn btn-outline-secondary"),e(v,"href",""),e(b,"class","col d-flex justify-content-center"),e(p,"class","row"),e(r,"class","row"),e(r,"action",""),e(n,"class","row d-flex justify-content-center")},m(y,_){R(y,t,_),a(t,n),a(n,r),a(r,s),a(s,l),a(l,f),a(s,m),a(s,h),a(r,d),a(r,p),a(p,b),a(b,v),a(v,k)},p:T,i:T,o:T,d(y){y&&o(t)}}}let qt="/game/client",Gt="context-id-1";function St(g){let t,n=!0,r=et(Vt);return ft(()=>{let s=document.getElementById("anchor-game-client");s==null||s.addEventListener("click",async l=>{if(l.target===null)throw Error("event is null");if(n){if(Ct("modal-game-type"),at.set(new At("game-canvas",Gt,r)),t=et(at),!await t.canvasExists()){console.log("Canvas doesn't exist, do something about it");return}n=!1,l.target.click();return}l.target.href=qt})}),[]}class Rt extends rt{constructor(t){super(),st(this,t,St,Ut,nt,{})}}function Ft(g){let t,n,r,s,l,f,m,h,d,p,b,v,k;return{c(){t=c("main"),n=c("div"),r=c("form"),s=c("div"),l=c("label"),f=A("Canvas Name"),m=$(),h=c("input"),d=$(),p=c("div"),b=c("div"),v=c("a"),k=A("Host"),this.h()},l(y){t=i(y,"MAIN",{});var _=u(t);n=i(_,"DIV",{class:!0});var H=u(n);r=i(H,"FORM",{class:!0,action:!0});var I=u(r);s=i(I,"DIV",{class:!0});var E=u(s);l=i(E,"LABEL",{class:!0,for:!0});var C=u(l);f=M(C,"Canvas Name"),C.forEach(o),m=x(E),h=i(E,"INPUT",{class:!0,type:!0}),E.forEach(o),d=x(I),p=i(I,"DIV",{class:!0});var w=u(p);b=i(w,"DIV",{class:!0});var B=u(b);v=i(B,"A",{id:!0,class:!0,href:!0});var D=u(v);k=M(D,"Host"),D.forEach(o),B.forEach(o),w.forEach(o),I.forEach(o),H.forEach(o),_.forEach(o),this.h()},h(){e(l,"class","col"),e(l,"for",""),e(h,"class","col rounded"),e(h,"type","text"),e(s,"class","row"),e(v,"id","anchor-game-host"),e(v,"class","col text-center btn btn-outline-secondary"),e(v,"href",""),e(b,"class","col d-flex justify-content-center"),e(p,"class","row"),e(r,"class","row"),e(r,"action",""),e(n,"class","row d-flex justify-content-center")},m(y,_){R(y,t,_),a(t,n),a(n,r),a(r,s),a(s,l),a(l,f),a(s,m),a(s,h),a(r,d),a(r,p),a(p,b),a(b,v),a(v,k)},p:T,i:T,o:T,d(y){y&&o(t)}}}function zt(g){let t="context-id-"+Math.round(Math.random()*1e4),n,r=!0,s=et(Vt);return ft(()=>{let l=document.getElementById("anchor-game-host");l==null||l.addEventListener("click",async f=>{if(f.target===null)throw Error("event is null");if(r){if(at.set(new Mt("game-canvas",t,s)),n=et(at),!await n.canvasCreated()){console.log("Canvas couldn't be created");return}Ct("modal-game-type"),r=!1,f.target.click();return}f.target.href="/game/client"})}),[]}class Jt extends rt{constructor(t){super(),st(this,t,zt,Ft,nt,{})}}function Kt(g){let t,n,r,s,l,f,m,h,d,p,b,v,k,y,_,H,I,E,C,w,B,D,U,j,lt,S,ot,L,q,ct,it,G,F,dt,P,ut,z;return w=new Jt({}),j=new Rt({}),P=new Pt({}),{c(){t=c("main"),n=c("div"),r=c("div"),s=c("div"),l=c("div"),f=c("h5"),m=A("Open drawing pane"),h=$(),d=c("button"),p=$(),b=c("div"),v=c("button"),k=A("Host"),y=$(),_=c("button"),H=A("Connect"),I=$(),E=c("div"),C=c("div"),Q(w.$$.fragment),B=$(),D=c("div"),U=c("div"),Q(j.$$.fragment),lt=$(),S=c("div"),ot=$(),L=c("div"),q=c("p"),ct=A("ipsumquam ducimus"),it=$(),G=c("div"),F=c("div"),dt=$(),Q(P.$$.fragment),this.h()},l(V){t=i(V,"MAIN",{class:!0});var N=u(t);n=i(N,"DIV",{id:!0,class:!0,tabindex:!0});var mt=u(n);r=i(mt,"DIV",{class:!0});var vt=u(r);s=i(vt,"DIV",{class:!0});var O=u(s);l=i(O,"DIV",{class:!0});var J=u(l);f=i(J,"H5",{class:!0});var ht=u(f);m=M(ht,"Open drawing pane"),ht.forEach(o),h=x(J),d=i(J,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),u(d).forEach(o),J.forEach(o),p=x(O),b=i(O,"DIV",{class:!0});var K=u(b);v=i(K,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var gt=u(v);k=M(gt,"Host"),gt.forEach(o),y=x(K),_=i(K,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var bt=u(_);H=M(bt,"Connect"),bt.forEach(o),K.forEach(o),I=x(O),E=i(O,"DIV",{class:!0,id:!0});var _t=u(E);C=i(_t,"DIV",{class:!0});var pt=u(C);W(w.$$.fragment,pt),pt.forEach(o),_t.forEach(o),B=x(O),D=i(O,"DIV",{class:!0,id:!0});var Et=u(D);U=i(Et,"DIV",{class:!0});var yt=u(U);W(j.$$.fragment,yt),yt.forEach(o),Et.forEach(o),O.forEach(o),vt.forEach(o),mt.forEach(o),lt=x(N),S=i(N,"DIV",{class:!0}),u(S).forEach(o),ot=x(N),L=i(N,"DIV",{id:!0,class:!0});var $t=u(L);q=i($t,"P",{class:!0});var xt=u(q);ct=M(xt,"ipsumquam ducimus"),xt.forEach(o),$t.forEach(o),it=x(N),G=i(N,"DIV",{class:!0});var It=u(G);F=i(It,"DIV",{}),u(F).forEach(o),It.forEach(o),dt=x(N),W(P.$$.fragment,N),N.forEach(o),this.h()},h(){e(f,"class","modal-title"),e(d,"type","button"),e(d,"class","btn-close"),e(d,"data-bs-dismiss","modal"),e(d,"aria-label","Close"),e(l,"class","modal-header"),e(v,"class","col btn btn-primary"),e(v,"type","button"),e(v,"data-bs-toggle","collapse"),e(v,"data-bs-target","#connector-host"),e(v,"aria-expanded","false"),e(v,"aria-controls","connector-host"),e(_,"class","col btn btn-primary"),e(_,"type","button"),e(_,"data-bs-toggle","collapse"),e(_,"data-bs-target","#connector-client"),e(_,"aria-expanded","false"),e(_,"aria-controls","connector-client"),e(b,"class","modal-body row"),e(C,"class","card card-body d-flex justify-content-center"),e(E,"class","collapse"),e(E,"id","connector-host"),e(U,"class","card card-body"),e(D,"class","collapse"),e(D,"id","connector-client"),e(s,"class","modal-content"),e(r,"class","modal-dialog"),e(n,"id","modal-game-type"),e(n,"class","modal"),e(n,"tabindex","-1"),e(S,"class","col-1 border bg-danger"),e(q,"class","display-2"),e(L,"id","content"),e(L,"class","col bg-info text-white"),e(G,"class","col-1 border bg-danger"),e(t,"class","row d-flex justify-content-center text-info")},m(V,N){R(V,t,N),a(t,n),a(n,r),a(r,s),a(s,l),a(l,f),a(f,m),a(l,h),a(l,d),a(s,p),a(s,b),a(b,v),a(v,k),a(b,y),a(b,_),a(_,H),a(s,I),a(s,E),a(E,C),X(w,C,null),a(s,B),a(s,D),a(D,U),X(j,U,null),a(t,lt),a(t,S),a(t,ot),a(t,L),a(L,q),a(q,ct),a(t,it),a(t,G),a(G,F),a(t,dt),X(P,t,null),z=!0},p:T,i(V){z||(Y(w.$$.fragment,V),Y(j.$$.fragment,V),Y(P.$$.fragment,V),ut||kt(()=>{ut=Ht(t,Ot,{axis:"x",duration:700}),ut.start()}),z=!0)},o(V){Z(w.$$.fragment,V),Z(j.$$.fragment,V),Z(P.$$.fragment,V),z=!1},d(V){V&&o(t),tt(w),tt(j),tt(P)}}}class Zt extends rt{constructor(t){super(),st(this,t,null,Kt,nt,{})}}export{Zt as default};