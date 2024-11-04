const sumOfAllLaps = (lap1 = 34, lap2 = 33, lap3 = 36) => {
  return lap1 + lap2 + lap3;
};

console.log(sumOfAllLaps());

let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

const incrementLapsCompleted = () => {
  console.log(lapsCompleted++);
};

for (let index = 0; index < 3; index++) {
  incrementLapsCompleted();
}
