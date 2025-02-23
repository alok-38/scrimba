const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// Selectors
const button = document.querySelector('button');
const inputSlider = document.querySelector('input[type="range"]');
const passwordInputs = document.querySelectorAll('section:last-of-type input');
const copyIcons = document.querySelectorAll('section:last-of-type .fa-copy');
const mainEl = document.querySelector('main');
const themeSwitch = document.querySelector('.switch.theme input');
const paraEl = document.querySelector('p');
const h1El = document.querySelector('h1');

// Default background colors
const lightBackground = "#ECFDF5";
const darkBackground = "#1F2937";
const lightTextColor = "#6B7280";
const darkTextColor = "#ffffff";

// Function to generate random password
function generatePassword() {
    const passwordLength = 15;
    let randomPassword = '';

    // Generate a random password based on the length
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex]; // Append random character
    }

    // Set the generated password to the input fields
    passwordInputs.forEach(input => {
        input.value = randomPassword;
    });
}

// Function to copy password to clipboard
function copyPassword(event) {
    const passwordField = event.target.previousElementSibling;

    // Use the Clipboard API to copy the password
    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert('Password copied to clipboard!');
            passwordField.value = ""; // Clear only the copied password
        })
        .catch((err) => {
            console.error('Error copying to clipboard: ', err);
        });
}

// Function to switch theme
function switchTheme() {
    if (themeSwitch.checked) {
        // Apply light theme
        mainEl.style.backgroundColor = lightBackground;
        paraEl.style.color = lightTextColor;
        h1El.style.color = "#2B283A";
    } else {
        // Apply dark theme
        mainEl.style.backgroundColor = darkBackground;
        h1El.style.color = darkTextColor;
        paraEl.style.color = "#D5D4D8";
    }
}

// Event listeners
button.addEventListener('click', generatePassword);
copyIcons.forEach(icon => {
    icon.addEventListener('click', copyPassword);
    icon.style.cursor = "pointer"; // Add pointer cursor to the icons
});
themeSwitch.addEventListener('change', switchTheme); // Changed from 'click' to 'change'

// Initial theme setup
switchTheme(); // Ensure the theme is set correctly on page load
