var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueueCount = 0;
  var dequeueCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add keyCount and value to storage
    storage[enqueueCount] = value;
    //increase count
    enqueueCount++;
  };
  someInstance.dequeue = function() {
    if (enqueueCount - dequeueCount) {
      var temp = storage[dequeueCount];
      delete storage[dequeueCount];
      dequeueCount++;
      return temp;
    }
  };

  someInstance.size = function() {
    return enqueueCount - dequeueCount;
  };

  return someInstance;
};
//
//
// value  e   d   c   b   a
///       |   |   |   |  |
//key     5   4   3   2  1


////encount = 5
///dec count = 0