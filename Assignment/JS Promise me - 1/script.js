function promiseMe(time, data) {
  // return the output using return keyword
  // do not console.log it
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
