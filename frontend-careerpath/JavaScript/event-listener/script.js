const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();  // Prevent form submission
    const userInput = inputEl.value;
    if (userInput === "") {
        console.error("Cannot be empty");
    } else {
        console.log(userInput);
    }
    inputEl.value = "";  // Clear input field after processing
});
