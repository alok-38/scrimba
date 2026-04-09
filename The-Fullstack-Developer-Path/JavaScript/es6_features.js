// let count = 10;
// const maxCount = 15;

// count += 5;
// console.log(count);
// maxCount += 20;
// console.log(maxCount);

// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// function timer() {
//     this.counter = 0;
//     setInterval(() => {
//         console.log(this.counter);
//         this.counter+=1;

//         // Stop after 5 counts
//         if (this.counter > 5) {
//             clearInterval(intervalId);
//             console.log('Timer stopped.');
//         }
//     },1000)
// }

// timer();

// const arr = [1, 2];
// const obj = { fName: "John", lName: "Wick" };

// const [firstVal, secVal] = arr;
// console.log(firstVal, secVal);
// console.log(firstVal + secVal);
// console.log(arr);

// const { fName, lName } = obj;
// console.log(`${fName} ${lName} is my full name`);

// const name = "User";
// const greetingMessage = `Welcome to the app ${name}`;
// console.log(greetingMessage);



const sumAnyNumber = (...numbers) => {
    return numbers.reduce((acc, num)=> acc + num, 0)
}

console.log(sumAnyNumber(1,2,3,4,5));