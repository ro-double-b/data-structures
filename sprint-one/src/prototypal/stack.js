var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.key = 0;
  obj.stack = {};

  return obj;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stack[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  if (this.key > 0) {
    this.key--;
    var temp = this.stack[this.key];
    delete this.stack[this.key];
    return temp;
  }
};

stackMethods.size = function() {
  return this.key;
};




