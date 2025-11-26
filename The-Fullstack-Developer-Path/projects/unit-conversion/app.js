const inputEl = document.querySelector('input');
const convertButton = document.getElementById('convert');
const resultEL = document.querySelector('p');

convertButton.addEventListener('click', () => {
    const inputValue = parseInt(inputEl.value);
    resultEL.textContent = inputValue;
});
