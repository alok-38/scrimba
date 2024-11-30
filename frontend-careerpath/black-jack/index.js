let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

// Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById('message-el');

// Store the sum in a variable callled sumEl
let sumEl = document.getElementById('sum-el');

// Store the cards in a variable called cardsEl
let cardsEl = document.getElementById('cards-el');

const startGame = () => {
    // Render the sum on the page using this format -> "Sum 14"
    sumEl.textContent = `Sum: ${sum}`;
    // Render the cards -> Cards: 10 4
    cardsEl.textContent = "Cards: " + firstCard + "," + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        isAlive = false
    }

    // Display the message
    messageEl.textContent = message;

}

// Create a function newCard() that logs out "Drawing a new card from deck"
const newCard = () => {
    console.log("Drawing a new card from deck");
}



const startButtonEl = document.querySelector('#start-btn');
const newButtonEl = document.querySelector('#new-btn');

startButtonEl.addEventListener('click', startGame);
newButtonEl.addEventListener('click', newCard);