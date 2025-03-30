// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

const time = "morning"; // could be "afternoon", "evening", and "night"
const currentHour = new Date().getHours(); // Get the current hour (0-23)

if (time === "morning" && currentHour >= 5 && currentHour < 12) {
    console.log(`Good ${time}`);
} else if (time === "afternoon" && currentHour >= 12 && currentHour < 17) {
    console.log(`Good ${time}`);
} else if (time === "evening" && currentHour >= 17 && currentHour < 21) {
    console.log(`Good ${time}`);
} else if (time === "night" && (currentHour >= 21 || currentHour < 5)) {
    console.log(`Good ${time}`);
} else {
    console.log(`Good afternoon`); // Default if time does not match the expected range
}

// Using switch case
switch (true) {
    case (time === "morning" && currentHour >= 5 && currentHour < 12):
        console.log(`Good ${time}`);
        break;

    case (time === "afternoon" && currentHour >= 12 && currentHour < 17):
        console.log(`Good ${time}`);
        break;

    case (time === "evening" && currentHour >= 17 && currentHour < 21):
        console.log(`Good ${time}`);
        break;

    case (time === "night" && currentHour >= 21 && currentHour < 5):
        console.log(`Good ${time}`);
        break;

    default:
        console.log("Invalid time of day or hour.");
        break;
}