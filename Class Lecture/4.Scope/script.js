//  ----------------------- Scoping (Scope) ---------------------

// 1. the Js File is a Global iteself.
// 2. Scope of Var => global And Functional

// Example 1 ->
// var a = 12; // Scope of a is Global
// console.log(a); // 12

// if (true) {
//   console.log(a, "inside of the if block"); // 12
// }

// console.log(a);

// Example 2 ->

// if (true) {
//   var a = 100;
//   console.log(a, "answer 1");
// }

// console.log(a, "ans 2");

//  -------------------- Parsing in JS (Advance) ---------------------

// Without any Execution COntext we cannot run the JS code.
// When there is a FUNCTION EXECUTION (not funciton defination) JS create a new EXECUTION CONTEXT.
// THAT execution context is knows as FUNCTIONAL EXECUTION CONTEXT.

//  return keyword is a destructor of EXECUTION CONTEXT (TOP MOST EXECUTION CONTEXT in call STACK)
// return keyword returns value to the below Execution context.

// Example 3 ->

// var a = 12;
// console.log(a);

// function abc() {
//   var a = 100;
//   console.log(a);
//   return a;
// }

// let result = abc();

// console.log(result);

// console.log(a);

// 12 100 100 12

// Example 4 ->
// var a = 12;
// console.log(a);

// function abc() {
//   var a = 100;
//   console.log(a);
//   // return a;
// }

// let result = abc();

// console.log(result);

// console.log(a);

// 12 100 undefined 12

// Example 5 ->

// var a = 12;

// var a = 99;

// console.log(a); // 99

// Example 6 ->

// var a = 12;
// console.log(a);

// if (true) {
//   var a = 99;
//   console.log(a);
// }

// for (let i = 0; i < 1; i++) {
//   var a = 100;
//   console.log(a);
// }

// console.log(a);

// Example 7 ->

// var a = 12;
// console.log(a);

// function abc() {
//   var a = 99;
//   var b = 100;
//   console.log(a);
//   console.log(b);
// }

// abc();

// console.log(a);

// Example - 8 >

var x = 1;

function outer() {
  console.log(x);

  var x = 2;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();

// Undefined
// 2

// Conclusion of Var Scope -> It is EXECUtiON CONTEXT

//  -------------  Let And Const ---------- --

// let and const have a scope of block.
// block means = {}

// Example 1 ->

// let a = 100;

// if (true) {
//   let a = 99;
//   console.log(a);
// }

// console.log(a);

// Example 2 ->
// for loop.....

// let a = 100;
// console.log(a);

// for (let a = 1; a < 3; a++) {
//   console.log(a);
// }

// console.log(a);

// TODO: utkarsh do settimeout question here.......

// TODO: // const obj2 = {
//   a: 10,
//   getuser() {
//     console.log(this);
//     b: 90;
//     f = () => {
//       console.log("letin", this);
//     };
//     f();
//   },
//   letuser: () => {
//     console.log(this);
//   },
// };

// obj2.getuser();
// setTimeout(obj2.getuser, 1000);

// .obj2.getuset as a callback not obj method

// how this is working not know

// setTimeout(function () {
//   obj2.getuser;
// }, 1000);

// here it is called as obj method
