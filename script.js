// Sample questions data
const sampleQuestions = [
    {
        id: 1,
        question: "What is JavaScript?",
        options: [
            "A markup language",
            "A programming language",
            "A database system",
            "An operating system"
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "String",
            "Boolean",
            "Function",
            "Character"
        ],
        correctAnswer: 3
    },
    {
        id: 3,
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Module",
            "Digital Ordinance Model"
        ],
        correctAnswer: 0
    },
    {
        id: 4,
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "append()",
            "push()",
            "addToEnd()",
            "insert()"
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "What is the correct way to check if the variable 'x' is equal to 5 in JavaScript?",
        options: [
            "if (x = 5)",
            "if (x == 5)",
            "if (x === 5)",
            "if (x equals 5)"
        ],
        correctAnswer: 2
    },
    {
        id: 6,
        question: "Which function is used to parse a string to an integer in JavaScript?",
        options: [
            "Integer.parse()",
            "parseInt()",
            "parseInteger()",
            "Number.parseInt()"
        ],
        correctAnswer: 1
    },
    {
        id: 7,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            "The current function",
            "The parent function",
            "The object it belongs to",
            "The global window object"
        ],
        correctAnswer: 2
    },
    {
        id: 8,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseover",
            "onchange",
            "onclick",
            "onmouseclick"
        ],
        correctAnswer: 2
    },
    {
        id: 9,
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
            "create myFunction()"
        ],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "How do you write a comment in JavaScript?",
        options: [
            "<!-- This is a comment -->",
            "// This is a comment",
            "/* This is a comment */",
            "Both B and C are correct"
        ],
        correctAnswer: 3
    },
    {
        id: 11,
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = {red, green, blue}"
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "=",
            "===",
            "==",
            ":="
        ],
        correctAnswer: 0
    },
    {
        id: 13,
        question: "Which method returns the length of a string?",
        options: [
            "size()",
            "length()",
            "index()",
            "length property"
        ],
        correctAnswer: 3
    },
    {
        id: 14,
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        options: [
            "To declare a block-scoped variable",
            "To declare a constant variable",
            "To create a new function",
            "To specify a global variable"
        ],
        correctAnswer: 0
    },
    {
        id: 15,
        question: "Which method is used to remove the last element from an array?",
        options: [
            "pop()",
            "removeLast()",
            "delete()",
            "splice()"
        ],
        correctAnswer: 0
    },
    {
        id: 16,
        question: "What is a closure in JavaScript?",
        options: [
            "A way to protect variables from being accessed",
            "A function having access to the parent scope, even after the parent function has closed",
            "A method to close unused variables",
            "A technique to end JavaScript execution"
        ],
        correctAnswer: 1
    },
    {
        id: 17,
        question: "Which function is used to serialize an object into a JSON string?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.serialize()"
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: "What does the 'async' keyword do in JavaScript?",
        options: [
            "Makes a function run in the background",
            "Declares that a function will return a Promise",
            "Makes JavaScript wait for a response",
            "Creates a new thread for the function"
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        question: "What is the output of: console.log(typeof [])?",
        options: [
            "array",
            "object",
            "list",
            "undefined"
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        question: "Which of these is NOT a JavaScript framework or library?",
        options: [
            "React",
            "Angular",
            "Django",
            "Vue"
        ],
        correctAnswer: 2
    }
];

// Main Quiz Variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

// DOM Elements
const loadingElement = document.getElementById('loading');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results');
const questionNumberElement = document.getElementById('question-number');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const feedbackContainer = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const correctAnswerElement = document.getElementById('correct-answer');
const correctAnswerText = document.querySelector('#correct-answer span');
const nextButton = document.getElementById('next-button');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const restartButton = document.getElementById('restart-button');

// Shuffle function to randomize questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the quiz with 5 random questions
function initQuiz() {
    setTimeout(() => {
        const shuffledQuestions = shuffleArray([...sampleQuestions]);
        questions = shuffledQuestions.slice(0, 5); // Select first 5 randomly shuffled questions
        hideElement(loadingElement);
        showElement(quizContainer);
        quizStarted = true;
        score = 0;
        currentQuestionIndex = 0;
        scoreElement.textContent = `Score: ${score}`;
        displayQuestion();
    }, 1500);
}

// Display the current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update question number and progress bar
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Display the question text
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionButton);
    });
    
    // Hide the feedback container
    hideElement(feedbackContainer);
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    
    // Highlight the selected option
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        option.disabled = true;
        
        if (index === selectedIndex && isCorrect) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        } else if (index === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        }
    });
    
    // Update score if correct
    if (isCorrect) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    
    // Show feedback
    feedbackContainer.classList.remove('correct', 'incorrect');
    feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedbackText.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect!';
    
    if (!isCorrect) {
        showElement(correctAnswerElement);
        correctAnswerText.textContent = currentQuestion.options[currentQuestion.correctAnswer];
    } else {
        hideElement(correctAnswerElement);
    }
    
    showElement(feedbackContainer);
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show the final results screen
function showResults() {
    hideElement(quizContainer);
    showElement(resultsContainer);
    
    finalScoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
    
    // Set result message based on score
    if (score === questions.length) {
        resultMessageElement.textContent = 'Perfect score! Excellent work!';
    } else if (score >= questions.length * 0.7) {
        resultMessageElement.textContent = 'Great job!';
    } else if (score >= questions.length * 0.5) {
        resultMessageElement.textContent = 'Good effort!';
    } else {
        resultMessageElement.textContent = 'You can do better next time!';
    }
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    
    // Simulate loading new questions
    showElement(loadingElement);
    hideElement(resultsContainer);
    
    setTimeout(() => {
        // Shuffle questions order for variety
        questions = [...sampleQuestions].sort(() => Math.random() - 0.5);
        hideElement(loadingElement);
        showElement(quizContainer);
        displayQuestion();
    }, 1000);
}

// Utility functions
function showElement(element) {
    element.classList.remove('hide');
}

function hideElement(element) {
    element.classList.add('hide');
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Start the quiz
initQuiz();