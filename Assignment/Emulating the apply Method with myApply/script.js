// let character = {
//     name: "Darth Vader",
// };

// function greet(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
// }

Function.prototype.myApply = function (context = {}, args = []) {
  // Write your code here
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  const originalFunction = this;
  const boundFunction = function () {
    return originalFunction.apply(context, args);
  };
  return boundFunction;
};

// const boundGreet = greet.myApply(character, ["May the Force be with you"]);
// boundGreet();
