const buttonEl = document.querySelector('button');
const mainEl = document.querySelector('main');

function renderError() {
    const paraEl = document.querySelector('p');
    paraEl.textContent = `Something went wrong, please try again`;
    mainEl.appendChild(paraEl);
    paraEl.style.color = "#CB031D";
}

buttonEl.addEventListener('click', renderError);