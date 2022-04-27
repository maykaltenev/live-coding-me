let first = [9, 10, 11, 12];
function realCopy(array) {
    let realCopyFirst = [];
    for (const item of array) {
        realCopyFirst.push(item);
    }
    return realCopyFirst;
}
let realCopyFirst = realCopy(first);
console.log('first', first);
console.log('realCopyFirst', realCopyFirst);
console.log('realCopyFirst === first', first = realCopyFirst);

function realCopyAndAddItem(array, newItem) {
    let realCopyFirst = [];
    for (const item of array) {
        realCopyFirst.push(item);
    }
    realCopyFirst.push(newItem);
    return realCopyFirst;
}
let realCopyFirstWithAddedItem = realCopyAndAddItem(first, 'newItem');
console.log('newItemAdded', realCopyFirstWithAddedItem);