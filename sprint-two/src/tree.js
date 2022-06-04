var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
/*
var newtree  {
    'value': value,
    'children': null
  }
*/
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
//i -
//o -
//c -
//e -
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var isPresent = false;
  var recursive = function(arrayOfChildren) {
    for (let i = 0; i < arrayOfChildren.length; i++) {
      // arrayOfChildren[i] = each child object
      if (arrayOfChildren[i].value === target) {
        isPresent = true;
      }
      if (arrayOfChildren[i].children !== []) {
        recursive(arrayOfChildren[i].children);
      }
    }
  };
  recursive(this.children);
  return isPresent;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
