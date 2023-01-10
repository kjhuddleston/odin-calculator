const display = document.getElementById('display');
const number = document.querySelectorAll('.number');
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
const periodKey = document.getElementById("period");
const deleteKey = document.getElementById("delete");
const divideKey = document.getElementById("divide");
const multiplyKey = document.getElementById("multiply");
const subtractKey = document.getElementById("subtract");
const addKey = document.getElementById('add');

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let currentNumber = [];

number.forEach((currentKey) => {
    currentKey.addEventListener('click', function() {
        currentNumber.push(Number(currentKey.id));
        display.innerText = currentNumber.join('');
    })
});