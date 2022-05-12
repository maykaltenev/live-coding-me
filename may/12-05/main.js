let people = [{
    firstName: 'Peter',
    age: 15,
},
{
    firstName: 'Gosho',
    age: 30,
},
{
    firstName: 'Pesho',
    age: 18,
},
{
    firstName: 'Rodo',
    age: 48,
},
{
    firstName: 'Muro',
    age: 38,
},
{
    firstName: 'Firo',
    age: 78,
},
]

let result = people.reduce((a, c) => {
    if (!(c < 18)) {
        a.push(c.firstName);
    }
    return a;
}, [])
let output = ''
for (let i = 0; i < result.length; i++) {
    if (i === result.length - 2) {
        output += `${result[i]} `
    } else if (i !== result.length - 1) {
        output += `${result[i]}, `
    } else {
        output += `and ${result[i]}`;
    }
}
console.log(`New output with and: ` + output);

