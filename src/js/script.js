'use strict';

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20

let result = '';
for (let i = 10; i <= 20; i++) {
    result += i + (i < 20 ? ', ' : '');
}
console.log(result);

// 2. Вивести квадрати чисел від 10 до 20
for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}

// 3. Вивести таблицю множення на 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

// 5. Знайти добуток усіх цілих чисел від 15 до 35
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let total = 0;
for (let i = 1; i <= 500; i++) {
    total += i;
}
const average = total / 500;
console.log(average);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80
let evenSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log(evenSum);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10.Визначити кількість його парних дільників.
// 11.Знайти суму його парних дільників.


const number = +prompt('Введіть натуральне число');
let divCount = 0;
let divSum = 0;

console.log(`Дільники числа ${number}:`);

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
        if (i % 2 === 0) {
            divCount++;
            divSum += i;
        }
    }
}

console.log(`Кількість парних дільників: ${divCount}`);
console.log(`Сума парних дільників: ${divSum}`);


// 12. Надрукувати повну таблицю множення від 1 до 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}



