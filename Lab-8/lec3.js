// Унарні оператори
var a = 5;
a++; // a тепер 6
-a; // результат -6
--a; // a тепер 5
!a; // результат false
typeof a; 
console.log(typeof a); 

// Бінарні оператори
var sum = 10 + 5; 
var difference = 10 - 2;
var mult = 10 * 5;
var quotient = 10 / 2;
var modulus = 10 % 3;
if (sum<quotient  && mult>5) {
    console.log("Умова істинна");
} else {
    console.log("Умова хибна");
}
console.log (sum === quotient);

// Тернарні оператори
var age = 20;
var status = (age >= 18) ? "Дорослий" : "Неповнолітній";
console.log(status);

// Завдання 2
let line1 = "Нехай завжди буде сонце,";
let line2 = "Нехай завжди буде небо,";
let line3 = "Нехай завжди буде мама,";
let line4 = "Нехай завжди буду я.";
let poem = line1.concat(line2, line3, line4);
console.log(poem);