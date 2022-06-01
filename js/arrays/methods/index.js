// --- filter
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: function
// output: array

// input: element - num, index (optional), arr (optional)
// output: boolean

// option 1
// function filterCallback(num) {
//   console.log('filterCallback is called ' + num);
//   return num > 5;
// }

// const filterRes = anotherNumbersList.filter(filterCallback);
// console.log(filterRes);

// option 2
// const filterRes = anotherNumbersList.filter(function (num) {
//   return num > 5;
// });
// console.log(filterRes);

// option 3
const filterRes = anotherNumbersList.filter(num => num > 5);
console.log(filterRes);

// --- map

const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: function, object
// output: array

// input: element
// output: modified element

const mapRes = numbersList.map(element => element ** 2);
console.log(mapRes);

// const mapRes = numbersList.map(element => {
//   if (element < 0) {
//     return 'number is negative';
//   }
//   return element ** 2;
// });

// --- find

// input: function
// output: element

// input: element
// output: boolean

// option 1
// const findRes = numbersList.find(el => {
//   if (el % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// option 2
const findRes = numbersList.find(el => el % 2 === 1);

console.log(findRes);

// --- some

// input: function
// output: boolean

// --- forEach

// input: function
// output: undefined

// input: element
// output: undefined

const forEachRes = numbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});

console.log(forEachRes);
