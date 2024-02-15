console.log("functions");

// {}, []

// Function in js Is treated as FIRST CLASS OBJECTS
// I can Conclude that Function is a OBJECT ONLY

//  ---------- ------- FUNCTION Declaration ---------------

// function functionName(a, b) {
//     // a and b are PARAMETERS
//     // logic  a+ b

//     // return "1000"
// }

// ------ example -----

// function sum(a, b) {

//   console.log(a, b);
//   return a + b;
// }

// sum(1, 1); // 1

// sum("1", "1"); // "1"

// ----  conclusion: we can see functions can take any TYPE of PARAMETER (a,b) and it can return
// any type of data (1 vs "1").

// ----- java ->
// public static int sum (int a, int b) {
//     // logic

// return 1;
// return "1"; // cant return this
// }

//  NOTE: Undefined is the Default value of JS.
// function mult(a, b) {
//   const ans = a * b;

//   //   return ans;

//   return undefined;
//   // this is the line that JS adds Itself if the User or the developer has not
//   //   returned anything from the function.
// }

// console.log(mult(2, 2), "console mult"); //

//  --------- Function Expression -------------

// function sum(a, b) {
//   return a + b;
// }

// const answerSum = sum(1, 20);
// console.log(answerSum, "answerSum debug declaration");

// int, boolean, string, Array, Object

// let a = function (a,b) {

//     return a + b;
// }

// let sumExpression = function (a, b) {
//   return a + b;
// };

// let answerSumExpression = sumExpression(1, 20);
// console.log(answerSumExpression, "answerSumExpression debug");

// ------- Functions with Varibales .......
// This concept is true for both Function expression and declaration.

// let c = 13;

// function sum(a, b) {
//   return a + b + c;
// }

// console.log(sum(1, 2));

// ------ Function with Default value
// This concept is true for both Function expression and declaration.

// function sum(a, b = 0) {
//   console.log(a, b, "params inside sum function");
//   return a + b;
// }

// console.log(sum(1, 100)); // 101 //

// ---------- What a function returns

// function sum() {
//     console.log("!")

//     return undefined; // JS by default returns undefined if you have not returnd anything.
// }

// console.log(sum()) // undefined

// function sum() {
//     return 1;
// }

// console.log(sum()) // 1

//  -------------------- REST OPERaTOR -----------
// Syntax = ... -> takes the value and try to merge it.

// child in a scholl what is imp
// name, standard, rollNumber
// restOfthe THings -> father name , mothername, address

// function child(name, standard, rollnumber, ...otherTHings) {
//   console.log(name, standard, rollnumber, "importnant information"); // store in good place

//   console.log(otherTHings);
// }

// // animesh child
// child(
//   "animesh",
//   "12",
//   1,
//   "utkarsh",
//   "anamika",
//   "3233 delhi",
//   "gun",
//   "asdas",
//   "asdasd",
//   "asdasd"
// );

// child("animesh", "12", 1);

// -----------  Pass by Value and Pass By Reference  ------------0

// Primitive -> char, bool, int, bigInt, -> Pass by value..

// let num1 = 1;
// let num2 = 2;

// function sum(a, b) {
//   a = a + 10;
//   b = b + 10;

//   return a + b;
// }

// console.log(sum(1, 2)); // 23
// console.log(sum(num1, num2)); // 23

// console.log(num1, num2); // 1, 2

//  Non Primitive -> Objects, Arays (things that are beinng created in HEAP).
// Pass by reference

// let math = {
//   marks: 100,
//   grade: "A+",
// };

// let science = {
//   marks: 90,
//   grade: "A",
// };

// // biased
// function sum(subParam1, subParam2) {
//     // sumparam1 = {marks: 100, grade: "a" }
//   // 2014 -> 6060
//   subParam1.marks = 60;
//   subParam2.marks = 70;

//   const marks1 = subParam1.marks;
//   const marks2 = subParam2.marks;

//   return marks1 + marks2;
// }

// console.log(sum(math, science)); // 130

// console.log(sum(math.marks, science.marks)); // 100 90

// ---------------- Pure function vs Impure functions -------------

// Pure function

// let z = 1;
// console.log(z, "add before");
// function add(x, y) {
//   return x + y;
// }

// // for every same input you will get same output..
// add(1, 2); // 3
// console.log(z, "after add");

// add(1,2) // 3
// add(1,2)
// add(1,2)
// add(1,2)
// add(1,2)

// is this function doing things that it is bound to do? Yes it is doing addition and returning the result
// is this function doing some Extra things also apart from its work ?  NO

// console.log(z, "original z"); //

// // // This is an example of Impure function
// function mult(x, y) {
//   z = 100; // this is a side Effect
//   //   console.log(z); // this is also a side Effect

//   // logging service -> google.log() // this is also a side effect
//   return x * y;
// }

// console.log(mult(1, 3)); // 3

// console.log(z, "value of z");

// is this function doing things that it is bound to do ? YES it is doing multiplication and returning the result
// is this function doing some Extra things also apart from its work ? YES

// extra is I am Going outside the bound of brackets and changing something or aceesing other things.