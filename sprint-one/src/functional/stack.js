var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {0: 1};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
