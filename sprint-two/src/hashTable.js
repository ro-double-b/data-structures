
var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  if (this._storage.get(index) === undefined || k === this._storage.get(index)[0]) {
    var pair = [k, v];
    this._storage.set(index, pair);    
  } else {

    if (Array.isArray(this._storage.get(index)[0])) {
      
      var currentArray = this._storage.get(index);
      currentArray.push([k, v]);
      this._storage.set(index, currentArray);
    } else {
      
      var result = [];
      var temp = this._storage.get(index);
      result.push(temp);
      result.push([k, v]);
      this._storage.set(index, result);     
    }
  }
  this._counter++;

  if (this._counter / this._limit >= .75) {
    var copyStorage = this._storage;
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    
    this._counter = 0;
    var that = this;

    copyStorage.each(function(element) {
      if (element) {
        if (Array.isArray(element[0])) {
          element.forEach(function(array) {
            that.insert(array[0], array[1]);
          });
        } else if (element) {
          that.insert(element[0], element[1]);
        }
      }
    });
  }
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    if (Array.isArray(this._storage.get(index)[0])) {
      var toCheck = this._storage.get(index);
      toCheck.forEach(function(array) {
        if (array[0] === k) {
          result = array[1];
        }
      });
      return result;
    }
    return this._storage.get(index)[1];
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._counter--;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


