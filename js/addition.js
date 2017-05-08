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
