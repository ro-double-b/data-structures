var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    delete storage[0];
    for (var i = 1; i <= key; i++) {
      storage[i - 1] = storage[i];
    }
    delete storage[key];
    key--;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
