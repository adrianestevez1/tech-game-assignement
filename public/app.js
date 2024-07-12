let currentIndex = 0;
let technologies = [];
let isNameDisplayed = false;
let score = 0;

const techImage = document.getElementById('tech-image');
const techName = document.getElementById('tech-name');
const nextBtn = document.getElementById('next-btn');
const userGuess = document.getElementById('user-guess');

nextBtn.addEventListener('click', async () => {

    if (currentIndex === technologies.length - 1) {
        alert(`Game Over! Refresh the page to play again. Your final score is ${score}`);
    }

    const guess = userGuess.value.trim() || '';
    if (isNameDisplayed) {
        currentIndex = (currentIndex + 1) % technologies.length;
        displayTechImage();
        userGuess.disabled = false;
        techName.style.display = 'none';
    } else {
        await fetchTechName(currentIndex, guess);
    }
    isNameDisplayed = !isNameDisplayed;
});

function displayTechImage() {
    const tech = technologies[currentIndex];
    techImage.src = tech.image;
    techName.style.display = 'none';
}

function displayTechName(name) {
    techName.textContent = name;
    techName.style.display = 'block';
}

async function fetchTechName(index, guess) {
    await fetch(`/tech-name/${index}`)
        .then(response => response.json())
        .then(data => {
            displayTechName(data.name);
            handleGuess(guess, data.name);
        })
        .catch(error => {
            console.error('Error fetching tech name:', error);
        });
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetch('/techs')
        .then(response => response.json())
        .then(data => {
            technologies = data;
            displayTechImage(); // Display the first image initially
        });
});

// Function to update the score display
function updateScoreUI() {
    document.getElementById('score').textContent = `Score: ${score}`;
    userGuess.value = '';
    userGuess.disabled = true;
}

// Function to handle user guesses
function handleGuess(userGuessText, correctAnswer) {
    if (userGuessText.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        alert('Correct guess!');
    } else {
        alert('Wrong guess :(');
    }
    updateScoreUI();
}
