let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const startButtonEl = document.querySelector('button:first-of-type');
const sumEl = document.getElementById('sum');
const messageEl = document.getElementById('message-el');
const sumEL = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

const startGame = () => {
    renderGame();
}

const renderGame = () => {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
    sumEL.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false
    }
    messageEl.textContent = message;
}

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

startButtonEl.addEventListener('click', startGame);

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
const newCard = () => {
    console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and hard code its value to a number (2-11)

    // 2. Add the new card to the sum variable

    // 3. Call startGame()
    let card = 5;
    sumEL.textContent = `Sum: ${sum + card}`;
}

const newGameBtnEl = document.querySelector('button:last-of-type');

newGameBtnEl.addEventListener('click', newCard);