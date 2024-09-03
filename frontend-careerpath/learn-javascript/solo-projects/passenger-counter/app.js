const incrementBtn = document.getElementById("increment");
const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");

const spanEl = document.querySelector("span");
const paraEl = document.querySelector("p");

// Convert the current text content to a number (base 10)
let currentCount = parseInt(spanEl.textContent, 10);

// Increment
const incrementPassengerCount = () => {
  currentCount += 1;
  spanEl.textContent = currentCount;
};

incrementBtn.addEventListener("click", incrementPassengerCount);

// Save
const savePassengerCount = () => {
  let previousEntries = spanEl.textContent;
  paraEl.textContent += previousEntries + "-";
};

saveBtn.addEventListener("click", savePassengerCount);

// Reset
const resetPassengerCount = () => {
  currentCount = 0;
  spanEl.textContent = currentCount;
  paraEl.textContent = "Previous entries:";
};

resetBtn.addEventListener("click", resetPassengerCount);
