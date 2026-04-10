const buttonEl = document.querySelector('button');

function changeButtonText() {
    buttonEl.textContent = "Unfollow";
}

buttonEl.addEventListener('click', changeButtonText);