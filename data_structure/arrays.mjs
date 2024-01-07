/**
 * @class Arrays
 * @function indexOf() Returns the index of the specified element
 * @function append(item) Appends an item to the end of the array
 * @function pop() Pop an item from the end of the array
 * @function insert(item,value) Inserts an item in the Array at the specified index
 * @function remove(item) Removes an item from the end of the array
 * @function show() returns the array in the form of object
 */

class Arr {
    
    // Constructor function to initialize this class
    constructor() {
    
        this.length = 0;
        this.data = {};
    
    };

    // Append function to append an item in the Array.
    // Time Complexity: O(1)
    append(item) {

        this.data[this.length] = item;
        this.length++;
    
    };

    // Pop Function to pop an item from the Array.
    // Time Complexity: O(1)
    pop() {

        const item = this.data[this.length-1];
        delete this.data[this.length-1];
        
        this.length--;
        
        return item;
    };

    // indexOf function to find the index of the specified item in the Array
    // Time Complexity: O(n)
    indexOf(item) {

        const len = this.length;
        
        // O(n) because of the loop below
        for (let i = 0; i < len; i++) {
            if (this.data[i] === item) return i;
        };

        return -1;
    };

    // remove function to remove an item from the Array
    // Time Complexity: O(n)
    remove(item) {

        const index = this.indexOf(item); // O(n)
        
        if (index === -1) return; // O(1)
        
        // O(n) Operation because of the loop.
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1];
        };
        
        this.length--;
        delete this.data[this.length]

    };

    // insert function to insert an item into the Array with the given index
    // Time Complexity: O(n)
    insert(item, index) {

        if ((index < 0) || (index > this.length)) return
        if (index === this.length) return this.append(item)

        let lastData = undefined;
        for (let i = 0; i < this.length; i++) {

            if (i===index) {
        
                lastData = this.data[i];
                this.data[i] = item;
        
            } else if (i > index) {
        
                [this.data[i], lastData] = [lastData, this.data[i]]
        
            };

        };

        this.data[this.length] = lastData;
        this.length++;
    
    };

    // Returns the array in the form of an Object
    show() {
        return this.data
    };

};

export default Arr;