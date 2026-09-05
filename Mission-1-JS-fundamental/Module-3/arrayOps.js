// foreach, map

// foreach
let fruits = ["Apple", "Banana", "Mango", "Jackfruit"];

console.log({"New fruits 1": fruits});
fruits.forEach((fruit, idx) => {
  console.log(`${idx + 1} -> ${fruit}`);
  //   return `${idx + 1} -> ${f}`; foreach can't return
});

let newFruits2 = fruits.map((fruit, idx) => `${idx + 1} -> ${fruit}`); // map can return a new array
console.log({"New fruits 2": newFruits2});

let newFruits3 = fruits.map((fruit) => fruit.toLowerCase()); // map can return a new array

console.log({"New fruits 3": newFruits3});

let customFruits = fruits.filter((fruit) => fruit.length >= 6); // filter can return a new array

console.log({"Custom fruits": customFruits});

let customFruits2 = fruits.find((fruit) => fruit.length >= 6); // find can return a single element

console.log({"Custom fruits 2": customFruits2});

let customFruits3 = fruits.findIndex((fruit) => fruit.length >= 6); // findIndex can return a single index

console.log({"Custom fruits 3": customFruits3});

let customFruits4 = fruits.some((fruit) => fruit.length >= 6); // some can return a boolean

console.log({"Custom fruits 4": customFruits4});

let customFruits5 = fruits.every((fruit) => fruit.length >= 6); // every can return a boolean

console.log({"Custom fruits 5": customFruits5}); 

let customFruits6 = fruits.reduce((acc, fruit) => acc += fruit.length, 0); // reduce can return a single value

console.log({"Custom fruits 6": customFruits6});

let customFruits7 = fruits.includes("Mango"); // includes can return a boolean

console.log({"Custom fruits 7": customFruits7});

let customFruits8 = fruits.sort(); // sort can return a new array and this will sort the array in alphabetical order

console.log({"Custom fruits 8": customFruits8});

let customFruits9 = fruits.sort((a, b) => a.length - b.length); // sort can return a new array and this will sort the array in ascending order based on the length of the fruit names

console.log({"Custom fruits 9": customFruits9});

let customFruits10 = fruits.sort((a, b) => b.length - a.length); // sort can return a new array and this will sort the array in descending order based on the length of the fruit names

console.log({"Custom fruits 10": customFruits10});

let customFruits11 = fruits.reverse(); // reverse can return a new array and this will reverse the order of the array

console.log({"Custom fruits 11": customFruits11});

let customFruits12 = fruits.filter((fruit) => fruit.length >= 6).reduce((acc, fruit) => acc += fruit.length, 0); // filter and reduce can return a single value

console.log({"Custom fruits 12": customFruits12});