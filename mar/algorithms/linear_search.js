
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let searched = 20;
function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(newArray, searched));
// Python linear search
// def linear_search(list, target):
// """ Returns the index position of the target if found, else None
// """
// for i in range(0, len(list)):
//     if list[i] == target:
//     return i
//  return None

// def verify(index):
// if index is not None:
// print("Target found at index: ", index)
//     else:
// print("target not found in list")

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// result = linear_search(numbers, 12)
// verify(result);