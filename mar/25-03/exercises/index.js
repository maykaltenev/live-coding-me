/**
 * Excercise 1
 * The Age Calculator
 * Find how old you will be in a future year
 * 
Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values
 */
let birthYear = 1992;
let futureYear = 2045;
let expectedYears = futureYear - birthYear;
console.log(`Exercise 1: I will be either ${expectedYears - 1} or ${expectedYears} in ${futureYear}`);
/**
 * Exercise 02
 * Which value does x have after execution of the following code?
 */
let x = 3;
x++; // 4
x = x * 2; // 8
x--; // 7
console.log(`Exercise 2: ${x}`);

/**
* Exercise 03 
* Create an array with 10 random numbers
 * find the sum of all the numbers in that array
 * print to the console the first and the third items of the array
 */
let tenNumbers = [12, 15, 17, 3, 54, 32, 555, 1112, 4241, 23];

let sumAll = tenNumbers[0] + tenNumbers[1] + tenNumbers[2] + tenNumbers[3] + tenNumbers[4] + tenNumbers[5] + tenNumbers[6] + tenNumbers[7] + tenNumbers[8] + tenNumbers[9];
console.log(`Exercise 2-2: ${sumAll}`);
let sumOneAndThree = tenNumbers[0] + tenNumbers[2];
console.log(`Exercise 2-3: ${sumOneAndThree}`);
/**
 * Exercise 04
 * Solve this 1 hour long exercise:
 * https://silentteacher.toxicode.fr/hourofcode
 */