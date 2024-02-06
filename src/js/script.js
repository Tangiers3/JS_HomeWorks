'use strict';

/* eslint-disable no-console */

const padString = function padString(simpleStr, lengthStr, symbol = '*', right = true) {
  if (typeof simpleStr !== 'string') {
    throw new Error('Первый аргумент должен быть строкой');
  }
  if (typeof lengthStr !== 'number' || Number.isNaN(lengthStr)) {
    throw new Error('Второй аргумент должен быть числом');
  }
  if (typeof symbol !== 'string' || symbol.length !== 1) {
    throw new Error('Третий аргумент должен быть символом');
  }
  if (typeof right !== 'boolean') {
    throw new Error('Четвертый аргумент должен быть true или false (булевым)');
  }
  if (simpleStr.length > lengthStr) {
    return right ? simpleStr.slice(-lengthStr) : simpleStr.slice(0, lengthStr);
  }
  const padLength = lengthStr - simpleStr.length;
  const padding = symbol.repeat(padLength);
  return right ? simpleStr + padding : padding + simpleStr;
};
console.log(padString('hello', 8));
console.log(padString('hello', 10, '-'));
console.log(padString('hello', 3, '*', false));
console.log(padString('hello', 6, '*', false));
