let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

const stageEl = document.getElementById("stage");
const buttonEl = document.getElementById("fightButton");

const renderFighters = () => {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    const firstFighter = Math.floor(Math.random() * fighters.length);
    const secondFighter = Math.floor(Math.random() * fighters.length);
    stageEl.textContent = `${fighters[firstFighter]} vs ${fighters[secondFighter]}`;
}

buttonEl.addEventListener("click", renderFighters);