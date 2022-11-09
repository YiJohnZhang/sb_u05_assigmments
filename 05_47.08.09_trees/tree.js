/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  depthFirstFlattening(){
	
	if(this.root === null)
		return [];
		// handle an empty tree

	let toVisitStack = [this.root];
	let values = [];

	while(toVisitStack.length > 0){

		const currentNode = toVisitStack.pop();
		
		for(let child of currentNode.children)
			toVisitStack.push(child);
		
		values.push(currentNode.val);

	}

	return values;

  } 

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

	const flattenedTree = this.depthFirstFlattening();

	return flattenedTree.reduce((accumulatedValue, currentValue) => typeof currentValue === 'number' ? accumulatedValue + currentValue : accumulatedValue, 0);
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

	const flattenedTree = this.depthFirstFlattening();

	return flattenedTree.reduce((accumulatedValue, currentValue) => currentValue % 2 === 0 ? accumulatedValue+1 : accumulatedValue, 0);


  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

	const flattenedTree = this.depthFirstFlattening();

	return flattenedTree.reduce((accumulatedValue, currentValue) => currentValue > lowerBound ? accumulatedValue + 1 : accumulatedValue, 0);

  }
}

module.exports = { Tree, TreeNode };
