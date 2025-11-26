const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const paraEl = document.querySelector('p');
const firstInputEl = document.getElementById('first-number');
const secondInputEl = document.getElementById('second-number');


const add = () => {
    const firstInputValue = parseFloat(firstInputEl.value);
    const secondInputValue = parseFloat(secondInputEl.value);

    const sum = firstInputValue + secondInputValue;

    paraEl.textContent = `Sum: ${sum}`;
    firstInputEl.value = "";
    secondInputEl.value = "";
};

const subtract = () => {
    const firstInputValue = parseFloat(firstInputEl.value);
    const secondInputValue = parseFloat(secondInputEl.value);

    const difference = firstInputValue - secondInputValue;

    paraEl.textContent = `Difference: ${difference}`;
    firstInputEl.value = "";
    secondInputEl.value = "";
};

subtractBtn.addEventListener('click', subtract);