/**
 * 01
 * Create a function to remove duplicates in an array.
 * E.g. when receiving an array like this:
 * [1, 5, 6, 5, 7, 1, 6, 8, 9, 7]
 * the function should return an array without duplicates:
 * [1, 5, 6, 7, 8, 9]
 */

/**
 * 02
 * Given the following arrays of products and carts,
 * create the following functions using arrays methods:
 * 
 * a) list products from cart for specific user
 * e.g. listProducts('alkis')
 * 
 * b) get total number of items for specific user
 * e.g. getTotalItems('alkis')
 * 
 * c) get total cost of products for specific user
 * e.g. getTotalCost('alkis')
 */

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
    }
]
const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 2
        user: "alkis",
        product: "shocks",
        quantity: 2
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
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Hat",
        quantity: 3
    }
]

