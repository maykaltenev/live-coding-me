/**
 * 06 easy
 * Write a function to find if an array contains a specific element
 * checkItem([2, 5, 9, 6], 5) should return true
 * checkItem([2, 5, 9, 6], 1) should return false
 */

function checkItem(array, checker) {
    return array.includes(checker);
}
console.log(checkItem([2, 5, 9, 6], 5))
console.log(checkItem([2, 5, 9, 6], 1))