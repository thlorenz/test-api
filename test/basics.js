'use strict';
/*jshint asi: true */

var test = require('tape').test

test('boolean works', function (t) {
  t.ok(true, 'true is true')  
  t.notOk(false, 'false is false')  
  t.end()
})
