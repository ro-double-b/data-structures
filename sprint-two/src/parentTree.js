var parentTree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.addChild = parentTreeMethods.addChild;
  newTree.contains = parentTreeMethods.contains;
  newTree.removeFromParent = parentTreeMethods.removeFromParent;
  newTree.traverse = parentTreeMethods.traverse;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var parentTreeMethods = {};

parentTreeMethods.addChild = function(value) {
  this.children.push(parentTree(value));
  this.children[this.children.length - 1].parent = this;
};

parentTreeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    var index;
    this.parent.children.forEach(function(node, idx) {
      if (this.value === node.value) {
        index = idx;
      }
    }, this);
    console.log(index);
    this.parent.children = this.parent.children.slice(0, index).concat(this.parent.children.slice(index + 1, this.parent.children.length));
    this.parent = null; 
  }
};

parentTreeMethods.contains = function(target) {

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

parentTreeMethods.traverse = function(callback) {
  callback(this.value);
  this.children.forEach(function(child) {
    child.traverse(callback);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
