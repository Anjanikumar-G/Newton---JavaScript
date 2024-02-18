// COncrete things TRUE and FALSE.

// const a = true;

// const b = false;

// Truthy and Falsy -> acts as True and False in reality they are not True and False.

// "a" + Stirng(1) = "a1"
// "as" + [] = "string"

// numer to string

// you can convert (pretend to convert) anything to boolean.

// ----------- String to Boolean --------

const str = "";
const str2 = "abcd";

// YOU SHOULD AVOID !! -> Beating cant be avoided.
// console.log(!!str, "str"); // false -> falsy
// console.log(!!str2, "str2"); // true -> truthy.

// console.log(Boolean(str), "str"); // false   -> falsy
// console.log(Boolean(str2), "str2"); // true  -> truthy.

// ------------- Number to Boolean  ------------

// console.log(Boolean(0)) // false
// console.log(Boolean(1)) // any other value will work -> true.

//  -------- Objects/ARRAYS to Boolean ----------

const obj = {};
const obj2 = {
  name: "utkarsh",
};

console.log(Boolean(obj)); // true
console.log(Boolean(obj2)); // true -> obj and obj2 VARIABLE always contains the ADDReSS of the Object.

// Same thing with the Array ALSO

//  ----------- null and undefined

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// -------------- some example --------------------

if ([]) {
  console.log("hello");
} else {
  console.log("bye");
}

// hello
//  [] behind the scenes are converted to Boolean([]) and this give TRUE.

if (0) {
  console.log("hello");
} else {
  console.log("bye");
}

// bye
// 0 behind the scenes are Converted to Boolean(0) and this gives FALSE.

if (-100) {
  console.log("hello");
} else {
  console.log("bye");
}

// hello
// -100 behind the scenes are Converted to Boolean(-100) and this gives TRUE.