const spanEl = document.querySelector(".count");
const incrementBtnEl = document.querySelector(".increment");
const saveBtnEl = document.querySelector(".save");
const paraEl = document.querySelector("p");

let initialPassengerCount = 0;

// Function to increment the passenger count and update the displayed count
const incrementPassengerCount = () => {
  initialPassengerCount++;
  spanEl.innerText = initialPassengerCount;
};

// Function to save the current passenger count to the previous entries
const savePassengerCount = () => {
  paraEl.innerText += initialPassengerCount + "-" + " ";
};

// Event listeners
incrementBtnEl.addEventListener("click", incrementPassengerCount);
saveBtnEl.addEventListener("click", savePassengerCount);
