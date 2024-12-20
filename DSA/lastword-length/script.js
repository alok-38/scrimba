var lengthOfLastWord = function (s) {
    // get rid of spaces (leading and trailing)
    const stripped = s.strip();
    // seperate them into words
    const words = stripped.split();
    // Lenth of the last word
    return words.length - 1;
};

