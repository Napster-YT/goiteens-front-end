'use strict'

// ---------------------------------№1---------------------------------

const k1 = '5px';
const k2 = '12djd334';
const k3 = '12.45asdwe12';
const k4 = 'qwqweeewq';

console.log('Цілі числа:');

console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

// ---------------------------------№2---------------------------------

console.log('Дробові числа:');

console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));

// ---------------------------------№3---------------------------------

console.log('Найбільше число з нашого переліку:', Math.max(2, 34, 99, 3, 22, 36, 733, 18) + ';')
console.log('Найменше число з нашого переліку:', Math.min(2, 34, 99, 3, 22, 36, 733, 18) + ';')

// ---------------------------------№4---------------------------------

// const random = Math.random() * (20 - 3) + 1;

// console.log(random);


const random = Math.random();

// console.log(Math.random() * (19 - 3) + 1);

console.log(Math.round(Math.random() * (19 - 3) + 1));

// ---------------------------------№5---------------------------------

let result;
 result =  5 + 5 + '5';

console.log('Result =', result + '.', 'Result is:', typeof result + '.');

// ---------------------------------№6---------------------------------

let email = 'a.abdusaliamov@gmail.com';

console.log('Чи має email нашого користувача знак "@"?', email.includes('@'));
console.log('Довжина символів email нашого користувача складає:', email.length, 'символа(ів).');

// ---------------------------------№7---------------------------------

let theFirstComposition = 'My';
let theSecondComposition = 'name';
let theThirdComposition = 'is';
const fullName = `${theFirstComposition} ${theSecondComposition} ${theThirdComposition} ` + 'Viktor.';
// const fullName = `${theFirstComposition} ${theSecondComposition} ${theThirdComposition} Viktor.`;

console.log(fullName);

// ---------------------------------№8---------------------------------

const userName = 'Haller';
let payment = 600;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`);