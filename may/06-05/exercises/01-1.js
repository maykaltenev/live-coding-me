/**
 * 01
 * Create a function to remove duplicates in an array.
 * E.g. when receiving an array like this:
 * [1, 5, 6, 5, 7, 1, 6, 8, 9, 7]
 * the function should return an array without duplicates:
 * [1, 5, 6, 7, 8, 9]
 */

let array = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];


let result = array.reduce((a, c) => {
    if (!a.includes(c)) {
        a.push(c);
    }
    return a;
}, [])
console.log(result)