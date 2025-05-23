const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const saveEntry = document.getElementById('save-el');

const displayEl = document.getElementById('count-el');
let initialCount = 0;
displayEl.textContent = initialCount;

const increment = () => {
    // let incrementCount = ++initialCount;
    // displayEl.textContent = incrementCount;
    initialCount++;
    displayEl.textContent = initialCount;

}

incrementBtn.addEventListener('click', increment);

const save = () => {
    saveEntry.textContent += ` ${initialCount} -`;
    initialCount = 0;
    displayEl.textContent = initialCount;
}

saveBtn.addEventListener('click', save);