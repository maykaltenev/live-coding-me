let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let searched = 2;
function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (array[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(newArray, searched));
// Python Binary Search
// def binary_search(list, target):
//     first = 0;
// last = len(list) - 1
// while first <= last:
//     midpoint = (first + last) // 2
// if list[midpoint] == target:
//     return midpoint
//     elif list[midpoint] < target:
// first = midpoint + 1
//     else:
// last = midpoint - 1
// return None