const person = {
    // Your code here
    name: "Alok",
    age: 41,
    introduce: function () {
        console.log(`Hello ${this.name}`);
    }


};

person.introduce();

person.haveBirthday = function () {
    // Your code here
    console.log(++this.age);
};

person.haveBirthday();
person.haveBirthday();

function createBook(title, author) {
    return {
        title: title,
        author: author,
        describe: function () {
            console.log(`'${this.title}' by ${this.author}`);
        }
    };
}

const book1 = createBook("1984", "George Orwell");
book1.describe();  // Output: '1984' by George Orwell

// Rock-Paper-Scissors game
const choices = ["rock", "paper", "scissors"];

// function to get the computer’s choice randomly
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Write a function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}

playRound("rock");
playRound("rock");
playRound("rock");
playRound("paper");


