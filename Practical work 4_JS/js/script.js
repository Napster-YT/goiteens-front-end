'use strict'
// ----------------------------№1----------------------------
let num;

if (!(num = prompt('Введіть число!'))) {
    console.log('Скасовано користувачем!');
} else {
    if ((!Number.isNaN(num * 1)) && (num >= 55) && (num <= 99)) {
         console.log("Число потрапляє в діапазон!");
    } else {
        console.log("Число не потрапляє в діапазон!");
    };
};
// if (!(num = prompt('Введіть число!'))) {
//     console.log('Скасовано користувачем!');
// }else if (Number.isNaN(num)) {
//     console.log('Було введено не коректні дані!!!');
// } else {
//     if ((!Number.isNaN(num * 1)) && (num >= 55) && (num <= 99)) {
//         console.log("Число потрапляє в діапазон!");
//     } else {
//         console.log("Число не потрапляє в діапазон!");
//     };
// };

// if (!(num = prompt('Введіть число!'))) {
//     console.log('Скасовано користувачем!');
// } else {
//     if (Number.isNaN(num)) {
//         console.log('Було введено не коректні дані!!!');
//     } else {
//         if ((!Number.isNaN(num * 1)) && (num >= 55) && (num <= 99)) {
//             console.log("Число потрапляє в діапазон!");
//         } else {
//             console.log("Число не потрапляє в діапазон!");
//         };
//     };
// };
// ----------------------------№2----------------------------
const ageMax = 55;
if ((!Number.isNaN(ageMax * 1)) && (ageMax > 0)) {
    if (ageMax < 16) {
        alert('Максим відноситься до групи малих дітей.');
        console.log('Максим відноситься до групи малих дітей');
    } else if (ageMax >= 17 || ageMax < 60) {
        alert('Максим відноситься до групи дорослих людей.');
        console.log('Максим відноситься до групи дорослих людей.');
    } else if (ageMax >= 61 || ageMax < 100) {
        alert('Максим відноситься до групи пенсіонерів.');
        console.log('Максим відноситься до групи пенсіонерів.');
    }
} else {
    alert('Введіть коректне число!!');
    console.log('Введіть коректне число!!');
};

// ----------------------------№3----------------------------
const myName = 'Олександр';
const mySurname = 'Абдусалямов';

if (myName.length > 4 && mySurname.length > 5) {
    // alert(`Кількість символів в ім'ї та прізвищі "${myName} ${mySurname}" складає:`, `${myName} ${mySurname}`.length, 'символ.');
    alert(`${myName} ${mySurname}`.length);
    console.log(`Кількість символів в імені та прізвищі "${myName} ${mySurname}" складає:`, `${myName} ${mySurname}`.length, 'символ.');
} else {
    alert('УПС...');
    console.log('УПС...');
};

// ----------------------------№4----------------------------
let x = Math.round(Math.random() * (5 - 1) + 1);

if (x >= 1 && x <= 5) {
    console.log(`Число ${x} попадає в діапазон чисел від 1 до 5.`);
} else {
    console.log(`Число ${x} не попадає в діапазон чисел від 1 до 5.`);
};

// ----------------------------№5----------------------------

const lang = prompt('Введіть одне із значень: "ua" або "en", або "ru", або "fr".');

switch (lang) {
    case 'ua':
        console.log("Janvier.");
        break;
    case 'en':
        console.log("February.");
        break;
    case 'ru':
        console.log("March.");
        break;
    case 'fr':
        console.log("April.");
        break;
    default:
        console.log('Жодне із зазначених значень не було введено або були введені не коректні дані!!!');
};