const buttonEl = document.querySelector('button');
const paraEl = document.querySelector('p');

buttonEl.addEventListener('click', () => {
    paraEl.textContent = "Account created. You may now continue!";
})