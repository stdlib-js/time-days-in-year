// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=e()?function(t){var e,a,u,l,i;if(null==t)return r.call(t);a=t[o],i=o,e=null!=(l=t)&&n.call(l,i);try{t[o]=void 0}catch(e){return r.call(t)}return u=r.call(t),e?t[o]=a:delete t[o],u}:function(t){return r.call(t)},u=Date.prototype.getDay;var l=e();function i(t){return"object"==typeof t&&(t instanceof Date||(l?function(t){try{return u.call(t),!0}catch(t){return!1}}(t):"[object Date]"===a(t)))}var c="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty,p=Object.prototype,y=p.toString,b=p.__defineGetter__,v=p.__defineSetter__,_=p.__lookupGetter__,s=p.__lookupSetter__;var g=function(){try{return c({},"x",{}),!0}catch(t){return!1}}()?f:function(t,e,r){var n,o,a,u;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(_.call(t,e)||s.call(t,e)?(n=t.__proto__,t.__proto__=p,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),a="get"in r,u="set"in r,o&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&b&&b.call(t,e,r.get),u&&v&&v.call(t,e,r.set),t};function m(t,e,r){g(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function j(t){return"number"==typeof t}var d=Number,h=d.prototype.toString;var w=e();function S(t){return"object"==typeof t&&(t instanceof d||(w?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===a(t)))}function O(t){return j(t)||S(t)}m(O,"isPrimitive",j),m(O,"isObject",S);var I=Number.POSITIVE_INFINITY,T=d.NEGATIVE_INFINITY,N=Math.floor;function P(t){return t<I&&t>T&&N(e=t)===e;var e}function D(t){return j(t)&&P(t)}function E(t){return S(t)&&P(t.valueOf())}function F(t){return D(t)||E(t)}function Y(t){var e;if(arguments.length)if(i(t))e=t.getFullYear();else{if(!D(t))return!1;e=t}else e=(new Date).getFullYear();return e%100==0?e%400==0:e%4==0}function V(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function A(){return(new Date).getFullYear()}m(F,"isPrimitive",D),m(F,"isObject",E);function G(t){var e;if(arguments.length)if(i(t))e=t.getFullYear();else{if(!D(t))throw new TypeError(V("1QDLR",t));e=t}else e=A();return Y(e)?366:365}export{G as default};
//# sourceMappingURL=mod.js.map
