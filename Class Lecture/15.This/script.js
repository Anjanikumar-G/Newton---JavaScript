// ----------------- FEAR OF THIS -------------------

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

var obj = {
    name: "utkarsh",
    rollNumber: 12,
    func: function () {
      // context -> this -> obj
      console.log(this, "context");
  
      console.log(`hello guys my name is ${this.name}`);
    },
  };
  
  obj.func(); // is this a call site ? // yes
  // have I given some Extra info to func() ?  // yes
  
  // hello guys my name is utkarsh
  
  console.log(" ---- - - - - - -x-x-x-x-x-x-x-x-- - - - - - - -");
  
  const funcCopy = obj.func; // is this a CALL SITE ? // NOOOOOOOO
  
  funcCopy(); // is this a call site ? // yes
  // have I given some Extra info to funcCopy() ? // NO
  
  // hello guys my name is