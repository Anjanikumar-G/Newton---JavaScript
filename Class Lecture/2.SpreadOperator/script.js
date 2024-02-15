// ---------- ----- SPREAD OPERATOR --------
// Syntax = ...

// spread operator takes all the inside values of the OBJECT (arrays, Object) and SPREAD it out.

// const arr = [1, 2, 3, 4, 5]; // abc@123

// const arrCopy = [...arr]; // abc@124

// console.log(arr); // [1,2,3,4,5]
// console.log(arrCopy); // [1,2,3,4,5]
// console.log(arrCopy == arr); // false

// const math = {
//   marks: 100,
//   grade: "A+",
// }; // abc@123

// const mathCopy = {
//   ...math,
// }; // abc@124

// console.log(math);
// console.log(mathCopy);
// console.log(math === mathCopy); // false

// -------------- Deep copy and SHALLOW copy -----

// The copies that we did above are SHALLOW COPIES .....

// const person = {
//   name: "utkarsh",
//   class: 12,
//   address: {
//     street: "ranibagh",
//     pincode: 110034,
//     houseNumber: "3333-c",
//   },
//   canDrive: false,
// };

// const personCopy = { ...person };

// personCopy.name = "lakshay"; // no change in Person object
// personCopy.address.pincode = 000000; // changing address in PersonCopy will change the address in Person also./

// console.log(person, "originalPerson");
// console.log(personCopy);
// console.log(person === personCopy);

//  ------- Hack to have a Deep COpy But should Not be used ......

// const person = {
//   name: "utkarsh",
//   class: 12,
//   address: {
//     street: "ranibagh",
//     pincode: 110034,
//     houseNumber: "3333-c",
//   },
//   canDrive: false,
// };

// const copyPerson = JSON.parse(JSON.stringify(person)); // Deep copy

// copyPerson.name = "lakshay";
// copyPerson.address.pincode = 000000; // this will only change the Address of the Copy and not the Original
// // like it used to have in SHALLOW COPY.

// console.log(person, "originalPerson");
// console.log(copyPerson, "copy");
// console.log(person === copyPerson); // false