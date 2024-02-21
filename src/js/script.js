'use strict';

// eslint-disable-next-line no-alert
/* eslint-disable no-alert */

const number = +prompt('Введите число');
if (number < 1) {
  // eslint-disable-next-line no-console
  console.log('NaN');
} else {
  for (let i = 2; i <= number; i += 1) {
    if (number % 2 === 0) {
      // eslint-disable-next-line no-console
      console.log(i);
      break;
    }
  }
}
