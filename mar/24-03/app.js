const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2, 3]];
console.log(shopping.length); // 5
console.log(shopping[0]);// returns "bread"
shopping[0] = 'tahini';
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]


let newMatrix = ['21', '23', '24'];
random[2][3] = newMatrix;
console.log(random);

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]


let newLength = cities.push('Bristol');
console.log(cities);     // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength);  // 6

// unshift add to the start
const toTheStart = ['Manchester', 'Liverpool'];
toTheStart.unshift('Edinburgh');
console.log(toTheStart);     // [ "Edinburgh", "Manchester", "Liverpool" ]

const removeCity = ['Manchester', 'Liverpool'];
console.log(removeCity);
// The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
const removedCity = removeCity.pop();
console.log(removeCity);     // [ "Manchester" ]