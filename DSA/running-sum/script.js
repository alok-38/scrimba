// Accepting a sequence of integers from the user
let input = prompt("Enter a sequence of integers, separated by commas:");

// Convert the string to an array of integers
let integers = input.split(',').map(num => parseInt(num.trim()));

// Output the resulting array
console.log(integers);

// Running sum
function runningSum(integers) {
    let sum = 0; // This will hold the running sum
    let result = []; // This will hold the final result with running sums

    // Iterate over each integer in the array
    for (let i = 0; i < integers.length; i++) {
        sum += integers[i]; // Add the current number to the running sum
        result.push(sum); // Push the running sum to the result array
    }

    return result;
}

// Call the function and output the result
let result = runningSum(integers);
console.log(result); // Display the running sum
