const dob = "1995-10-31";
let age = new Date().getFullYear() - new Date(dob).getFullYear();

console.log("determine voter or not using if else statement");
if (age >= 18) {
  console.log("Voter");
} else {
  console.log("Not a voter");
}

console.log("\ndetermine voter or not using ternary statement");
age >= 18 ? console.log("Voter") : console.log("Not Voter");

let marks = 85;

console.log("\ndetermine grade using if else statement");

if (marks > 100 || marks < 0){
    console.log("Invalid marks");
} else if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks < 80) {
  console.log("A");
} else if (marks >= 60 && marks < 70) {
  console.log("A-");
} else {
  console.log("Need Improvement");
}

console.log("\ndetermine grade using switch statement");
switch (true) {
    case marks > 100 || marks < 0:
    console.log("Invalid marks");
    break;
  case marks >= 80 && marks <= 100:
    console.log("A+");
    break;
  case marks >= 70 && marks < 80:
    console.log("A");
    break;
  case marks >= 60 && marks < 70:
    console.log("A-");
    break;
  default:
    console.log("Need Improvement");
    break;
}

