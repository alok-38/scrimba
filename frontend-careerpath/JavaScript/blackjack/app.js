let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  updateDisplay();
  setMessage();
}

function updateDisplay() {
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  messageEl.textContent = message;
}

function setMessage() {
  if (sum <= 20) {
    message = "Do you want to pick another card?";
  } else if (sum === 21) {
    message = "Wohoo! Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
}

function newCard() {
  const card = Math.floor(Math.random() * 10) + 2;
  sum += card;
  messageEl.textContent = "Drawing a new card from the deck!";
  renderGame();
}
