<<<<<<< HEAD
let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById('message-el');
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("p:nth-child(4)");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("p:nth-child(3)");


function startGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = `Sum: ${sum}`;
=======
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById('message-el');

function startGame() {
>>>>>>> 060a15a202359a87a4cc664a330c3b9ea82d590c
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
<<<<<<< HEAD
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
=======
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
>>>>>>> 060a15a202359a87a4cc664a330c3b9ea82d590c
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}

<<<<<<< HEAD
const startButtonEl = document.querySelector('button');
const newCardButtonEl = document.getElementById('new-card-btn');

startButtonEl.addEventListener('click', startGame);

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 5;
    // 2. Add the new card to the sum variable
    sum += card;
    // 3. Call startGame()
    startGame();
}

newCardButtonEl.addEventListener('click', newCard);
=======
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', startGame);
>>>>>>> 060a15a202359a87a4cc664a330c3b9ea82d590c
