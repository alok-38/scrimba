
"use strict";

// Basketball scoreboard state
const state = {
  home: 0,
  guest: 0
};

// DOM elements
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const gameStatus = document.getElementById("game-status");
const resetButton = document.getElementById("reset-button");

const teams = {
  home: {
    score: homeScore,
    name: document.getElementById("home-team-name")
  },
  guest: {
    score: guestScore,
    name: document.getElementById("guest-team-name")
  }
};

const STORAGE_KEY = "basketball-scoreboard-v1";

// Safely save the current game
function saveGame() {
  try {
    const game = {
      home: state.home,
      guest: state.guest,
      homeName: teams.home.name.value,
      guestName: teams.guest.name.value
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
  } catch (error) {
    console.warn("Could not save scoreboard:", error);
  }
}

// Update the score display
function renderScores() {
  teams.home.score.textContent = state.home;
  teams.guest.score.textContent = state.guest;

  saveGame();
}

// Update the game status
function updateStatus() {
  const homeName = teams.home.name.value.trim() || "HOME";
  const guestName = teams.guest.name.value.trim() || "GUEST";

  if (state.home > state.guest) {
    gameStatus.textContent = `${homeName} is leading!`;
  } else if (state.guest > state.home) {
    gameStatus.textContent = `${guestName} is leading!`;
  } else {
    gameStatus.textContent =
      state.home === 0 ? "Game ready" : "It's a tie!";
  }
}

// Add points to a team
function addPoints(team, points) {
  if (!teams[team] || !Number.isSafeInteger(points) || points < 1) {
    return;
  }

  if (state[team] > Number.MAX_SAFE_INTEGER - points) {
    gameStatus.textContent = "Maximum score reached.";
    return;
  }

  state[team] += points;

  renderScores();
  updateStatus();
}

// Remove one point without allowing negative scores
function removePoint(team) {
  if (!teams[team]) return;

  if (state[team] === 0) {
    gameStatus.textContent = "Score cannot go below zero.";
    return;
  }

  state[team] -= 1;

  renderScores();
  updateStatus();
}

// Reset both scores
function resetGame() {
  state.home = 0;
  state.guest = 0;

  renderScores();
  updateStatus();
}

// Restore a previously saved game
function loadGame() {
  try {
    const savedGame = localStorage.getItem(STORAGE_KEY);

    if (!savedGame) return;

    const game = JSON.parse(savedGame);

    if (!game || typeof game !== "object" || Array.isArray(game)) {
      return;
    }

    for (const team of ["home", "guest"]) {
      if (
        Number.isSafeInteger(game[team]) &&
        game[team] >= 0
      ) {
        state[team] = game[team];
      }
    }

    if (typeof game.homeName === "string") {
      teams.home.name.value = game.homeName.slice(0, 20);
    }

    if (typeof game.guestName === "string") {
      teams.guest.name.value = game.guestName.slice(0, 20);
    }
  } catch (error) {
    console.warn("Could not load saved scoreboard:", error);
  }
}

// Handle all scoring button clicks using event delegation
document.addEventListener("click", (event) => {
  const scoreButton = event.target.closest(".score-button");
  const undoButton = event.target.closest(".undo-button");

  if (scoreButton) {
    const team = scoreButton.dataset.team;
    const points = Number(scoreButton.dataset.points);

    addPoints(team, points);
    return;
  }

  if (undoButton) {
    removePoint(undoButton.dataset.team);
  }
});

// Handle team name changes
Object.values(teams).forEach((team) => {
  team.name.addEventListener("input", () => {
    saveGame();
    updateStatus();
  });
});

// Start a new game
resetButton.addEventListener("click", resetGame);

// Initialize the scoreboard
loadGame();
renderScores();
updateStatus();
