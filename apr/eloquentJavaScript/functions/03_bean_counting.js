// Your code here.

function countChar(string, char) {
    let counterUppercase = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            counterUppercase++
        }
    }
    return counterUppercase;
}
// nested function took the parameter needed to execute
function countBs(string) {
    return countChar(string, 'B');
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4