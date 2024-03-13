'use strict';

/* eslint-disable no-console */

const lis = document.querySelectorAll('li');
// eslint-disable-next-line no-restricted-syntax
for (const li of lis) {
  console.log(li.textContent);
}
const ul = document.getElementById('ulId');
const attrs = ul.attributes;

const values = [];
const names = [];
// eslint-disable-next-line no-restricted-syntax
for (const attr of attrs) {
  values.push(attr.value);
  names.push(attr.name);
}
console.log(values);
console.log(names);

ul.lastElementChild.textContent = 'Привет, меня зовут Вадим';
ul.firstElementChild.setAttribute('data-my-name', 'Name');

ul.removeAttribute('data-dog-tail');
