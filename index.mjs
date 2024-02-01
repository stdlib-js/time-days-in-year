// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@esm/index.mjs";function n(n){var d;if(arguments.length)if(e(n))d=n.getFullYear();else{if(!t(n))throw new TypeError(r("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",n));d=n}else d=i();return s(d)?366:365}export{n as default};
//# sourceMappingURL=index.mjs.map
