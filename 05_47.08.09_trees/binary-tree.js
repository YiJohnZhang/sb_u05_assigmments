/** BinaryTreeNode: node for a general tree. */
// going to purposefully re-implement DFS/BFS/traversal for practice

const Queue = require('./helpers_05_47.05.09_stacks_&_queues/queue');


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

	//	going to re-implement traverse() for practice. note the binary tree is NOT necessarily balanced.
	//	ah, well just physically run through it; couldn't think of a method wihtout flattening.
	//	my first idea was to do a BFS and flatten it but then I realized this is not necessarily a balanced tree so that the flattened array will contain lots of `null`. I technicall could search for the first pair of `null` in 
	if(this.root === null)
		return 0;
		// handle empty tree
	
	//	basically when I encounter this.left === this.right; this.left === null
	let minLevel = null;

	function handleMinimumLevel(newMinimumLevel) {

		return (minLevel === null || minLevel > newMinimumLevel) ? minLevel = newMinimumLevel : minLevel;

	}

	function traverse(currentNode, level){

		// console.log(`level: ${level}`);

		if(currentNode.left)
			traverse(currentNode.left, level+1);	// rembmer you can't use `++` for javascript in a function call; why? I am guessing because `++` is syntactic sugar for expression (level=level+1) therefore it can't used in a function call? 
		
		if(currentNode.right)
			traverse(currentNode.right, level+1);

		if(currentNode.left === null && currentNode.left == currentNode.right)
			handleMinimumLevel(level);
			// console.log(`triggered: ${level}`);
			// console.log(currentNode.val);
		
	}

	traverse(this.root, 1);
	
	return minLevel;


  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

	// going to purposefully re-implement traverse() for practice  note the binary tree is NOT balanced.
	// given a really inbalacned tree... I can think of it like: if I pop something off from the stack it is -1 depth. I will init maxTreeDepth at 0, when it hits "undefined", save the depth; t
		// ok so first it keeps adding as the call stack is popped; however, after it hits the first undefined, start subtrac
		// wait that doesn towrk.
		//OH what if I push the child values onto an array...? then traverse it on an array?
	
	if(this.root === null)
		return 0;

	let maxLevel = 0;
	
	function handleMaximumLevel(newMaximumLevel){

		return newMaximumLevel > maxLevel ? maxLevel = newMaximumLevel : maxLevel;

	}
	
	// it took me HOURS to arrive at traversing ._.
	function traverse(currentNode, level){
		
		if(currentNode.left)
			traverse(currentNode.left, level+1);
		
		if(currentNode.right)
			traverse(currentNode.right, level+1);
		
		if(currentNode.left === currentNode.right && currentNode.left === null)
			handleMaximumLevel(level);

	}

	traverse(this.root, 1);

	return maxLevel;


  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  	// cant visit a node more than once => one cannot visit both children of a parent node because 1) I can't revverse because 2) the data structure doesn't allow a child node to visit it's parent node.
  	// therefore constraint is: if a prent node is selected, only one childe node can be visted.
	  // so my algo has to start with calculating the path to selected a child, i.e. how much each child node is relatively "worth" to its parent node. recursion ._.
	
	//checked teh test specs: apparently one could some both sides...
	//basically:
  		//	[root], 			[rootchild, rootchild],	[level3, level3, slevel 3, level 3]
		//	select 0-1		select 0-2						select 0-2, max 1 from each.
  maxSum() {

	if(this.root === null)
		return 0;
	
	const rootNode = this.root;

	function reducedTraverseTree(currentNode){

		let leftChildSum = 0;
		let rightChildSum = 0;

		if(currentNode.left)
			leftChildSum = reducedTraverseTree(currentNode.left);

		if(currentNode.right)
			rightChildSum = reducedTraverseTree(currentNode.right);

		if(currentNode === rootNode && leftChildSum > 0 && rightChildSum > 0)
			return currentNode.val + leftChildSum + rightChildSum;

		return Math.max(leftChildSum + currentNode.val, rightChildSum + currentNode.val);

	}
	
	return reducedTraverseTree(this.root);

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

	//depth-first search and get their level

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {
	  //this is easy. df or bf traversal or inorder/postorder/wheatever traversal and append to outer string

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {
	  //still easy; increment index of string (recursion)_ and build tree from the values.

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
	  // difficult
	  // dfs of both node 1 and node 2 and get their levels;
	  // start looking at the lowest level (closer to root node) and decrease level searched. i.e. 

	  // or use the fact that each node is a tree; if then bfs the lowest level; if the nodes are the same level, then start llooking above it starting with their parents. it may be helpful to keep track of 

	  // another way; flatten with bvfs to an array and keep note of the index found; once both node1 and node2 are found stop the bfs and output eh array. place null
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
