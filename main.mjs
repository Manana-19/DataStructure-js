import Arr from "./data_structure/arrays.mjs";
import Stack from "./data_structure/stack.mjs";
// import Queue from "./data_structure/queue.mjs";

const arr = new Stack(0);
// const queue = new Queue(0);
for (let i = 1; i < 5; i++) {
    arr.push(i*2);
    // queue.push(i*2);
};

console.log(arr.show()); // [8,6,4,2,0]
// console.log(queue.show());

console.log(arr.pop()); // 8
console.log(arr.show()); // [6,4,2,0]
console.log(arr.peek()); // 6