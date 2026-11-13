const countEl = document.getElementById('count-el');
const buttonEl = document.getElementById('increment-btn');

let count = 0;

buttonEl.addEventListener('click', () => {
    let countIncrement = ++count;
    countEl.textContent = countIncrement;
})