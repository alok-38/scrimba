// Container to store integers
let integers = [];
// Variable to store user input
let input;

while (true) {
    input = prompt("Enter an integer (or type 'done' to stop)");

    if (input.toLowerCase() === 'done') {
        break;
    }

    // Convert input to an integer (base 10)
    let number = parseInt(input, 10);

    // If it is a valid number
    if (!isNaN(number)) {
        integers.push(number);  // Store the integer in the array
    } else {
        alert("Please enter a valid integer");
    }
}


let totalSum = integers.reduce((acc, num) => acc + num, 0);
console.log("Total sum:", totalSum);
