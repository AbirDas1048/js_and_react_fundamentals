function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
    return num1 < num2 ? num2 - num1 : num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const pi = 3.1416;

export { add, subtract, multiply, divide, pi };