// b) create a function that lists product details for all products in the wishlist for the given userid
const products = [
    {
        // 1
        id: 1,
        name: "D3 5000 iu",
        description: "Takes care of your immune system",
        price: 10,
        image: "http://example.com/1",
    },
    {
        // 2
        id: 2,
        name: "C 1000mg",
        description: "180 tabs of vitamin C with Bioflanoids",
        price: 3,
        image: "http://example.com/23",
    },
    {
        // 3
        id: 3,
        name: "B - Complex 50 mg",
        description: "Balanced mix of all basic B vitamins",
        price: 12,
        image: "http://example.com/44",
    },
    {
        // 4
        id: 4,
        name: "Cal-Mag",
        description: "Calcium and Magnesium in the proper analogy",
        price: 15,
        image: "http://example.com/123",
    },
    {
        // 5
        id: 5,
        name: "E 400iu",
        description: "Best for skin issues",
        price: 10,
        image: "http://example.com/456",
    },
];
const users = [
    {
        userId: 1,
        name: "alkis"
    },
    {
        userId: 2,
        name: "george"
    },
    {
        userId: 3,
        name: "jim"
    },
    {
        userId: 4,
        name: "Ruby"
    }

]
const wishlist = [
    {
        userid: 1,
        productId: [1, 2, 3],
    },
    {
        userid: 2,
        productId: [1, 3, 5],
    },
    {
        userid: 3,
        productId: [2, 4],
    }
];

function getWishListForUser(userId) {
    let productsWishList = [];
    let index = -1
    let result = [];
    for (let i = 0; i < wishlist.length; i++) {
        if (userId === wishlist[i].userid) {
            index = i;
            for (let i = 0; i < wishlist[index].productId.length; i++) {
                productsWishList.push(wishlist[index].productId[i])
            }
        }
    }
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < productsWishList.length; j++) {
            if (productsWishList[j] === products[i].id)
                result.push(products[i])
        }
    }
    return result
}

console.log(getWishListForUser(3))
console.log('--------')
console.log(getWishListForUser(2))
