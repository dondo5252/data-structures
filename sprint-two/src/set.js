var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // takes any string and adds it to the set
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // takes any string and returns a boolean reflecting whether it can be found in the set
  if (!this._storage[item]) {
    return false;
  }
  return true;
};

setPrototype.remove = function(item) {
  // takes any string and removes it from the set, if present
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

// prototypal
// Once a value is added to a set, adding it a second time should not increase the size of the set.
// Until the advanced section, your sets should handle only string values.
/*
 * Complexity: What is the time complexity of the above functions?
 */