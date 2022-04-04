/**
 * 01 easy - Print the bigger number
 * Write a function that compares two integers and prints to the console the larger
 */


function theBiggerNumber(number, secondNumber) {
    console.log('Exercise 1:')
    if (number > secondNumber) {
        return `The num ${number} is bigger than num ${secondNumber}!`;
    } else if (number < secondNumber) {
        return `The num ${secondNumber} is bigger than num ${number}!`;
    } else {
        return `The num ${number} and num ${secondNumber} are equal!`;
    }
}
console.log(theBiggerNumber(2, 9));
/**
 * 02 Easy - Print Even or Odd
 * Write a function that will iterate from 0 to 15. 
 * For each iteration, it will check if the current number is odd or even, 
 * and display a message to the screen
 */


function easyPrint() {
    console.log('Exercise 2:')
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`The current number is ${i} and it is even!`)
        } else {
            console.log(`The current number is ${i} and it is odd!`)
        }
    }
}
easyPrint()

/**
 * 03 Medium - Check Grades
 * Write a function that works with an array of marks of students and computes
 * and prints, the class average mark:
 * David	80
 * Vinoth	77
 * Divya	88
 * Ishitha	95
 * Thomas	68
 * Then, calculate and print the grade for each student
 * Grades should be calculated based on these values:
 * Range	Grade
 * <60	F
 * <70	D
 * <80	C
 * <90	B
 * <100	A
 * Use a switch statement to solve this one
 */

function checkGrades() {
    let grades = 0;
    let wholeClass = ["David 80", "Vinoth 77", "Divya 88", "Ishitha 95", "Thomas 68"];
    for (let i = 0; i < wholeClass.length; i++) {
        let element = wholeClass[i];
        let nameAndGrade = element.split(' ');
        grades += parseInt(nameAndGrade[1]);
    }
    let average = grades / wholeClass.length;
    console.log(`Exercise 3:`)
    switch (true) {
        case (average < 60):
            console.log(`The average score for the class is ${average} and it a F grade!`);
            break;
        case (average < 70):
            console.log(`The average score for the class is ${average} and it a D grade!`);
            break;
        case (average < 80):
            console.log(`The average score for the class is ${average} and it a C grade!`);
            break;
        case (average < 90):
            console.log(`The average score for the class is ${average} and it a B grade!`);
            break;
        case (average < 100):
            console.log(`The average score for the class is ${average} and it a A grade!`);
            break;
    }
}
checkGrades()
/**
 * 04 Easy - medium - Sum multiples of 3 and 5
 * Write a function to sum the multiples of 3 and 5 under 1000.
 */
function sumMultiple3and5() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }
    console.log(`Exercise 4: ${sum}`);
}
sumMultiple3and5()
/**
 * 05 medium - Check ending of String
 * Write a function to check if a string  
 * ends with the given target string 
 * Examples:
 * ("Bastian", "n") should return true
 * ("Open sesame", "same") should return true
 */
function endingOfString(input, checker) {
    let lengthChecker = checker.length;
    let partToCheck = input.slice(input.length - lengthChecker);
    console.log(`Exercise 5:`)
    if (partToCheck === checker) {
        console.log(`The ${partToCheck} is the same as ${checker}, so the result is true`);
    } else {
        console.log(`The ${partToCheck} is NOT same as ${checker}, so the result is false`);
    }
}
endingOfString("Open sesame", "same")
/**
 * 06 Easy - Repeat String
 * Repeat a given string str for a number of times and print the result to the console.
 * If the given string is empty or the number of times is not a positive number, then print an empty string
 * Examples:
 * ("*", 3) should print ***
 * ("abc", 3) should print abcabcabc
 * ("abc", -2) should print ""
 */
function repeatString(string, numberOfRepetitions) {
    let result = "";
    console.log(`Exercise 6:`)
    if (string === '' || numberOfRepetitions <= 0) {
        console.log(' ');
    } else {
        for (let i = 0; i < numberOfRepetitions; i++) {
            result += string;
        }
        console.log(result);
    }
}
repeatString("*", 3);
/**
 * 07 Easy - Find Sum
 * Write a function addTo that 
 * adds all natural numbers (positive numbers) smaller or equal than a given number 
 * and print the result to the console.
 * Example: if the given number is 3, function addTo() should print 6  (1+2+3 = 6)
 */
function addTo(number) {
    let result = 0;
    let arrayOfNumbers = [];
    for (let i = 0; i <= number; i++) {
        arrayOfNumbers.push(i);
        result += i;
    }
    let numberToString = arrayOfNumbers.join(' ');
    console.log(`Exercise 7: The numbers smaller or equal to ${number} are ${numberToString} and the total sum of them is: ${result}!`);
}
addTo(3);
/**
 * 08 Hard - Create Pattern
 * Write a function to construct the following pattern, using a nested for-loop.

*
**
***
****
*****
******

 */
function createPattern(numbers) {
    console.log('Exercise 8:')
    for (let i = 0; i <= numbers; i++) {
        let stars = '';
        for (let j = 0; j < i + 1; j++) {
            stars += '*'
        }
        console.log(stars);
    }
}
createPattern(10)
/**
 * 09 medium - Filter array
 * Write a function that works with an array and strips from it all items that begin from 'a'
 * E.g. the array ['apple','banana','orange'] should become ['banana','orange']
 */
function filterArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!array[i].toLowerCase().startsWith('a')) {
            result.push(array[i]);
        }
    }
    console.log(`Exercise 9: ${result}`);
}
filterArray(['alfa', 'apple', 'banana', 'rr', 'AAA', 'orange'])
/***************************************
 * BONUS:
 * Interview exercises
 *
 * I.E. 1:
 * What will be the output of the following code?
 **************************************/
//  const grade='E';  
//  let result;  
//  switch(grade) {  
//      case 'A':  
//          result+="10";  
//      case 'B':  
//          result+=" 9";  
//      case 'C':  
//          result+=" 8";  
//      default:  
//          result+=" 0";  
//  }  
//  console.log(result); 
//  undefined because never enter the switch statement, where switch should have the argument of true, we should use an if statement in order to get the result of 0, which is the default option in the switch

// *************************************
//  I.E 2:
// What will be the output of the following code?
// *************************************
// const grade = 'A';
// const result = 0; // should be late

// switch (grade) {
//     case 'A':
//         result += 10;
//     case 'B':
//         result += 9;
//     case 'C':
//         result += 8;
//     default:
//         result += 0;
// }

// console.log(result)
// The output will be an error because the result is defined as const, we are not able to modify const variable, the result should be defined as a let variable
