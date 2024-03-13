'use strict';

const items = document.querySelectorAll('li');
const itemsArr = [];

for (const item of items) {
  console.log(item);
  itemsArr.push(item.textContent);
}
console.log(`Общее количесвто элементов: ${items.length}`);
console.log(itemsArr);
