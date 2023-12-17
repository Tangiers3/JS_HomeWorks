'use strict';

let firstNumber = prompt('Please type your first number:');
let secondNumber = prompt('Please type your second number:')

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

console.log('Compilation result:', firstNumber, "+", secondNumber, '=', firstNumber + secondNumber );
console.log('Subtraction result:', firstNumber, "-", secondNumber, '=', firstNumber - secondNumber );
console.log('Multiplication result:', firstNumber, "*", secondNumber, '=', firstNumber * secondNumber );
console.log('Division result:', firstNumber, "/", secondNumber, '=', firstNumber / secondNumber );