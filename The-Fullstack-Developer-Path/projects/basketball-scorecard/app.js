let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

const newBtnEl = document.querySelector(".new-btn");

const newGame = () => {
  homeEl.innerText = 0;
  guestEl.innerText = 0;
};

newBtnEl.addEventListener("click", newGame);

let homeCount = 0;

const increaseHomeCountByOne = () => {
  homeCount += 1;
  homeEl.innerText = homeCount;
};

const homePlus1El = document.getElementById("home-plus1");

homePlus1El.addEventListener('click', increaseHomeCountByOne);