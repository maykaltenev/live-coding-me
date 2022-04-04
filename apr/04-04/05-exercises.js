// 1. Add Up. 

// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:

// sumIntFrom1ToN(4) ➞ 10

function addUp(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}
console.log(addUp(4));