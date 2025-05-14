let hands = ["rock", "paper", "scissor"];

const returnRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
};

console.log(returnRandomItem());
