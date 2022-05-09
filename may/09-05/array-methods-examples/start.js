let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];

/* Map */
// Capitalize the type of each product
// Get an array containing only product types.
// Example: ["T-shirt", "Socks", "Jeans", "T-shirt"]
let capitalProduct = products.map(a => a.type.replace(a.type[0], a.type[0].toUpperCase()))
console.log(capitalProduct)
// Add a new property to the products describing the product
products.map(a => a['description'] = `The ${a.color} ${a.type} costs $${a.price}!`);
console.log(products)
/* Filter and find */
// Get an array with only yellow products

let allYellow = products.filter(a => a.color === 'yellow');
console.log(allYellow);
// Get an array with products that cost more than 15
let moreThan15 = products.filter(a => a.price > 15);
console.log(moreThan15);
// Get an array with listing only the types plus color of products that cost more than 15
let productTypesMoreThan15 = products
  .filter((product) => product.price > 15)
  .map((product) => `${product.color} ${product.type}`);
console.log(
  `Products who cost more than 15`,
  productTypesMoreThan15
);


// Get the first jeans in the products
let firstJeans = products.find(a => a.type === 'jeans')
console.log(firstJeans);
// Check if there is at least a blue product
let blueProduct = products.some(a => a.color === 'blue');
console.log('Blue products', blueProduct)
// Check if there is at least a pink product
let pinkProduct = products.some(a => a.color === 'pink');
console.log('The pink is', pinkProduct)

// Check if there are at least 2 blue products
let atLeast2 = products.filter(a => a.color === 'blue')
  .some((a, index, array) => array.length >= 2)
console.log('Check if there are at least 2 blue products', atLeast2)
/* Reduce */

// Calculate the total price of products
let total = products.reduce((a, c) => a + c.price, 0);
console.log(total)
// Get an array with only product types, but without repetitions
let types = [];
products.map(a => {
  if (!types.includes(a.type)) {
    types.push(a.type);
  }
})
console.log('types', types)

// Get the most expensive product
let [mostExpensiveProduct, ...rest] = products.sort((a, b) => b.price - a.price)
console.log(mostExpensiveProduct)




// Get the cheapest product

// Get the type and color of the cheapest product


