// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

const welcomeEl = document.getElementById("welcome-el");

const myName = "Alok";
const greeting = "Welcome";

const greetings = () => {
  welcomeEl.textContent = `${greeting} ${myName}`;
};

greetings();
