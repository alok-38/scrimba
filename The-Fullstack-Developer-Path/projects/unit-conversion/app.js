const inputEl = document.querySelector('#number');
const buttonEl = document.querySelector('button');

const convertUnits = () => {
    const value = parseFloat(inputEl.value);

    if (isNaN(value)) return;

    // Elements
    const lengthEl = document.getElementById('meter-feet');
    const volumeEl = document.getElementById('liter-gallon');
    const massEl = document.getElementById('kg-pound');

    // --- Length: Meter ↔ Feet ---
    const metersToFeet = value * 3.28084;
    const feetToMeters = value / 3.28084;
    lengthEl.textContent =
        `${value} meters = ${metersToFeet.toFixed(3)} feet | ` +
        `${value} feet = ${feetToMeters.toFixed(3)} meters`;

    // --- Volume: Liters ↔ Gallons ---
    const litersToGallons = value * 0.264172;
    const gallonsToLiters = value / 0.264172;
    volumeEl.textContent =
        `${value} liters = ${litersToGallons.toFixed(3)} gallons | ` +
        `${value} gallons = ${gallonsToLiters.toFixed(3)} liters`;

    // --- Mass: Kilograms ↔ Pounds ---
    const kgToLbs = value * 2.20462;
    const lbsToKg = value / 2.20462;
    massEl.textContent =
        `${value} kilograms = ${kgToLbs.toFixed(3)} pounds | ` +
        `${value} pounds = ${lbsToKg.toFixed(3)} kilograms`;
};

buttonEl.addEventListener('click', convertUnits);
