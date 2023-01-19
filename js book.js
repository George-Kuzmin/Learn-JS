"use strict";

alert("дарова, отец")
alert("не нажимай окей))")

// это комментарий
let message = "hello";
alert(message);


let admin, name

name = "Джон"

admin = name

alert( `Привет, ${admin}!` );

typeof admin

let age = 20
alert (typeof age) // number

age = String (age) // мы не объявляем переменную, а переназначаем, поэтому без let
alert(typeof age)

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?


alert("" + 1 + 0)

// задание 2
let officialName = prompt("Какое «официальное» название JavaScript?", '')

if (officialName == "ECMAScript") {
    alert("Верно!")
} else {
    alert("Далбаёб?")
}

// задание 3
let number = prompt("Напишите число", "")

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert (-1);
} else {
    alert (0)
}

// задание 4

let result = (a + b < 4) ? "мало" : "много";

// задание 5
let login = prompt("Назовись, путник", "")

let message = login === "Сотрудник"
    ? "Привет"
    : login === "Директор"
        ? "Здравствуйте"
        : login ===  ""
            ? "Нет логина"
            : ""

alert(message)

// тема логические операторы
// задание 6
//
if (age >= 14 && age <= 90);

// задание 7
if (!age >= 14 || !age <= 90);

if (age <= 14 || age >= 90);

// царь задание, крутое
const code = prompt("Введите логин", "")

if (code == null) {
    alert("Отменено")
} else if (code === "Админ") {
    const password = prompt("Пароль!", "")

    if (password === "Я главный") {
        alert("Здравствуйте!")
    } else if (password == null) {
        alert("Отменено")
    } else {
        alert("Неверный пароль")
    }
} else {
    alert("Я вас не знаю")
}

// задание на циклы for и while
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let number = 2; number <= 10; number++) {
    if (number % 2 == 0) {
        alert (`number ${number}!`)
    }
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

for (let number = 2; number <= 10; number++) {
    number % 2 === 0 && alert(number)
}

const browser = "Edge";

if (browser === "Edge") {
    alert( "You've got the Edge!" );
} else if (
    browser === "Chrome"
    || browser === "Firefox"
    || browser === "Safari"
    || browser === "Opera"
) {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}



const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}



switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break;

    case 1:
        alert('Вы ввели число 1')
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;

    default: break;
}


// задание по функциям

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    return age > 18 ? true : confirm("Родители разрешили?")
}

function checkAge(age) {
   return (age > 18) || confirm("Родители разрешили?")
}

checkAge(18)


// другое задание по функциям
function min(a,b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
function min(a,b) {
    return a < b ? a : b
}
function min(a,b) {
    return (a < b) || b
}

// и ещё одно задание по функциям

function pow (x,n) {
    let exp = x ** n;
    return (exp);
}

// дополнительное задание

let x = prompt("Введите число", "")
let n = prompt("Сколько раз будем его умножать на себя?", "")

function pow (x,n) {
    return x ** n;
}

if (n < 1) {
    alert("Пишите только натуральные значения")
} else {
    pow(x,n)
}

// надо переписать код ниже из function expression в стрелочную функцию

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// ГОТОВО))
let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение."))

// задание по объектам last task

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric (obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2
        }
    }
}

// multiplyNumeric (menu)
//
// alert(JSON.stringify(menu))

// 1st task

let user = {
    name : "John",
    surname : "Smith",
}
user.name = "Pete";

delete user.name


// next task

let schedule = {}
function isEmpty (obj) {
    for (let key in obj) {
        return key === null
    }
}

isEmpty(schedule)

// предложенное решение

function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}

// next task

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (let key in salaries) {
    sum = sum + salaries[key]
}
// alert(sum)

