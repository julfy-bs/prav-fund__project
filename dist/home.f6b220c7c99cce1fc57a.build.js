!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/prav-fund__project/",n(n.s=12)}([function(t,e,n){},function(t,e){var n=document.querySelector("#photo-overlay-button"),r=document.querySelector("#overlayPhoto"),i=document.querySelector(".overlay__container"),o=document.querySelector("#closeOverlay");n.addEventListener("click",function(t){t.preventDefault(),r.classList.add("overlay--active"),document.body.classList.add("restrictedScroll")}),o.addEventListener("click",function(t){t.preventDefault(),r.classList.remove("overlay--active"),document.body.classList.remove("restrictedScroll")}),r.addEventListener("click",function(t){t.target!==r&&t.target!==i||(t.preventDefault(),r.classList.remove("overlay--active"),document.body.classList.remove("restrictedScroll"))})},function(t,e){var n=document.querySelector("#hamburger-menu-link"),r=document.querySelector("#hamburger-menu"),i=document.querySelector("#close-nav-button"),o=r.querySelectorAll(".menu__semi-link");n.addEventListener("click",function(t){r.classList.add("hamburger-menu--active"),document.body.classList.add("restrictedScroll")}),i.addEventListener("click",function(t){t.preventDefault(),r.classList.remove("hamburger-menu--active"),document.body.classList.remove("restrictedScroll")});for(var a=0;a<o.length;a++)o[a].addEventListener("click",function(){r.classList.remove("hamburger-menu--active"),document.body.classList.remove("restrictedScroll")})},function(t,e){var n=document.querySelectorAll(".news-menu__item"),r=document.querySelectorAll(".tab");if(void 0!==n){!function(){function t(){n.forEach(function(t){t.classList.remove("is-active")}),this.classList.add("is-active"),function(t){r.forEach(function(e){e.classList.contains(t)?e.classList.add("is-active"):e.classList.remove("is-active")})}(this.getAttribute("data-tab-name"))}n.forEach(function(e){e.addEventListener("click",t)})}()}},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".slider__wrapper--sponsors"),i=n.querySelectorAll(".slider__item--sponsors"),o=n.querySelectorAll(".slider__control--sponsors"),a=(n.querySelector(".slider__control_left--sponsors"),n.querySelector(".slider__control_right--sponsors"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),l=0,s=0,u=c/a*100,d=[],f=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){d.push({item:t,position:e,transform:0})});var g={getItemMin:function(){var t=0;return d.forEach(function(e,n){e.position<d[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return d.forEach(function(e,n){e.position>d[t].position&&(t=n)}),t},getMin:function(){return d[g.getItemMin()].position},getMax:function(){return d[g.getItemMax()].position}},p=function(t){var e;"right"===t&&(++l+a/c-1>g.getMax()&&(e=g.getItemMin(),d[e].position=g.getMax()+1,d[e].transform+=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s-=u),"left"===t&&(--l<g.getMin()&&(e=g.getItemMax(),d[e].position=g.getMin()-1,d[e].transform-=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s+=u),r.style.transform="translateX("+s+"%)"},y=function(t){m.isCycling&&(f=setInterval(function(){p(t)},m.interval))},h=function(t){if(t.target.classList.contains("slider__control--sponsors")){t.preventDefault();var e=t.target.classList.contains("slider-sponsors__click-listener_right")?"right":"left";p(e),clearInterval(f),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",h)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(f)}),n.addEventListener("mouseleave",function(){clearInterval(f),y(m.direction)})),y(m.direction)}(".slider--sponsors",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".photo__wrapper"),i=n.querySelectorAll(".photo__item"),o=n.querySelectorAll(".photo__buttons"),a=(n.querySelector(".photo__left"),n.querySelector(".photo__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),l=0,s=0,u=c/a*100,d=[],f=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){d.push({item:t,position:e,transform:0})});var g={getItemMin:function(){var t=0;return d.forEach(function(e,n){e.position<d[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return d.forEach(function(e,n){e.position>d[t].position&&(t=n)}),t},getMin:function(){return d[g.getItemMin()].position},getMax:function(){return d[g.getItemMax()].position}},p=function(t){var e;"right"===t&&(++l+a/c-1>g.getMax()&&(e=g.getItemMin(),d[e].position=g.getMax()+1,d[e].transform+=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s-=u),"left"===t&&(--l<g.getMin()&&(e=g.getItemMax(),d[e].position=g.getMin()-1,d[e].transform-=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s+=u),r.style.transform="translateX("+s+"%)"},y=function(t){m.isCycling&&(f=setInterval(function(){p(t)},m.interval))},h=function(t){if(t.target.classList.contains("photo__buttons")){t.preventDefault();var e=t.target.classList.contains("photo__right")?"right":"left";p(e),clearInterval(f),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",h)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(f)}),n.addEventListener("mouseleave",function(){clearInterval(f),y(m.direction)})),y(m.direction)}(".main__photo-wrapper",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".video__wrapper"),i=n.querySelectorAll(".video__item"),o=n.querySelectorAll(".video__buttons"),a=(n.querySelector(".video__left"),n.querySelector(".video__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),l=0,s=0,u=c/a*100,d=[],f=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){d.push({item:t,position:e,transform:0})});var g={getItemMin:function(){var t=0;return d.forEach(function(e,n){e.position<d[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return d.forEach(function(e,n){e.position>d[t].position&&(t=n)}),t},getMin:function(){return d[g.getItemMin()].position},getMax:function(){return d[g.getItemMax()].position}},p=function(t){var e;"right"===t&&(++l+a/c-1>g.getMax()&&(e=g.getItemMin(),d[e].position=g.getMax()+1,d[e].transform+=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s-=u),"left"===t&&(--l<g.getMin()&&(e=g.getItemMax(),d[e].position=g.getMin()-1,d[e].transform-=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s+=u),r.style.transform="translateX("+s+"%)"},y=function(t){m.isCycling&&(f=setInterval(function(){p(t)},m.interval))},h=function(t){if(t.target.classList.contains("video__buttons")){t.preventDefault();var e=t.target.classList.contains("video__right")?"right":"left";p(e),clearInterval(f),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",h)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(f)}),n.addEventListener("mouseleave",function(){clearInterval(f),y(m.direction)})),y(m.direction)}(".main__video-wrapper",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".library__wrapper"),i=n.querySelectorAll(".library__item"),o=n.querySelectorAll(".library__buttons"),a=(n.querySelector(".library__left"),n.querySelector(".library__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),l=0,s=0,u=c/a*100,d=[],f=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){d.push({item:t,position:e,transform:0})});var g={getItemMin:function(){var t=0;return d.forEach(function(e,n){e.position<d[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return d.forEach(function(e,n){e.position>d[t].position&&(t=n)}),t},getMin:function(){return d[g.getItemMin()].position},getMax:function(){return d[g.getItemMax()].position}},p=function(t){var e;"right"===t&&(++l+a/c-1>g.getMax()&&(e=g.getItemMin(),d[e].position=g.getMax()+1,d[e].transform+=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s-=u),"left"===t&&(--l<g.getMin()&&(e=g.getItemMax(),d[e].position=g.getMin()-1,d[e].transform-=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),s+=u),r.style.transform="translateX("+s+"%)"},y=function(t){m.isCycling&&(f=setInterval(function(){p(t)},m.interval))},h=function(t){if(t.target.classList.contains("library__buttons")){t.preventDefault();var e=t.target.classList.contains("library__right")?"right":"left";p(e),clearInterval(f),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",h)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(f)}),n.addEventListener("mouseleave",function(){clearInterval(f),y(m.direction)})),y(m.direction)}(".main__library-wrapper",{isCycling:!1})},function(t,e){},function(t,e){var n=document.querySelector(".button-to-top");n.onclick=function(){window.scrollTo(pageXOffset,0)},window.addEventListener("scroll",function(){n.hidden=pageYOffset<.1*document.documentElement.clientHeight})},,function(t,e){var n=document.querySelector("#form-overlay-button"),r=document.querySelector("#overlayForm"),i=document.querySelector("#close-overlay-button"),o=document.querySelector(".overlay__container");n.addEventListener("click",function(t){t.preventDefault(),r.classList.add("overlay--active"),document.body.classList.add("restrictedScroll")}),i.addEventListener("click",function(t){t.preventDefault(),r.classList.remove("overlay--active"),document.body.classList.remove("restrictedScroll")}),r.addEventListener("click",function(t){t.target!==r&&t.target!==o||(t.preventDefault(),r.classList.remove("overlay--active"),document.body.classList.remove("restrictedScroll"))})},function(t,e,n){"use strict";n.r(e);n(0),n(11),n(2),n(3),n(13),n(4),n(5),n(6),n(7),n(8),n(9),n(1)},function(t,e,n){"use strict";(function(){return function(t,e){var n,r=document.querySelector(t),i=r.querySelector(".slider__wrapper"),o=r.querySelectorAll(".slider__item"),a=(r.querySelectorAll(".slider__control"),r.querySelector(".slider__control_left"),r.querySelector(".slider__control_right"),parseFloat(getComputedStyle(i).width)),c=parseFloat(getComputedStyle(o[0]).width),l=r.innerHTML,s=0,u=o.length-1,d=0,f=0,m=c/a*100,v=[],g=0,p=[{active:!1,minWidth:0,count:1},{active:!1,minWidth:576,count:2},{active:!1,minWidth:992,count:3},{active:!1,minWidth:1200,count:4}],y={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var h in e)h in y&&(y[h]=e[h]);o.forEach(function(t,e){v.push({item:t,position:e,transform:0})});var _=function(){var t=0,e=parseFloat(document.body.clientWidth);p.forEach(function(n,r,i){p[r].active=!1,e>=p[r].minWidth&&(t=r)}),p[t].active=!0},S={getItemMin:function(){var t=0;return v.forEach(function(e,n){e.position<v[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return v.forEach(function(e,n){e.position>v[t].position&&(t=n)}),t},getMin:function(){return v[S.getItemMin()].position},getMax:function(){return v[S.getItemMax()].position}},L=function(t){var e,o,l,g,p,y,h=s;(l=(o=r).getBoundingClientRect(),g=window.innerWidth||doc.documentElement.clientWidth,p=window.innerHeight||doc.documentElement.clientHeight,y=function(t,e){return document.elementFromPoint(t,e)},l.right<0||l.bottom<0||l.left>g||l.top>p||!(o.contains(y(l.left,l.top))||o.contains(y(l.right,l.top))||o.contains(y(l.right,l.bottom))||o.contains(y(l.left,l.bottom))))||("right"===t&&(++d+a/c-1>S.getMax()&&(e=S.getItemMin(),v[e].position=S.getMax()+1,v[e].transform+=100*v.length,v[e].item.style.transform="translateX("+v[e].transform+"%)"),f-=m,(s+=1)>u&&(s=0)),"left"===t&&(--d<S.getMin()&&(e=S.getItemMax(),v[e].position=S.getMin()-1,v[e].transform-=100*v.length,v[e].item.style.transform="translateX("+v[e].transform+"%)"),f+=m,(s-=1)<0&&(s=u)),i.style.transform="translateX("+f+"%)",n[h].classList.remove("active"),n[s].classList.add("active"))},M=function(t){y.isCycling&&(g=setInterval(function(){L(t)},y.interval))},b=function(t){if(t.target.classList.contains("slider__control")){t.preventDefault();var e=t.target.classList.contains("slider__control_right")?"right":"left";L(e),clearInterval(g),M(y.direction)}t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=t>s?"right":"left";t!==s&&e<=u;)L(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))),clearInterval(g),M(y.direction))},E=function(){"hidden"===document.visibilityState?clearInterval(g):(clearInterval(g),M(y.direction))},I=function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0;e<o.length;e++){var i=document.createElement("li");0===e&&i.classList.add("active"),i.setAttribute("data-slide-to",e),t.appendChild(i)}r.appendChild(t),n=r.querySelectorAll(".slider__indicators > li")};return I(),r.addEventListener("click",b),y.pause&&y.isCycling&&(r.addEventListener("mouseenter",function(){clearInterval(g)}),r.addEventListener("mouseleave",function(){clearInterval(g),M(y.direction)})),document.addEventListener("visibilitychange",E,!1),window.addEventListener("resize",function(){var t=0,e=parseFloat(document.body.clientWidth);p.forEach(function(n,r,i){e>=p[r].minWidth&&(t=r)}),t!==function(){var t;return p.forEach(function(e,n,r){p[n].active&&(t=n)}),t}()&&(_(),clearInterval(g),r.innerHTML=l,i=r.querySelector(".slider__wrapper"),o=r.querySelectorAll(".slider__item"),r.querySelectorAll(".slider__control"),r.querySelector(".slider__control_left"),r.querySelector(".slider__control_right"),a=parseFloat(getComputedStyle(i).width),c=parseFloat(getComputedStyle(o[0]).width),d=0,f=0,s=0,u=o.length-1,m=c/a*100,v=[],o.forEach(function(t,e){v.push({item:t,position:e,transform:0})}),I())}),"visible"===document.visibilityState&&M(y.direction),_(),{right:function(){L("right")},left:function(){L("left")},stop:function(){y.isCycling=!1,clearInterval(g)},cycle:function(){y.isCycling=!0,clearInterval(g),M()}}}})()(".main__wrapper--slider-main",{isCycling:!0})}]);