// Closures ....

// 1. Lexical Environment ->  Surrounding Env

// let a = 12; // Global ?

// function abc() {
//   // env   Global
//   return b;
// }

// let b = 1222; // globabl

/*
  Closure: function + its Lexical Environment (Surrounding Env)

  Every function makes a CLosure.....
*/

// console.log(abc()) //

// example 2 ->

// let a = 10;

// function foo() {
//   let b = 100;

//   function bar() {
//     let c = 12;
//     return a + b + c + d;
//   }

//   let d = 90000;

//   return bar;
// }

// const result = foo();

// result(); //

// ------- example 3 -->

// counter

// Answer 1 :

let count = 0;

function counter() {
  count++;
  return count;
}

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/* now you want to achieve this 


// let counterInital = someFun; ///
// let counter2 = someFun;

// counterInital() // 1
// counterInital() // 2

// counter2() // 1
// counter2() // 2

*/

function someFun() {
  let count = 0;

  function counter() {
    count++;
    return count;
  }

  return counter;
}

let counterInital = someFun(); /// counter + LexicalEnv { count = 0}
let counter2 = someFun(); // counter + LxicalEnv { count = 0}

console.log(counterInital()); // 1
console.log(counterInital()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2