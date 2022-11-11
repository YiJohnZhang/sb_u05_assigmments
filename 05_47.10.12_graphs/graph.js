const Queue = require('./LLHelper/queue');

class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {

	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {	

		this.nodes.add(vertex);

	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {

		for(let vertex of vertexArray)
			this.addVertex(vertex);

	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	// note: bidirectional
	addEdge(v1, v2) {

		v1.adjacent.add(v2);
		v2.adjacent.add(v1);

	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
		// only one (nope both ways as specified by tests)
	removeEdge(v1, v2) {

		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
		
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {

		this.nodes.delete(vertex);

		for(let memberVertex of this.nodes.keys())
			if(memberVertex.adjacent.has(vertex))
				memberVertex.adjacent.delete(vertex);

	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {

		let toVisitStack = [start];
		let visitedSet = new Set([start]);
		let visitedArray = [];

		function _dfsHelper(currentVertex){

			if(currentVertex === undefined)	//spent some time; it is `undefined` not `null`
				return;

			visitedArray.push(currentVertex.value);

			// console.log(currentVertex.adjacent)
			// console.log(currentVertex.adjacent.keys())

			for(let adjacentVertex of currentVertex.adjacent.keys()){
				if(!visitedSet.has(adjacentVertex)){
					toVisitStack.push(adjacentVertex);
					visitedSet.add(adjacentVertex);
				}
			}

			return _dfsHelper(toVisitStack.pop());

		}

		_dfsHelper(toVisitStack.pop());

		return visitedArray;

	}
	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {

		let toVisitQueue = new Queue();
		toVisitQueue.enqueue(start);	// probably update queue class sometime to auto. init headNode
		let visitedSet = new Set();
		let visitedArray = [];

		while(toVisitQueue.size){

			const currentVertex = toVisitQueue.dequeue();
			
			visitedSet.add(currentVertex);
			visitedArray.push(currentVertex.value);

			for(let adjacentVertex of currentVertex.adjacent.keys()){
				if(!visitedSet.has(adjacentVertex)){
					toVisitQueue.enqueue(adjacentVertex);
					visitedSet.add(adjacentVertex);
				}
			}

		}
		
		return visitedArray;

	}

}

module.exports = {Graph, Node}