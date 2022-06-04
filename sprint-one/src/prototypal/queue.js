var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(queueMethods);

  newObj.dequeueSize = 0;
  newObj.enqueueSize = 0;

  return newObj;
};

var queueMethods = {};
//push
queueMethods.enqueue = function (value) {
  queueMethods[this.enqueueSize] = value;
  this.enqueueSize++;
};
//pop
//dequeue
queueMethods.dequeue = function () {
  if (this.enqueueSize - this.dequeueSize) {
    var temp = queueMethods[this.dequeueSize];
    delete queueMethods[this.dequeueSize];
    this.dequeueSize++;
    return temp;
  }
};
//
//size
queueMethods.size = function() {

  return this.enqueueSize - this.dequeueSize;
};//