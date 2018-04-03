var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();
var idope = require('../app');
var idopeOld = require('./app.old');

const html = require('fs').readFileSync('./test/resources/raw.html');

suite
  .add('old', function() {
    idopeOld.parseHtml(html);
  })
  .add('new', function() {
    idope.parseHtml(html);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
