const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, init acc (optional)
// output: acc (number)

// callback
// input: acc, el, index, arr (optional)
// output: new acc

transactions.reduce((acc, element) => {
  acc += element;
  return acc;
});
const res = transactions.reduce((acc, element) => acc + element);
console.log(res);
