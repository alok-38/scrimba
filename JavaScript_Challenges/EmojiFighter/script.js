// JavaScript
let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let winnerEl = document.getElementById("winner");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
    const firstFighterIndex = Math.floor(Math.random() * fighters.length);
    let secondFighterIndex;

    do {
        secondFighterIndex = Math.floor(Math.random() * fighters.length);
    } while (secondFighterIndex === firstFighterIndex);

    const firstFighter = fighters[firstFighterIndex];
    const secondFighter = fighters[secondFighterIndex];

    stageEl.textContent = `${firstFighter} vs ${secondFighter}`;
    winnerEl.textContent = "⚔️ Fighting...";

    setTimeout(() => {
        const winner = Math.random() < 0.5 ? firstFighter : secondFighter;
        winnerEl.textContent = `🏆 Winner: ${winner}`;
    }, 1000); // 1 second delay
});
