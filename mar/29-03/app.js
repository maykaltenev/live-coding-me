let animals = ['cat', 'dog', 'mouse'];
let animalsCopy = animals;

animalsCopy.push('giraffe');

console.log(animalsCopy);
console.log(animals);

let letters = ['a', 'b', 'c'];
let lettersD = ['a', 'b', 'c'];

console.log(letters === lettersD)

// You work in a library and your task is to find the book with the largest number of pages.
// You are given a long list of book titles printed on paper, with the number of pages next to it, on a single column, like this:
// - Lord of the Flies, 226
// - The Fire Next Time, 128
// - The Left Hand of Darkness, 286
// ...
// There are 10 pages like this, with 100 books on each page, for a total of 1000 books.
// The only tools you have are a pen and some extra paper.
// Write the step-by-step instructions to solve this task going in as much detail as possible.
// Use regular language and don’t think about JavaScript. Imagine you have to give these instructions to someone else

// 1. Prepare yourself for a few hours good work. Get some coffee and something to snack on the side.
// 2. Get the pen and the extra papers and sit comfortably on a desk with a all the 10 pages of info.
// 3. Write the first name from page 1 on the empty paper like this
//     - Lord of the Flies, 226
// 4. Check only the numbers of each line 
// if it is bigger or equal than the last 
// one write it down the number and the name 
// and scratch the one that you written before;
// 5. Repeat the number 4 till the all pages are checked
// 6. Congrats you have the end result 