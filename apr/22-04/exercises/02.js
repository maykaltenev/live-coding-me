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
// delete a product from the cart
// function deleteItem(object, user, product) {
//     let indexToDelete = -1;
//     for (let i = 0; i < carts.length; i++) {
//         if (object[i].user === user && object[i].product === product) {
//             indexToDelete = i;
//             console.log(carts[i])
//         }
//     }
//     // with check on index
//     // let result = [];
//     // for (let i = 0; i < object.length; i++) {
//     //     if (!(indexToDelete === i)) {
//     //         result.push(object[i])
//     //     }
//     // }
//     carts.splice(indexToDelete, 1);
//     return carts;
// }

// console.log(deleteItem(carts, 'alkis', 'Bag'));

// delete all the products of an object
function deleteItem(object, product) {
    let indexToDelete = [];
    let result = [];
    for (let i = 0; i < object.length; i++) {
        if (object[i].product.toLowerCase().includes((product.toLowerCase()))) {
            indexToDelete.push(i);
        }
    }
    console.log(indexToDelete)
    for (let i = 0; i < object.length; i++) {
        for (let j = 0; j < indexToDelete.length; j++) {
            if (!indexToDelete[j] === i) {
                result.push(object[j])
            }
        }
    }
    return result;
}


console.log(deleteItem(carts, 'Hat'));