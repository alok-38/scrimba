const spanEl = document.querySelector("span");
const decrementEl = document.getElementById('decrement');
const resetEl = document.getElementById('reset');
const incrementEl = document.getElementById('increment');

let initialCount = 0;
spanEl.textContent = initialCount;
spanEl.style.textAlign = "center";

const increment = () => {
    initialCount++; // Increment count
    spanEl.textContent = initialCount;
};

const reset = () => {
    initialCount = 0; // Reset count
    spanEl.textContent = initialCount;
};

const decrement = () => {
    initialCount--; // Decrement count
    spanEl.textContent = initialCount;
};

incrementEl.addEventListener('click', increment); // Attach increment event to increment button
decrementEl.addEventListener('click', decrement); // Attach decrement event to decrement button
resetEl.addEventListener('click', reset); // Attach reset event to reset button
