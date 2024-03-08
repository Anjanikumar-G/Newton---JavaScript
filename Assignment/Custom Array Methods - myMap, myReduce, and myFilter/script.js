Array.prototype.myMap = function (cb) {
  // Complete the implementation of myMap
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }
  return newArray;
};

Array.prototype.myReduce = function (cb, initialValue) {
  // Complete the implementation of myReduce
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

Array.prototype.myFilter = function (cb) {
  // Complete the implementation of myFilter
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};
