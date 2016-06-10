var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    var index = this.parent.children.forEach(function(node, idx) {
      if (this.value === node.value) {
        return index;
      }
    }, this);
    this.parent.children = this.parent.children.slice(0, index).concat(this.parent.children.slice(index + 1, this.parent.children.length));
    this.parent = null; 
  }
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;     
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
