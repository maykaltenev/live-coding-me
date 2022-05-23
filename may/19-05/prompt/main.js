// const prompt = require("prompt-sync")({ sigint: true });

// function main() {
//   console.log("Welcome to the game!");
//   play();
// }

// function getNumber() {
//   const randomNumber = Math.floor(Math.random() * 10);
//   return randomNumber;
// }

// function getGuess() {
//   const guess = prompt("Guess the random number: ");
//   return parseInt(guess);
// }
// function play() {
//   let numberToGuess = getNumber();
//   while (true) {
//     const guess = getGuess();
//     if (guess === numberToGuess) {
//       console.log("congratulations");
//       const playAgain = prompt("Play again? Y/N ");
//       if (playAgain.toLowerCase() === "y") {
//         main();
//       } else {
//         console.log("thanks for playing");
//         return;
//       }
//     } else {
//       console.clear();
//       console.log(`Your attemp was: ${guess}`);
//       console.log("Wrong, try again.\n");
//     }
//   }
// }

// main();

let alphabet = "abcdef";

console.log(alphabet[0]);
console.log(alphabet[1]);
console.log(alphabet[8 % alphabet.length]);

function validPin(userPin1) {
  function onlyNumerical(userPin1) {
    for (let i = 0; i < userPin1.length; i++) {
      if (parseInt(userPin1[i]) === string) {
        console.log("only numerical is false");
        return false;
      }
    }
    return true;
  }

  let a = onlyNumerical(userPin1);
  if (
    userPin1.length === 4 &&
    userPin1[length - 1] % 2 === 0 &&
    userPin1[0] !== userPin1[length - 1] &&
    a === true
  ) {
    console.log("your pin is valid");
  } else {
    console.log("your pin is not valid");
  }
}

validPin("1678");
