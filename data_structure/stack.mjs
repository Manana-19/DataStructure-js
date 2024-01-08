/**
 * @class Stacks data structure.
 */
class Stack {
    
    constructor(item) {
        this.length = 1;
        this.head = {
            value: item,
            next: null
        };
        this.tail = this.head;
    };
    
    // Time Complexity: O(1)
    push(item) { // Pushing an item onto the stack
        
        const newNode = {
            value: item,
            next: this.head
        };

        this.head = newNode;

        this.length++; // increment

    };

    // Time Complexity: O(1)
    pop() { // Poping an item from the stack
        const toReturn = this.head.value;
        this.head = this.head.next;
        this.length--; // decrement
        return toReturn;
    };

    // Time Complexity: O(n)
    show() {// Showing the entire stack in the form of an array
        const array = [];
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            array.push(node.value);
            node = node.next;
        };
        console.log(this.head)
        return array;
    };

    // Time Complexity: O(n)    
    look(index) { // Looking for an item in the stack

        if (index > this.length || index < 0 ) return NaN;
        if (index === this.length) return this.tail.value;
        if (index === 0) return this.peek();

        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        };

        return node.value;
    };

    // Time Complexity: O(1)
    peek() {
        return this.head.value;
    }
};

export default Stack;