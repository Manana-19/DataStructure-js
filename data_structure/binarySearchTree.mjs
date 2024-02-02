
// A function to construct the node with the help of the function

const Node = (value, left=null, right=null) => {
    return {value:value, left:left, right:right}
};

// A function to traverse the node with the help of recursion function...
const traverse = (node, value) => {
    if (node.value > value) {
        if (node.left !== null) return traverse(node.left, value)
        else return node;
    } else if (node.value < value) {
        if (node.right !== null) return traverse(node.right, value)
        else return node;
    } else if (node.value === value) {
        return node;
    }
};
/**
 * @class Binary Search Tree
 */

class BST {
    
    // Constructing the binary tree
    constructor() {
        this.node = null;
    };

    // Inserting the node with the help of traverse function
    insert(value) {
        
        // Creating the node to append with the help of the value
        const toAppend = Node(value)

        // If the root is empty, then we just insert the node as the root of the tree
        if (this.node === null) {

            this.node = toAppend;
            return
        
        } else {
            // Traverse the tree
            const aNode = traverse(this.node, value)
            
            // Inserting the node at the traversed area
            if (aNode.value > value) aNode.left = toAppend;
            else aNode.right = toAppend;


        };

    };

    // Checking the value if it exists in the tree.
    check(value) {
        const nodeToCheck = traverse(this.node, value);
        if (!nodeToCheck) return false;
        return true;
    };

    remove(value) {
        const nodeToRemove = traverse(this.node, value);
        let node = this.root
        while (node.left !== nodeToRemove || node.right !== nodeToRemove) {
            if (value > node.value) node = node.right;
            else node = node.right;
        }
    }


};

export default BST;