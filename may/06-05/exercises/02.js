// **
//  * 02
//  * Given the following arrays of products and carts,
//  * create the following functions using arrays methods:
//  * 
//  * a) list products from cart for specific user
//  * e.g. listProducts('alkis')
//  * 
//  * b) get total number of items for specific user
//  * e.g. getTotalItems('alkis')
//  * 
//  * c) get total cost of products for specific user
//  * e.g. getTotalCost('alkis')
//  */

const products = [
    { // 1
        name: "Blue Shirt",
        price: 10
    },
    { // 2
        name: "Hat",
        price: 15
    },
    { // 3
        name: "Coat",
        price: 100
    },
    { // 4
        name: "Ring",
        price: 72
    },
    { // 5
        name: "Bag",
        price: 19
    },
    { // 6
        name: "Scarf",
        price: 9
    },
    { // 7
        name: "Shoes",
        price: 57
    },
    { // 8
        name: "Underware",
        price: 7
    },
    { // 9
        name: "shocks",
        price: 3
    },
    { // 10
        name: "T-shirt",
        price: 50
    },
    { // 10
        name: "gloves",
        price: 500
    }

]
const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 1
    },
    { // 2
        user: "alkis",
        product: "shocks",
        quantity: 1
    },
    { // 3
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 4
        user: "john",
        product: "Underware",
        quantity: 3
    },
    { // 5
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Hat",
        quantity: 1
    },
    { // 8
        user: "alkis",
        product: "Hat",
        quantity: 1
    },
    { // 9
        user: "alkis",
        product: "Hat",
        quantity: 1
    },
    { // 10
        user: "alkis",
        product: "Hat",
        quantity: 1
    },
    { // 10
        user: "maik",
        product: "Gloves",
        quantity: 5
    },
]
// function listProducts(user) {
//     return carts.filter(item => item.user === user);
// }
// console.log(listProducts('alkis'))

// function getTotalItems(user) {
//     return carts.reduce((a, c) => {
//         if (c.user === user) {
//             a += c.quantity
//         }
//         return a;
//     }, 0)
// }

// console.log(getTotalItems('alkis'))

function getTotalCost(user) {
    let resultFilter = carts.filter((x) => x.user === user).map((x) => x.product = x.product.toLowerCase());
    return products.reduce((a, c) => {
        for (const item of resultFilter) {
            if (item === (c.name.toLowerCase())) {
                a += c.price;
            }
        }
        return a;
    }, 0)


}
console.log(carts)
console.log(getTotalCost('maik'))