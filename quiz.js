const quizData = [
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Saturn"
    },
    {
        question: "Which is the hottest planet?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Venus"
    },
    {
        question: "Which planet is known for its prominent ring system?",
        options: ["Neptune", "Saturn", "Uranus", "Jupiter"],
        answer: "Saturn"
    },
    {
        question: "What is the name of the first satellite sent into space?",
        options: ["Voyager 1", "Sputnik 1", "Apollo 11", "Hubble"],
        answer: "Sputnik 1"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Neptune", "Earth", "Jupiter"],
        answer: "Jupiter"
    },
    {
        question: "Which planet is sometimes called Earth's twin?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the name of NASA’s most famous space telescope?",
        options: ["Hubble Space Telescope", "James Webb Telescope", "Chandra Observatory", "Kepler Space Telescope"],
        answer: "Hubble Space Telescope"
    },
    {
        question: "Which dwarf planet is located in the asteroid belt?",
        options: ["Pluto", "Ceres", "Eris", "Haumea"],
        answer: "Ceres"
    },
    {
        question: "Which planet has a storm called the Great Red Spot?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "Which galaxy is Earth located in?",
        options: ["Andromeda Galaxy", "Whirlpool Galaxy", "Milky Way Galaxy", "Sombrero Galaxy"],
        answer: "Milky Way Galaxy"
    },
    {
        question: "What is the second smallest planet in the solar system?",
        options: ["Mars", "Mercury", "Venus", "Pluto"],
        answer: "Mars"
    },
    {
        question: "Which planet rotates on its side compared to most other planets?",
        options: ["Neptune", "Uranus", "Saturn", "Earth"],
        answer: "Uranus"
    },
    {
        question: "Which planet has the fastest orbit around the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the term for a star that suddenly increases greatly in brightness?",
        options: ["Nebula", "Nova", "Asteroid", "Comet"],
        answer: "Nova"
    },
    {
        question: "Which space mission first landed humans on the Moon?",
        options: ["Apollo 11", "Apollo 13", "Gemini 4", "Voyager 2"],
        answer: "Apollo 11"
    },
    {
        question: "Which planet has the longest day (rotation period) in the solar system?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "Venus"
    },
    {
        question: "What is the largest volcano in the solar system?",
        options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Vesuvius"],
        answer: "Olympus Mons"
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Betelgeuse", "Sirius", "The Sun"],
        answer: "The Sun"
    },
    {
        question: "What is the name of the boundary marking the end of Earth's atmosphere and the beginning of space?",
        options: ["Van Allen Belt", "Stratosphere", "Kármán Line", "Thermosphere"],
        answer: "Kármán Line"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').innerText = q.question;
    document.getElementById('option1').innerText = q.options[0];
    document.getElementById('option2').innerText = q.options[1];
    document.getElementById('option3').innerText = q.options[2];
    document.getElementById('option4').innerText = q.options[3];

    // Enable buttons in case they were previously disabled
    document.querySelectorAll('#options button').forEach(btn => btn.disabled = false);

    // Hide the result popup and next button initially
    const popup = document.getElementById('result-popup');
    popup.classList.add('hidden');
    const nextButton = document.getElementById('next-button');
    nextButton.classList.add('hidden');
}

function checkAnswer(selectedOptionId) {
    const selectedText = document.getElementById(selectedOptionId).innerText;
    const correctAnswer = quizData[currentQuestion].answer;
    const popup = document.getElementById('result-popup');
    const resultMessage = document.getElementById('result-message');
    const nextButton = document.getElementById('next-button');

    // Show result and disable buttons
    if (selectedText === correctAnswer) {
        score++;
        resultMessage.innerHTML = `Correct! ✅<br><br>The correct answer is: <strong>${correctAnswer}</strong>`;
        popup.className = "result-popup correct";
    } else {
        resultMessage.innerHTML = `Wrong! ❌<br><br>The correct answer is: <strong>${correctAnswer}</strong>`;
        popup.className = "result-popup wrong";
    }

    // Disable buttons after answering
    document.querySelectorAll('#options button').forEach(btn => btn.disabled = true);

    // Show the result popup and the next button
    popup.classList.remove('hidden');
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <h2>You scored ${score} out of ${quizData.length}!</h2>
        <button onclick="restartQuiz()" id="restart-button">Restart Quiz</button>
    `;

    // Hide the result popup
    const popup = document.getElementById('result-popup');
    popup.classList.add('hidden');
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

window.onload = function() {
    document.getElementById('option1').addEventListener('click', () => checkAnswer('option1'));
    document.getElementById('option2').addEventListener('click', () => checkAnswer('option2'));
    document.getElementById('option3').addEventListener('click', () => checkAnswer('option3'));
    document.getElementById('option4').addEventListener('click', () => checkAnswer('option4'));
    
    loadQuestion(); // Start the quiz
};
