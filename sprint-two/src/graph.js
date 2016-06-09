

// Instantiate a new graph
var Graph = function() {
  this.values = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.values.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.values.indexOf(node) >= 0;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.values.indexOf(node);
  this.values = this.values.slice(0, index).concat(this.values.slice(index + 1, this.values.length));
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  this.edges.forEach(function(pair) {
    debugger;
    if (pair.indexOf(fromNode) >= 0 && pair.indexOf(toNode) >= 0) {
      result = true;
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var idx;
  this.edges.forEach(function(pair, index) {
    if (pair.indexOf(fromNode) >= 0 && pair.indexOf(toNode) >= 0) {
      idx = index;
    }
  });
  this.edges = this.edges.slice(0, idx).concat(this.edges.slice(idx + 1, this.edges.length));
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  return this.values.map(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */