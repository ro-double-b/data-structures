
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
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
};

HashTable.prototype.retrieve = function(k) {
  debugger;
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


