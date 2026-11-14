const countEl = document.getElementById("count-el");
const incrementButtonEl = document.getElementById("increment-btn");
const saveButtonEl = document.getElementById("save-btn");
const entriesEl = document.getElementById("entries");
const totalEl = document.getElementById("total");

let count = 0;
let totalPassengers = 0;

incrementButtonEl.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

saveButtonEl.addEventListener("click", () => {
  entriesEl.textContent += `${count} - `;

  totalPassengers += count;
  totalEl.textContent = totalPassengers;

  count = 0;
  countEl.textContent = count;
});
