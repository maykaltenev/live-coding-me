// Your code here.

function min(first, second) {
    //     if (first <= second) {
    //         return first;
    //     } else {
    //         return second;
    //     }
    // }
    return first <= second ? first : second;
}
console.log(min(0, 10));
// → 0
console.log(min(-10, 0));
// → -10