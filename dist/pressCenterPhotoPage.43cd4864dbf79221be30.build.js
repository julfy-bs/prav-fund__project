!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/local/templates/pravfond/assets/",r(r.s=34)}({0:function(e,t,r){},1:function(e,t){var r=document.querySelector("#photo-overlay-button"),o=document.querySelector("#overlayPhoto"),n=document.querySelector(".overlay__container"),c=document.querySelector("#closeOverlay");r.addEventListener("click",function(e){e.preventDefault(),o.classList.add("overlay--active"),document.body.classList.add("restrictedScroll")}),c.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("overlay--active"),document.body.classList.remove("restrictedScroll")}),o.addEventListener("click",function(e){e.target!==o&&e.target!==n||(e.preventDefault(),o.classList.remove("overlay--active"),document.body.classList.remove("restrictedScroll"))})},34:function(e,t,r){"use strict";r.r(t);r(0),r(1)}});