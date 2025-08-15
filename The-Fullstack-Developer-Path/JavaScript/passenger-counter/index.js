let count = 0;
const countEl = document.getElementById('count-el');
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');

const incrementCount = () => {
    count++;
    countEl.textContent = count;
}

incrementBtn.addEventListener('click', incrementCount);

const saveCount = () => {
    saveEl.textContent += count + ' - ';
    count = 0;
    countEl.textContent = count;
}

saveBtn.addEventListener('click', saveCount);
