const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// Dark mode
const checkbox = document.getElementById("themeToggle");
const mainEl = document.querySelector('main');
const h1El = document.querySelector('h1');
const pEl = document.querySelector('p');
const divEls = document.querySelectorAll('section > div');
const buttonEl = document.querySelector('button');

checkbox.addEventListener("change", () => {
    mainEl.classList.toggle("dark", checkbox.checked);
    h1El.classList.toggle("dark", checkbox.checked);
    pEl.classList.toggle("dark", checkbox.checked);
});

const generatePassword = () => {
    let password = "";

    // Generate 12-character password
    for (let i = 0; i < 12; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    // Insert password into each div without removing the SVG
    divEls.forEach(div => {
        // Clear ONLY previous text nodes (keep SVG)
        div.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.remove();
            }
        });

        // Insert password at the start of the div
        div.insertAdjacentText("afterbegin", password + " ");
    });
};

buttonEl.addEventListener('click', generatePassword);
