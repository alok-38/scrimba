const homeDisplayEl = document.querySelector('.home-display');
const guestDisplayEl = document.querySelector('.guest-display');

const homeBtnOne = document.getElementById('home_btn_1');
const homeBtnTwo = document.getElementById('home_btn_2');
const homeBtnThree = document.getElementById('home_btn_3');

const guestBtnOne = document.getElementById('guest_btn_1');
const guestBtnTwo = document.getElementById('guest_btn_2');
const guestBtnThree = document.getElementById('guest_btn_3');

const resetBtn = document.getElementById('reset');

let homeScore = 0;
let guestScore = 0;

const incrementHome = (points) => {
    homeScore += points;
    homeDisplayEl.textContent = homeScore;
    highlightTheLeader();
}

const incrementGuest = (points) => {
    guestScore += points;
    guestDisplayEl.textContent = guestScore;
    highlightTheLeader();
}

homeBtnOne.addEventListener('click', () => incrementHome(1));
homeBtnTwo.addEventListener('click', () => incrementHome(2));
homeBtnThree.addEventListener('click', () => incrementHome(3));

guestBtnOne.addEventListener('click', () => incrementGuest(1));
guestBtnTwo.addEventListener('click', () => incrementGuest(2));
guestBtnThree.addEventListener('click', () => incrementGuest(3));

const newGame = () => {
    homeScore = 0;
    guestScore = 0;
    homeDisplayEl.textContent = homeScore;
    guestDisplayEl.textContent = guestScore;
    highlightTheLeader();
}

resetBtn.addEventListener('click', newGame);

// Highlighting the leader
const highlightTheLeader = () => {
    if (homeScore > guestScore) {
        homeDisplayEl.classList.add('leader');
        guestDisplayEl.classList.remove('leader');
    } else if (guestScore > homeScore) {
        guestDisplayEl.classList.add('leader');
        homeDisplayEl.classList.remove('leader');
    } else {
        homeDisplayEl.classList.remove('leader');
        guestDisplayEl.classList.remove('leader');
    }
};