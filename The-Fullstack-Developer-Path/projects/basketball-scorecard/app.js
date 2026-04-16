let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

const newBtnEl = document.querySelector(".new-btn");

// Initialize scores
let homeCount = 0;
let guestCount = 0;

// Show initial score
homeEl.innerText = 0;
guestEl.innerText = 0;

// New Game
const newGame = () => {
  homeCount = 0;
  guestCount = 0;
  homeEl.innerText = 0;
  guestEl.innerText = 0;
};

newBtnEl.addEventListener("click", newGame);

// Home buttons
document.getElementById("home-plus1").addEventListener("click", () => {
  homeCount += 1;
  homeEl.innerText = homeCount;
});

document.getElementById("home-plus2").addEventListener("click", () => {
  homeCount += 2;
  homeEl.innerText = homeCount;
});

document.getElementById("home-plus3").addEventListener("click", () => {
  homeCount += 3;
  homeEl.innerText = homeCount;
});

// Guest buttons
document.getElementById("guest-plus1").addEventListener("click", () => {
  guestCount += 1;
  guestEl.innerText = guestCount;
});

document.getElementById("guest-plus2").addEventListener("click", () => {
  guestCount += 2;
  guestEl.innerText = guestCount;
});

document.getElementById("guest-plus3").addEventListener("click", () => {
  guestCount += 3;
  guestEl.innerText = guestCount;
});
