// 1
function getSenseOfLife () {
    return 42;
}
const res = getSenseOfLife();

console.log(getSenseOfLife());

// 2
function getSquared (num) {
    return num * num;
}

console.log(getSquared(4));
console.log(getSquared(-8));

// 3
function sum (num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 2));

const first=8;
const second=10;
console.log(sum(first, second));

// 4
function print (num) {
    console.log(`I am ${num} years old`);
    console.log('Sense of life is ' + getSenseOfLife());
}

print(34);


function sendEmail(userId) {
    const email = getEmailById(userId)
    // 
}


// arrow function
// 1
// const mult = (firstNum, secondNum) => {
//     return firstNum * secondNum;
// }
// 2
const mult = (firstNum, secondNum) => firstNum * secondNum;
console.log(mult(10, 14));



// const square = (number) => {
//     return number * number;
// }
const square = number => number * number;
console.log(square(10));


const getMagicNumber = () => 17;
console.log(getMagicNumber());

