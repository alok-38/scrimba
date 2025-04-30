const homeDisplayEl = document.querySelector('.home-display');
const guestDisplayEl = document.querySelector('.guest-display');

const homeBtnOne = document.getElementById('home_btn_1');
const homeBtnTwo = document.getElementById('home_btn_2');
const homeBtnThree = document.getElementById('home_btn_3');

const guestBtnOne = document.getElementById('guest_btn_1');
const guestBtnTwo = document.getElementById('guest_btn_2');
const guestBtnThree = document.getElementById('guest_btn_3');

let homeScore = 0;
let guestScore = 0;

const incrementHome = (points) => {
    homeScore += points;
    homeDisplayEl.textContent = homeScore;
}

const incrementGuest = (points) => {
    guestScore += points;
    guestDisplayEl.textContent = guestScore;
}

homeBtnOne.addEventListener('click', () => incrementHome(1));
homeBtnTwo.addEventListener('click', () => incrementHome(2));
homeBtnThree.addEventListener('click', () => incrementHome(3));

guestBtnOne.addEventListener('click', () => incrementGuest(1));
guestBtnTwo.addEventListener('click', () => incrementGuest(2));
guestBtnThree.addEventListener('click', () => incrementGuest(3));
