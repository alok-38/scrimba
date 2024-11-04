// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Select display elements
const homeDisplayEl = document.querySelectorAll(".home-display");
const guestDisplayEl = document.querySelectorAll(".guest-display");
const resetDisplayEl = document.querySelectorAll(".display");

// Function to update displays
const updateDisplay = () => {
  homeDisplayEl.forEach((el) => {
    el.textContent = homeScore;
  });
  guestDisplayEl.forEach((el) => {
    el.textContent = guestScore;
  });
};

// Function to reset scores
const resetScores = () => {
  homeScore = 0;
  guestScore = 0;
  // Update displays after resetting scores
  updateDisplay();
  resetDisplayEl.forEach((el) => {
    // Reset the display to 0
    el.textContent = "0";
  });
};

// Select buttons and add event listeners
document.querySelector(".home-one").addEventListener("click", () => {
  homeScore += 1;
  updateDisplay();
});

document.querySelector(".home-two").addEventListener("click", () => {
  homeScore += 2;
  updateDisplay();
});

document.querySelector(".home-three").addEventListener("click", () => {
  homeScore += 3;
  updateDisplay();
});

document.querySelector(".guest-one").addEventListener("click", () => {
  guestScore += 1;
  updateDisplay();
});

document.querySelector(".guest-two").addEventListener("click", () => {
  guestScore += 2;
  updateDisplay();
});

document.querySelector(".guest-three").addEventListener("click", () => {
  guestScore += 3;
  updateDisplay();
});

// Add event listener for reset button
document.querySelector(".reset").addEventListener("click", resetScores);
