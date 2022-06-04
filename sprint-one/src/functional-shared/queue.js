// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  var someInstance = {
    enqueueSize: 0,
    dequeueSize: 0,
    storage: {}
  };
  _.extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {};
//enqueue
//create method passing in a value to push in
queueMethods.enqueue = function (value) {
//add to storage the  storageSize as key and value as property
  this.storage[this.enqueueSize] = value;
  //increase storageSize
  this.enqueueSize++;
};
//
//dequeue
queueMethods.dequeue = function() {
  //delete from storage
  if (this.enqueueSize - this.dequeueSize) {
    var temp = this.storage[this.dequeueSize];
    delete this.storage[this.dequeueSize];
    this.dequeueSize++;
    return temp;
    //decrement
  }
};




//size
queueMethods.size = function () {
  return this.enqueueSize - this.dequeueSize;
};
