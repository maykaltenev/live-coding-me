/**
 * 08 medium
 * Remove all duplicates from an array of integers
 * example: with input [1,2,3,1] the function
 * should return [1,2,3]
 */

function removeDuplicates(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}
console.log(removeDuplicates([1, 2, 3, 1]));