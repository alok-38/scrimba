let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const startButtonEl = document.getElementById("start-btn");

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById("message-el");

const startGame = () => {
  if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  // 2. Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
};

startButtonEl.addEventListener("click", startGame);

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
const newCard = () => {
  messageEl.textContent = "Drawing a new card from the deck!";
};

const newButtonEl = document.getElementById('new-btn');

newButtonEl.addEventListener('click', newCard);