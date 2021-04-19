'use strict'
console.log('============Завдання 1===========');

const user = {};

user.userName = 'Olexander';
user.age = 15;

// console.log(user);
for (const key in user) {
    console.log(`Key: ${key} = ${user[key]};`);
}

// const arr = [2, 3, 6];

// for (const iterator of arr) {
//     console.log(`Iterator - ${iterator}`);
// }
console.log('------------------------------------------');


const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

// Перебір ключів об'єкта hotel
for (const key in hotel) {
  console.log(`Key: ${key} - ${hotel[key]}`);
}

/*
 * Key: name
 * Key: stars
 * Key: capacity
 */
console.log('------------------------------------------')

const hotel1 = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

const keys = Object.keys(hotel1); // ["name", "stars", "capacity"]
const values = Object.values(hotel1); // ["Resort Hotel", 5, 100]
const entries = Object.entries(hotel1); // [Array(2), Array(2), Array(2)]

console.log(keys);
console.log(values);
console.log(entries);

console.log('------------------------------------------')

const hotel2 = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

const keys1 = Object.keys(hotel2); // ["name", "stars", "capacity"]

for (const key of keys1) {
  console.log(`Value: ${hotel2[key]}`);
}
/*
 * Value: Resort Hotel
 * Value: 5
 * Value: 100
 */

console.log('------------------------------------------')

const hotel3 = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Подивіться в консолі з яких двох елементів складається кожен підмасив.
  * Перший елемент - це ключ властивості, другий - це значення.
 */
const entries1 = Object.entries(hotel3);

/*
 * На кожній ітерації з entries виберемо перший елемент підмасив (ключ)
  * В змінну key, а другий (значення) - в змінну value.
 */
for (const entry of entries1) {
  const key = entry[0];
  const value = entry[1];

  console.log(`Element of hotel3: ${key} - ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */


console.log('============Завдання 2===========');
console.log('============Завдання 3===========');
console.log('============Завдання 4===========');
