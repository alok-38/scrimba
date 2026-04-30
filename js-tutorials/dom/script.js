const titleEl = document.getElementById("title");
const buttonEl = document.querySelector("button");

let previousTitle = titleEl.textContent;

const changeTitle = () => {
  if (titleEl.textContent === "Welcome") {
    titleEl.textContent = previousTitle;
  } else {
    titleEl.textContent = "Welcome";
  }
};

buttonEl.addEventListener("click", changeTitle);