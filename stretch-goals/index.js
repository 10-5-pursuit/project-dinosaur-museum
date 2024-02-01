const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

const myQuestions = [
    {
        question: "What is the largest dinosaur in the given data?",
        answers: {
            a: "Tyrannosaurus Rex",
            b: "Brachiosaurus",
            c: "Stegosaurus"
        },
        correctAnswer: "b"
    },
    {
        question: "What does 'dinosaur' mean?",
        answers: {
            a: "Giant lizard",
            b: "Terrible lizard",
            c: "Ancient creature"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the smallest dinosaur in the given data?",
        answers: {
            a: "Compsognathus",
            b: "Dracorex",
            c: "Jingshanosaurus"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function resetQuiz() {
    // Clear the results
    resultsContainer.innerHTML = '';

    // Reset radio buttons and answer colors
    const answerContainers = quizContainer.querySelectorAll('.answers');
    answerContainers.forEach(container => {
        const radioButtons = container.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        container.style.color = 'inherit';
    });
}

buildQuiz();

submitButton.addEventListener('click', showResults);
resetButton.addEventListener('click', resetQuiz);
