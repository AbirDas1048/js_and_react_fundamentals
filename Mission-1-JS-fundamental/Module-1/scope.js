let name = "Abir Das"; // Here name is a global scope variable. It can be accessed from anywhere in the code.
let dob = "1995-10-31"; // Here dob is a global scope variable. It can be accessed from anywhere in the code.

function calculateAge() {
  let age = new Date().getFullYear() - new Date(dob).getFullYear(); // Here age is a local scope variable. It can only be accessed within the calculateAge function.
  return age;
}

function displayInfo() {
  console.log(`Name: ${name}, Age: ${calculateAge()}`); // Here name and dob are global scope variables and calculateAge is a function that returns the age. Both can be accessed within the displayInfo function.
}

displayInfo(); // Calling the displayInfo function to display the name and age.

{
    let address = "123 Main St"; // Here address is a block scope variable. It can only be accessed within this block.
}

function showAddress() {
    address = "456 Elm St"; // Here address is a local scope variable. It can only be accessed within the showAddress function.
}

showAddress(); // Calling the showAddress function to display the address.

console.log(`Name: ${name}, Date of Birth: ${dob}, Address: ${address}`); // Here name and dob are global scope variables and can be accessed from anywhere in the code.