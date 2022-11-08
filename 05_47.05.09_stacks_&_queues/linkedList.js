class Node{

	constructor(value) {

		this.value = value;
		this.next = next;

	}

}

/**	ProtoLinkedList
 *	A prototype linked list with more limited behaviors.
*/
class ProtoLinkedList{

	constructor(){
	
		this.headNode = null;
		this.tailNode = null;
		this.size = 0;
	
	}

	/** push(value): add new value to the end of the prototype linked list. Returns undefined. */
	push(value){

		let newNode = new Node(value);

		if(this.isEmpty()){
			this.headNode = newNode;
		}else{
			this.tailNode.next = newNode;
		}

		this.tailNode = newNode;
		this.size++;

		return;

	}

	

	/** dequeue(): remove the node from the start of the prototype linked list.
	 * and return its value. Springboard specifies it should throw an error if the prototype linked list is empty. */
	shift(){

		this.throwErrorIfEmpty();

		const shiftedHeadNode = this.headNode;
		this.headNode = shiftedHeadNode.next;

		this.size--;

		return shiftedHeadNode.value;

	}


	pop(){

		this.throwErrorIfEmpty();

		const poppedTailNode = this.tailNode;
		this.



	}

	/** peek(): return the next value to remove without removing it from the linked list */
	peek(){

		throw new Error('The method \'peek()\' must be implemented.')

	}

	/** throwErrorIfEmpty(): throw an error if it the prototype linked list is empty; otherwise, return */
	throwErrorIfEmpty(){

		if(this.isEmpty())
			throw new Error('Empty data structure.');
		
		return;

	}

	/** isEmpty(): return true if the prototype linked list is empty, otherwise false */
	isEmpty() {

		return this.size === 0;

	}

}

class BidirectionalNode{

	constructor(value) {
		this.value = value;
		this.previous = null;
		this.next = null;
	}

}

module.exports = {
	Node,
	BidirectionalNode,
	ProtoLinkedList
}