function outerFunction() {
    let outerVariable = "I'm from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

outerFunction();
