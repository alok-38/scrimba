const aEl = document.querySelector('a');
const mainEl = document.querySelector('main');

const renderError = () => {
    // Check if error message already exists
    let pEl = document.querySelector('error-message');

    // If it doesn't exist, create and append it
    if (!pEl) {
        pEl = document.createElement('p');
        pEl.textContent = "Something went wrong, please try again";
        mainEl.appendChild(pEl);
    }

    // Show the mssage temporarily 
    setTimeout(() => {
        pEl.remove();
        aEl.blur();
    }, 3000);
};

// Prevent default link behavior and render error
aEl.addEventListener('click', (e) => {
    e.preventDefault();
    renderError();
});