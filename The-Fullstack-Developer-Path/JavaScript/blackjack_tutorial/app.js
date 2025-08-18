const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({ value, suit });
    }
}

// Fisher-Yates shuffle algorithm
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap deck[i] with deck[j]
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Assume deck is already created with all 52 cards
deck = shuffle(deck);
console.log(deck); // The deck is now shuffled randomly