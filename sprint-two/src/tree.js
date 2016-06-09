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
  var returnedValues = {};
  var key = 0;
  var that = this;

  var walk = function() {
    if (that.value === target) {
      return true;
    }
    
    for (i = 0; i < that.childNum; i++) {
      returnedValues[key] = that.children[i].contains(target);
      key++;
    }
    var result = false;
    for (i = 0; i < key; i++) {
      if (returnedValues[i] === true) {
        result = true;
      }
    }  
  };
  walk();
  console.log(returnedValues);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
