//////////////////////////////
// DOM ELEMENTS
//////////////////////////////

const homeScoreEl = document.getElementById('homeScore');
const guestScoreEl = document.getElementById('guestScore');

const plusOneHomeBtn = document.getElementById('plusOneHome');
const plusTwoHomeBtn = document.getElementById('plusTwoHome');
const plusThreeHomeBtn = document.getElementById('plusThreeHome');

const plusOneGuestBtn = document.getElementById('plusOneGuest');
const plusTwoGuestBtn = document.getElementById('plusTwoGuest');
const plusThreeGuestBtn = document.getElementById('plusThreeGuest');

const periodEl = document.getElementById('period');
const foulsEl = document.getElementById('fouls');

const timerEl = document.getElementById('timer');
const newGameBtn = document.getElementById('newGame');

const nextPeriodBtn = document.getElementById('next-period');
const foulCountBtn = document.getElementById('foul-count');


//////////////////////////////
// SCORES — independent
//////////////////////////////

let homeScore = 0;
let guestScore = 0;

function updateHomeScore(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
    startTimerOnce();
    displayLead();
}

function updateGuestScore(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
    startTimerOnce();
    displayLead();
}

// Home
plusOneHomeBtn.addEventListener('click', () => updateHomeScore(1));
plusTwoHomeBtn.addEventListener('click', () => updateHomeScore(2));
plusThreeHomeBtn.addEventListener('click', () => updateHomeScore(3));

// Guest
plusOneGuestBtn.addEventListener('click', () => updateGuestScore(1));
plusTwoGuestBtn.addEventListener('click', () => updateGuestScore(2));
plusThreeGuestBtn.addEventListener('click', () => updateGuestScore(3));


//////////////////////////////
// PERIOD COUNT
//////////////////////////////

let periodCount = 0;
periodEl.textContent = periodCount;

nextPeriodBtn.addEventListener('click', () => {
    periodCount++;
    periodEl.textContent = periodCount;
});


//////////////////////////////
// FOULS
//////////////////////////////

let foulCount = 0;
foulsEl.textContent = foulCount;

foulCountBtn.addEventListener('click', () => {
    foulCount++;
    foulsEl.textContent = foulCount;
});


//////////////////////////////
// TIMER — starts only on FIRST score
//////////////////////////////

let timerId = null;
let seconds = 0;

function updateTimerDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    timerEl.textContent =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimerOnce() {
    if (timerId !== null) return; // already running

    timerId = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}


//////////////////////////////
// NEW GAME — resets EVERYTHING to 0
//////////////////////////////

newGameBtn.addEventListener('click', () => {

    // Stop and reset timer
    clearInterval(timerId);
    timerId = null;
    seconds = 0;
    updateTimerDisplay(); // 00:00

    // Reset scores
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;

    // Reset fouls
    foulCount = 0;
    foulsEl.textContent = 0;

    // Reset period
    periodCount = 0;
    periodEl.textContent = 0;

    // Reset Leads
    h1El.textContent = `LEAD: ${homeScore}`;
});

const h1El = document.querySelector('h1');
// Display Lead score
function displayLead() {
    if (homeScore > guestScore) {
        h1El.textContent = `HOME: ${homeScore}`;
    } else if (homeScore === guestScore) {
        h1El.textContent = `TIE`;
    } else {
        h1El.textContent = `GUEST: ${guestScore}`;
    }
}

