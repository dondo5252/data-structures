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
    //return removed value
    return temp.value; //'b'
  };
  //                                                                                                                      temp.next = b
  list.contains = function(target, currHead) { //                                                                               list.head.next
    //returns boolean reflecting whether or not the passed-in value is in the linked list                  list.head
    //head points to first node in list and contains a reference to next node follow nodes                 {value: 'a', next: 'b'},  {value: 'b', next: 'c'} , {value: 'c', next: 'd'}
    //check if list.head is equal to target
    if (list.head.value === target || list.tail.value === target) {
    //if it is return true
      return true;
    //otherwise
    }
    if (list.head.value === list.tail.value) {
      return false;
    } else {
      //reassign list.head to list.head.next
      list.head = list.head.next;
      list.contains(target, list.head);
    }
    return false;
    //store list.head.next
    //return boolean
    // }
  };
  //
  // list.contains = function(target) {
  //   // debugger;
  //   var nodeStart = list.head;
  //   console.log('nodeStart', nodeStart);
  //   console.log('nodeStart.value:', nodeStart.value);
  //   if (nodeStart.value === target) {
  //     return true;
  //   }

  //   // include recursive somewhere
  //   if (nodeStart.next !== null) {
  //     console.log('nodeStart.next', nodeStart.next);
  //     if (nodeStart.next.value === target) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // };

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
