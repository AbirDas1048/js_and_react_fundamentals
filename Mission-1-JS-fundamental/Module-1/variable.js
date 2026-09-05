console.log("Hello, World!");

const name = "Abir Das";
const dob = "1995-10-31";

let age = new Date().getFullYear() - new Date(dob).getFullYear();

console.log("My name is: " + name + ", The type of name variable is: " + typeof name);
console.log("My date of birth is: " + dob + ", The type of dob variable is: " + typeof dob);
console.log("My age is: " + age + ", The type of age variable is: " + typeof age);