const display = document.getElementById('display');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.getElementById('=');

const oneKey = document.getElementById(1);
const twoKey = document.getElementById(2);
const threeKey = document.getElementById(3);
const fourKey = document.getElementById(4);
const fiveKey = document.getElementById(5);
const sixKey = document.getElementById(6);
const sevenKey = document.getElementById(7);
const eightKey = document.getElementById(8);
const nineKey = document.getElementById(9);
const zeroKey = document.getElementById(0);
const periodKey = document.getElementById(".");
const deleteKey = document.getElementById("delete");
const divideKey = document.getElementById("/");
const multiplyKey = document.getElementById("*");
const subtractKey = document.getElementById("-");
const addKey = document.getElementById('+');

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let currentNumber = [];
let num1 = [];
let currentOperator = [];

number.forEach((currentKey) => {
    currentKey.addEventListener('click', function() {
        currentNumber.push(Number(currentKey.id));
        display.innerText = currentNumber.join('');
    })
});

operator.forEach((currentKey) => {
    currentKey.addEventListener('click', function () {
        num1.push(Number(currentNumber.join(''))); 
        currentNumber = [];
        display.innerText = currentNumber.join('');
        currentOperator.push(currentKey.id);
    })
});

equals.addEventListener('click', function () {
    let firstNumber = Number(num1.join(''));
    let secondNumber = Number(currentNumber.join(''));
    if (currentOperator[0] === '+') {
        display.innerText = firstNumber + secondNumber;
    } else if (currentOperator[0] === '-') {
        display.innerText = firstNumber - secondNumber;
    } else if (currentOperator[0] === '*') {
        display.innerText = firstNumber * secondNumber;
    } else if (currentOperator[0] === '/') {
        display.innerText = firstNumber / secondNumber;
    }
})