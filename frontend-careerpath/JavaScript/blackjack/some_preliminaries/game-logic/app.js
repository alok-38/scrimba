const cards = [11, 9];
const sum = cards.reduce((acc, card) => acc + card, 0);

if (sum <= 21) {
  console.log("You won!");
} else {
  console.log("You lost.");
}
