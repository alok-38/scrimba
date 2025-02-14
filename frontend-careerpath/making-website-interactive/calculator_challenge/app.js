const firstNum = document.getElementById('num1-el');
const secondNum = document.getElementById('num2-el');
const result = document.getElementById('sum-el');

// Generate two random numbers and display them
function generateNumbers() {
    const num1 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    const num2 = Math.floor(Math.random() * 100) + 1;
    firstNum.textContent = num1;
    secondNum.textContent = num2;
    return { num1, num2 };
}

// Function to update the result
function updateResult(operation) {
    const { num1, num2 } = generateNumbers();
    let resultValue;

    switch (operation) {
        case 'Add':
            resultValue = num1 + num2;
            break;
        case 'Subtract':
            resultValue = num1 - num2;
            break;
        case 'Multiply':
            resultValue = num1 * num2;
            break;
        case 'Divide':
            resultValue = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero';
            break;
        default:
            resultValue = 'Invalid operation';
    }

    result.textContent = `Sum: ${resultValue}`;
}

// Event listeners for the buttons
document.querySelector('button:nth-child(1)').addEventListener('click', () => updateResult('Add'));
document.querySelector('button:nth-child(2)').addEventListener('click', () => updateResult('Subtract'));
document.querySelector('button:nth-child(3)').addEventListener('click', () => updateResult('Divide'));
document.querySelector('button:nth-child(4)').addEventListener('click', () => updateResult('Multiply'));

// Initialize numbers when the page loads
generateNumbers();
