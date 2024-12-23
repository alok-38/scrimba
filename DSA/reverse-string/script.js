// Using prompt to accept input
let stringInput = prompt("Please enter some text:");

let reversedString = "";

// Loop through the string in reverse order
for (let index = stringInput.length - 1; index >= 0; index--) {
    reversedString += stringInput[index];
}

console.log(reversedString);
