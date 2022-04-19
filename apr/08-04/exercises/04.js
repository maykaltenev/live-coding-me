/**
 * 04 easy
 * Write a function that accepts a string and and number of times that this string will fill
 * and return an array
 * example fillArray('some string', 4) should return 
 * ['some string', 'some string', 'some string', 'some string']
 */

function fillArray(string, repeat) {
    let result = [];
    for (let i = 0; i < repeat; i++) {
        result.push(string);
    }
    return result;
}
console.log(fillArray('some string', 4))