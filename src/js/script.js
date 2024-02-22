'use strict';

/* eslint-disable no-console */
const parseJSON = function parseJSON(string) {
  try {
    return JSON.parse(string);
  } catch (err) {
    throw new Error('Invalid JSON string');
  }
};
console.log(parseJSON('{"name": "John", "age": 30}'));
console.log(parseJSON('{"name": "John", "age":'));
