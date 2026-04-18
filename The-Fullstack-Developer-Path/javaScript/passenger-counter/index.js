const incrementBtn = document.getElementById("increment-btn");

let countEl = document.getElementById("count-el");

let initialCount = parseInt(countEl.textContent);

const increment = () => {
  countEl.textContent = ++initialCount;
};

incrementBtn.addEventListener("click", increment);

const saveBtn = document.getElementById("save-btn");

let saveEl = document.getElementById("save-el");

const save = () => {
  let countAndDash = initialCount + " - ";
  saveEl.innerText += "" + countAndDash;
  initialCount = 0;
  countEl.textContent = initialCount;
};

saveBtn.addEventListener("click", save);
