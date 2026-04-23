let playerCards = [];
let dealerCards = [];

let playerSum = 0;
let dealerSum = 0;

let isAlive = false;
let isPlayerTurn = false;

const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");

const dealerCardsEl = document.getElementById("dealer-cards");
const dealerSumEl = document.getElementById("dealer-sum");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) return 10;
  if (randomNumber === 1) return 11;
  return randomNumber;
}

function startGame() {
  playerCards = [getRandomCard(), getRandomCard()];
  dealerCards = [getRandomCard(), getRandomCard()];

  playerSum = playerCards[0] + playerCards[1];
  dealerSum = dealerCards[0] + dealerCards[1];

  isAlive = true;
  isPlayerTurn = true;

  renderGame(true);
}

function renderGame(hideDealer = false) {
  // Player
  cardsEl.textContent = "Cards: " + playerCards.join(" ");
  sumEl.textContent = "Sum: " + playerSum;

  // Dealer
  if (hideDealer) {
    dealerCardsEl.textContent = "Cards: " + dealerCards[0] + " ?";
    dealerSumEl.textContent = "Sum: ?";
  } else {
    dealerCardsEl.textContent = "Cards: " + dealerCards.join(" ");
    dealerSumEl.textContent = "Sum: " + dealerSum;
  }

  if (playerSum > 21) {
    messageEl.textContent = "You busted! 😢";
    isAlive = false;
    isPlayerTurn = false;
  } else {
    messageEl.textContent = "Hit or Stand?";
  }
}

function newCard() {
  if (!isAlive || !isPlayerTurn) return;

  let card = getRandomCard();
  playerCards.push(card);
  playerSum += card;

  renderGame(true);
}

function stand() {
  isPlayerTurn = false;
  dealerTurn();
}

function dealerTurn() {
  while (dealerSum < 17) {
    let card = getRandomCard();
    dealerCards.push(card);
    dealerSum += card;
  }

  renderGame(false);
  checkWinner();
}

function checkWinner() {
  let message = "";

  if (dealerSum > 21) {
    message = "Dealer busts! You win 🎉";
  } else if (playerSum > dealerSum) {
    message = "You win 🎉";
  } else if (playerSum < dealerSum) {
    message = "You lose 😢";
  } else {
    message = "Draw 🤝";
  }

  messageEl.textContent = message;
  isAlive = false;
}
