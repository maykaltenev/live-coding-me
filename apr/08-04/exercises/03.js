// * 03 easy medium
// * Write a JavaScript function to switch positions of one array element.
// * The function should accept the array, the current position and the new position
// * console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
// * [30, 20, 10, 40, 50]
// * console.log(moveIt([10, 20, 30, 40, 50], 1, 4));
// * [10, 50, 30, 40, 20]
// */
function moveIt(array, first, second) {
    let firstPosition = array[first]
    let lastPosition = array[second]
    array.splice(first, 1, lastPosition);
    array.splice(second, 1, firstPosition);
    return array;
}

console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
// * [30, 20, 10, 40, 50]
console.log(moveIt([10, 20, 30, 40, 50], 1, 4));
// * [10, 50, 30, 40, 20]