const firstInputEl = document.getElementById("num1");
const secondInputEl = document.getElementById("num2");
const btnEl = document.getElementById("btn-add");
const h2Element = document.getElementById("result");

const addNumbers = (event) => {
    // Prevent the default behavior (e.g., form submission)
    event.preventDefault();

    // Parse the input values as floats, fallback to 0 if invalid (NaN)
    const firstNumber = isNaN(parseFloat(firstInputEl.value)) ? 0 : parseFloat(firstInputEl.value);
    const secondNumber = isNaN(parseFloat(secondInputEl.value)) ? 0 : parseFloat(secondInputEl.value);

    // Display the result
    h2Element.textContent = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
}

// Add event listener to the button
btnEl.addEventListener('click', addNumbers);
