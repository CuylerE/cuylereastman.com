(self.webpackChunkcuylereastman_com=self.webpackChunkcuylereastman_com||[]).push([[8592],{8225:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var r=n(3150),i=n(2954),s=n(9461);const o=(e,t)=>{let n,o;const c=(e,r,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(e,r);s&&t(s)?s!==n&&(l(),a(s,i)):l()},a=(e,t)=>{n=e,o||(o=n);const i=n;(0,r.c)(()=>i.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;(0,r.c)(()=>t.classList.remove("ion-activated")),e&&o!==n&&n.click(),n=void 0};return(0,s.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>c(e.currentX,e.currentY,i.a),onMove:e=>c(e.currentX,e.currentY,i.b),onEnd:()=>{l(!0),(0,i.h)(),o=void 0}})}},7330:(e,t,n)=>{"use strict";n.d(t,{a:()=>i,d:()=>s});var r=n(2377);const i=async(e,t,n,i,s)=>{if(e)return e.attachViewToDom(t,n,s,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return i&&i.forEach(e=>o.classList.add(e)),s&&Object.assign(o,s),t.appendChild(o),await new Promise(e=>(0,r.c)(o,e)),o},s=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,b:()=>o,c:()=>i,d:()=>a,h:()=>c});const r={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{r.selection()},s=()=>{r.selectionStart()},o=()=>{r.selectionChanged()},c=()=>{r.selectionEnd()},a=e=>{r.impact(e)}},6575:(e,t,n)=>{"use strict";n.d(t,{s:()=>r});const r=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!o()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const o=s(e);for(let t=0;t<o.length;t++)i(o[t])}});const r=s(t);for(let e=0;e<r.length;e++)i(r[e]);const c=document.createElement("div");c.appendChild(t);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),r=t.name;if(!c.includes(r.toLowerCase())){e.removeAttribute(r);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=s(e);for(let n=0;n<t.length;n++)i(t[n])},s=e=>null!=e.children?e.children:e.childNodes,o=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},408:(e,t,n)=>{"use strict";n.d(t,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=e*t/n-e+"ms",i=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,i=e*r-e+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},1269:(e,t,n)=>{"use strict";n.d(t,{c:()=>i,g:()=>s,h:()=>r,o:()=>c});const r=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},o=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,n,r)=>{if(null!=e&&"#"!==e[0]&&!o.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,n,r)}return!1}}}]);