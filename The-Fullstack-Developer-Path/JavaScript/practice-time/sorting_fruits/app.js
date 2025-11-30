let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

const sortFruits = () => {
    for (let index = 0; index < fruit.length; index++) {
        if (fruit[index] === "🍎") {
            appleShelf.textContent += "🍎";
        } else {
            orangeShelf.textContent += "🍊";
        }
    }
}

sortFruits();