const product = {
    type: 't-shirt',
    price: 9.99,
    color: 'green',
    isAvailable: true,
    availableSizes: ['S', 'M', 'XL'],
}
console.log(product.color);


product.brand = []
// print all the available sizes, 1 per row
for (let i = 0; i < product.availableSizes.length; i++) {
    console.log(product.availableSizes[i]);
}