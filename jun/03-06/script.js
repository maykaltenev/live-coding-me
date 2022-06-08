const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questionText = document.getElementById('question')

const a1 = document.getElementById('a_text');
const b1 = document.getElementById('b_text');
const c1 = document.getElementById('c_text');
const d1 = document.getElementById('d_text');
const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');


const button = document.getElementById('submit')

// button.addEventListener('click', () => console.log('im clicked'))
let index = 0; // index to be used for array quiz data
let correct = 0;

loadData() // load for the first time questions and answers
// Loads question text and answers text
function loadData() {
    questionText.innerText = quizData[index].question;
    a1.innerText = quizData[index].a;
    b1.innerText = quizData[index].b;
    c1.innerText = quizData[index].c;
    d1.innerText = quizData[index].d;
}
function deselect() {
    answers.forEach(item =>
        item.checked = 0
    )
}

function checkAnswer(quizData) {
    const inputAnswer = whatTheUserAnswered();
    console.log('check', inputAnswer);
    console.log(quizData[index].correct)
    if (inputAnswer === quizData[index].correct) {
        console.log('update',);
        correct++
    }
}

button.onclick = () => {
    if (!answers[0].checked &&
        !answers[1].checked &&
        !answers[2].checked &&
        !answers[3].checked
    ) return alert('Yo, choose one')

    index++;
    console.log('onclick: index=', index)

    if (index < quizData.length) {
        checkAnswer(quizData)
        loadData(index)
        deselect()
    } else {
        quiz.innerHTML = `
                <h2>You answered ${correct}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button> `

    }
}
function whatTheUserAnswered() {
    let answer = null
    answers.forEach((item) => {
        if (item.checked) {
            return answer = item.id
        }
    })
    return answer
}


