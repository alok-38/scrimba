const articleEl = document.querySelector('article');

let pEl; // Declare it in the outer scope so it's accessible later

// Create the message once after 2 seconds
setTimeout(() => {
    pEl = document.createElement('h2');
    pEl.textContent = "Hover over the box!";
    pEl.style.marginTop = "1rem"; // Optional styling
    articleEl.appendChild(h2El);
}, 2000);

// Hover effect: change background color on hover and remove the message
articleEl.addEventListener('mouseover', () => {
    articleEl.style.backgroundColor = 'lavender';

    if (pEl && articleEl.contains(pEl)) {
        articleEl.removeChild(pEl);
    }
});

articleEl.addEventListener('mouseout', () => {
    articleEl.style.backgroundColor = 'white';
    articleEl.appendChild(pEl);
});
