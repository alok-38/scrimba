const h2El = document.querySelector('h2');
const h2Content = h2El.textContent;

let passengerCount = 0;

// increment
const increasePassengerCount = () => {
    h2El.textContent = ++passengerCount;
}

const incrementBtn = document.getElementById('increase');

incrementBtn.addEventListener('click', increasePassengerCount);

// Save
const h1El = document.querySelector('h1');

const saveBtn = document.getElementById('save');

const savePassengerCount = () => {
    h1El.textContent += ` ${passengerCount} -`;
    passengerCount = 0;
    h2El.textContent = passengerCount;
}

saveBtn.addEventListener('click', savePassengerCount);