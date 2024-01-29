import Arr from "./data_structure/arrays.mjs";
import Stack from "./data_structure/stack.mjs";
import Queue from "./data_structure/queue.mjs";
import LinkedList from "./data_structure/linkedList.mjs";
import BST from "./data_structure/binarySearchTree.mjs"

const Tree = new BST()

Tree.insert(10)
Tree.insert(20)
Tree.insert(5)
Tree.insert(30)
Tree.insert(7)
Tree.insert(2)
Tree.insert(15)
console.log(Tree.node);

//                10
//          5           20
//      2     7      15     30