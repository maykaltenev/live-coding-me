/**
 * 07 medium
 * Write a function which merges two arrays and removes all duplicates elements
 * Example:
 * array1 = [1, 2, 3];
 * array2 = [2, 30, 1];
 * mergeArrays(array1, array2) should return [3, 2, 30, 1] (the items can be with any order)
 */


function mergeArrays(first, second) {
    let result = [];
    for (let j = 0; j < second.length; j++) {
        if (!result.includes(second[j])) {
            result.push(second[j])
        }
        for (let i = 0; i < first.length; i++) {
            if (!result.includes(first[i])) {
                result.push(first[i])
            }
        }
    }
    return result;
}
console.log(mergeArrays([1, 2, 3], [2, 30, 1]))
