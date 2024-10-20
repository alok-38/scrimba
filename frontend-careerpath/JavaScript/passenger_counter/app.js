const countEl = document.getElementById("count-el");
const buttonEl = document.getElementById("increment-btn");

let currentCount = countEl.textContent;

const incrementCount = () => {
  console.log(currentCount);
};

buttonEl.addEventListener("click", incrementCount);
