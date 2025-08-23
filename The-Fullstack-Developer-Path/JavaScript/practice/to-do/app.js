const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');
const formEl = document.querySelector('form');

function addItem() {
    const inputValue = inputEl.value.trim();
    const liEl = document.createElement('li');
    liEl.appendChild(inputValue);
    ulEl.appendChild(liEl);
}

buttonEl.addEventListener('click', addItem);