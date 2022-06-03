var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.keyCount = 0
};

Stack.prototype.push = function (value) {
  // this.keyCount = value
  console.log('value' , value)
  this.keyCount++
}

Stack.prototype.pop = function () {

  if(this.keyCount > 0) {
    this.keyCount--;

  }
}

Stack.prototype.size = function () {
  return this.keyCount
}
