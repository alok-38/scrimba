const incrementBtn = document.getElementById('increment-btn');

let countEl = document.getElementById('count');

let initialCount = parseInt(countEl.textContent);

const increment = () => {
    countEl.textContent = ++initialCount;
}

incrementBtn.addEventListener('click', increment);