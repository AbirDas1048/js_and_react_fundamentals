// functions are reusable code blocks to perform a particular task.

function spend(price, quantity = 12) {
  const grandTotal = price * quantity;
  return grandTotal;
}

function remaining(total, spend) {
  const remainingAmount = total - spend;
  return remainingAmount;
}

let totalAmount = 250;
let spendAmount = spend(10, 15);
let saveAmount = remaining(totalAmount, spendAmount);

console.log(spendAmount, saveAmount);

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Abir");