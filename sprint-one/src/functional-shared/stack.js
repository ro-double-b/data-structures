var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.key = 0;
  instance.storage = {};

  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  pop: function() {
    if (this.key > 0) {
      this.key--;
      var temp = this.storage[this.key];
      delete this.storage[this.key];
      return temp;
    }
  },

  size: function() {
    return this.key;
  }

};


