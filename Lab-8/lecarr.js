// Завдання 1
const varArray = [7, -9, 3, 4, -4, 2, -8, 1, 5, 6];
function maxSumarray(arr) {
    let maxSum = 0;
    let currentSum = 0; 
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max( arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}   
console.log("Максимальна сума підмасиву:", maxSumarray(varArray));

// Завдання 2
function sumStrings(str1, str2) {
    let sum = BigInt(str1) + BigInt(str2);
    return sum.toString();
}   

let str1 = "123456789012345678901234567890";
let str2 = "987654321098765432109876543210";
console.log("Сума рядків як чисел:", sumStrings(str1, str2));

// Завдання 3
var varArray1 = [1, 2, 3, 4, 5];
var varArray2 = [4, 5, 3,];
function arrayDifference(arr1, arr2) {
    let copyArr2 = [...arr2];
    return arr1.filter(item => {
        let index = copyArr2.indexOf(item); 
        if (index !== -1) {
            copyArr2.splice(index, 1); 
            return false; 
        }   
        return true;
    });
}
console.log("Різниця масивів:", arrayDifference(varArray1, varArray2));
