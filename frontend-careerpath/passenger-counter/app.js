const count = document.getElementById('count');
const upBtn = document.getElementById('up');

let initialCount = 0;

count.textContent = 0;

const countPassengerUp = () => {
    count.textContent = ++initialCount;
}

upBtn.addEventListener('click', countPassengerUp);