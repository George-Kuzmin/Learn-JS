"use strict";

// alert("дарова, отец")
// alert("не нажимай окей))")

// это комментарий
// let message = "hello";
// alert(message);


// let admin, name
//
// name = "Джон"
//
// admin = name

// alert( `Привет, ${admin}!` );

// typeof admin

// let age = 20
// alert (typeof age) // number
//
// age = String (age) // мы не объявляем переменную, а переназначаем, поэтому без let
// alert(typeof age)

// let a = 1, b = 1;
//
// let c = ++a; // ?
// let d = b++; // ?
//
//
// alert("" + 1 + 0)

// задание 2
// let officialName = prompt("Какое «официальное» название JavaScript?", '')
//
// if (officialName == "ECMAScript") {
//     alert("Верно!")
// } else {
//     alert("Далбаёб?")
// }

// задание 3
// let number = prompt("Напишите число", "")
//
// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert (-1);
// } else {
//     alert (0)
// }

// задание 4

// let result = (a + b < 4) ? "мало" : "много";

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




















