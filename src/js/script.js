'use strict';

const action = prompt('Please, choose one of the operations (add, sub, mult, div)');
const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');

const addResult = Number(firstNumber + secondNumber);
const subResult = Number(firstNumber - secondNumber);
const multResult = Number(firstNumber * secondNumber);
const divResult = Number(firstNumber / secondNumber);

switch (action){
    case 'add':
        alert(`${firstNumber} + ${secondNumber} = ${ addResult}`);
        break;
    case 'sub':
        alert(`${firstNumber} - ${secondNumber} = ${ subResult}`);
        break;
    case 'mult':
        alert(`${firstNumber} * ${secondNumber} = ${ multResult}`);
        break;
    case 'div':
        if (secondNumber === 0) {
            alert('Division by zero is not allowed');
        } else {
            alert(`${firstNumber} / ${secondNumber} = ${divResult}`);
        }
        break;

}



