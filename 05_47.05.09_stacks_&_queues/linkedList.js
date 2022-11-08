class Node{

	constructor(value) {

		this.value = value;
		this.next = null;

	}

}

class BidirectionalNode{

	constructor(value) {
		this.value = value;
		this.previous = null;
		this.next = null;
	}

}

/**	LinkedListPrototype
 *	A prototype linked list with more limited behaviors.
*/
class LinkedListPrototype{

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

	/** unshift(value): add new value to the start of the prototype linked list. Returns undefined. */
	unshift(value){

		let newNode = new Node(value);

		const currentHeadNode = this.headNode;
		newNode.next = currentHeadNode;
		
		this.headNode = newNode;

		if(this.isEmpty())
			this.tailNode = this.headNode;

		this.size++;

		return;

	}

	/** shift(): remove the node from the start of the prototype linked list.
	 * and return its value. Springboard specifies it should throw an error if the prototype linked list is empty. */
	shift(){

		this.throwErrorIfEmpty();

		const shiftedHeadNode = this.headNode;
		this.headNode = shiftedHeadNode.next;

		this.size--;

		return shiftedHeadNode.value;

	}

	/** peek(): return the next value to remove without removing it from the prototype linked list */
	peek(){
		
		return this.headNode.value;

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

/**	LinkedListPrototype
 *	A prototype doubly linked list with more limited behaviors.
*/
class DoublyLinkedListPrototype extends LinkedList{

	constructor(){
		super();
	}

	/** push(value): add new value to the end of the prototype linked list. Returns undefined. */
	push(value){

		let newNode = new BidirectionalNode(value);

		if(this.isEmpty()){
			this.headNode = newNode;
		}else{
			newNode.previous = this.tailNode;
			this.tailNode.next = newNode;
		}

		this.tailNode = newNode;
		this.size++;

		return;

	}

	/** unshift(value): add new value to the start of the prototype linked list. Returns undefined. */
	unshift(value){

		let newNode = new BidirectionalNode(value);

		const currentHeadNode = this.headNode;
		newNode.next = currentHeadNode;
		newNode.next.previous = newNode;
			// set the `previous` property of `currentHeadNode` without modifying newNode in case if it is a superficial copy

		this.headNode = newNode;

		if(this.isEmpty())
			this.tailNode = this.headNode;

		this.size++;

		return;

	}

}

module.exports = {
	Node,
	BidirectionalNode,
	LinkedListPrototype,
	DoublyLinkedListPrototype
}