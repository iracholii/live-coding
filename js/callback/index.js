function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  resolver(sum);
}

// input: num
// return: undefined

function printResult(res) {
  console.log('Result is: ' + res);
}

function alertResult(res) {
  alert('Result is: ' + res);
}

function sendResult(res) {
  // sending email
}

sum(10, 16, printResult);
sum(10, 16, alertResult);
sum(10, 16, sendResult);
