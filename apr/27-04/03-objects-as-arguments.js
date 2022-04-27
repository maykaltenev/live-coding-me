function appendToArray(array, newItem) {
  array.push(newItem);
  return array;
}

let a = [1, 2, 3];

let newArray = appendToArray(a, 99);

console.log("newArray", newArray); // [1, 2, 3, 99]
console.log("a", a); // [1, 2, 3, 99]

function appendToNewEmptyArray(newItem) {
  let newArray = [];
  newArray.push(newItem);
  return newArray;
}




let b = ["x", "y", "z"];

let bCopy = [];

for (let item of b) {
  bCopy.push(item);
}

console.log("b", b); // ["x", "y", "z"]
console.log("bCopy", bCopy); // ["x", "y", "z"]
console.log("b === bCopy", b === bCopy); // false

let array = ['1', '2', '3'];
let copy = array; // ['1', '2', '3', ]; 
// b = [ x y z ] , newItem = bla
function copyAndAppendToArray(array, newItem) {
  // starts the code to clone the array
  let arrayCopy = [];
  for (let entry of array) {
    arrayCopy.push(entry);
  }
  // ends the code to clone the array

  // our function code
  arrayCopy.push(newItem);
  return arrayCopy;
}
let first = [9, 10, 11, 12];
function realCopy(array) {
  let realCopyFirst = [];
  for (const item of array) {
    realCopyFirst.push(item);
  }
  return realCopyFirst;
}
let realCopyFirst = realCopy(first);
console.log('first', first);
console.log('realCopyFirst', realCopy);

let newArray2 = copyAndAppendToArray(b, "bla");

console.log("b", b);
console.log("newArray2", newArray2);
console.log("b === newArray2", b === newArray2);



let letters = ["a", "b", "c"]

function changesFirstItem(array) {
  let arrayCopy = [];
  for (let entry of array) {
    arrayCopy.push(entry);
  }
  arrayCopy[0] = "bla";
  return arrayCopy;
}

let modifiedLetters = changesFirstItem(letters)

console.log("letters", letters);
console.log("modifiedLetters", modifiedLetters);