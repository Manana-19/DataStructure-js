class Queue {

    constructor(item) {
        this.length = 1;

        this.head = {
            value: item,
            next: null
        };
        
        this.tail = this.head;
    };

    // Time Complexity: O(1)
    push(item) {

        const node = {
            value: item,
            next: null
        };

        this.length++; // increment

        // Swapping the variables with the help of destructuring method
        [this.tail.next, this.tail] = [node, node]

        return this.length

    };

    // Time Complexity: O(1)
    pop() {
        const toReturn = this.head.value;
        this.head = this.head.next;
        this.length--; // decrement

        return toReturn;
    };

    // Time Complexity: O(n)
    show() {
        const arr = [];

        let node = this.head;
        
        for (let i = 0; i < this.length; i++) {
            arr.push(node.value);
            node = node.next;
            console.log(node);
        };
        
        return arr;
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

export default Queue;