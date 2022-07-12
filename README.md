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

# daysInYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the number of days in a year according to the [Gregorian calendar][gregorian-calendar].

<section class="installation">

## Installation

```bash
npm install @stdlib/time-days-in-year
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var daysInYear = require( '@stdlib/time-days-in-year' );
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

```javascript
var daysInYear = require( '@stdlib/time-days-in-year' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = daysInYear( i );
    console.log( 'The year %d has %d days.', i, v );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/time-days-in-year
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: days-in-year [options] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ days-in-year
<number>
```

For a specific year,

```bash
$ days-in-year 2016
366
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time/days-in-month`][@stdlib/time/days-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of days in a month.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-days-in-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-days-in-year

[test-image]: https://github.com/stdlib-js/time-days-in-year/actions/workflows/test.yml/badge.svg?branch=v0.0.10
[test-url]: https://github.com/stdlib-js/time-days-in-year/actions/workflows/test.yml?query=branch:v0.0.10

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-days-in-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-days-in-year?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-days-in-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-days-in-year/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-days-in-year/tree/deno
[umd-url]: https://github.com/stdlib-js/time-days-in-year/tree/umd
[esm-url]: https://github.com/stdlib-js/time-days-in-year/tree/esm
[branches-url]: https://github.com/stdlib-js/time-days-in-year/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-days-in-year/main/LICENSE

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/days-in-month]: https://github.com/stdlib-js/time-days-in-month

<!-- </related-links> -->

</section>

<!-- /.links -->
