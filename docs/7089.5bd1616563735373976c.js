(self.webpackChunkcuylereastman_com=self.webpackChunkcuylereastman_com||[]).push([[7089],{7089:(e,s,t)=>{"use strict";t.r(s),t.d(s,{startFocusVisible:()=>n});const o="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],n=()=>{let e=[],s=!0;const t=document,n=s=>{e.forEach(e=>e.classList.remove(o)),s.forEach(e=>e.classList.add(o)),e=s},a=()=>{s=!1,n([])};t.addEventListener("keydown",e=>{s=c.includes(e.key),s||n([])}),t.addEventListener("focusin",e=>{if(s&&e.composedPath){const s=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));n(s)}}),t.addEventListener("focusout",()=>{t.activeElement===t.body&&n([])}),t.addEventListener("touchstart",a),t.addEventListener("mousedown",a)}}}]);