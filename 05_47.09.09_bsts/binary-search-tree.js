class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

	const newNode = new Node(val);

	if(!this.root){
		this.root = newNode;
		return this;
	}

	let currentNode = this.root;
	let currentNodeValue = currentNode.val;

	while(currentNodeValue !== null){

		currentNodeValue = currentNode.val;

		// if (currentNode.left || currentNode.right){ ... }
			// apparently spent an hour or two stuck on this line of code for some reason and it could NOT be interpreted...

		if(currentNode.left === null || currentNode.right === null){
				
			if(val < currentNodeValue)
				currentNode.left = newNode;

			if(val > currentNodeValue)
				currentNode.right = newNode;
			
			break;

		}else{

			if(val < currentNodeValue)
				currentNode = currentNode.left;

			if(val > currentNodeValue)
				currentNode = currentNode.right;

		}

	}

	return this;

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

	const newNode = new Node(val);

	if(!this.root){
		this.root = newNode;
		return this;
	}

	function _insertRecursively(currentNode){

		if(newNode.val < currentNode.val){
			
			if(currentNode.left === null){
				currentNode.left = newNode;
				return;
			}
			
			_insertRecursively(currentNode.left);

		}

		if(newNode.val > currentNode.val){
			
			if(currentNode.right === null){
				currentNode.right = newNode;
				return;
			}
				
			_insertRecursively(currentNode.right);

		}

	}

	_insertRecursively(this.root);

	return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

	let currentNode = this.root;

	while(currentNode){
		
		if(val === currentNode.val)
			return currentNode;
		
		if(val < currentNode.val)
			currentNode = currentNode.left;
		
		if(val > currentNode.val)
			currentNode = currentNode.right;

	}

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
 

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

//   /** Further Study!
//    * remove(val): Removes a node in the BST with the value val.
//    * Returns the removed node. */

//   remove(val) {

//   }

//   /** Further Study!
//    * isBalanced(): Returns true if the BST is balanced, false otherwise. */

//   isBalanced() {

//   }

//   /** Further Study!
//    * findSecondHighest(): Find the second highest value in the BST, if it exists.
//    * Otherwise return undefined. */

//   findSecondHighest() {
    
//   }
}

module.exports = BinarySearchTree;
