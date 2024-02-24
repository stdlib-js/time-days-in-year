<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# daysInYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the number of days in a year according to the [Gregorian calendar][gregorian-calendar].



<section class="usage">

## Usage

To use in Observable,

```javascript
daysInYear = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/time-days-in-year@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/time-days-in-year/tags). For example,

```javascript
daysInYear = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/time-days-in-year@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var daysInYear = require( 'path/to/vendor/umd/time-days-in-year/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/time-days-in-year@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.daysInYear;
})();
</script>
```

#### daysInYear( \[value] )

Returns the number of days in a year according to the [Gregorian calendar][gregorian-calendar].

```javascript
var num = daysInYear();
// returns <number>
```

By default, the function returns the number of days in the current year (according to local time). To determine the number of days for a particular year, provide either a year or a [`Date`][date-object] object.

```javascript
var num = daysInYear( new Date() );
// returns <number>

num = daysInYear( 2000 );
// returns 366

num = daysInYear( 2017 );
// returns 365
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/time-days-in-year@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = daysInYear( i );
    console.log( 'The year %d has %d days.', i, v );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time-days-in-month`][@stdlib/time/days-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of days in a month.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-days-in-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-days-in-year

[test-image]: https://github.com/stdlib-js/time-days-in-year/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/time-days-in-year/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-days-in-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-days-in-year?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-days-in-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-days-in-year/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/time-days-in-year#cli
[cli-url]: https://github.com/stdlib-js/time-days-in-year/tree/cli
[@stdlib/time-days-in-year]: https://github.com/stdlib-js/time-days-in-year/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-days-in-year/tree/deno
[deno-readme]: https://github.com/stdlib-js/time-days-in-year/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/time-days-in-year/tree/umd
[umd-readme]: https://github.com/stdlib-js/time-days-in-year/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/time-days-in-year/tree/esm
[esm-readme]: https://github.com/stdlib-js/time-days-in-year/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/time-days-in-year/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-days-in-year/main/LICENSE

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/days-in-month]: https://github.com/stdlib-js/time-days-in-month/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
