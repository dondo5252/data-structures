var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.keyCount = 0
};
var stack = {};
Stack.prototype.push = function (value) {
  // this.keyCount = value
  this.keyCount++
  // this.keyCount = value
}

Stack.prototype.pop = function (value) {

  if(this.keyCount > 0) {
     this.keyCount--;
    //  var temp = this.keyCount[this.keyCount]
    // delete this.keyCount
    // return temp
  }
}
//
Stack.prototype.size = function () {
  return this.keyCount
}
//