// **
//  * 03
//  * Create a function that adds any number of objects to another existing object
//  */
const user = {
    username: 'Kane',
    email: 'test@email.com',
    age: 30,
}

const userAddress = {
    country: 'Germany',
    address: 'berlin',
    image: 'logo.png'
}

const favorites = {
    animal: 'cat',
    food: 'chicken',
    music: 'rock'
}

function addObjects(...object) {
    return object = Object.assign(...object);
}
console.log(addObjects(user, userAddress, favorites))