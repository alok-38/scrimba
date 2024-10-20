const countEl = document.getElementById("count-el");
const buttonEl = document.getElementById("increment-btn");

let currentCount = Number(countEl.textContent);

const incrementCount = () => {
  countEl.textContent = ++currentCount;
};

buttonEl.addEventListener("click", incrementCount);
