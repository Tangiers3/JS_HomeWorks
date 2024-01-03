'use strict';
const firstNumber = +prompt('Enter your first number');
const secondNumber = +prompt('Enter your second number');

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const dev = firstNumber / secondNumber;

const result =
    firstNumber + ' + ' + secondNumber + ' = ' + sum + '\n' +
    firstNumber + ' - ' + secondNumber + ' = ' + sub + '\n' +
    firstNumber + ' * ' + secondNumber + ' = ' + mult + '\n' +
    firstNumber + ' / ' + secondNumber + ' = ' + dev + '\n';

alert(result);