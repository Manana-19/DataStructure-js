/**
 * 
 * @param item Accepts the value as the parameter 
 * @returns A constructed node with value = item and it's next item is null
 */

function NodeConstructor(item) {
    const node = {
        value: item,
        next: null
    };
    return node
}

class LinkedList {

    constructor(item) {
        
        this.length = 0;
        
        this.head = {
            value:item,
            next: null
        };

        this.tail = this.head;
    };

    // Time Complexity: O(1)
    prepend(item) {
        let node = NodeConstructor(item);
        [node.next, this.head] = [this.head, node];
        this.length++;
        return true
    };

    // Time Complexity: O(1)
    append(item) {
        let node = NodeConstructor(item);
        [this.tail.next, this.tail] = [node, node];
        this.length++;
        return true;
    };

    // Time Complexity: O(n)
    insert(index, item) {
        
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.prepend(item);
        if (index === (this.length-1)) return this.append(item);

        let node = NodeConstructor(item);
        
        // Traversing 

        let obj = this.head;
        
        for (let i=0; i < index; i++) {
        
            obj = obj.next;
        
        };

        // Inserting the item in the linkedlist
        node.next = obj.next;
        obj.next = node;

        this.length++;

        return true;

    };

    // Time Complexity: O(n)
    show() {
        const toReturn = [];
        let obj = this.head;
        for (let i=0; i < this.length; i++) {

            toReturn.push(obj.value);
            obj = obj.next;

        };
        return toReturn;
    };


};

export default LinkedList