var percentageLetter = function (s, number_of_letters) {
    // count occurrences of the letter
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === number_of_letters) {
            count++;
        }
    }

    // Calculate the percentage of occurrences and round down
    const percentage_of_occurance = (count / s.length) * 100;

    // Return the rounded-down percentage
    return Math.floor(percentage_of_occurance);
};