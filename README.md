# AngularJS Unique Filter
[![Build Status](https://travis-ci.com/noblesamurai/angularjs-unique-filter.svg?branch=master)](https://travis-ci.com/noblesamurai/angularjs-unique-filter)

> unique filter for Angular 1.x

## Purpose
- Used to filter a list so that all items are unique based on a specified object key.

## Installation

This module is installed via npm:

``` bash
$ npm install angularjs-unique-filter
```

## Usage

Import angularjs-unique-filter and angular:

```js
import angular from 'angular';
import uniqueFilter from 'angularjs-unique-filter';
```

Ensure that your application module specifies the filter as a dependency:

```js
angular.module('yourModule', [ uniqueFilter.name ]);
```

Use the filter in your html:

```html
<ul ng-repeat="item in items | unique:'name'">{{ item.name }}</ul>
```

## License

The BSD License

Copyright (c) 2018, Andrew Harris

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Andrew Harris nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

