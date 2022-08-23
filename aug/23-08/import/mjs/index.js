import { logger, findOldestUserInArray } from './util';
const users = [
    { name: 'niels', id: 0, age: 30 },
    { name: 'max', id: 1, age: 45 },
    { name: 'mona', id: 2, age: 54 },
]
console.log(findOldestUserInArray(users))