var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var storage = Node(value);
    if (list.head === null && list.tail === null) {
      //reassign head
      list.head = storage; //{value: 'b', next: null}
      //reassign tail
      list.tail = storage; //{value: 'b', next: null}
      //otherwise if node next to tail is
    } else {
      //reference to tail would be same as tail
      list.tail.next = storage;//{value: 'b', next: null}
      //tail is assigned to add value
      list.tail = storage;//{value: 'b', next: null}
    }
  };
  list.removeHead = function() {
    //store curretn head value
    var temp = list.head; //{value: 'b', next: null}
    //reassign head reference to next item
    list.head = list.head.next;// null

    return temp.value; //'b'
  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {
    value: value,
    next: null
  };
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// | | | | | |
