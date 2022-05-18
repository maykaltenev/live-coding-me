// // let products = [
// //     {
// //         type: "t-shirt",
// //         price: 9.99,
// //         color: "red",
// //     }, // 0
// //     {
// //         type: "socks",
// //         price: 4.99,
// //         color: "blue",
// //     },
// //     {
// //         type: "jeans",
// //         price: 44.99,
// //         color: "black",
// //     },
// //     {
// //         type: "t-shirt",
// //         price: 14.99,
// //         color: "green",
// //     },
// //     {
// //         type: "t-shirt",
// //         price: 22.99,
// //         color: "blue",
// //     },
// //     {
// //         type: "jeans",
// //         price: 59.99,
// //         color: "blue",
// //     },
// //     {
// //         type: "skirt",
// //         price: 24.99,
// //         color: "yellow",
// //     },
// //     {
// //         type: "socks",
// //         price: 14.99,
// //         color: "yellow",
// //     },
// // ];

// // // Capitalize the color of each product callback function
// // let capitalizedColor = function capitalize(array) {
// //     for (let i = 0; i < array.length; i++) {
// //         // { type: 't-shirt', price: 9.99, color: 'red' }   "red",
// //         array[i].color = array[i].color[0].toUpperCase() + array[i].color.slice(1);
// //     }
// //     return array
// // }
// // console.log(capitalizedColor(products))
// // // let number = [1, 2, 3, 4, 5]
// // // console.log(number)
// // //filter with loop
// // products.filter
// // let filterBlue = function blue(array) {
// //     let blueItems = []; // 0
// //     for (let i = 1; i < array.length; i++) {
// //         console.log(array[i]) //   { type: 't-shirt', price: 9.99, color: 'Red' },
// //         console.log(array[i]) // { type: 'socks', price: 4.99, color: 'Blue' },
// //         if (array[i].color.toLowerCase() === 'blue') {
// //             blueItems.push(array[i])
// //         }
// //     }
// //     return blueItems
// // }
// // // console.log(capitalizedColor(products))
// // console.log(filterBlue(products))
// // //socks => S + ocks
// // let mapType = products.map((item) => {
// //     let upperCaseClone = { ...item };
// //     upperCaseClone.type = upperCaseClone.type[0].toUpperCase() + upperCaseClone.type.slice(1);
// //     return upperCaseClone;
// // });
// // console.log(mapType)

// // reverse the string inside of an Array

// // let arrayOfNumber = [1, 2, 3];
// // // let arrayOfStringAndNumbers = [[a, 1], [b, 2], [c, 3]];

// // // let result = arrayOfStrings.map((item, i) => {
// // //     let innerArray = [];
// // //     innerArray.push(item, Number(`${i + 1}`))
// // //     return innerArray;
// // // })
// // // console.log(result)
// // //a
// // // let result1 = arrayOfStrings.reduce(function (outputArray, item, index) {
// // //     let result = []; // ['b' ,2] ['c', 3]
// // //     result.push(item, arrayOfNumber[index]);
// // //     outputArray.push(result);
// // //     return outputArray // ['a', 1],['b', 2], ['c', 3]
// // // }, []);
// // // console.log(result1);
// // // 'h' 'e' 'l' 'l' 'o'
// // let arrayOfStrings = ['hello', 'book', 'crock', 'ball', 'red', 'blue'];

// // let result = arrayOfStrings.map(item => item.split('').reverse().join(''));
// // console.log(result);



// let products = [
//     {
//         type: "t-shirt",
//         price: 9.99,
//         color: "red",
//     },
//     {
//         type: "socks",
//         price: 4.99,
//         color: "blue",
//     },
//     {
//         type: "jeans",
//         price: 44.99,
//         color: "black",
//     },
//     {
//         type: "t-shirt",
//         price: 14.99,
//         color: "green",
//     },
//     {
//         type: "t-shirt",
//         price: 22.99,
//         color: "blue",
//     },
//     {
//         type: "jeans",
//         price: 59.99,
//         color: "blue",
//     },
//     {
//         type: "skirt",
//         price: 24.99,
//         color: "yellow",
//     },
//     {
//         type: "socks",
//         price: 14.99,
//         color: "yellow",
//     },
// ];

// /* Map */

// // Capitalize the type of each product
// let capitalize = products.map(item => {
//     let copy = { ...item }
//     copy.type = copy.type[0].toUpperCase() + copy.type.slice(1);
//     return copy;
// })
// console.log(capitalize);

// // Get an array containing only product types.
// // Example: ["T-shirt", "Socks", "Jeans", "T-shirt"]

// // Add a new property to the products describing the product

// /* Filter and find */
// // Get an array with only yellow products

// // Get an array with products that cost more than 15

// // Get an array with listing only the types plus color of products that cost more than 15


// // Get the first jeans in the products

// let firstJeans = products.find(item => item.type.toLowerCase() === 'jeans');
// console.log(firstJeans);

// // Check if there is at least a blue product

// // Check if there is at least a pink product


// // Check if there are at least 2 blue products


// /* Reduce */



// // Calculate the total price of products
// let calculateProducts = products.reduce((acc, current) => {

//     return acc += current.price;
// }, 0)
// console.log(calculateProducts)
// // Get an array with only product types, but without repetitions
// let filter = products.reduce((acc, current) => {
//     if (!acc.includes(current.type)) {
//         acc.push(current.type);
//     }
//     return acc;
// }, [])

// // with a function
// // let filtered = (products) => {
// //     let result = [];
// //     products.map((item) => {
// //         if(!result.includes(item.type)) {
// //         result.push(item.type);
// //         }
// //     });
// //     return result;
// // }
// // console.log(filtered(products))
// // Get the most expensive product

// //MCDONALDS
// class Store {
//     constructor() {
//         this.items = [];
//     }
//     filter() {
//         let result = [];
//         this.items.map((item) => {
//             if (!result.includes(item.type)) {
//                 result.push(item.type);
//             }
//         });
//         console.log(result.join('\n'))
//     }
//     add(items) {
//         for (const iteration of items) {
//             this.items.push(iteration)
//         }
//         return this.items;
//     }
// }
// let store = new Store();
// console.log(store.add(products))
// //  console.log(store.items);
// //   let filterFromStore1 = store.filter();




// // Get the cheapest product
// let cheapest = products.reduce((acc, curr) => {
//     if (acc.price === undefined) {
//         acc = curr; //  
//         //  9.99 >  4.99 // true 
//     } else if (acc.price > curr.price) { //{ type: 'socks', price: 4.99, color: 'blue' },
//         acc = curr
//     }
//     return acc; //  type: 'socks', price: 4.99, color: 'blue'
// }, {}); // do you have key with price, no then you are equal to === undefined 

// console.log(cheapest);

// // Get the type and color of the cheapest product

// let result = (products) => {
//     let atLeast = products.find(item => item.color === 'yellow');
//     if (atLeast !== undefined) {
//         return atLeast;
//     } else {
//         return 'Sorry not found'
//     }
// }
// console.log(result(products))
// let mood = 'mood';
// let obj = {
//     name: 'John',
//     age: 24,
// }
// obj['study'] = true;
// obj.lastName = 'Adams';
// console.log(obj)
// obj[mood] = mood;
// console.log(obj)

const obj = {
    foo: 1
}
obj.bar = 2;
// console.log(obj)
// const fn = () => { };
// console.log(typeof fn)
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

let first = new Employee('Jeff Smith', 45000)
console.log(first);

class Vehicle {
    constructor(model, color, year, country) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.country = country;
    }
}
let car = new Vehicle('Honda', 'white', '2010', 'UK');
console.log(car);
let numbers = [12, 30, 9.99, 74.50, 47]

const animal = {
    type: 'cat',
    name: 'Ruphus',
    color: 'orange',
}
console.log(animal.age);

const myCities = ['Rome', 'Berlin'];

myCities[0] = 'Sofia';
myCities.push('Prague');
myCities.unshift('Copenhagen')
console.log(myCities);
let city = 'Stara Zagora'
console.log(city.substring(1, 8))
