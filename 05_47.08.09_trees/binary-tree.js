/** BinaryTreeNode: node for a general tree. */
// going to purposefully re-implement DFS/BFS/traversal for practice

const Queue = require('./helpers_05_47.05.09_stacks_&_queues/queue');
const Stack = require('./helpers_05_47.05.09_stacks_&_queues/stack');


class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

	// going to re-implement DFS for practice. note the binary tree is NOT balanced.
	if(this.root === null)
		return null;
		// handle empty tree

	


  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

	// going to purposefully re-implement DFS/ for practice  note the binary tree is NOT balanced.
	// given a really inbalacned tree... I can think of it like: if I pop something off from the stack it is -1 depth. I will init maxTreeDepth at 0, when it hits "undefined", save the depth; t
		// ok so first it keeps adding as the call stack is popped; however, after it hits the first undefined, start subtrac
		// wait that doesn towrk.
		//OH what if I push the child values onto an array...? then traverse it on an array?

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
	
	// interesting: no node is < 0 or non-number that simplifies the algo
	// going to purposefully re-implement DFS/BFS/traversal for practice
	


	


  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
	
	if(this.root === null)
		return null;
		// handle empty tree

	// going to purposefully re-implement DFS for practice

	let nextLargerValue = lowerBound;
		// find the minimum that is larger than lowerBound

	let toVisitQueue = new Queue();
	toVisitQueue.enqueue(this.root);
		// I could optimize the Queue class so it can initialize with one or more elements; later.
	
	while(toVisitQueue.size > 0){

		const currentNode = toVisitQueue.dequeue();

		if(currentNode.left)
			toVisitQueue.enqueue(currentNode.left);
		
		if(currentNode.right)
			toVisitQueue.enqueue(currentNode.right);

		const currentNodeValue = currentNode.val;

		if(nextLargerValue === lowerBound && currentNodeValue > lowerBound)
			nextLargerValue = currentNodeValue;
			// fail fast when a smaller number is found
		
		if(currentNodeValue > lowerBound && currentNodeValue < nextLargerValue)
			nextLargerValue = currentNodeValue;
			// fail fast now after nextLargeValue != lowerBound

	}

	return nextLargerValue === lowerBound ? null : nextLargerValue;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
