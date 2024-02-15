// Strings are Immutable and Are created in a special HEAP "String POOL"

// let name = "utkarsh"
// name = "akash"

//  --------------- Special Characters/ Escape Characters-----------
// \n -> new line
// \t -> tab

// const string1 = "hello world";

// console.log(string1);

// My requirement is to say hello in 1st line and world in 2nd line ?

// Way 1
// console.log("hello");
// console.log("world");

// // Way 2
// const string2 = `Hello
// World ;
// `;

// console.log(string2, "string 2 debug");

// // way 3  -> Escape characters
// console.log("hello \t world", "escape char debug");

// -------------- Operation on strings ------------

// const str = "hello";
// console.log(str.length); // 5

// // get char at
// console.log(str[0]); // h
// console.log(str.charAt(0)); // h

//  -------------- Substrings ---------------
// const str = "aeroplanes";
// console.log(str.substring(0, 3)); // aer
// console.log(str.substring(0, 4)); // aer

// console.log(str.substring(4)); // planes

// console.log(str); // aeroplanes

//  -------------- touppercase and tolowercase ------------

// const str = "cricket";

// console.log(str.toUpperCase()); // "CRICKET"
// console.log(str); // "cricket"

// const country = "india";
// const charI = country.charAt(0).toUpperCase(); // "I"
// const restOfTheString = country.substring(1); // "ndia"

// console.log(charI + restOfTheString);

//  ------------- TRIM ----------------------

// const name = "                 utkarsh thakur             ";
// console.log(name); // "          utkarsh thakur         "
// console.log(name.trim()); // "utkarsh thakur"

//  ------------------ Searching --------------

// const sentence = "hey there hello world";
// console.log(sentence.includes("hellosssss")); // false
// console.log(sentence.includes("hello")); // true

// ------------------- Comparision -------------

// console.log(1 > 80); // false

// console.log("a" > "Z"); // true ...

// a -> ascii value 97
// Z -> ascii value 90

const str1 = "hello";
const str2 = "hello";

console.log(str1 === str2); // true
// st1 = abc@123
// str2= abc@123
// Despite Strings are created inside Heaps, but due to String Pools it will take the same Address.

console.log(str1.localeCompare(str2)); // 0 -> means they are equal
console.log("Zebra".localeCompare("asd")); // +1 -> means Zebra is greater then asd
console.log("Zebra".localeCompare("Zzzzz")); // -1 -> means Zebra is lesser then Zzzzz

// 30 > 1 // +1
// "hello" === "Hello"