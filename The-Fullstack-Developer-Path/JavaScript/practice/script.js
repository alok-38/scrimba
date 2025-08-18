const person = {
    // Your code here
    name: "Alok",
    age: 41,
    introduce: function () {
        console.log(`Hello ${this.name}`);
    }
};

person.introduce();