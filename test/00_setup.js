const chai = require('chai');
chai.use(require('dirty-chai'));

// create fake dom
const { JSDOM } = require('jsdom');
global.window = new JSDOM('<html><head><script></script></head><body></body></html>').window;
global.document = window.document;
global.navigator = window.navigator = {};
global.Node = window.Node;

// attach mocha items required for angular-mocks
const mocha = require('mocha');
window.mocha = mocha;
window.beforeEach = beforeEach;
window.afterEach = afterEach;

// include and setup angular + angular-mocks
require('angular/angular');
require('angular-mocks');
global.angular = window.angular;
global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;
