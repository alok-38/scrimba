let firstCard = 5;
let secondCard = 5;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;

// Declare a variable called message and assign its value to an empty string
let message = "";

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

// Log it out
console.log(message);
