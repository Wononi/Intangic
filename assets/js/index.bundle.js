(()=>{var e={461:()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("element__show")}))}));document.querySelectorAll(".animate__block").forEach((r=>e.observe(r)))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";t(461);window.addEventListener("scroll",(()=>{document.querySelector(".sphere__background").style.transform=`scale(1.${pageYOffset/100})`}))})()})();
//# sourceMappingURL=index.bundle.js.map