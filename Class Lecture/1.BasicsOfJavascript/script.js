// ---- ----------- Variable Naming -------------------

// Variable Name  CAN NEVER START WITH A NUMBER.
// Variable Name can HAVE number in Between Or In the END

// const 1num -> this is illegal
// const 10 = "asasd" -> this is also illegal

// const num1 -> this is good
// const nu1mmmm -> this is also Good.

// ------ ---------------------- VARIABLE -------------------------

// Let Const Var

// let num = 12;
// num = 10000000; // this is allowed
// console.log(num);
// let names = "utkarsh";

// let char = "c";
// let decision = true;

// console.log(num, names, char, decision);

// Old Js -> before Es-6 Ecma Script Before 2015

// var name = "akash";
// var id = 1;
// var decision = true;
// var ch = "c";

// console.log(name, id);

// new Js After ES6 After 2015

// const name = "utkrsh";
// name = "asdasdas"; // this is illegal. You cannot re assign const..
// const name; // this is also illegal

// console.log(name, "names debug");

// NOTE: It means JS is not a strictly Typed Language like JAVA.

//  ----- Destructuring variable declaration and assignement.

// let a = 12;

// this line can be converted to 2 steps.
// let a; // varaible declaration.
// a = 120000; // variable assignment;

// console.log(a, "a debug");

//  ------------------------------- String Literal --------------------

// var score = 115;

// // magic

// const commentary = ` Hey India's score is ${score} Enjoy!!!`;
// const scoreBoard = `  ${score} Enjoy!!!`;
// const popupButton = ` Score is  ${score} Enjoy!!!`;

// console.log(commentary);
// console.log(scoreBoard);
// console.log(popupButton);

//  ----- --------- Data Types -----------------

// 1 - Number;

// let num = 1;
// let marks = 12.5;

// console.log(marks);

// console.log(1 / 0); // Infinity

// // 2 - BigInt

// var bigInt = 12312312312312312312312312312;

// // 3 - String

// var name = "utkrsh";
// ("");
// let school = "Kiit world school ${bigInt}";
// let cha = "c"; //. this is a string unlike JAVA

// let score = `Yes !! to variable things ${bigInt}`;

// console.log(name, school, cha, score);

// // NOTE - Character is in Java but not in Javascript.

// // 4 - Boolean

// let isNameChecked = false;
// let isSunHot = true;

// // 5 - null

// let age = null;
// console.log(age, "age devug");

// // 6 - undefined (JS gives a default Value to the variables)

// let person;

// console.log(person, "person debug");

//  ----------------- Interaction ----------------------
// 1. Console.log
// console.log("hello console");

// // 2. alerts
// alert("helloa how are y");

// -----------------------------  typeOf Keyword ----------------------

// const marks = 12;
// console.log(typeof marks); // number

// const place = "delhi";
// console.log(typeof place); // string

// const bigNumber = 12312312312312312312312312312312;
// console.log(typeof bigNumber); // number

// const bool = true;
// console.log(typeof bool); //boolean

// let weather;
// console.log(typeof weather); // undefined

// let school = null;
// console.log(typeof school); // it should have been null BUT THERE IS A BUG IN JS so its answer is "Object"

// --------------------------- Type Conversion (Coersion) -------------------

// ---------- String Conversion

// Rule 1 -> String + Number(int) = String;
// String + boolean = String;
// String + String = String;
// String + bigInt = String;
// String + null = String;

// String + ANything = String;

// var numberPlusString = 1 + "hello";
// const booleanPlusString = true + "hello";
// let nullPlusString = null + "hello";
// console.log(numberPlusString);
// console.log(booleanPlusString);
// console.log(nullPlusString);

// Rule 2 - String(anything) = string
// const numString = String(1);

//  ----------- Number Conversion

// 1. String-Number to a Number ;

// const marks = "12";
// console.log(+marks); // 12 // DO not use this +, it works but it is bad for Code readibility.
// console.log(Number(marks)); // 12

// const anyRandomString = "12abcd";
// console.log(Number(anyRandomString)); // Nan // You cannot convert every STRING to a number (that dosent makes sense).

// const mult = "3" * "3"; // 9
// const minus = "3" - "3"; // 0
// const division = "3" / "3"; // 1
// const modulus = "3" % "3"; // 0

// // NOTE -> Example of String + string = string
// const addition = "3" + "3"; // "33"

// // + -> Concatination, Addition
// + -> when there is a string + means Concatination and NOT Mathematical Addition (By default).

// console.log(mult, minus, division, addition, modulus); // 9 0 1 '33' 0

//  ------------- Boolean Conversion

// Number -> Boolean
// Boolean(0); // false
// Boolean(1); // true
// Boolean(100); // true

// // Boolean(anyNumber Except 0) // Give True

// // String -> Boolean

// Boolean(""); // false
// Boolean("1"); // true

// Boolean(any length of string except 0) // Give True./

//  ------------ - - - - - - -------- Objects ------------------
// Object is a collection of Key value Pair seperated by :

// let person = {
//   name: "utkarsh",
//   class: 122,
//   "hello world": "hey's",
//   version: 8,
// };

// person = null;

// console.log(person);

// const person2 = person;

// person = null;

// console.log(person, "person"); // null
// console.log(person2, "person2"); // object

// ------ Get

// console.log(person.name, "person name debug"); // utkarsh
// console.log(person.class, "person class debug"); // 122
// console.log(person.hello world, "person class debug"); // undefined

// console.log(person["name"], "person name debug"); // utkarsh
// console.log(person["class"], "person classss debug"); // 122
// console.log(person["hello world"], "person hello world debug"); // hey's

// ------ Edit

// person.name = "akash";
// person["hello world"] = "Welcome to my BARN!!!";

// console.log(person.name, "changed name");
// console.log(person["hello world"], "changed HELLO NAME");

//  -------- delete

// console.log("version before delete", person.version); // 8

// delete person.version;
// delete person["hello world"];

// console.log("version after delete", person.version); // undefined

// console.log(person);

// ------------------   ARRAys --------------------
// [1,2,3,4,5,6,]
// java: int[] arr = {1,2,3,4}

// let arr = [1, 2, 3, 4, 5, "hey there", true];

// arr = null;

// console.log(arr);
// console.log(arr.length, "length of array"); // 7

//  ------ get

// console.log(arr[0]); // 1
// console.log(arr[1]); // 2
// console.log(arr[arr.length - 1]); // true

// NOTE: WEIRD PART - If you arr.length = 0; the array would become BLANK.
// arr.length = 0; // do not do this everrrrr..

// ------ edit

// arr[0] = 10000000;

// console.log(arr);

// ------- arrays Property

// 1.  Push..

// const newLength = arr.push("hello");

// console.log(newLength);
// console.log(arr);

// 2. Pop ...

// const LastElement = arr.pop();
// console.log(LastElement); // true
// console.log(arr);

//  --------------------- FUNCTIONS ---------------------
// Look at function folder....

// -------------------- Facts about JS Parsing ------------

// When JS File is Parsed(travelled) It is parsed from TOP to Bottom.
// Travelling has 2 Phases
// 1. Parsing phase - Only  Function DECLARATION and Variable DECLARATION.
// 2. Execution phase - Everything except in Parsing phase.
// 3. By default COde is being Parsed in GLOBAL EXECUTION CONTEXT (GEC)

// --------------------- Hoisting -----------------

/*
    Variable DECLARATION and Function DECLARATION are Hoisted.

    Hoisted means to bring these 2 things on top of the file.
*/

// console.log(namePrint("utkrsh"));
// console.log(namePrint("akash"));

// function namePrint(name) {
//   return `hey !!! ${name}`;
// }

//  ------ Fact ---
// var a = 12; // this line as 2 parts

// the above line can be de-constructed into 2 steps.

// var a; // 1. Variable Declaration
// a = 12; // 2. Variable Assignment

// Exmple 1

// console.log(a, "debug");
// var a = 12;

// console.log(a);

// Example 2:

// var a;
// a = 9;
// console.log(a);

// Example 3:

// sum();
// function sum() {
//   console.log(10);
//   return 10;
// }

// Note: LET and COnst are also Hoisted but in a special known as Temporal_deadzone.
// Temporal_deadzone dont allow to read variables By "EYE" if the property is Undefined.

// console.log(a);
// let a = 12;

//  -------------------- Basic Maths (assignment, operator) ----------

// console.log(1 + 2); // 3
// console.log(10 % 2); // 0

// console.log(Math.pow(2, 3)); // 8

// --------------- Comparisons ------------------------
// >, <, <=, >=, ==, !=, ===, !==,

// console.log(10 > 2); // true
// console.log(10 < 2); // false

// console.log(10 == 2); // false
// console.log(10 == 10); // true

// console.log("10" == 10); // true, why is this weird ????
// console.log("10" === 10); // false

// === is doing 2 things
// 1. checking the value //yes
// 2. checking the type // no

/*

    Basic Programming

*/

if (true) {
  // do soemthing
} else {
  // do something
}

//  --- Loops ->

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

// let j = 0;

// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// for in -> loops over object and its properties. ( keys ) -> will work with both Arrays and Obj
// for of -> arrays and (Iterable Objects ONLY) -> array is a default iterable Object. (values)

// questioin:  How to find iterable Objects
// answer: go to prototype of that perticular object and find Symbol.iterator. if found it is an interable Object.

// for (const item of arr) {
//   console.log(item, "for of");
// }

// let obj = {
//   name: "ut",
//   age: 50,
//   canDrive: false,
// };

// for (const key in obj) {
//   const value = obj[key];
//   console.log(key);
//   console.log(value);
// }

// What if ? I use For in for arrays.

// const arr = [99, 86, 45, 90, 100];
// // values

// for (let item of arr) {
//   console.log(item);
// } // 99, 86,45, 90,100

// for (let item in arr) {
//   console.log(item);
// } // 0,1,2,3,4

// what if ? I use For Of for arrays....

// ------ Switch

// switch(condition) {
//     case 10:
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     default:
//         console.log("default value -1");
// }
// ------------------- Advance things of variable ---------

// 1. you can define Variable as 3 ways
// let const and var

// let b = 9;
// const d = 12
// var x = 12;

// a = 12; // -> will ALways be declaared in GEC (dosent matter where this a is defined)

// console.log(a, x); // undefined, 1