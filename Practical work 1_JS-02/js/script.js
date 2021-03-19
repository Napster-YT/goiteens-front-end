'use strict'

console.log('============Завдання 1============');

let Arr1 = [1, 5, '4', 'hello'];
let Arr2 = [true, 2, {}, ['a'], 222];

console.log('Arr[1] =',Arr1[1]);
console.log('Arr2[1] =', Arr2[1]);

console.log('Arr1[1] + Arr2[1] =',Arr1 [1] + Arr2 [1]);

console.log('============Завдання 2============');

Arr1[4] = 22;
console.log(Arr1);

console.log('============Завдання 3============');

for (const pseudoArr2 of Arr2) {
    console.log('Значення даного елементу масиву:', pseudoArr2, ',', 'а тип:', typeof pseudoArr2 + '.');
};

console.log('============Завдання 4============');

let message = 'Welcome to Ukraine!';

message = message.split('')
console.log(message);

console.log('Індекс літери англійської "l":', message.indexOf('l'));
console.log(message.join(''));

console.log('============Завдання 5============');

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-рол');

styles[1] = 'Класика';
console.log('Видалений 1 елемент масиву:', styles.shift());

styles.unshift('Реп', 'Реггі');
console.log(styles);