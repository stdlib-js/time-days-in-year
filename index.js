// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",i=t()?function(e){var t,i,u,l,a;if(null==e)return r.call(e);i=e[o],a=o,t=null!=(l=e)&&n.call(l,a);try{e[o]=void 0}catch(t){return r.call(e)}return u=r.call(e),t?e[o]=i:delete e[o],u}:function(e){return r.call(e)},u=Date.prototype.getDay,l=t();function a(e){return"object"==typeof e&&(e instanceof Date||(l?function(e){try{return u.call(e),!0}catch(e){return!1}}(e):"[object Date]"===i(e)))}var c="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty,p=Object.prototype,y=p.toString,b=p.__defineGetter__,s=p.__defineSetter__,_=p.__lookupGetter__,d=p.__lookupSetter__,g=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?f:function(e,t,r){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===y.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(_.call(e,t)||d.call(e,t)?(n=e.__proto__,e.__proto__=p,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&b&&b.call(e,t,r.get),u&&s&&s.call(e,t,r.set),e};function m(e,t,r){g(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function v(e){return"number"==typeof e}var j=Number,h=j.prototype.toString,w=t();function S(e){return"object"==typeof e&&(e instanceof j||(w?function(e){try{return h.call(e),!0}catch(e){return!1}}(e):"[object Number]"===i(e)))}function I(e){return v(e)||S(e)}m(I,"isPrimitive",v),m(I,"isObject",S);var O=Number.POSITIVE_INFINITY,T=j.NEGATIVE_INFINITY,N=Math.floor;function P(e){return e<O&&e>T&&N(t=e)===t;var t}function D(e){return v(e)&&P(e)}function E(e){return S(e)&&P(e.valueOf())}function F(e){return D(e)||E(e)}function Y(e){var t;if(arguments.length)if(a(e))t=e.getFullYear();else{if(!D(e))return!1;t=e}else t=(new Date).getFullYear();return t%100==0?t%400==0:t%4==0}function V(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}function x(){return(new Date).getFullYear()}return m(F,"isPrimitive",D),m(F,"isObject",E),function(e){var t;if(arguments.length)if(a(e))t=e.getFullYear();else{if(!D(e))throw new TypeError(V("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));t=e}else t=x();return Y(t)?366:365}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).daysInYear=t();
//# sourceMappingURL=index.js.map
