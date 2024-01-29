const Node = (value) => {
    return {value:value, left:null, right: null}
}; 
const traverse = (node, value) => {
    if (node.value > value) {
        if (node.left !== null) return traverse(node.left, value)
        else return node;
    } else if (node.value < value) {
        if (node.right !== null) return traverse(node.right, value)
        else return node;
    }
}
/**
 * @class Binary Search Tree
 */

class BST {
    
    constructor() {
        this.node = null;
    };

    insert(value) {
        
        const toAppend = Node(value)

        if (this.node === null) {

            this.node = toAppend;
            return
        
        } else {
            // Traverse the tree
            const aNode = traverse(this.node, value)
            
            if (aNode.value > value) aNode.left = toAppend;
            else aNode.right = toAppend;


        }


    };

};

export default BST;