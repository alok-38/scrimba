const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const feetEl = document.getElementById('feet');
const gallonsEl = document.getElementById('gallons');
const poundsEl = document.getElementById('pounds');

// Conversion for Length (Meters/Feet)
const lengthConversion = (value) => {
    let feet = value * 3.28084;  // Meters to Feet
    let meters = value / 3.28084;  // Feet to Meters
    feetEl.textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`;
};

// Conversion for Volume (Liters/Gallons)
const volumeConversion = (value) => {
    let gallons = value * 0.264172;  // Liters to Gallons
    let liters = value / 0.264172;  // Gallons to Liters
    gallonsEl.textContent = `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`;
};

// Conversion for Mass (Kilograms/Pounds)
const massConversion = (value) => {
    let pounds = value * 2.20462;  // Kilograms to Pounds
    let kilograms = value / 2.20462;  // Pounds to Kilograms
    poundsEl.textContent = `${value} kilos = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilograms.toFixed(3)} kilos`;
};

// Add event listener to the button
buttonEl.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default form submission (if any)

    const inputValue = parseFloat(inputEl.value.trim());

    // Ensure input is a valid number
    if (isNaN(inputValue) || inputValue === "") {
        feetEl.textContent = "Please enter a valid number.";  // Display error message
        gallonsEl.textContent = "";  // Clear other elements
        poundsEl.textContent = "";
        return;
    }

    // Clear all conversion fields before displaying results
    feetEl.textContent = "";
    gallonsEl.textContent = "";
    poundsEl.textContent = "";

    // Check and perform the appropriate conversions based on input value
    if (inputValue > 1000) {
        // If input is a large number, assume volume (Liters/Gallons)
        volumeConversion(inputValue);
    } else if (inputValue >= 100) {
        // For input between 100 and 1000, assume mass (Kilograms/Pounds)
        massConversion(inputValue);
    } else {
        // Otherwise, assume length (Meters/Feet)
        lengthConversion(inputValue);
    }

    // Clear the input field after conversion
    inputEl.value = "";
});
