// Select the buttons for Home and Guest team scores
const plusOneHomeBtn = document.querySelector('.home-one');
const plusTwoHomeBtn = document.querySelector('.home-two');
const plusThreeHomeBtn = document.querySelector('.home-three');

const plusOneGuestBtn = document.querySelector('.guest-one');
const plusTwoGuestBtn = document.querySelector('.guest-two');
const plusThreeGuestBtn = document.querySelector('.guest-three');

const newBtn = document.querySelector('.new-game');

// Separate score variables for home and guest
let homeScore = 0;
let guestScore = 0;

// Home team score update functions
const plusOneHome = () => {
    homeScore += 1;
    updateHomeScore();
    startTimer();
};

const plusTwoHome = () => {
    homeScore += 2;
    updateHomeScore();
    startTimer();
};

const plusThreeHome = () => {
    homeScore += 3;
    updateHomeScore();
    startTimer();
};

// Guest team score update functions
const plusOneGuest = () => {
    guestScore += 1;
    updateGuestScore();
    startTimer();
};

const plusTwoGuest = () => {
    guestScore += 2;
    updateGuestScore();
    startTimer();
};

const plusThreeGuest = () => {
    guestScore += 3;
    updateGuestScore();
    startTimer();
};

// Update the score displays for Home and Guest independently
const updateHomeScore = () => {
    document.querySelector('.display-home').textContent = homeScore;
};

const updateGuestScore = () => {
    document.querySelector('.display-guest').textContent = guestScore;
};

// Timer function
let seconds = 0;
let timerInterval;  // Store the interval ID so we can clear it later
const timerDisplay = document.querySelector('.display-timer');

const startTimer = () => {
    if (!timerInterval) {  // Ensure that the timer doesn't run multiple intervals
        timerInterval = setInterval(() => {
            seconds++;
            timerDisplay.textContent = seconds;
        }, 1000);
    }
};

const stopTimer = () => {
    clearInterval(timerInterval); // Clear the interval to stop the timer
    timerInterval = null; // Reset the interval ID
};

// Event listeners for Home team buttons
plusOneHomeBtn.addEventListener('click', plusOneHome);
plusTwoHomeBtn.addEventListener('click', plusTwoHome);
plusThreeHomeBtn.addEventListener('click', plusThreeHome);

// Event listeners for Guest team buttons
plusOneGuestBtn.addEventListener('click', plusOneGuest);
plusTwoGuestBtn.addEventListener('click', plusTwoGuest);
plusThreeGuestBtn.addEventListener('click', plusThreeGuest);

// New game function to reset both scores and stop the timer
const newGame = () => {
    homeScore = 0;
    guestScore = 0;
    updateHomeScore();
    updateGuestScore();
    stopTimer();  // Stop the timer when the game is reset
    seconds = 0;  // Reset seconds to 0
    timerDisplay.textContent = seconds; // Update the display immediately
};

newBtn.addEventListener('click', newGame);
