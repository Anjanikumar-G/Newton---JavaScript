// console.log("hello");

// Hey Wait for 5000 ms After that I will RUN THE () => {} (callback function).
// setTimeout( () => {},  5000 )

// setTimeout(() => {
//   console.log("hello there after 5 seconds");
// }, 5000);

// Question: what output I will get ?
console.log("a");

setTimeout(() => {
  console.log("b");
}, 3000);

// 3000 ms is the MINIMUM guranteed time, MAXIMUM WAIT TIME CAN BE ANYTHING.

console.log("c");
console.log("d");
// 1
console.log("e");
console.log("f");
// 2
console.log("g");
console.log("h");
// 3
console.log("i");
console.log("j");
// 4
console.log("k");
console.log("l");
console.log("m");

// ------------- Algorithm Of Event Loop ---------------

/*
    1. as soon as EXECUTER sees (setTimeout)
        1.1 it sends callback function to WEB API memory 
        1.2 it starts the clock.

    2. Event loop is asking the question to Stack (after every 200ms)
        1.1 Are you empty ? -> NO (nothng happens)
        1.1 Are you empty ? -> YES (asks another question to the QUEUE (do you have item))

    3. as soon as the clock becomes 0 the callback function which was inside the web api 
        memory is now pushed to the QUEUE

    4. Again the Event loop is asking the question to Stack (after every 200ms)
        4.1 Are you empty ? -> NO (nothng happens)
        4.1 Are you empty ? -> YES (asks another question to the QUEUE (do you have item))
        4.2 If queue answer is also YES then it means both the answers are YES 

        //**** It means the stack is empty and Queue has item 

    5. Item will be taken out from the queue and pushed inside the Stack to be executed in the last.

    



*/

// NOTE : Video about event loop https://www.youtube.com/watch?v=8aGhZQkoFbQ

// Question 1:

/*console.log("a")

try {
  setTimeout(() => {
    console.log("hello");
  }, 2000);
} catch (err) {
  console.log("hi");

  console.log(err);
}

console.log("c")

*/

// answer: a, c and hello after 2 seconds.

// Question 2

/*
try {
  setTimeout(() => {
    throw new Error("hello");
  }, 2000);

  console.log("a");
} catch (err) {
  console.log(err);
}
*/

// answer : a, hello Error in RED

// Question 3:

/*try {
  console.log("a");
  throw new Error("hello");
} catch (err) {
  console.log(err);
}
*/

// answer : a, hello Error in NOT RED (basically handled) .

// Question 4:

let obj = {
  a: 1000,
  func: function () {
    let b = 12;
    setTimeout(function () {
      console.log("hello", this.a);
    }, 2000);
  },
};

obj.func();

// answer: hello undefined.

// Question 5:

let obj2 = {
  a: 1000,
  func: function () {
    let b = 12;
    setTimeout(() => {
      console.log("hello", this.a);
    }, 2000);
  },
};

obj2.func();

// answer: hello 1000

// Question 6:

let obj3 = {
  a: 1000,
  func: function () {
    let b = 12;
    setTimeout(() => {
      console.log("hello", this.a, b);
    }, 2000);
  },
};

obj3.func();

// answer: hello 1000 12

// Question 7:

let obj4 = {
  a: 1000,
  func: function () {
    let b = 12;
    setTimeout(function () {
      console.log("hello", this.a, b);
    }, 2000);
  },
};

obj4.func();

// answer hello undef 12\

// ------------- ClearTimeout -----------------

const id = setTimeout(() => {
  console.log("after 15 seconds");
}, 15000);

clearTimeout(id);

// with this Settimeout CallbackFunction will not be executed.

// Question 8:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("c");

console.log("D");

// answer: A, c, B

// Question 9:

var a = 12;

setTimeout(() => {
  console.log(a);
  var a = 99;
}, 0);
console.log("a");

// answer: a undefined

// Question 10:

var a = 12;

setTimeout(() => {
  console.log(a);
}, 0);
console.log("a");

// answer: a 12

// Question 11:

console.log("a");

setTimeout(() => {
  console.log("c");
}, 3000);
setTimeout(() => {
  console.log("d");
}, 1000);
setTimeout(() => {
  console.log("e");
}, 2000);

console.log("b");

// answer: a b d e c.

// Question 12:

console.log("a");

setTimeout(() => {
  console.log("c");
}, 2000);
setTimeout(() => {
  console.log("d");
}, 1000);
setTimeout(() => {
  console.log("e");
}, 2000);

console.log("b");

// Answer:  a b d c e

// ---------------------------- Interval -------------------

console.log("a");

const idInterval = setInterval(() => {
  console.log("hello");
}, 2000);

// clearInterval(idInterval);

console.log("b");

// a b hello, hello, hello, hello ............ inifinite responses

// if you want to stop use clearInterval(idInterval)

// Question 13:

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0  1 2 3 4

for (var j = 0; j < 5; j++) {
  console.log(j);
}
// 0  1 2 3 4

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 4000);
}

// wait 0 wait 1 wait 2 wait 3 wait 4 wait  /// THIS IS WRONG OUTPUT

// wait 0 1 2 3 4 -> // THIS IS CORRECT OUTPUT.

for (var j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}

// 55555

// Question 14: How to fix this.. ? DO NOT SAY LET AND CONST KEYWORD.

// TODO: Some student will do this. I will not.
// HINT: IIFE...

for (var j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}

// answer ..
