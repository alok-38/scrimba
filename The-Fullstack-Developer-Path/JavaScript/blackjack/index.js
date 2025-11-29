// Always returns 5 for now (you’ll randomize later)
const getRandomCard = () => {
    const randomNum = Math.floor(Math.random() * 13) + 1;

    if (randomNum === 1) {
        return 11; // Ace
    } else if (randomNum > 10) {
        return 10; // J, Q, K
    } else {
        return randomNum; // 2–10
    }
};

// 2. Create the player object. Give it two keys, name and chips, and set their values
const player = {
    name: "Alok",
    chips: 5
}
// Game state variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// DOM elements
const startButtonEl = document.querySelector('button:first-of-type');
const newGameBtnEl = document.querySelector('button:last-of-type');
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');

// 4. Render the player's name and chips in playerEl
playerEl.textContent = `${player.name}: ${player.chips}`;

// Start Game = reset everything and deal two cards
const startGame = () => {
    hasBlackJack = false;
    isAlive = true;

    const firstCard = getRandomCard();
    const secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    newGameBtnEl.disabled = false; // re-enable button

    renderGame();
};

const renderGame = () => {
    cardsEl.textContent = `Cards: ${cards.join(" ")}`;
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
        newGameBtnEl.disabled = true; // Disable new card when bust
    }

    messageEl.textContent = message;
};

// Draw New Card
const newCard = () => {
    if (!isAlive || hasBlackJack) return; // prevent cheating

    const card = getRandomCard();
    cards.push(card);
    sum += card;

    renderGame();
};

// Button listeners
startButtonEl.addEventListener('click', startGame);
newGameBtnEl.addEventListener('click', newCard);
