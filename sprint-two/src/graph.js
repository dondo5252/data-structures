
// Instantiate a new graph
var Graph = function() {
  //create node storage

  this.vertices = {};
  this.edge = {};

//create edge storage
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add node to vertices object
  this.vertices[node] = node;
  console.log(this.vertices[node]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //if this.vertices[node] === undefined not in vetices obj
  if (this.vertices[node] === undefined) {
    return false;
  } else {
    return true;
  }

};
////
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //store value
  var temp = this.vertices[node];
  //delete value
  delete this.vertices[node];
  // Object.keys(this.edge)
  // edgesList is an array of strings of this.edge keys
  var edgesList = Object.keys(this.edge);
  // give us an array of the keys
  // keys would be "1,2", "2,1", "3,4",...
  // ['1,2', '2,1',..]
  // iterate over the array with the if condition of indexOf(Node)

  for (let i = 0; i < edgesList.length; i++) {
    if (edgesList[i].indexOf(node) > -1) {
      delete this.edges[edgesList[i]];
    }
  }
  // if edgesList[i].indexOf(node) > -1
  // delete
  // give us a list of the array entries that have the node
  // delete this.edge[^]

  // deletes actual node
  delete this.vertices[node];
  //return stored value
  return temp;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return bool
  // compare if it has an edge
  // store edges as (a,b) and (b,a)
  if (this.edge[fromNode + ',' + toNode] === undefined) {
    return false;
  } else {
    return true;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // fromNode is where we are going from
  // toNode is where we are going
  // storing fromNode and toNode in the edge object // edge{node: [fromNode, toNode] }
  this.edge[fromNode + ',' + toNode] = [fromNode, toNode];
  this.edge[toNode + ',' + fromNode] = [toNode, fromNode];
  /*
  fromNode = 1
  toNode = 2
  edge = {
    "1,2": [1,2]
    "2,1": [2,1]
  }
  edge["1,2"] -> [1,2]
  edge["2,1"] -> [2,1]
  */
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //delete edge
  delete this.edge[fromNode + ',' + toNode];
  delete this.edge[toNode + ',' + fromNode];
};//4
//5
//5,4

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


