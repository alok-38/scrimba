const spanEl = document.querySelector(".count");
const incrementBtnEl = document.querySelector(".increment");
const saveBtnEl = document.querySelector(".save");
const paraEl = document.querySelector("p");

let initialPassengerCount = 0;

const incrementCount = () => {
  spanEl.textContent = ++initialPassengerCount;
};

incrementBtnEl.addEventListener("click", incrementCount);

const saveCount = () => {
  initialPassengerCount = 0;
  paraEl.textContent += initialPassengerCount + "-" + "";
  spanEl.textContent = initialPassengerCount;
};

saveBtnEl.addEventListener("click", saveCount);
