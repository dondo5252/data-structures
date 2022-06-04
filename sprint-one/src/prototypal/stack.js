var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(stackMethods);
  newObj.keyCount = 0;
  return newObj;
};

var stackMethods = {};
stackMethods.push = function (value) {
  stackMethods[this.keyCount] = value;
  this.keyCount++;
};


//pop
stackMethods.pop = function () {
  if (this.keyCount > 0) {
    this.keyCount--;
    var temp = stackMethods[this.keyCount];
    delete stackMethods[this.keyCount];
    return temp;
  }
};

stackMethods.size = function () {
  return this.keyCount;
};
//
