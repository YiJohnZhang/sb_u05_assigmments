const {ProtoLinkedList} = require('./linkedList')

/** Stack: chained-together nodes where you can
 *	remove from the top or add to the top. */

class Stack extends ProtoLinkedList{

	constructor() {

		super();

	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {

	}

	/** peek(): return the value of the first node in the stack. */

	peek() {

	}

	//disable queue methods (shift)
}

module.exports = Stack;
