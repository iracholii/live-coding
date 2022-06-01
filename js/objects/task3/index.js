// input object, object
// output boolean

// function compareObjects(obj1, obj2) {
//   console.log(JSON.stringify(obj1));
//   return JSON.stringify(obj1) == JSON.stringify(obj2);
// }

// algo
// 1. get keys, get values
// 2. check keys length
// 3.1 compare every key/value with .every method
// 3.2 compare key/value with .some method if some is not equal - false

// V1
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const values1 = Object.values(obj1);
  const keys2 = Object.keys(obj2);
  const values2 = Object.values(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((el, index) => {
    return el === keys2[index] && values1[index] === values2[index];
  });
}

// V2
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return !keys1.some((el, index) => {
//     return el !== keys2[index] || values1[index] !== values2[index];
//   });
// }

// V3
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return keys1.every(
//     el => keys1.toString() === keys2.toString() && values1.toString() === values2.toString(),
//   );
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));
