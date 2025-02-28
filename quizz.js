// Define the quiz questions and answers
const questions = [
    {
        question: 'Which planet in our solar system is known as the "Red Planet"?',
        answers: ['Pluto', 'Earth', 'Mars','Jupiter'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the capital of France?',
        answers: ['Madrid', 'Berlin','Paris','London'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['Michelangelo', 'Raphael', 'Donatello','Leonardo da Vinci'],
        correctAnswer: 'Leonardo da Vinci'
    },
    {
       question:'In what year did the first successful flight of the Wright brothers airplane take place?',
       answers:['1903','1908','1910','1920'],
       correctAnswer:'1903'
    }
];

// Get quiz elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

// Initialize quiz
let currentQuestion = 0;
let score = 0;
showQuestion();

// Show current question
function showQuestion() {
    // Get current question
    const question = questions[currentQuestion];
    // Set question text
    questionElement.textContent = question.question;
    // Clear previous answers
    answersElement.innerHTML = '';
    
    // Add answer options
    question.answers.forEach(answer => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = answer;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(answer));
        answersElement.appendChild(label);
    });
}

// Handle submit button click
submitButton.addEventListener('click', function() {
    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Check if an answer is selected
    if (!selectedAnswer) {
        alert('Please select an answer before proceeding to the next question.');
        return;
    }

    // Check if answer is correct and update score
    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
        score += 2;
    }

    // Move to next question
    currentQuestion++;

    // Show next question or end quiz if all questions have been answered
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

// End quiz and show score
function endQuiz() {
    questionElement.textContent = ''; // Clear question text
    answersElement.innerHTML = ''; // Clear answer options
    submitButton.style.display = 'none'; // Hide submit button

    scoreElement.textContent = `You scored ${score} out of ${questions.length * 2}`;

    if (score >= (questions.length * 2) / 2) {
        scoreElement.textContent = `Congratulations! You have cleared the quiz.\nYou scored ${score} out of ${questions.length * 2}`;
    } else {
        scoreElement.textContent = `Oops! You failed the quiz.\nYou scored ${score} out of ${questions.length * 2}`;
    }
}
