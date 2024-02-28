const addAndSubtract = {
  num1: 6,
  num2: 3,
  add() {
    return this.num1 + this.num2;
  },
  subtract() {
    return this.num1 - this.num2;
  },
};
// write code here
// return the output, do not use console.log
const calculator = Object.create(addAndSubtract);

calculator.product = function () {
  return this.num1 * this.num2;
};

calculator.divide = function () {
  return this.num1 / this.num2;
};

// Give num1 and num2 as 6 and 3 respectively in the input section separated by a comma and then run the code to check the output
