
// function retirement() {
//     return `${this.firstName} is gonna retire in ${50 - this.age} years!`
// }
function firstClass(firstName, age) {
    const person = {};
    person.firstName = firstName;
    person.age = age;
    person.retire = function () {
        return `${this.firstName} is gonna retire in ${50 - this.age} years!`
    }
    return person;
}
let person1 = firstClass('Gerg', 30);
let person2 = firstClass('Mory', 10);

console.log(person1.retire())
console.log(person2.retire())
