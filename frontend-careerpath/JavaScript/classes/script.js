class Person {
  constructor(
    weight,
    age,
    height,
    isASmoker,
    isMale,
    isGoodLooking,
    isAbleToRelocate
  ) {
    if (weight < 0 || age < 0 || height < 0) {
      throw new Error("Weight, age, and height must be non-negative.");
    }
    this.weight = weight;
    this.age = age;
    this.height = height;
    this.isASmoker = isASmoker;
    this.isMale = isMale;
    this.isGoodLooking = isGoodLooking;
    this.isAbleToRelocate = isAbleToRelocate;
  }

  isGood() {
    return (
      this.weight < 160 &&
      this.age >= 22 &&
      this.age <= 27 &&
      this.height < 72 &&
      !this.isASmoker &&
      this.isMale &&
      this.isGoodLooking &&
      this.isAbleToRelocate
    );
  }
}

// Test cases
const person1 = new Person(150, 24, 71, false, true, true, true);
console.log(person1.isGood() ? "Marry Me!" : "Get Lost!");

const person2 = new Person(170, 28, 70, true, false, false, false);
console.log(person2.isGood() ? "Marry Me!" : "Get Lost!");

const person3 = new Person(140, 25, 69, false, true, true, true);
console.log(person3.isGood() ? "Marry Me!" : "Get Lost!");
