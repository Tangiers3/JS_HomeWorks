'use strict';

const generateKey = function generateKey(length, characters) {
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(Math.random() * charactersLength);
    result += characters[index];
  }
  return result;
};
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
