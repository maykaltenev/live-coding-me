
let checkGrades = input => {
    let grades = 0;
    for (let i = 0; i < input.length; i++) {
        // "David 80"
        let element = input[i];
        // "['David', '80']"
        // 0 1
        let nameAndGrade = element.split(' ');
        // 600
        grades += parseInt(nameAndGrade[1]);
    }
    // 400 / 5 = 80
    let average = grades / input.length;
    console.log(`Exercise 3:`)
    switch (true) {
        case (average < 60):
            return `The average score for the class is ${Math.ceil(average)} and it's a F grade!`;
            break;
        case (average < 70):
            return (`The average score for the class is ${Math.ceil(average)} and it's a D grade!`);
            break;
        case (average < 80):
            return (`The average score for the class is ${Math.ceil(average)} and it's a C grade!`);
            break;
        case (average <= 90):
            return (`The average score for the class is ${Math.ceil(average)} and it's a B grade!`);
            break;
        case (average < 100):
            return (`The average score for the class is ${Math.ceil(average)} and it's a A grade!`);
            break;
    }
}
console.log(checkGrades(["David 80", "Vinoth 77", "Divya 88", "Ishitha 95", "Thomas 68", "Chris 99.99", "Vince 100", 'Lucia 100', 'John 100']));