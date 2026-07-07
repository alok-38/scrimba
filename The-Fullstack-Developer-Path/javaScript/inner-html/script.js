const containerEl = document.getElementById('container');

// Render button
containerEl.innerHTML = `<button>Buy</button>`;

// Select button
const buttonEl = document.querySelector('button');

// Add click event
buttonEl.addEventListener('click', () => {
    // Prevent duplicate messages
    if (!containerEl.querySelector('p')) {
        const thankyouEl = document.createElement('p');
        thankyouEl.textContent = "Thank you for buying!";
        containerEl.appendChild(thankyouEl);
    }
});