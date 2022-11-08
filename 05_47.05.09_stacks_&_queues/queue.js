const {ProtoLinkedList} = require('./linkedList')

/** Queue: chained-together nodes where you can
 *	remove from the front or add to the back. */

class Queue extends ProtoLinkedList{

	constructor() {

		super();

	}

	/** enqueue(value): add new value to end of the queue. Returns undefined. */
	enqueue(value) {
		return this.push(value);
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */
	dequeue() {
		return this.shift();
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {

	}

	//disable stack methods (pop)

}

module.exports = Queue;
