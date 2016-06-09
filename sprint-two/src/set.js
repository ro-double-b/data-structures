var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) >= 0;
};

setPrototype.remove = function(item) {
  var idx = this._storage.indexOf(item);
  this._storage = this._storage.slice(0, idx).concat(this._storage.slice(idx + 1, this._storage.length));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
