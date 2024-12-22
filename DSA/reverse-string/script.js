function reverseString(string) {
    let stack = [];
    for (char of string) {
        stack.push(char);
    }
    let reversedString = [];
    while (stack.length > 0) {
        reversedString.push(stack.pop());
    }
    return reversedString.join("");
}

console.log(reverseString("alok"));
console.log(reverseString("kishan"));
