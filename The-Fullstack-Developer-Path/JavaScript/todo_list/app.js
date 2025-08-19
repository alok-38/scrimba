const ulEl = document.querySelector('ul');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');

function addListItem() {
    const inputValue = inputEl.value.trim();
    if (inputValue === "") return;  // Prevent empty items

    const liEl = document.createElement('li');
    liEl.textContent = inputValue;
    ulEl.appendChild(liEl);
    inputEl.value = "";
    inputEl.focus(); // Refocus input after adding
}

btnEl.addEventListener('click', addListItem);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addListItem();  // Reuse the function
    }
});
