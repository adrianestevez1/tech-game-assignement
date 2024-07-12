let currentIndex = 0;
let technologies = [];
let isNameDisplayed = false;

const techImage = document.getElementById('tech-image');
const techName = document.getElementById('tech-name');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
    console.log('clicked', technologies, isNameDisplayed, currentIndex);
    if (isNameDisplayed) {
        currentIndex = (currentIndex + 1) % technologies.length;
        displayTechImage();
        techName.style.display = 'none';
    } else {
        fetchTechName(currentIndex);
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

function fetchTechName(index) {
    fetch(`/tech-name/${index}`)
        .then(response => response.json())
        .then(data => {
            displayTechName(data.name);
        })
        .catch(error => {
            console.error('Error fetching tech name:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/techs')
        .then(response => response.json())
        .then(data => {
            console.log('data', data);
            technologies = data;
            displayTechImage(); // Display the first image initially
        });
});