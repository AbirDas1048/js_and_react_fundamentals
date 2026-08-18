const spend = (price, quantity = 12) => {
  const grandTotal = price * quantity;
  return grandTotal;
};

const remaining = (total, spend) => total - spend;

let totalAmount = 250;

let spendAmount = spend(10, 15);

let saveAmount = remaining(totalAmount, spendAmount);
console.log(`Spend Amount: ${spendAmount}, Save Amount: ${saveAmount}`);