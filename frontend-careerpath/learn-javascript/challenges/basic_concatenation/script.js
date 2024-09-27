const concatStrings = (firstString, secondString) => {
  return `${firstString} ${secondString}`;
};

const firstName = "Alokananda";
const lastName = "Y";
const fullName = concatStrings(firstName, lastName);
console.log(fullName);
