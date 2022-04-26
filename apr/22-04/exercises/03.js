// f) find the total value of the cart of a given user // and products 

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
        user: "Alkis",
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
        product: "Underware",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Coat",
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Scarf",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Bag",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Underware",
        quantity: 3
    }
]

function totalValue(objProducts, objectCarts, user) {
    let resultCarts = [];
    for (let i = 0; i < objectCarts.length; i++) {
        if (objectCarts[i].user.toLowerCase() === user.toLowerCase()) {
            resultCarts.push(objectCarts[i].product)
            resultCarts.push(objectCarts[i].quantity)
        }
    }
    for (let j = 0; j < objProducts.length; j++) {
        // console.log(objProducts[j]) // blue shirt
        for (let i = 0; i < resultCarts.length; i += 2) {
            if (objProducts[j].name.toLowerCase() === resultCarts[i].toLowerCase()) {
                resultCarts[i + 1] *= objProducts[j].price;
            }
        }
    }
    return resultCarts;
}
// console.log(totalValue(products, carts, 'alkis'))
console.log(totalValue(products, carts, 'john'))