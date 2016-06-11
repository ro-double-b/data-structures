var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof(item) === 'function') {
    if (this._storage[item.toString()] === undefined) {
      this._storage[item.toString()] = [];
    }
    this._storage[item.toString()].push(item);
  } else {
    if (this._storage[JSON.stringify(item)] === undefined) {
      this._storage[JSON.stringify(item)] = [];
    }
    this._storage[JSON.stringify(item)].push(item);
  }
};

setPrototype.contains = function(item) {
  var result = false;
  if (this._storage[JSON.stringify(item)]) {
    this._storage[JSON.stringify(item)].forEach(function(element) {
      if (typeof(element) === typeof(item)) {
        result = true;
      }
    });
  } 
  if (this._storage[item.toString()]) {
    this._storage[item.toString()].forEach(function(element) {
      if (typeof element === 'function') {
        result = true;
      }
    });
  }
  return result;
};

setPrototype.remove = function(item) {
  var typeArray;
  if (typeof item === 'function') {
    typeArray = this._storage[item.toString()];
  } else {
    typeArray = this._storage[JSON.stringify(item)];
  }

  if (typeArray) { 
    if (typeArray.length === 1) {
      if (typeof item === 'function') {
        this._storage[item.toString()] = undefined;
      } else {
        this._storage[JSON.stringify(item)] = undefined;
      }
    } else {
      var types = typeArray.map(function(element) {
        return typeof element;
      });

      var itemType = typeof item;
      var indexToRemove = types.indexOf(itemType);

      typeArray = typeArray.slice(0, indexToRemove).concat.typeArray.slice(indexToRemove + 1, typeArray.length);

      if (typeof item === 'function') {
        this._storage[item.toString()] = typeArray;
      } else {
        this._storage[JSON.stringify(item)] = typeArray;
      }
    }
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
