// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate numbers from 2 to num
// 2. check if prime
// 2.1 number - iterate all numbers from 2 to index
// 2.2 if index / secondIndex === 0 - not prime
// 3. if prime - console

//input: number
//return: undefined

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    let isPrime = true;
    for (let secondIndex = 2; secondIndex < index; secondIndex += 1) {
      if (index % secondIndex === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(index);
    }
  }
}

// test data
getPrimes(10);
