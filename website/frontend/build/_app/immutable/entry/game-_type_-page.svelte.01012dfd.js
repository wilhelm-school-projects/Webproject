var Q=Object.defineProperty;var Z=(a,e,t)=>e in a?Q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(Z(a,typeof e!="symbol"?e+"":e,t),t),B=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var d=(a,e,t)=>(B(a,e,"read from private field"),t?t.call(a):e.get(a)),m=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},v=(a,e,t,s)=>(B(a,e,"write to private field"),s?s.call(a,t):e.set(a,t),t);var T=(a,e,t)=>(B(a,e,"access private method"),t);import{N as P,S as ee,i as te,s as se,k as I,q as ae,a as ne,l as _,m as S,r as re,h as w,c as ie,n as p,b as oe,D as y,H as M,I as le,o as ce}from"../chunks/index.7e2cc61f.js";import{p as he}from"../chunks/stores.0a0bfdb7.js";import{r as ue}from"../chunks/singletons.00c8e66f.js";import{u as de,r as f,s as pe,o as ge,g as D,d as C,a as me}from"../chunks/firebase.79522ce9.js";class U{constructor(e,t,s,n,i,o){r(this,"xPos");r(this,"yPos");r(this,"color","0,0,0");r(this,"alpha",1);r(this,"gamectx");r(this,"gameCanvas");this.gamectx=i,this.gameCanvas=o,this.xPos=e,this.yPos=t,this.color=s,this.alpha=n}draw(){}equals(e){return!0}setColor(e){console.log("settings color: "+e)}hideMe(){console.log("Hiding me :(")}displayMe(){console.log("Displaing me :)")}}class W extends U{constructor(t,s,n,i,o,l,u,c){super(t,s,o,l,u,c);r(this,"radius");r(this,"endAngle",2);this.radius=n,this.endAngle=i,this.draw()}draw(){let[t,s,n]=this.color.split(",");this.gamectx.beginPath(),this.gamectx.fillStyle=`rgba(${t}, ${s}, ${n}, ${this.alpha})`,this.gamectx.arc(this.xPos,this.yPos,this.radius,0,Math.PI*this.endAngle),this.gamectx.closePath(),this.gamectx.fill()}equals(t){return this.alpha===t.alpha&&this.color===t.color&&this.endAngle===t.endAngle&&this.radius===t.radius&&this.xPos===t.xPos&&this.yPos===t.yPos}}class ve extends U{draw(){}}class G{constructor(e,t){r(this,"xPosMouse");r(this,"yPosMouse");r(this,"currentShape");r(this,"controlsCanvas");r(this,"hasPainted",!1);r(this,"stoppedPaintingJustNow",!1);r(this,"oldLengths");r(this,"shapes");r(this,"drawInterval");r(this,"gamectx");r(this,"gameCanvas");if(this.controlsCanvas=t,this.gameCanvas=document.getElementById(e),this.gameCanvas==null)throw new Error("Game Canvas is null!");this.gamectx=this.gameCanvas.getContext("2d"),this.gameCanvas.height=window.innerHeight,this.gameCanvas.width=window.innerWidth,setInterval(()=>this.updateHasPainted(),500),this.gameCanvas.addEventListener("mousemove",s=>{this.xPosMouse=s.clientX,this.yPosMouse=Math.round(s.clientY-this.gameCanvas.getBoundingClientRect().top)}),this.gameCanvas.addEventListener("mousedown",s=>{this.drawInterval=setInterval(()=>this.drawCurrentShape(s),50),console.log("drraw")}),this.gameCanvas.addEventListener("mouseup",()=>{clearInterval(this.drawInterval)}),this.gameCanvas.addEventListener("mouseout",()=>{clearInterval(this.drawInterval)}),this.shapes={rectangles:[],circles:[]},this.currentShape="circle",this.oldLengths={rectangles:0,circles:0}}async updateHasPainted(){let e=!1;for(const t of Object.keys(this.shapes))this.shapes[t].length!==this.oldLengths[t]&&(e=!0,this.oldLengths[t]=this.shapes[t].length);this.hasPainted=e}drawCurrentShape(e){let t=.7;if(this.currentShape=="circle"){let s=10,n=2;this.shapes.circles.push(new W(this.xPosMouse,this.yPosMouse,s,n,"00, 00, 255",t,this.gamectx,this.gameCanvas))}else this.currentShape=="rectangle"&&this.shapes.rectangles.push(new ve(this.xPosMouse,this.yPosMouse,"255,00,00",t,this.gamectx,this.gameCanvas))}drawAllShapes(){if(this.shapes!==null)for(const e of Object.keys(this.shapes))this.shapes[e].forEach(t=>{t.draw()})}getShapes(){let e={},t;for(const s of Object.keys(this.shapes)){e[s]=[];for(const n of this.shapes[s])t={alpha:n.alpha,color:n.color,endAngle:2,radius:10,xPos:n.xPos,yPos:n.yPos},e[s].push(t)}return e}thinCanvas(){for(const e of Object.keys(this.shapes))for(let t=0;t<this.shapes[e].length;){if(this.shapes[e].length===0)continue;let s=this.shapes[e][t],n=0;if(this.shapes[e].forEach(i=>{s.equals(i)&&n++}),n>1){let i=this.shapes[e].indexOf(s);this.shapes[e].splice(i,1)}else t++}}reloadContext(e){this.gamectx.clearRect(0,0,this.gameCanvas.width,this.gameCanvas.height),this.shapes={rectangles:[],circles:[]};for(const t of Object.keys(e))e[t].forEach(s=>{this.shapes[t].push(new W(s.xPos,s.yPos,s.radius,s.endAngle,s.color,s.alpha,this.gamectx,s.gameCanvas))})}}class V{constructor(e,t,s){r(this,"painter");r(this,"Networker");r(this,"game");r(this,"canvasWrapper");r(this,"drawButton");if(this.painter=e,this.Networker=t,this.game=s,this.canvasWrapper=document.getElementById("canvas-wrapper"),this.drawButton=document.getElementById("button-Draw-drawing-pane"),s instanceof K){let i=document.getElementById("canvas-wrapper");i.style.pointerEvents="none",i.style.cursor="not-allowed"}document.getElementById("button-Draw-drawing-pane").addEventListener("click",async()=>{this.painter.controlsCanvas?(this.lockCanvas(),await this.Networker.removeCanvasControl()):this.obtainCanvasControl()})}async obtainCanvasControl(){try{let e=await this.Networker.requestCanvasControl();this.unlockCanvas()}catch(e){this.animationNotLoggedInButton(),console.log("Couldn't obtain canvas control:"),console.log(e)}}async animationNotLoggedInButton(){this.drawButton.style.backgroundColor="red",await new Promise(e=>setTimeout(e,600)),this.drawButton.style.backgroundColor="green",await new Promise(e=>setTimeout(e,400)),this.drawButton.style.backgroundColor="red",await new Promise(e=>setTimeout(e,200)),this.drawButton.style.backgroundColor="green",await new Promise(e=>setTimeout(e,200)),this.drawButton.style.backgroundColor="red",await new Promise(e=>setTimeout(e,1e3)),this.drawButton.style.backgroundColor=""}lockCanvas(){this.painter.controlsCanvas=!1,this.canvasWrapper.style.pointerEvents="none",this.canvasWrapper.style.cursor="not-allowed",this.painter.stoppedPaintingJustNow=!0,this.Networker.initiateShapeRetrieval(),this.drawButton.style.backgroundColor=""}unlockCanvas(){this.canvasWrapper.style.pointerEvents="",this.canvasWrapper.style.cursor="",this.Networker.stopShapeRetrieval(),this.painter.controlsCanvas=!0,this.drawButton.style.backgroundColor="green"}}const x=ue("context-id-1");class J{constructor(e){r(this,"painter");r(this,"stopShapeRetrieval");this.painter=e}async updateShapes(e){try{let t=P(x)+"/shapes",s=await this.sendUpdate(e,t)}catch(t){return console.log("Update failed"),console.log(t),!1}return!0}async setShapes(e){try{let t=await this.sendSet(e,P(x));console.log("Set: successful")}catch(t){return console.log("Send shapes error:"),console.log(t),!1}return!0}async sendUpdate(e,t){let s={};s[t]=e,await de(f(C),s)}async sendSet(e,t){await pe(f(C,t),e)}initiateShapeRetrieval(){let e=P(x)+"/shapes";this.stopShapeRetrieval=ge(f(C,e),t=>{let s=t.val();s===null&&(s={}),this.painter.reloadContext(s)})}async canvasIsControlled(e){try{if(!(await D(f(C,e))).exists())return!1}catch(t){return console.log("(canvasIsControlled) Failure:"),console.log(t),!1}return!0}async requestCanvasControl(){return new Promise(async(e,t)=>{let s=localStorage.getItem("email");if(s===null){t("(reuquestCanvasControl) user email doens't exist in localstorage");return}s=encodeURIComponent(s).replace(".","%2E");let n=P(x)+"/control";if(await this.canvasIsControlled(n)){t("(requestCanvasControl) canvas is being controlled by someone else");return}await this.sendUpdate(s,n);try{let i=await D(f(C,n));if(!i.exists()){t("(requestCanvasControl) no email exists even though we tried to grab control");return}if(i.val()!==s){t("Another user controls the canvas");return}}catch{t("(requestCanvasControl) fireGet failed when checking if we got control:");return}e("Successfully grabbed control over canvas")})}async removeCanvasControl(){let e=P(x)+"/control";await me(f(C,e))}}var N={},A={};Object.defineProperty(A,"__esModule",{value:!0});A.SetIntervalAsyncTimer=void 0;const we=10,ye=2147483647;var g,h,b,k,L,E,F;const R=class{constructor(){m(this,k);m(this,E);m(this,g,void 0);m(this,h,void 0);m(this,b,!1)}static startTimer(e,t,s,...n){var o;s=Math.min(Math.max(Math.trunc(s),we),ye);const i=new R;return T(o=i,k,L).call(o,e,t,s,s,...n),i}static async stopTimer(e){v(e,b,!0),d(e,g)&&clearTimeout(d(e,g)),d(e,h)&&await d(e,h)}};let H=R;g=new WeakMap,h=new WeakMap,b=new WeakMap,k=new WeakSet,L=function(e,t,s,n,...i){v(this,g,setTimeout(async()=>{v(this,g,void 0),v(this,h,T(this,E,F).call(this,e,t,s,...i)),await d(this,h),v(this,h,void 0)},n))},E=new WeakSet,F=async function(e,t,s,...n){const i=new Date().getTime();try{await t(...n)}finally{if(!d(this,b)){const o=new Date().getTime()-i,l=e==="dynamic"?s>o?s-o:0:s;T(this,k,L).call(this,e,t,s,l,...n)}}};A.SetIntervalAsyncTimer=H;Object.defineProperty(N,"__esModule",{value:!0});var X=N.clearIntervalAsync=void 0;const $=A;async function fe(a){if(!(a instanceof $.SetIntervalAsyncTimer))throw new TypeError("First argument is not an instance of SetIntervalAsyncTimer");await $.SetIntervalAsyncTimer.stopTimer(a)}X=N.clearIntervalAsync=fe;var Y={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.setIntervalAsync=a.clearIntervalAsync=void 0;const e=N;Object.defineProperty(a,"clearIntervalAsync",{enumerable:!0,get:function(){return e.clearIntervalAsync}});const t=A;function s(n,i,...o){if(typeof n!="function")throw new TypeError("First argument is not a function");if(typeof i!="number")throw new TypeError("Second argument is not a number");return t.SetIntervalAsyncTimer.startTimer("dynamic",n,i,...o)}a.setIntervalAsync=s})(Y);class z{constructor(){r(this,"gameCanvas");r(this,"gamectx");r(this,"painter");r(this,"settingsHandler");r(this,"Networker");r(this,"intervalAsyncTimer");this.intervalAsyncTimer=Y.setIntervalAsync(async()=>{await this.transmitShapes()},50),setInterval(()=>{this.painter.controlsCanvas&&this.painter.thinCanvas()},5e3),window.onbeforeunload=()=>{this.cleanUp()}}async transmitShapes(){if(this.painter.stoppedPaintingJustNow){this.painter.stoppedPaintingJustNow=!1;return}if(!this.painter.controlsCanvas||!this.painter.hasPainted)return;this.painter.hasPainted=!1;let e=this.painter.getShapes();try{let t=await this.Networker.updateShapes(e)}catch{console.log("Transimitting shapes didn't go as planned")}}cleanUp(){X(this.intervalAsyncTimer),this.painter.controlsCanvas&&this.Networker.removeCanvasControl()}}class Ce extends z{constructor(e){super(),this.painter=new G(e,!0),this.Networker=new J(this.painter),this.settingsHandler=new V(this.painter,this.Networker,this)}}class K extends z{constructor(e){super(),this.painter=new G(e,!1),this.Networker=new J(this.painter),this.settingsHandler=new V(this.painter,this.Networker,this),this.Networker.initiateShapeRetrieval()}}function Pe(a){return console.log(a),a=="host"?new Ce("game-canvas"):new K("game-canvas")}function Ie(a){let e,t,s,n,i,o,l;return{c(){e=I("main"),t=I("div"),s=I("h1"),n=ae(a[0]),i=ne(),o=I("div"),l=I("canvas"),this.h()},l(u){e=_(u,"MAIN",{class:!0});var c=S(e);t=_(c,"DIV",{class:!0});var q=S(t);s=_(q,"H1",{class:!0});var O=S(s);n=re(O,a[0]),O.forEach(w),q.forEach(w),i=ie(c),o=_(c,"DIV",{id:!0,class:!0});var j=S(o);l=_(j,"CANVAS",{id:!0,class:!0}),S(l).forEach(w),j.forEach(w),c.forEach(w),this.h()},h(){p(s,"class","text-center col"),p(t,"class","row"),p(l,"id","game-canvas"),p(l,"class","svelte-oj7mwg"),p(o,"id","canvas-wrapper"),p(o,"class","row"),p(e,"class","game-container")},m(u,c){oe(u,e,c),y(e,t),y(t,s),y(s,n),y(e,i),y(e,o),y(o,l)},p:M,i:M,o:M,d(u){u&&w(e)}}}function _e(a,e,t){let s;le(a,he,i=>t(2,s=i));let n=s.url.href.split("/").at(s.url.href.split("/").length-1);return ce(()=>{Pe(n)}),[n]}class Te extends ee{constructor(e){super(),te(this,e,_e,Ie,se,{})}}export{Te as default};
