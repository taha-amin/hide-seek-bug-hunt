// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const boulderButton = document.getElementById('boulder-button');
const treeButton = document.getElementById('tree-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total-games');
const winsEl = document.getElementById('wins');

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('shed', correctSpot);  
});

treeButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('tree', correctSpot);  
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('boulder', correctSpot);  
});

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder',
];

function getRandomItem(arr) {
    const index = Math.random();

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    shedContainer.classList.remove['face'];
    treeContainer.classList.remove['face'];
    boulderContainer.classList.remove['face'];

    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;

}

/* function setStyles() {
    shedContainer.classList.remove['face'];
    treeContainer.classList.remove['face'];
    boulderContainer.classList.remove['face'];
} */
