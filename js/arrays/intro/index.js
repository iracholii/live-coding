'use strict';

// var, let, const
// message = 'hello';
// console.log(message);

const numbersList1 = [1, 2, 3, 4, 5];
// const numbersList2 = new Array(1, 2, 3, 4, 5);

// pop
// input: none
// return: number
console.log('before pop', numbersList1);

const res = numbersList1.pop();
console.log(res);
console.log('after pop', numbersList1);

// push
// input: number
// return: number = new length

const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ', numbersList2);

const pushRes = numbersList2.push(6);
console.log(pushRes);
console.log('after push ', numbersList2);

// shift
// input: none
// return: number

const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ', numbersList3);

const shiftRes = numbersList3.shift();
console.log(shiftRes);
console.log('after shift ', numbersList3);
