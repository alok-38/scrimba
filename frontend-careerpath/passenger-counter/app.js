const countEl = document.getElementById('count-el');
const upBtn = document.getElementById('up');
const saveEl = document.getElementById('save-el');
const saveBtn = document.getElementById('save');

let initialCount = 0;

const countPassengerUp = () => {
    countEl.textContent = ++initialCount;
};

upBtn.addEventListener('click', countPassengerUp);

const savePassengerCount = () => {
    // Always add the count followed by a comma and space
    saveEl.textContent += initialCount + ", ";
};

saveBtn.addEventListener('click', savePassengerCount); 
