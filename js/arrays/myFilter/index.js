// input: arr, callback
// output: arr

// callback
// element
// boolean

// algo
// 1. iterate arr
// 2. apply callback to el
// 3. if true - push to res arr

const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      res.push(arr[index]);
    }
  }
  return res;
};

// test data

const arr = [1, 2, 8, 5, 6, 9];
const callback = el => el > 5;
console.log(filterArrayElements(arr, callback));

const arr1 = ['Ann', 'John', 'Natalie', 'Boris'];
const callback1 = el => el.includes('o');
console.log(filterArrayElements(arr1, callback1));

const arr2 = ['Ann', 'John', 'Natalie', 'Boris', 'Al', 'df', 'p', 'Jake'];
const callback2 = el => el.length > 2;
console.log(filterArrayElements(arr2, callback2));

//

function sum(a, b) {
  console.log(arguments);
}
sum(5, 9);
