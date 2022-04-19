/**
 * 02 easy medium
 * Write a JavaScript function to generate an array of specified length, 
 * filled with integer numbers, increase by one from starting position.
 * console.log(arrayRange(1, 4));
 * [1, 2, 3, 4]
 * console.log(arrayRange(-6, 4));
 * [-6, -5, -4, -3]
 */


function arrayRange(start, numbers) {
    let result = []
    for (let i = start; i <= numbers; i++) {
        result.push(i);
        if (result.length === numbers) {
            return result
        }
    }
    return result;
}
console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));