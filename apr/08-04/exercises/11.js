/**
 * 11 easy
 * Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "es", "de", "en")
 * returns "Hello, World" for the given language, for atleast 3 languages. 
 * It should default to returning English.
 * Call that function for each of the supported languages and log the result to make sure it works.
 */

function helloWorld(input) {
    switch (input) {
        case 'es':
            return 'Hola Mundo';
            break;
        case 'de':
            return 'Hallo Welt';
            break;
        case 'en':
            return 'Hello World';
            break;
        case 'fr':
            return 'Salut Tout le Monde'
            break;
        default:
            return 'Hello World';
            break;
    }
}
console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld(''));
