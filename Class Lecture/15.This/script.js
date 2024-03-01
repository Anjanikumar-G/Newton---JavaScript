// ----------------- FEAR OF THIS with FUNCTION KEYWORD -------------------

// What is a call Site ?

// function foo() {
//   console.log("foo");
// }

// foo(); // this is the call site of FOO

// const fooCopy = foo; // is this a call site of FOO ?  NO

// fooCopy(); // this is also a CALL SITE

// // THIS keyword value is DECIDED by CALL SITE.

// function bar() {
//   foo; // is this a call site for FOO ? NO

//   foo(); // is this a call site for FOO ? YES
// }

//  ------------------- 4 RULES to determine the Value of this keyword -------------------

/*
 *
 *
  Rule 1 -> default binding 

*/

// function foo() {
//   // context -> this -> null/ window
//   console.log(this, "context");
//   console.log("hey there I am foo");
// }

// foo(); // is this a call site ? yes
// have I given any Extra Information to Foo() ? // NO

/*
  Rule 2 -> Implicit binding
  Implicit js is doing hard work for you 
*/

// example 1.

// var obj = {
//   name: "utkarsh",
//   rollNumber: 12,
//   func: function () {
//     // context -> this -> obj
//     console.log(this, "context");

//     console.log(`hello guys my name is ${this.name}`);
//   },
// };

// console.log(obj.name); // utkarsh
// console.log(obj.rollNumber); // 12
// // obj.func(); // hello guys

// obj.func(); // is this a call site ? YES
// // have I given any Extra Information to func() ? yes

// example 2

// var obj = {
//   name: "utkarsh",
//   rollNumber: 12,
//   func: function () {
//     // context -> this -> obj
//     console.log(this, "context");

//     console.log(`hello guys my name is ${this.name}`);
//   },
// };

// obj.func(); // is this a call site ? // yes
// have I given some Extra info to func() ?  // yes

// hello guys my name is utkarsh

// console.log(" ---- - - - - - -x-x-x-x-x-x-x-x-- - - - - - - -");

// const funcCopy = obj.func; // is this a CALL SITE ? // NOOOOOOOO

// funcCopy(); // is this a call site ? // yes
// have I given some Extra info to funcCopy() ? // NO

// Context as null/window

// hello guys my name is

//example 3 ->

// let obj2 = {
//   name: "utkarsh",
//   func: function () {
//     // context -> this -> obj2
//     console.log(`hello... ${this.name}`);
//   },
// };

// let obj1 = {
//   name: "akash",
//   rollNumber: 12,
//   obj2: obj2,
// };

// obj1.obj2.func(); // answer for this ?
// is this a call site? YES
// have I given any Extra information to this call site ? // YES

/*
  Rule 3 -> Explicit Binding 
  // where you are doing the hardwork. 
  as a dev you are telling JS what Context I need.

  1. call 
  2. apply 
  3. bind
*/

// const obj = {
//   name: "utkarsh",
//   rollNumber: 42,

//   func: function (a, b) {
//     // context -> this -> obj2
//     console.log(
//       `Hello .. ${this.name} and rollNoo. ${this.rollNumber} params ${a}, ${b}`
//     );
//   },
// };

// let obj2 = {
//   name: "akash",
//   rollNumber: 1,
//   obj: obj,
// };

// obj.func(60, 70); // is this a call site? YES
// have I given any extra INFO ? yes

// obj.func.call(obj2, 100, 200);
// obj.func.apply(obj2, [90, 190]);
// is this a callsite ? // yEs
// have I given any extra info ? // YES

// ------ bind --------

// const obj = {
//   name: "utkarsh",
//   rollNumber: 42,

//   func: function (a, b) {
//     // context -> this -> window/null
//     console.log(
//       `Hello .. ${this.name} and rollNoo. ${this.rollNumber} params ${a}, ${b}`
//     );
//   },
// };

//  callback -> setTime

// const copyFunc = obj.func;

// // do some work

// copyFunc.call(obj, 1, 9); // ? call site yes
// // any extra info  NO ?

// // YOU HAVE CONTROL OVER LINE 169

//  ----------- PROBLEM of LOSSING THIS ---------------

// function googleouter(fun) {
//   // google works here lgging doing tracking

//   console.log("inside google function");
//   fun();

//   console.log("end google function");

//   // at this point is this a call site ? YES
//   // have google given any Extra Information ? NO
// }

// const funcCopy = obj.func;

// googleouter(funcCopy);

// WILL I HAVE CONTROL OVER LINE 179 ? NO

//  ----------- SOLUTION ---------------

// const funcCopy2 = obj.func.bind(obj, 1, 2); //it createss a copy (in reality it dont) of func with CONTEXT as obj

// googleouter(funcCopy2);

// NOTE: Whenever you hear CALLBACK alongside with THIS (context). THINK ABOUT ... BIND

/*
 *
 *
  Rule 4 -> new Keyword.
*/

// const obj2 = {
//   func: function () {},
// };

// const a = new ob2.func();

// function Car(name, speed, model) {
//   this.name = name;
//   this.speed = speed;
//   this.model = model;
// }

// const ferrari = new Car("ferrari", 300, "v8");
// const waganar = new Car("suzuki", 100, "wagan R");

// console.log(ferrari);
// console.log(waganar);

// -0------------------ PRECEDENCE --------> If 2 rules are fighting (if they can fight) who will win

// new >>>>>>>>>> Explicit binding >> Implicit binding > default...

// ------------------------ ULTIMATE THIS QUESTION --------------------

// function printThis(params) {
//   // COntext - > this -> ????
//   console.log(this, params);
// }

// let obj = {
//   a: 10,
//   b: 80,
//   c: printThis,
//   d: function (params) {
//     // context - this -> obj
//     console.log(this);

//     printThis(100);

//     let copy = this.c;
//     copy();

//     this.c();

//     console.log(this.c === printThis);
//   },
// };

// obj.d(); //

// 5 outputs  -------
// obj
// window, 100
// window , undef
// obj, undef
// true

//  ------------- THIS keyword with ARROW FUNCTIONS --------------
// Rules of implicit, Explicit binding doest work...
// NOTE: this keyword will be always taken from the PARENT CONTEXT.

// -------- Implicit Binding ---------

// let obj = {
//   name: "utkarsh",
//   func:  () => {
//     console.log(this); // window
//     // context -> this   // it will always take the parent context
//     console.log(`Name is ${this.name}`);
//   },
// };

// console.log(this); // global / null / window

// obj.func(); // call site  yes

// ------- Explicit binding ----

// let obj2 = {
//   name: "utkarsh",
//   func: () => {
//     console.log(this); // window
//     // context -> this   // it will always take the parent context
//     console.log(`Name is ${this.name}`);
//   },
// };

// // What is the parent context of func -> window

// obj2.func.call(obj2);

let obj = {
  name: "akash",

  func: function () {
    // context -> this -> obj
    const inner = () => {
      // this -> parent's this, and the parent is func (function).
      console.log(`hellooo ${this.name}`); // akash
    };

    console.log(`inner function ${this.name}`); // akash

    inner(); //
  },
};

obj.func();

// --------- Interview Questions --------------

// question :

/*
const obj = {
  name: "utkrsh",
  func: function () {
    this.standard = "12";
    console.log(`hello ${this.name}`);
  },
};

const objjj = new obj.func();

console.log(objjj);

/*

// answer:

/*
at line 332 (const objjj = new obj.func();)
  this is a fight Between new Keyword RULE and Inplicit binding Rule 
  and New keyword wins 
*/

/* hello undefined
    {
      standard: 12
    }
*/

// Explanation

// const obj = {
//   name: "hello",
//   func: function (name, age) {
//     this.name = name;
//     this.age = age;
//   },
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   return 1;

//   return 1000;
// }

// // const ans = Person("ankit", 12);
// // console.log(ans, "ans");

// const utkasrh = new Person("utkarsh", 27);
// const vikash = new obj.func("vikash", 16);

// console.log(utkasrh);
// console.log(vikash);

// question

/*
const obj = {
  name: "utkrsh",
  func: function () {
    this.standard = "12";
    this.name = "anukush"
    console.log(`hello ${this.name}`);
  },
};

const objjj = new obj.func();

console.log(objjj);

*/

// answer

/*

hello anukush

{
    "standard": "12",
    "name": "anukush"
}

*/
