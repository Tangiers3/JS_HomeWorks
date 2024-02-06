'use strict';

/* eslint-disable no-console */

const positiveNumbers = function positiveNumbers(arr) {
  if (arr.length === 0) {
    return 'Массив пуст';
  }
  const positiveArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      positiveArr.push(arr[i]);
    }
  }
  return positiveArr.length > 0 ? positiveArr : null;
};
const arr = [1, 2, 3, -1, -2, -3];
const positiveArr = positiveNumbers(arr);
console.log(positiveArr);
