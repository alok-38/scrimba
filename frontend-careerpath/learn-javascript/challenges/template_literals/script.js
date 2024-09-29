const formatGreeting = (message, name, greeting) => {
  return `${message} ${name}! ${greeting}`;
};

const name = "Alok";
const message = "Hello";
const greeting = "Good day!";

console.log(formatGreeting(name, message, greeting));
