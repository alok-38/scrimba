const countEl = document.getElementById("count-el");
const incrementButtonEl = document.getElementById("increment-btn");
const saveButtonEl = document.getElementById("save-btn");
const pEl = document.querySelector("p");

let currentCount = Number(countEl.textContent);

const incrementCount = () => {
  countEl.textContent = ++currentCount;
};

incrementButtonEl.addEventListener("click", incrementCount);

// Function to save count
const saveCount = () => {
  pEl.innerText = currentCount;
};

saveButtonEl.addEventListener('click', saveCount);