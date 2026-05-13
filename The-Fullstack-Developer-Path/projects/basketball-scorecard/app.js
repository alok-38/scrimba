let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let initialHomeScore = 0;
let initialGuestScore = 0;
let initialLeaderScore = 0;

let leaderScoreEl = document.getElementById("leader-score");

const scoreboardLeaderEl = document.getElementById("scoreboard-leader");

function updateScore(team, points) {
  if (team === "home") {
    initialHomeScore += points;
    homeScoreEl.textContent = initialHomeScore;
  } else {
    initialGuestScore += points;
    guestScoreEl.textContent = initialGuestScore;
  }

  if (initialHomeScore > initialGuestScore) {
    initialLeaderScore = initialHomeScore - initialGuestScore;
    scoreboardLeaderEl.textContent = `Home is leading by ${initialLeaderScore}!`;
    leaderScoreEl.textContent = initialLeaderScore;
  } else if (initialGuestScore > initialHomeScore) {
    initialLeaderScore = initialGuestScore - initialHomeScore;
    scoreboardLeaderEl.textContent = `Guest is leading by ${initialLeaderScore}!`;
    leaderScoreEl.textContent = initialLeaderScore;
  } else {
    scoreboardLeaderEl.textContent = "It's a tie!";
    initialLeaderScore = 0;
    leaderScoreEl.textContent = initialLeaderScore;
  }
}

document
  .getElementById("home-add-1")
  .addEventListener("click", () => updateScore("home", 1));
document
  .getElementById("home-add-2")
  .addEventListener("click", () => updateScore("home", 2));
document
  .getElementById("home-add-3")
  .addEventListener("click", () => updateScore("home", 3));

document
  .getElementById("guest-add-1")
  .addEventListener("click", () => updateScore("guest", 1));
document
  .getElementById("guest-add-2")
  .addEventListener("click", () => updateScore("guest", 2));
document
  .getElementById("guest-add-3")
  .addEventListener("click", () => updateScore("guest", 3));

const newGameButton = document.getElementById("new-game");

newGameButton.addEventListener("click", () => {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
  scoreboardLeaderEl.textContent = "Start";
  leaderScoreEl.textContent = 0;
});
