let firstCard = 15;
let secondCard = 14;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Pick another card");
} else if (sum === 21) {
  console.log("You have won!");
} else {
  console.log("You are out");
}
