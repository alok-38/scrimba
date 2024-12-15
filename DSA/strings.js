const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String Object");

// Character access
console.log("Cat".charAt(1));

// Comparing strings
const a = "a";
const b = "b";
if (a < b) {
    // true
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}


// convert both to the same case (upper or lower) before comparing them.
function areEqualCaseInsensitive(string1, string2) {
    return string1.toUpperCase() === string2.toUpperCase();
}

console.log(areEqualCaseInsensitive("alok", "alok"));

// A locale-aware and robust solution for testing case-insensitive equality
const areEqual = (str1, str2, locale = "en-us") => {
    str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
}

console.log(areEqual("ß", "ss", "de"));
console.log(areEqual("ı", "I", "tr"));


// String primitives and string objects
const stringPrimitive = "foo";
console.log(stringPrimitive)
// Coerced into string primitive
const stringPrimitive2 = String(1);
console.log(typeof (stringPrimitive2));
// string wrapper object
const stringWrapper = new String(stringPrimitive);
console.log(stringWrapper);
console.log(typeof stringWrapper);

// Create a string primitive
const string_one = "2" + "2";
console.log(string_one);
console.log(typeof (string_one));

// String object to primitive
const string_two = new String("2 + 2");
console.log(eval(string_two.valueOf()));