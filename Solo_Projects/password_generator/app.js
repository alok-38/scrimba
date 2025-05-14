const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const buttonEl = document.querySelector('button');
const passwordDisplay = document.querySelectorAll('section:last-of-type input');
const rangeSlider = document.querySelector('input[type="range"]');
// const symbolsCheckbox = document.getElementById('includeSymbols');
// const numbersCheckbox = document.getElementById('includeNumbers');


// Define allowed number and symbol characters
// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// Combine numbers and symbols into one array
const numbersAndSymbolsSet = [...numbers, ...symbols];


const generateRandomPassword = () => {
    const length = parseInt(rangeSlider.value);
    const randomPassword = [Math.floor(Math.random() * characters.length)];
    if (rangeSlider.value === 16) {
        passwordDisplay.textContent = randomPassword;
    }
}

buttonEl.addEventListener('click', generateRandomPassword);