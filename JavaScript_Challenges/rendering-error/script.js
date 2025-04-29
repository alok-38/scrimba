const aEl = document.querySelector('a');
const mainEl = document.querySelector('main');

const renderError = () => {
    const pEl = document.createElement('p');
    const errorMessage = "Something went wrong, please try again";
    pEl.textContent = errorMessage;
    mainEl.appendChild(pEl);
}

aEl.addEventListener('click', renderError);