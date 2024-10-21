let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
  console.log((myPoints += 3));
}

function remove1Point() {
  console.log(--myPoints);
}

// Call the functions to that the line below logs out 10
console.log(myPoints);

add3Points();
remove1Point();
