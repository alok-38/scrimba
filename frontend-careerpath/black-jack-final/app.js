let cards = [];
let sum = 0;
let hasBlackJack = false;

// References to the elements
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let sumEl = document.getElementById('sum-el');

// Game status variables
let isAlive = true;
let message = "";

// Function to generate a random card value (2-11)
function generateRandomCard() {
    let cardValue = Math.floor(Math.random() * 13) + 1; // Random number between 1 and 13

    // Map the values 11, 12, 13 to 10 (face cards)
    if (cardValue > 10) {
        return 10;
    } else if (cardValue === 1) {
        return 11; // Ace can be 11
    } else {
        return cardValue;
    }
}

// Start game function
function startGame() {
    // Clear previous cards and sum
    cards = [];
    sum = 0;

    // Draw two random cards
    cards.push(generateRandomCard());
    cards.push(generateRandomCard());

    // Calculate sum
    sum = cards[0] + cards[1];
    renderGame();
}

// Render game function
function renderGame() {
    // Update the sum
    sumEl.textContent = `Sum: ${sum}`;

    // Use a for loop to render out all the cards in the cards array
    let cardsText = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsText += cards[i];
        if (i < cards.length - 1) {
            cardsText += ", "; // Add a comma if not the last card
        }
    }
    cardsEl.textContent = cardsText;

    // Check if the player is still alive and update message
    if (sum < 21) {
        message = "Do you want to draw another card?";
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = "BlackJack!";
        messageEl.textContent = message;
        hasBlackJack = true;
    } else {
        message = "You are out of the game.";
        messageEl.textContent = message;
        isAlive = false;
    }
}

// Function to draw a new card
function drawNewCard() {
    if (isAlive && !hasBlackJack) {
        // Draw a new card
        let card = generateRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

// Function for a new game
function newGame() {
    isAlive = true;
    hasBlackJack = false;

    // Reset the game variables
    cards = [];
    sum = 0;

    // Draw two new cards
    cards.push(generateRandomCard());
    cards.push(generateRandomCard());

    // Render the initial state
    messageEl.textContent = "Drawing a new card from the deck!";
    cardsEl.textContent = `Cards: ${cards.join(", ")}`;
    sumEl.textContent = `Sum: ${sum}`;
}

// Event listeners for buttons
const startGameBtn = document.getElementById('start-btn');
const newGameBtn = document.getElementById('new-btn');
const drawCardBtn = document.getElementById('draw-btn');

// Start the game when the start button is clicked
startGameBtn.addEventListener('click', startGame);

// Start a new game when the new game button is clicked
newGameBtn.addEventListener('click', newGame);

// Draw a new card when the draw card button is clicked
drawCardBtn.addEventListener('click', drawNewCard);
