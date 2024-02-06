'use strict';

/* eslint-disable no-alert */

const numb = +prompt('Введите число, которое хотите возвести в степень');
const exponent = +prompt('Ваедите степень: ') || 1;

const raiseToPower = function raiseToPower(number, power = 1) {
  if (Number.isNaN(number) || Number.isNaN(power)) {
    return 'Одно из введенных значений не является числом';
  }
  return number ** power;
};
const result = raiseToPower(numb, exponent);
alert(result);
