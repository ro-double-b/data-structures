var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    }
    if (list.tail !== null) {
      list.head.next = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
