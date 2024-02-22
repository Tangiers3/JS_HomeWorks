'use strict';
'use strict';

const greet = function greet() {
  console.log(`Hello, my name is ${this.name}`);
};
const createUser = function createUser(name, age) {
  const user = {
    name,
    age,
    greet,

  };
  return user;
};
const user1 = createUser('Oleg', 30);
user1.greet();
const user2 = createUser('Tolik', 46);
user2.greet();
