// ---------------------- Normal Function bs Arrow Function -------------

// function sum(a, b) {
//   return a + b;
// }

// const sumFunctionExpression = function (a, b) {
//   return a + b;
// };

// const sumFunctionExpressionArraow = (a, b) => {
//   return a + b;
// };

// console.log(sum(1, 2), "normal function"); // 3
// console.log(sumFunctionExpression(1, 2), "function expression"); //3
// console.log(sumFunctionExpressionArraow(1, 2), "arrow function"); // 3

// Difference 1 Arguments
// arguments is a reserved keyword and only availabe inside NORMAL FUNCTIONS Keyword
// arguments are nothing but an ARRAY Of PARAMETERS + Something else.

// function abc(a, b) {
//   console.log(a, b, "normal things");
//   //   console.log(arguments, "arguments debug"); [1000, -1, otherthings]
//     console.log(a, arguments[0]); // 1000 1000
//     console.log(b, arguments[1]); // -1 -1
// }

// abc(1000, -1);

// const abcArrow = (a, b) => {
//   //   const arg = arguments;

//   console.log(a, b);
//   console.log(arguments);
// };

// abcArrow(10000000000000, 2000000000);

// arguments keyword doest work inside the Arrow Function.

// TODO: After we Understand This (keyword) concept

//

// ------------ How to wirte Functions Production ready code ----------

// function sum(param1, param2) {
//   try {
//     let c = param1 + param2;
//     return c;
//   } catch (e) {
//     // what ever you want to do with the error you can do.
//     console.log(e);
//   }
// }

//  -------------------- try and catch  ---------------------

// function spaceship(a, b, action) {
//   try {
//     let res;

//     if (action === "add") {
//       // loigging
//       // Google server....
//       //   throw Error("google server cannot respond addiion");
//       res = a + b;
//     } else if (action === "sub") {
//       res = a - b;
//     } else if (action === "mult") {
//       res = a * b;
//     }
//     return res;
//   } catch (error) {
//     console.log("error ------");
//     // if addtion a, b do some backuo thing....
//     console.log(error);
//   }
// }

// const result = spaceship(1, 2, "add");
// console.log("result", result);

//  ------------------- Dangerous parts of Functions ------------------

// 1. You can pass Function as Parameter
// 2. we can return Function from the Function.
// HOF

// Functions are 1st class Citizens/Objects.

// in here you are passing an Object as a Argument to Sum Function
// const param1 = {
//   marks: 1,
// };

// const param2 = {
//   marks: 200,
// };

// function sum(obj1, obj2) {
//   // Obj1 and Obj2 are Parameters
//   //

//   console.log("hello to sum function earlier");
//   console.log(obj1);
//   console.log(obj2);
//   return obj1.marks + obj2.marks;
// }

// console.log(sum(param1, param2)); // param1 and param2 are Arguments

/*
    Functions are also Objects (First class)... 
*/

// const param1 = function () {
//   console.log("param1");
// };

// const param2 = function () {
//   console.log("param2");
// };

// function sum(obj1, obj2) {
//   // obj1 and obj2 are functions and these are knows as par
//   console.log("hey there i am functon sum");
//   console.log(obj1);
//   console.log(obj2);
// }

// sum(param1, param2);

// 2. we can return function from function

// function person() {
//   let inner = {
//     name: "uttkarsh",
//     class: 12,
//   };

//   return inner;
// }

// const resutnAnswer = person();
// console.log(resutnAnswer);

// function outer() {
//     const inner = function () {
//       console.log("hey I am from innter functoin");
//     };
//     // const inner = () => {}

// //   function inner() {
// //     console.log("hey I am from innter functoin");
// //   }

//   return inner;
// }

// console.log(outer());

// ---------- Higher Order FUnction --------------

// 1. a function who accepts another Function

// greeting function is a Higher order Function.
// function greeting(fn) {}

// greeting(() => {
//   console.log("hello");
// });

// 2. a function who returns a function from its body

// this outer function is also a Higher order fnction
// function outer() {
//   function inner() {}

//   return inner;
// }

// outer();

// 3 these 2 above rules combined will also make a function a HOF

// outer is a HOF
// function outer(fn) {
//   return fn;
// }

// -------- practical Things OF HOF

// function add(x, y) {
//   return x + y;
// }

// function diff(x, y) {
//   return x - y;
// }

// function mult(x, y) {
//   return x * y;
// }

// console.log(add(3, 4)); // 7
// console.log(diff(3, 4)); // -1
// console.log(mult(3, 4)); // 12

// Count  of Pure FUnctions - > 3
// count of Impure functions -> 0

// Question: Now the requirement is that any action that you do NEEDS TO BE LOGGED : WITH  "DEBUG" MESSAGE

// Answer

// function add(x, y) {
//   // logger with debug message google.log()

//   console.log(`%c add ${x}, ${y} DEBUG`, "color:red;");

//   return x + y;
// }

// function diff(x, y) {
//   // logger with debug message
//   console.log(`%c diff ${x}, ${y} DEBUG`, "color:red;");
//   return x - y;
// }

// function mult(x, y) {
//   // logger with debug message
//   console.log(`%c mult ${x}, ${y} DEBUG`, "color:red;");
//   return x * y;
// }

// // count of Impure functions -> 3
// // count of Pure Functions -> 0

// const addAnswer = add(3, 4); // 7
// const diffAnswer = diff(3, 4); // -1
// const multAnswer = mult(3, 4); // 12

// console.log(addAnswer, diffAnswer, multAnswer);

// -- Better ANswer

// function add(x, y) {
//   return x + y;
// }

// function diff(x, y) {
//   return x - y;
// }

// function mult(x, y) {
//   return x * y;
// }

// loggingFunction is taking a function as Parameter so it is a HOF
// loggingFunction is impure function..
// function loggingFunction(fn, x, y) {
//   console.log(`%c  ${x}, ${y} DEBUG`, "color:red;");
//   return fn(x, y);
// }

// Count of Pure function -> 3
// Count of Impure Functions -> 1

// const addAnswer2 = loggingFunction(add, 3, 4);
// const diffAnswer2 = loggingFunction(diff, 3, 4);
// const multAnswer2 = loggingFunction(mult, 3, 4);
// console.log(addAnswer2, diffAnswer2, multAnswer2, "version HOF");

// const addAnswer = add(3, 4); // 7
// const diffAnswer = diff(3, 4); // -1
// const multAnswer = mult(3, 4); // 12

// console.log(addAnswer, diffAnswer, multAnswer, "version Normal");

// -------------------- Callback Function -------------------
/*
    A callback is a function that is passed as an argument to another function, and is 
    called after the main function has finished its execution.
*/

// 1. has the responsibility to say hello..
// 2. greeting will take a function so that, it can say hello in different language

// Greeting is a HOF - Higher order FUnction
// function greeting(fn) {
//   // this fn is a normal function it has a special name CALLBACK FUNCTION
//   // fn is a callback Function
//   fn();
// }

// const letsss = function () {};

// const lsssssss = () => {};

// const utkrshHelloCallbackFuncton = function () {
//   console.log("hello in hindi");
// };

// greeting(utkrshHelloCallbackFuncton);

// const utkarsh = greeting(() => {
//   console.log("hello in hindi");
// });

// the inside function or utkrshHelloFuncton is known as CALLBACK FUNCTIONS

//  ------------------- DEFAULT PARMATERS IN JAVASCRIPT FUNCTION ---------------

// if in ARGUMENTS we do dot provide the value of PARAMETER then a PARAMETER can TAKE DEFAULT_VALUE....

// default value of a = 9 and for b = 100

// function sum(a = 9, b = 100) {
//   return a + b;
// }

// const result = sum(10); // 110
// const result2 = sum(undefined, 10); // 19
// const result3 = sum(); // 109
// console.log(result3);