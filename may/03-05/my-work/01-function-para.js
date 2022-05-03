function calculator(a, b, operator) {
    let cooperators = ['*', '/', '+', '-', '%', '**'];
    let index = -1;
    if (cooperators.includes(operator)) {
        index = cooperators.indexOf(operator);
    } else {
        return index;
    }
    switch (index) {
        case 0:
            return `The result of ${a} ${operator} ${b} = ${a * b}.`;
        case 1:
            return `The result of ${a} ${operator} ${b} = ${a / b}.`;
        case 2:
            return `The result of ${a} ${operator} ${b} = ${a + b}.`;
        case 3:
            return `The result of ${a} ${operator} ${b} = ${a - b}.`;
        case 4:
            return `The result of ${a} ${operator} ${b} = ${a % b}.`;
        case 5:
            return `The result of ${a} ${operator} ${b} = ${a ** b}.`;
    }
}
console.log(calculator(1, 2, '*')) // 2
console.log(calculator(10, 5, '/')) // 2
console.log(calculator(10, 5, '+')) // 15
console.log(calculator(10, 5, '%')) // 0
console.log(calculator(2, 2, '**')) // 4
console.log(calculator(6, 4, '-')) // 2