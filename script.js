const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", checkAnswer);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.innerText;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = "Wrong!";
    }
    disableOptions();
}

function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.disabled = true;
    });
    nextButton.disabled = false;
}

function nextQuestion() {
    resultElement.innerText = "";
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = `You scored ${score} out of ${quizData.length}`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
}

loadQuestion();
