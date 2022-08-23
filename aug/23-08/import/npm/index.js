import { findOldestUserInArray } from './util.js';
const users = [
    { name: 'niels', id: 0, age: 30 },
    { name: 'max', id: 1, age: 45 },
    { name: 'mona', id: 2, age: 54 },
]
console.log(findOldestUserInArray(users))