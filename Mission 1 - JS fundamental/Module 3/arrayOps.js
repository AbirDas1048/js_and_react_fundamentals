// foreach, map

// foreach
let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

console.log({"New fruits 1": fruits});
fruits.forEach((fruit, idx) => {
  console.log(`${idx + 1} -> ${fruit}`);
  //   return `${idx + 1} -> ${f}`; foreach can't return
});

let newFruits2 = fruits.map((fruit, idx) => {
  // console.log(`${idx + 1} -> ${fruit}`);
  return `${idx + 1} -> ${fruit}`; // map can return
});
console.log({"New fruits 2": newFruits2});

let newFruits3 = fruits.map((fruit) => fruit.toLowerCase());

console.log({"New fruits 3": newFruits3});

let customFruits = fruits.filter((fruit) => fruit.length > 5);

console.log({"Custom fruits": customFruits});