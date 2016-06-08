var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {0: 1};
  var key = 0;
  var lastValue;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
    lastValue = value;
  };

  someInstance.pop = function() {
    if (key > 0) {
      delete storage[key];
      key--;      
    }
    return lastValue;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
