let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isalive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const startBtn = document.getElementById("start-btn");
const newBtn = document.getElementById("new-btn");

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isalive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 6;
    sum += card;
    cards.push(card);
    renderGame();
}

newBtn.addEventListener('click', newCard);
startBtn.addEventListener('click', startGame);