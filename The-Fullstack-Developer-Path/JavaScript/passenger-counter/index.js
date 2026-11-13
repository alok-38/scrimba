const countEl = document.getElementById('count-el');
const incrementButtonEl = document.getElementById('increment-btn');
const saveButtonEl = document.getElementById('save-btn');

let count = 0;

incrementButtonEl.addEventListener('click', () => {
    let countIncrement = ++count;
    countEl.textContent = countIncrement;
})

saveButtonEl.addEventListener('click', () => {
    console.log(count);
})