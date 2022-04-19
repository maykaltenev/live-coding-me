/**
 * 12 easy
 * Write a function named pluralize that:
 * takes 2 arguments, a noun and a number.
 * returns the number and pluralized form, like "5 cats" or "1 dog".
 * Call that function for a few different scores and log the result to make sure it works.
 * Bonus: Make it handle a few collective nouns like "sheep" and "geese".
 * 
 * example: pluralize('cat', 2) should return 2 cats
 */

function pluralize(noun, number) {
    let string = noun;
    if (noun === 'sheep') {
        string = noun;
    } else if (noun === 'goose' && number === 1) {
        string = 'geese'
    } else if (noun === 'geese' && number > 1) {
        string = 'gooses'
    } else if (number > 1) {
        string += 's';

    }
    return `${number} ${string}`
}
console.log(pluralize('sheep', 10));
console.log(pluralize('goose', 1));
console.log(pluralize('goose', 10));
console.log(pluralize('geese', 10));
console.log(pluralize('cat', 10));
console.log(pluralize('cat', 1));