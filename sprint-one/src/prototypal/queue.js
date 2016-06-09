var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.key = 0;
  obj.stack = {};

  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.stack[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
  if (this.key > 0) {
    var temp = this.stack[0];
    delete this.stack[0];
    for (var i = 0; i < this.key; i++) {
      this.stack[i] = this.stack[i + 1];
    }
    delete this.stack[this.key];
    this.key--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.key;
};