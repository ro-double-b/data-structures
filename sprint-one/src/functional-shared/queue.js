var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.key = 0;

  instance.dequeue = queueMethods.dequeue;
  instance.enqueue = queueMethods.enqueue;
  instance.size = queueMethods.size;

  return instance;
};
// instance.key
var queueMethods = {
  dequeue: function() {
    if (this.key > 0) {
      this.key--;
      var temp = this[0];
      delete this[0];

      for (var i = 0; i < this.key; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.key];

      return temp;
    }
  },

  enqueue: function(value) {
    this[this.key] = value;
    this.key++;
  },

  size: function() {
    return this.key;
  }
};


