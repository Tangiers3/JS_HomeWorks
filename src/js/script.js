'use strict';


//Створення та Модифікація Об'єктів:
const student = {
    name: 'Alex',
    age: 24,
    grade: 6,
}
student.grade = 10;
student.course = 'chemistry';
console.log(student);
//Почему вывелось в консоль не в том порядке в котором написано?

//Робота з Вкладеними Об'єктами:

const book = {
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    year: 1990,
        publisher:{
        name: 'SuperNowa',
        location: 'Poland',
        }
}
console.log(book);

//**Перебір Властивостей Об'єкта:**

const movie = {
    title: "Harry Potter",
    director: "Alfonso Cuarón",
    year: 2001,
    genre: "Fantasy"
};


for (let key in movie) {
    console.log(`${key}: ${movie[key]}`);
}

//**Співставлення Об'єктів:**

const person1 = {
    name: 'Lisa',
    age: 30,
    city: 'Toronto',

};

const person2 = {
    name: 'Lisa',
    age: 30,
    city: 'Toronto',
};
const areEqual = JSON.stringify(person1) === JSON.stringify(person2);
console.log("Objects are equal:", areEqual);

//Робота з Масивом Об'єктів:

const animals = [
    { type: "Dog", name: "Luna" },
    { type: "Cat", name: "Ralf" },
    { type: "Mouse", name: "Mickie" }
];

animals.push({ type: "Fish", name: "Nemo" });

console.log(animals);

