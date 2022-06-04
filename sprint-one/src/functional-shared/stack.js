// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.


var Stack = function() {
  var someInstance = {
    keyCount: 0,
    storage: {}
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};
var stackMethods = {};

//push
//create new property named push assigned function pass value
stackMethods.push = function (value) {
  this.storage[this.keyCount] = value;
  // this keycount ++
  this.keyCount++;
};
//
//pop
////create new property named pop assisgned to function passs value
stackMethods.pop = function () {
  //if storage is not empty
  if (this.keyCount > 0) {
    //decremtent count
    this.keyCount--;
    // store  popped in var
    var temp = this.storage[this.keyCount];
    //delete popped
    delete this.storage[this.keyCount];
    //reeturn popped
    return temp;
  }
};
//size
stackMethods.size = function () {
  return this.keyCount;
};

//
//Last in first out
//_    {1: 'hello'}
//_    {2: 'goodbye}
//_    {3: 'yes}
//_    {4: 'no}


//_                      //pop
//_    {2: 'goodbye}
//_    {3: 'yes}
//_    {4: 'no}

//_
//_                  //pop
//_    {3: 'yes}
//_    {4: 'no}

//_
//_    {2: 'maybe'}     //push
//_    {3: 'yes}
//_    {4: 'no}

//_    {1: 'hello'}     //push
//_    {2: 'maybe'}
//_    {3: 'yes}
//_    {4: 'no}