const display = document.getElementById('display');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.getElementById('=');

let numberOne = undefined;
let numberTwo = undefined;
let displayed = [];
let currentNumber = [];
let currentOperator = undefined;
let total = 0;

const operate = (operator, numberOne, numberTwo) => {
    if (operator === '+') {
        return numberOne + numberTwo;
    } else if (operator === '-') {
        return numberOne - numberTwo;
    } else if (operator === '*') {
        return numberOne * numberTwo;
    } else if (operator === '/') {
        return numberTwo / numberTwo;
    } else {
        console.log('ERROR IN OPERATE FUNCTION');
    }
};

number.forEach((currentKey) => {
    currentKey.addEventListener('click', function() {
        currentNumber.push(Number(currentKey.id));
        displayed.push(Number(currentKey.id));
        display.innerText = displayed.join('');
    })
});

operator.forEach((currentKey) => {
    currentKey.addEventListener('click', function () {
        if (currentNumber[0] === undefined) {
            return;
        } else {
            currentOperator = currentKey.id;
        }
        if (numberOne === undefined) {
            numberOne = Number(currentNumber.join(''));
            currentNumber = [];
        } else if (numberTwo === undefined) {
            numberTwo = Number(currentNumber.join(''));
            total = operate(currentOperator, numberOne, numberTwo);
            numberOne = total;
            numberTwo = undefined;
            currentNumber = [];
        }
        displayed.push(currentKey.id);
        display.innerText = displayed.join('');
    })
});

equals.addEventListener('click', function () {
    numberTwo = Number(currentNumber.join(''));
    total = operate(currentOperator, numberOne, numberTwo);
    numberOne = undefined;
    numberTwo = undefined;
    currentNumber = [];
    displayed = [];
    currentOperator = undefined;
    display.innerText = total;
});