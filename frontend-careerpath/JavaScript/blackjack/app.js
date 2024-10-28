let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

// Declare a variable called message and assign its value to an empty string
let message = "";

let messageEl = document.getElementById("message-el");
// store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// store the cards paragraph in a varialbe called cardsEl
let cardsEl = document.querySelector("#cards-el");

// Create a start game function and move the logic inside

function startGame() {
  // Render the cards on the page using this format -> "Cards: 10 4"
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  // 3. Render the sum on the page using this format -> "Sum: 14"
  sumEl.textContent = `Sum: ${sum}`;
  // Reassign the message variable to the string we're logging out
  if (sum <= 20) {
    message = "Do you want to pick another card? ";
  } else if (sum === 21) {
    message = "Wohoo! Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  // Display the message in the messageEl text content
  messageEl.textContent = message;
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
  messageEl.textContent = "Drawing a new card from the deck!";
}
