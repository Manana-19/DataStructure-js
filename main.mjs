import Arr from "./data_structure/arrays.mjs";

const arr = new Arr();

for (let i = 1; i < 5; i++) {
    arr.append(i*2)
};

console.log(arr.show()); // [2,4,6,8]

arr.remove(4);

console.log(arr.show()); // [2,6,8]

arr.insert(10,2);

console.log(arr.show()); // [2,6,10,8]
console.log(arr.indexOf(6)) // 1
console.log(arr.length) // 4
