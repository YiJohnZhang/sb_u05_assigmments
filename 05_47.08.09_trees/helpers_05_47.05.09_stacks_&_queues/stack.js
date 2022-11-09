const {LinkedListPrototype} = require('./linkedList')

/** Stack: chained-together nodes where you can
 *	remove from the top or add to the top. */

class Stack extends LinkedListPrototype{

	constructor() {

		super();

	}

	/** push(value): remove the node from the top of the stack and return its value. Should throw an error if the stack is empty.
	 *	I mapped this to "unshift()" of `ProtoLinkedList` because when using a Singly-Linked List for a Stack, getting the node before the tail node is O(N); therefore, I implemented the `Stack` data structure as a backwards, in terms of insertion, `Queue`.
	 */
	push(value){
		this.unshift(value);		
	}


	/** pop(): remove the node from the top of the stack and return its value. Should throw an error if the stack is empty.
	 *	For the reason described in the documentation for `push(value)` above, `pop()` in the `Stack` will map to `pop()` in the `ProtoLinkedList` data structure.
	 */
	pop() {
		return this.shift();
	}

}

module.exports = Stack;
