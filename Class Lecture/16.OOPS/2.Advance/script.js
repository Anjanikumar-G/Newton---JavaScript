// class Student {
//   name;
//   standard;

//   constructor(name, standard) {
//     this.name = name;
//     this.standard = standard;
//   }

//   markAttendance() {
//     console.log(`hey there ${this.name} is present: Normal classroom attance`);
//   }

//   grades() {
//     console.log("grades nice");
//   }
// }

// const ankit = new Student("ankit", 9);

// class SportCaptain extends Student {
//   favTool; // Bat, ball, badmintion, tennis racket

//   constructor(name, stand, favTool) {
//     super(name, stand); // I am calling Constructor of parent
//     this.favTool = favTool;
//   }

//   // Method overriding ...
//   // child markAttendance method will OVERIDE THE Parent markAttendance
//   markAttendance() {
//     console.log(`sports captain ${this.name} is present in the ground`);
//   }

//   routine() {
//     console.log("play cricket all day and do not study");

//     super.grades(); // -> this can be done
//   }
// }

// const virat = new SportCaptain("virat", 12, "bat");

// -------------   BEFORE ES6 we use CONSTRUCTOR FUNCTION ---------------

// Student class (Parent)
// function StudentFunc(name, standard) {
//   this.name = name;
//   this.standard = standard;

//   // Adding methods like this will NOT BE OPTIMAL LIKE IN CLASSES
///// ----- x-x-x-x-x-x-x- WE SHOULD NOT DO THIS ----x-x-x-x-x-x--x-
//   // this.markAttendance = function () {
//   //   console.log(`hey there ${this.name} is present: Normal classroom attance`);
//   // };

//   // this.grades = function () {
//   //   console.log("grades nice");
//   // };
// }

// ES5 Student class

/* 1. Create the child class and parent class 
      1.1 all the properties should be added directly
      1.2  and all the Methods should be added in prototype.
  
      2. Now think about extends
        2.1Main goal of extends is to add the PROTOTYPE OF PARENT 

*/

// Parent class
function StudentFunc(name, standard) {
  this.name = name;
  this.standard = standard;
}

StudentFunc.prototype.markAttendance = function () {
  console.log(`hey there ${this.name} is present: Normal classroom attance`);
};

StudentFunc.prototype.grades = function () {
  console.log("grades nice");
};

const ankitFunc = new StudentFunc("ankit", 9);

console.log(ankitFunc);

// -------- .. . .x.x.x..x.x.x.x.. ---------

// Child Class

function SportsCaptainFunc(name, stand, favTool) {
  // context = this = {}
  // call the super class
  // whatever context is with the CHILD should also go to the parent.
  StudentFunc.call(this, name, stand);

  this.favTool = favTool;
}

//  -------- Now we handle EXTENDS keyword ------------

// extends ... 2 steps
// What I Identified.... viratFunc.prototype.prototype is not containing Parent Methods

// SportsCaptainFunc.prototype = Object.create()

// I want to create an Empty Object with Prototype as  StudentFunc.prototype

function extendsss() {
  const objectWithParentPrototype = Object.create(StudentFunc.prototype); // {} [[protye]] = parent
  SportsCaptainFunc.prototype = objectWithParentPrototype;

  // we loose the child Constructor  and child Mehtods ------

  SportsCaptainFunc.prototype.constructor = SportsCaptainFunc;
}

extendsss();

SportsCaptainFunc.prototype.markAttendance = function () {
  console.log(`sports captain ${this.name} is present in the ground`);
};

SportsCaptainFunc.prototype.routine = function () {
  console.log("play cricket all day and do not study");
};

const viratFunc = new SportsCaptainFunc("virat", 12, "bat");
console.log(viratFunc);
