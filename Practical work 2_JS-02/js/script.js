'use strict'
console.log('============Завдання 1===========');

const hello1 = function () {
    console.log('Привіт, Java Script!');
}

hello1();

console.log('============Завдання 2===========');

function hello2(name = prompt('Введіть Ваше ім"я, будь ласка.')) {
    console.log(`Привіт, ${name}!`);
}

hello2();

console.log('============Завдання 3===========');

function mul(n = +prompt('Введіть число.'), m = +prompt('Введіть число.')) {
    return console.log(`Добуток чисел ${n} & ${m}:`, n * m, ', їх сума:', n + m, ', а різниця:', n - m , '.');
}

mul()

console.log('============Завдання 4===========');

const myNewArrowFunction = (...mes) => {
   return console.log(mes);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("JS", "Python", "Java", "PHP", "C++");

console.log('============Завдання 5===========');

// const marks = [100, 75, 81, 96];
// const marks = [45, 63, 85, 70];
// const marks = [77, 82, 60, 58];
const marks = [93, 99, 93, 96];
// const marks = [80];
// const marks = prompt('Введіть свої оцінки.')
    //Збір аргументів 
const myAverageScore = function (...marks) {
    let totalMarks = 0;
    let lastMark;
    for (const total of  arguments) {
        totalMarks += total;
        // console.log(total);
    };

    lastMark = totalMarks / marks.length;
    // console.log(lastMark);
    if (lastMark <= 100 && lastMark >= 91) {
         console.log('My average score: A');
    } else if (lastMark <= 90 && lastMark >= 81) {
         console.log('My average score: B');
    } else if (lastMark <= 80 && lastMark >= 71) {
         console.log('My average score: C');
    } else if (lastMark <= 70) {
         console.log('My average score: D');
    };
};

myAverageScore(...marks) //Розпилення аргументів
// console.log(myAverageScore(...[100, 75, 81, 96]));
// console.log(myAverageScore(...[100, 75, 81, 96]));
// console.log(myAverageScore([100, 75, 81, 96]));