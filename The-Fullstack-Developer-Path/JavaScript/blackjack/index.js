let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");

function startGame() {
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 5; // Hardcoded for now
    sum += card;
    startGame();
}