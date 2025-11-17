// завдання 1
console.log ("Завдання 1: Визначення типів змінних");
var varString = "Hello";
var varObject = {key: "value"};
var varArray = [1, 2, 3];
var varNumber = 26;
var varFunction = function() { return "I am a function"; };

console.log(typeof varString); // string
console.log(typeof varObject); // object
console.log(typeof varArray);  // object
console.log(typeof varNumber); // number
console.log(typeof varFunction); // function

// Завдання 2
console.log ("Завдання 2: Конвертація типів");
var str = "123";
var num = 456;

str = Number(str); // конвертація рядка в число
num = String(num); // конвертація числа в рядок

console.log(typeof str); // number
console.log(typeof num); // string

// Завдання 3
console.log ("Завдання 3: Порівняння з різними типами");
var a = "10";
var b = 10;

console.log(a == b);  
console.log(a === b);

// Завдання 4
console.log ("Завдання 4: Шифрування та дешифрування числа");
var original = 20;
var key = 5;
var encrypted = original + key; // шифрування
var decrypted = encrypted - key; // дешифрування

console.log("Original:", original);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);