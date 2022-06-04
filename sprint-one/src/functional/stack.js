var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //keep track of key count
  var keyCount = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //add to storage object number as key and value as value(string)
    storage[keyCount] = value;
    //after adding increase the key number
    keyCount++;
  };

  someInstance.pop = function() {
    //with pop decrease the number
    if (keyCount > 0) {
      keyCount--;
      var temp = storage[keyCount];
      delete storage[keyCount];
      return temp;
    }
    //number as key and value as value
  };

  someInstance.size = function() {
    return keyCount;
  };
  return someInstance;
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
//_    {4: 'no}//