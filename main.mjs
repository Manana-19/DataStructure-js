// import Arr from "./data_structure/arrays.mjs";
// import Stack from "./data_structure/stack.mjs";
// import Queue from "./data_structure/queue.mjs";
// import LinkedList from "./data_structure/linkedList.mjs";
// import BST from "./data_structure/binarySearchTree.mjs"
import Graphs from "./data_structure/graph.mjs";


const Grp = new Graphs()

let a = [1,3,6,4,2,9];
a.forEach(element => {
    Grp.insert(element)
})
console.log(Grp.show())
console.log(Grp.connect(1,3))
console.log(Grp.show())