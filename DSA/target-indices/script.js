// Empty array to store int
let intArray = [];

let numberOfIntegers = parseInt(prompt("How many integers do you want to enter?"));

for (let index = 0; index < intArray.length; index++) {
    let userInput = prompt(`Enter integer #${index + 1}`);
    let intValue = parseInt(userInput);
    // Check if the input is a valid integer
    if (!isNaN(intValue)) {
        intArray.push(intValue);
    } else {
        alert("Please enter a valid integer.");
        i--; // Decrease the index to retry input
    }
}