function createClosureFunc() {
  let count = 0;
  return function () {
    if (count >= 3) {
      console.log("This function can no longer be called");
      setTimeout(() => {
        count = 0;
      }, 2000);
    } else {
      count++;
      console.log(`This function has been called ${count} times`);
    }
  };
}
