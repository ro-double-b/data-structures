var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.head.previous = Node(value);
      var temp = list.head;
      list.head = list.head.previous;
      list.head.next = temp;
    }

  };

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else { 
      list.tail.next = Node(value);
      var temp = list.tail;
      list.tail = list.tail.next;
      list.tail.previous = temp;
    }
    
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head.next.previous = null;
    list.head = list.head.next;
    return temp.value;
  };

  list.removeTail = function() {
    var temp = list.tail;
    list.tail.previous.next = null;
    list.tail = list.tail.previous;
    return temp.value;
  };

  list.contains = function(target, node = list.head) {
    if (node.value === target) {
      return true;
    } 
    if (node.next === null) {
      return false;
    }
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
