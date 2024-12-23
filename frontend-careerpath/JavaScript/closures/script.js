function outerFunction() {
    let outerVariable = "I'm from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample();

// Second example
function print(params) {
    console.log(params);
}

function greet(name, callback) {
    callback("hello " + name)
}

greet("alok", print);
