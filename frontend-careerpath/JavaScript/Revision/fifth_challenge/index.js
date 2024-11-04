let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const spanEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
  spanEl.textContent = `Sum: ${num1 + num2}`;
}

addBtn.addEventListener("click", add);

function subtract() {
  spanEl.textContent = `Difference: ${num1 - num2}`;
}

subtractBtn.addEventListener("click", subtract);

function multiply() {
  spanEl.textContent = `Product: ${num1 * num2}`;
}

multiplyBtn.addEventListener("click", multiply);

function divide() {
  if (num2 != 0) {
    spanEl.textContent = `Quotient: ${num1 / num2}`;
  }
}

divideBtn.addEventListener("click", divide);