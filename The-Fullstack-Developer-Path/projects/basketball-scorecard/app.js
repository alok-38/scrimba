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

let initialScore = 0;

const increaseHomeByOne = () => {
    homeScoreEl.textContent = ++initialScore;
}

plusOneHomeBtn.addEventListener('click', increaseHomeByOne);

const increaseHomeByTwo = () => {
    initialScore += 2;
    homeScoreEl.textContent = initialScore;
}

plusTwoHomeBtn.addEventListener('click', increaseHomeByTwo);

const increaseByThree = () => {
    initialScore += 3;
    homeScoreEl.textContent = initialScore;
}

plusThreeHomeBtn.addEventListener('click', increaseByThree);

const increaseGuestByOne = () => {
    guestScoreEl.textContent = ++initialScore;
}

plusOneGuestBtn.addEventListener('click', increaseGuestByOne);

const increaseGuestByTwo = () => {
    initialScore += 2;
    guestScoreEl.textContent = initialScore;
}

plusTwoGuestBtn.addEventListener('click', increaseGuestByTwo);

const increaseGuestByThree = () => {
    initialScore += 3;
    guestScoreEl.textContent = initialScore;
}

plusThreeGuestBtn.addEventListener('click', increaseGuestByThree);

// Reset
const newGame = () => {
    initialScore = 0;
    homeScoreEl.textContent = initialScore;
    guestScoreEl.textContent = initialScore;
    periodEl.textContent = initialScore;
    foulsEl.textContent = initialScore;
}

newGameBtn.addEventListener('click', newGame);


const nextPeriodBtn = document.getElementById('next-period');
// Period count
let periodCount = 1;

const nextPeriod = () => {
    if (periodCount < 4) {
        periodCount++;
    } else {
        periodCount = 1;
    }
    periodEl.textContent = periodCount;
}

nextPeriodBtn.addEventListener('click', nextPeriod);

// foul count
let foulCount = 0;

const increaseFouls = () => {
    foulCount++;
    foulsEl.textContent = foulCount;
}

const foulCountBtn = document.getElementById('foul-count');

foulCountBtn.addEventListener('click', increaseFouls);