(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Addition = function () {
  this.totalSums = 0;
};

Addition.prototype.sum = function (x, y) {
  this.totalSums += 1;
  return x + y;
};

Addition.prototype.getTotalSums = function() {
  return this.totalSums;
}

module.exports = new Addition();

},{}],2:[function(require,module,exports){
var print = require('./print.js');
var addition = require('./addition.js');
print.sentence('I went for a walk');
console.log(addition.sum(4, 5));
console.log(addition.getTotalSums());
console.log(addition);
addition();

},{"./addition.js":1,"./print.js":3}],3:[function(require,module,exports){
function sentence(sent) {
  console.log(sent);
}

module.exports = {
  sentence : sentence
}

},{}]},{},[1,2,3]);
