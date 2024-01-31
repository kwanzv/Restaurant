(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(927),t.b),l=new URL(t(279),t.b),u=i()(o()),p=c()(d),f=c()(l);u.push([e.id,`.highlight {\n  color: blue;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 0.5rem;\n}\n\nnav button {\n  margin: 0 10px;\n  padding: 0.8rem;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n}\n\nnav button:hover {\n  transform: translateY(-2px);\n  background: #fff;\n  color: #333;\n}\n\n.title {\n  text-align: center;\n  padding-top: 1rem;\n}\n\n#content {\n  padding: 0;\n  width: 80%;\n  margin: 0 auto;\n}\n\n#grid {\n  display: grid;\n  width: 100%;\n  place-items: center start;\n  padding: 1rem;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto; /* or specify row sizes */\n  grid-gap: 10px; /* Adjust gap between items */\n}\n\n.subtitle {\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 0.5rem;\n}\n\nnav h1 {\n  text-align: center;\n  padding: 1rem;\n  color: black;\n  padding: 1rem;\n}\n\n.landing-image {\n  width: 40%;\n}\n\n@media (max-width: 768px) {\n  #grid {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n  }\n  #grid p {\n    font-size: 1rem;\n  }\n\n  .landing-image {\n    max-width: 100%; /* This ensures the image doesn't exceed the width of its container */\n    height: auto; /* This maintains the aspect ratio of the image */\n    display: block; /* Removes extra space below the image due to its inline nature */\n  }\n}\n\n#landing {\n  width: 100%;\n  height: 100vh;\n  background: url(${p});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: relative;\n}\n\n.landing-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  padding: 1.5rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\niframe {\n  padding: 2rem;\n}\n\n.menu-info {\n  padding: 1rem;\n  background-color: gray;\n  color: white;\n  height: 80vh;\n  width: 80vw;\n  border-radius: 10px;\n  background: url(${f});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.menu-info .heading {\n  font-size: 2rem;\n  text-align: center;\n}\n\n.food-category {\n  padding: 2rem;\n  text-decoration: underline;\n}\n\nspan.price {\n  margin-left: 1rem;\n}\n`,""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},927:(e,n,t)=>{e.exports=t.p+"c98e7e5ffe2448cb70d6.jpg"},279:(e,n,t)=>{e.exports=t.p+"b9d3847d44dccc2a7e84.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(28),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class g{constructor(e,n,t){this.tag=e,this.props=n,this.children=t}render(){const e=document.createElement(this.tag);for(const n in this.props)e.setAttribute(n,this.props[n]);return this.children.forEach((n=>{"string"==typeof n?e.appendChild(document.createTextNode(n)):e.appendChild(n.render())})),e}}const m=new g("div",{id:"grid"},[new g("div",{class:"about-info"},[new g("p",{class:"subtitle"},["Founded in 1999 by a Chinese couple with a huge desire to bring Chinese cuisine to the world. New Ki Lee has been operating for over 20 years."]),new g("p",{class:"subtitle"},["Now with over 5 branches all across the country, we are ready to serve you."])]),new g("div",{class:"landing-image"},[new g("img",{class:"landing-img",src:"/src/cook.jpg",alt:"Wok Cooking"},[])]),new g("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2485.381430737368!2d-2.5779152!3d51.4695126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e15b4f0cd53%3A0xa875ea100cb65ecd!2sNew%20Ki-Lee%20Fish%20Bar!5e0!3m2!1sen!2s!4v1706705466032!5m2!1sen!2s",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},[]),new g("p",{class:"subtitle"},["Find us on Google Maps"])]),v=new g("div",{id:"landing"},[new g("div",{class:"landing-info"},[new g("p",{class:"subtitle"},["Indulge your taste buds in an exquisite journey of flavors at New Ki Lee, your go-to destination for authentic Chinese cuisine."]),new g("p",{class:"subtitle"},["Immerse yourself in a symphony of tastes, textures, and aromas that transport you to the bustling streets of Beijing."])])]),w=new g("div",{id:"grid"},[new g("div",{class:"menu-info"},[new g("h1",{class:"heading"},["Our Menu"]),new g("h2",{class:"food-category"},["Main Courses"]),new g("h3",{class:"food-item"},["Wonton Noodles",new g("span",{class:"price"},["$8.99"])]),new g("h3",{class:"food-item"},["Char Siu Rice",new g("span",{class:"price"},["$6.99"])]),new g("h3",{class:"food-item"},["Seafood Fried Rice",new g("span",{class:"price"},["$8.99"])]),new g("h3",{class:"food-item"},["Wonton Noodles",new g("span",{class:"price"},["$8.99"])]),new g("h2",{class:"food-category"},["Drinks"]),new g("h3",{class:"food-item"},["Chrysanthemum Tea",new g("span",{class:"price"},["$2.99"])]),new g("h3",{class:"food-item"},["Green Tea",new g("span",{class:"price"},["$2.99"])]),new g("h3",{class:"food-item"},["Tiger Beer (pint)",new g("span",{class:"price"},["$2.99"])]),new g("h3",{class:"food-item"},["Orange Juice",new g("span",{class:"price"},["$1.99"])])])]),b=document.querySelector("#content");b.appendChild(v.render()),document.querySelectorAll("button").forEach((e=>{e.classList.add(e.innerHTML),e.addEventListener("click",(()=>{switch(e.innerHTML){case"Home":b.replaceChildren(v.render());break;case"Menu":b.replaceChildren(w.render());break;case"About":b.replaceChildren(m.render())}}))}))})()})();