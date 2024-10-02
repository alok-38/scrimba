const countEl = document.getElementById("count");
const incrementBtnEl = document.getElementById("increment-btn");

let currentCount = parseInt(countEl.textContent, 10);

const incrementCount = () => {
  currentCount++;
  countEl.textContent = currentCount;
};

incrementBtnEl.addEventListener("click", incrementCount);
