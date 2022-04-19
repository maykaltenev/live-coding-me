/**
 * 05 easy
 * Write a JavaScript function to get a random item from an array
 * const items = [254, 45, 212, 365, 2543];
 * console.log(randomItem(items));
 */
function randomItem(array) {
    let position = Math.floor(Math.random() * array.length);
    return array[position];
}

console.log(randomItem([254, 45, 212, 365, 2543]));