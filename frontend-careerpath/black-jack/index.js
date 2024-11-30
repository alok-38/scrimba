let firstCard = 10;
let secondCard = 4;
let cards = [];  // Initialize the cards array as empty
let sum = 0;     // Initialize sum as 0
let hasBlackJack = false;
let isAlive = true;
let message = "";

// Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById('message-el');

// Store the sum in a variable called sumEl
let sumEl = document.getElementById('sum-el');

// Store the cards in a variable called cardsEl
let cardsEl = document.getElementById('cards-el');

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
    // Reset values at the start of a new game
    cards = [firstCard, secondCard];  // Set cards to the initial two cards
    sum = firstCard + secondCard;     // Set sum to the sum of the initial two cards
    isAlive = true;                   // Reset the game state to "alive"
    hasBlackJack = false;             // Reset Blackjack state
    renderGame();
}

// Function to start the game
const renderGame = () => {
    // Render the sum on the page using this format -> "Sum 14"
    sumEl.textContent = `Sum: ${sum}`;

    // Render the cards -> Cards: 10 4
    cardsEl.textContent = "Cards: " + cards.join(", ");

    // Determine the game status
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    // Display the message
    messageEl.textContent = message;
}

// Function to draw a new card
const newCard = () => {
    if (isAlive && !hasBlackJack) {  // Prevent drawing cards if the game is over
        // Generate a random card value between 2 and 11
        let card = Math.floor(Math.random() * 10) + 2;
        sum += card;
        // Push the new card to the cards array
        cards.push(card);
        renderGame();
    }
}

// Add event listeners to buttons
const startButtonEl = document.querySelector('#start-btn');
const newButtonEl = document.querySelector('#new-btn');

startButtonEl.addEventListener('click', startGame);
newButtonEl.addEventListener('click', newCard);
