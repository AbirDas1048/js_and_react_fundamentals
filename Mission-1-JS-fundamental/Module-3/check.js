import { pi, subtract, add, multiply, divide} from './math.js';

const num1 = 5;
const num2 = 10;

console.log(`Add of ${num1} and ${num2}: ${add(num1, num2)}`);
console.log(`Subtract: ${subtract(num2, num1)}`);
console.log(`Pi: ${pi}`);
console.log(`Multiply: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Divide: ${num2} / ${num1} = ${divide(num2, num1)}`);