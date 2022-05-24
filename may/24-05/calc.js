
class Calculator {
    constructor() {
        this.pi = Math.PI;
        this.e = Math.E;
    }
    ratio(x, y, width) {
        let ratio = y / x;
        let height = width * ratio;
        return height;
    }
    //methods
    add(x, y) {
        return x + y;
    }
    percentage(x, y) {
        return `${(x / 100) * y}%`;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            return `Error not able to dived by 0`;
        } else {
            return x / y;
        }
    }
    modulation(x, y) {
        if (y === 0) {
            return `Error not able to module by 0`;
        } else {
            return x % y;
        }
    }
    elevate(x, y) {
        return Math.pow(x, y);
    }
    sqrt(x) {
        return Math.sqrt(x);
    }
}

let calculate = new Calculator();
console.log(`Ratio:`, calculate.ratio(5, 10, 15))  //return height is --- on ratio x:y

console.log(`Percentage!`, calculate.percentage(50, 100)) // return percentage of x in y.

console.log(`Add:`, calculate.add(50, 100)) // Returns the sum of x added to y.

console.log(`Subtracted:`, calculate.subtract(100, 50)) // Returns the differente of y subtracted to x.

console.log('Multiply:', calculate.multiply(2, 2)) // Returns the product of x multiplied by y.

console.log('Divide:', calculate.divide(4, 2)) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

console.log('Modulation', calculate.modulation(150, 8)) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

console.log('Power of:', calculate.elevate(2, 3)) // Returns the power of x elevated to y.

console.log('Square of:', calculate.sqrt(2)) // Returns the square root of x.

console.log('Pi', calculate.pi);
console.log('Eulners number', calculate.e);