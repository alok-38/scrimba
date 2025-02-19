let player = {
    name: "Alok",
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isalive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const startBtn = document.getElementById("start-btn");
const newBtn = document.getElementById("new-btn");
const playerEl = document.getElementById("player-el");

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    const card = Math.floor(Math.random() * 13) + 1; // Random number between 1 and 13

    if (card === 1) {
        return 11; // Ace is worth 11
    } else if (card >= 11 && card <= 13) {
        return 10; // Jack, Queen, King are worth 10
    } else {
        return card; // All other cards are worth their face value (2-10)
    }
}

function startGame() {
    isalive = true;
    sum = 0;
    cards = [];
    renderGame();
    renderPlayerInfo(); // Display player information on start
    startBtn.style.display = "none"; // Hide START GAME button
    newBtn.style.display = "inline"; // Show NEW CARD button
}

function renderPlayerInfo() {
    playerEl.textContent = `Player: ${player.name} | Chips: ${player.chips}`;
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
        player.chips += 50; // Example: Increase chips for Blackjack win
        renderPlayerInfo(); // Update chips display
        gameOver(); // End the game after winning
    } else {
        message = "You're out of the game!";
        isalive = false;
        player.chips -= 20; // Example: Deduct chips for loss
        renderPlayerInfo(); // Update chips display
        gameOver(); // End the game after losing
    }
    messageEl.textContent = message;
}

function newCard() {
    // Only allow new card if the player is still in the game and hasn't won Blackjack
    if (isalive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function gameOver() {
    // Hide the NEW CARD button and show the START GAME button again
    newBtn.style.display = "none";
    startBtn.style.display = "inline"; // Show START GAME button again for a new round
}

newBtn.addEventListener('click', newCard);
startBtn.addEventListener('click', startGame);
