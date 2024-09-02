// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

const buttonEl = document.querySelector("button");
const errorEl = document.getElementById("error");

const logError = () => {
  errorEl.textContent = `Something went wrong, please try again`;
  errorEl.style.color = "red";
};

buttonEl.addEventListener("click", logError);
