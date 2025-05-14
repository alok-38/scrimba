let firstCard = 10;
let secondCard = 4;
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById('message-el');
// 2. Store the sum paragraph in a variable called sumEl
const sumEl = document.querySelector('p:last-of-type');
// 2. Store the cards paragraph in a variable called cardsEl
const cardsEl = document.querySelector('#message-el+p');

const getRandomCard = () => {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
    isAlive = true
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

const renderGame = () => {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    // 2. Refer to the cards array when rendering out the cards
    sumEl.textContent = `Sum: ${sum}`;
    // Create a for loop that renders out all the cards instead of just two
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent = `Cards: ${cards}`;
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;

}

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', startGame);

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
const newCard = () => {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        // 2. Add the new card to the sum variable
        sum += card;
        // 3. Call startGame()
        // Push the card to the cards array
        cards.push(card);
        renderGame();
    }


}

const newCardBtnEl = document.querySelector('button:last-of-type');
newCardBtnEl.addEventListener('click', newCard);