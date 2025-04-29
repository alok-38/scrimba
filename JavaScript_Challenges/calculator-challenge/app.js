const displayFirstNumber = document.getElementById('num1-el');
const displaySecondNumber = document.getElementById('num2-el');
const resultEl = document.getElementById('result-el');

const generateTwoRandomNums = () => {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    displayFirstNumber.textContent = firstNumber;
    displaySecondNumber.textContent = secondNumber;
    return { firstNumber, secondNumber }; // Return both numbers
}

const sum = () => {
    const { firstNumber, secondNumber } = generateTwoRandomNums(); // Destructure returned object
    const result = firstNumber + secondNumber;
    resultEl.textContent = `Sum: ${result}`;
}

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', sum);

const sub = () => {
    const { firstNumber, secondNumber } = generateTwoRandomNums(); // Destructure returned object
    const result = firstNumber - secondNumber;
    resultEl.textContent = `Sub: ${result}`;
}

const subBtn = document.querySelector('.sub');
subBtn.addEventListener('click', sub);

const divide = () => {
    const { firstNumber, secondNumber } = generateTwoRandomNums(); // Destructure returned object
    if (secondNumber === 0) {
        resultEl.textContent = `Division by zero!`;
    } else {
        const result = (firstNumber / secondNumber).toFixed(2);
        resultEl.textContent = `Quotient: ${result}`;
    }


}

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', divide);

const mul = () => {
    const { firstNumber, secondNumber } = generateTwoRandomNums(); // Destructure returned object
    const result = firstNumber * secondNumber;
    resultEl.textContent = `Mul: ${result}`;
}

const mulBtn = document.querySelector('.mul');
mulBtn.addEventListener('click', mul);