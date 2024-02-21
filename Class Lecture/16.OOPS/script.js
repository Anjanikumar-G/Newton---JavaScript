// ----------- OOPS  -----------

// Question: How to create an object

// way 1

const obj = {};

// way 2

class Person {
  name;
  age;

  // CONSTRUCTOR FUNCTION
  constructor(inputName, inputAge) {
    this.name = inputName;
    this.age = inputAge;
  }

  // methods: -> function inside the Class

  canPersonWalk() {
    console.log("yes i can walk");
  }
}

const utkasrhPersonObject = new Person("utkarsh", 19);
const ankusPersonObject = new Person("ankush", 19);

console.log(utkasrhPersonObject);
console.log(ankusPersonObject);
console.log(
  utkasrhPersonObject.canPersonWalk === ankusPersonObject.canPersonWalk,
  "class"
); // true

// utkasrhPersonObject  is an INSTANCE ofPerson class .
// ankusPersonObject  is an INSTANCE of Person class.

// --------------- Inheritance ----------------

// parent class
class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }
}

// child class
class SportCaptain extends Student {
  favTool;
}

// ------------------- BEFORE CLASS KEYWORD (BEFORE ES6)  CONSTRUCTOR FUNCTION -------------

// CONSTRUCTOR FUNCTION are NORMAL function (its just a Special Name)

// PersonFunc is a CONSTRUCTOR FUNCTION
function PersonFunc(inputName, inputAge) {
  this.name = inputName;
  this.age = inputAge;

  // method

  this.canPersonWalk = function () {
    console.log("yes i can walk constructor func");
  };
}

const amithObject = new PersonFunc("amith", 19);
const priyankaObject = new PersonFunc("priyanka", 20);
amithObject.canPersonWalk();

console.log(amithObject);
console.log(priyankaObject);

console.log(
  amithObject.canPersonWalk === priyankaObject.canPersonWalk,
  "constructor function "
); // false

//Question: Having the limited knowledge Which is better Construtor FUnc or CLasss ?
/* Answer
  Classes is better 
  WHY ? 

  Classes methods are SHARED among INSTANCES 

  CONSTRUCTOR FUNCTION mehtods are Newly created for EVERY Instance.

*/