let firstCard = 10;
let secondCard = 4;
// ordered list of items
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
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
    renderGame();
}

// Function to start the game
const renderGame = () => {
    // Render the sum on the page using this format -> "Sum 14"
    sumEl.textContent = `Sum: ${sum}`;

    // Render the cards -> Cards: 10 4
    cardsEl.textContent = "Cards: " + cards[0] + "," + cards[1];

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
    console.log("Drawing a new card from deck");

    // Generate a random card between 2 and 11
    let card = Math.floor(Math.random() * 10) + 2; // Random number from 2 to 11

    // Add the new card to the sum
    sum += card;

    // Update the sum and card display
    renderGame();
}

// Add event listeners to buttons
const startButtonEl = document.querySelector('#start-btn');
const newButtonEl = document.querySelector('#new-btn');

startButtonEl.addEventListener('click', startGame);
newButtonEl.addEventListener('click', newCard);
