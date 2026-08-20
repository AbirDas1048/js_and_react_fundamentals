// false, 0, "", null, undefined, NaN All of these are falsy values in JavaScript. All other values are truthy values.

let number = 0;
if (number) {
  console.log("Number exists");
} else {
  console.log("Number does not exist");
}

if (number >= 0) {
  console.log("Number has something");
} else {
  console.log("Number does not have anything");
}

console.log(typeof null, typeof undefined, typeof NaN, typeof 0, typeof "", typeof false);