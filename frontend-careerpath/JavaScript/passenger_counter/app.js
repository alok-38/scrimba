const countEl = document.getElementById("count-el");
const incrementButtonEl = document.getElementById("increment-btn");
const saveButtonEl = document.getElementById("save-btn");
const pEl = document.querySelector("p");

let currentCount = Number(countEl.textContent);
// Array to hold saved counts
let savedCounts = [];

const incrementCount = () => {
  countEl.textContent = ++currentCount;
};

incrementButtonEl.addEventListener("click", incrementCount);

// Function to save count
const saveCount = () => {
  if (currentCount > 0) {
    savedCounts.push(currentCount);
    pEl.innerText = savedCounts.join(", ");
  }
  currentCount = 0;
  countEl.textContent = currentCount;
};

saveButtonEl.addEventListener("click", saveCount);
