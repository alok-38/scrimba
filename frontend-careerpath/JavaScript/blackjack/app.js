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

// Create a start game function and move the logic inside

const startGame = () => {
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
};

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", startGame);
