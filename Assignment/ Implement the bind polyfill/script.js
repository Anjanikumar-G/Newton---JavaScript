// let dog = {
//     name: "Buddy",
//     breed: "Golden Retriever",
//     age: 3,
//     favoriteActivity: "fetch"
// };

// function introduceDog() {
//     console.log(`Meet ${this.name}!`);
//     console.log(`Breed: ${this.breed}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Favorite Activity: ${this.favoriteActivity}`);
// }

Function.prototype.myBind = function (obj = {}, ...args) {
  // Write your code here
  const originalFunc = this;
  return function (...innerArgs) {
    return originalFunc.apply(obj, args.concat(innerArgs));
  };
};

// const introduceBuddy = introduceDog.myBind(dog);
// introduceBuddy();
