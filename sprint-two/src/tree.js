var Tree = function(value) {
  var newTree = {};
  newTree.childNum = 0;
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = {};  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[this.childNum] = Tree(value);
  this.childNum++;
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.childNum; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;     
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
