let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// Reference to the paragraph elements
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let sumEl = document.getElementById('sum-el');

// 1. Create a variable called isAlive and assign it to true
let isAlive = true;

// 1. Declare a variable called message and assign its value to an empty string
let message = "";

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    // Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = `Sum: ${sum}`;

    // Render the cards drawn so far on the page
    cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;

    if (sum < 21) {
        message = "Do you want to draw another card?";
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = "BlackJack!";
        messageEl.textContent = message;
        console.log("Is the player alive? " + isAlive); // Player is still alive if they have a Blackjack
        hasBlackJack = true;
    } else {
        message = "You are out of the game.";
        messageEl.textContent = message;
        console.log(message);
        // Flip its value to false in the appropriate code block 
        isAlive = false;
        console.log("Is the player alive? " + isAlive); // Player is out of the game, isAlive should be false
    }
}

function newGame() {
    isAlive = true;
    hasBlackJack = false;

    // Clear the messages and render the initial state
    messageEl.textContent = "Drawing a new card from the deck!";
    cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;
}

// Event listeners for buttons
const startGameBtn = document.getElementById('start-btn');
const newGameBtn = document.getElementById('new-btn');

// Event listener to start the game
startGameBtn.addEventListener('click', startGame);

// Event listener to start a new game
newGameBtn.addEventListener('click', newGame);
