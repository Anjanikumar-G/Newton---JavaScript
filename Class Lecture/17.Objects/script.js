// ------ Object Methods ---------------

// 1. Object.assign:

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source);

console.log(target);

// 2. Object.create: create an object with the SPecified Prototype

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

console.log(me); // {} , [[prottype]] = person

// 3. Object.defineProperty

// 4. Object.entries: arrays of [key, value] pair

const obj = {
  key1: "somestring",
  key2: 42,
};

const entriesOfObj = Object.entries(obj);
console.log(entriesOfObj);

// 5. hasOwnProperty // VV importnat property

const object1 = Object.create({ key2: "value2" });
object1.property1 = 42;

console.log(object1);
console.log(object1.hasOwnProperty("key2")); // false
console.log(object1.hasOwnProperty("property1")); // true

// 6. Object.keys()

console.log(Object.keys(object1));

// 7. Object.values()
console.log(Object.values(object1));
