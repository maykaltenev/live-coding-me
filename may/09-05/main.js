const animal = ['rabbit', 'dog', 'bird', 'horse', 'cat', 'spider'];

let [firstAnimal, secondAnimal, ...rest] = animal;
console.log(firstAnimal);
console.log(secondAnimal);

console.log(rest[rest.length - 1])