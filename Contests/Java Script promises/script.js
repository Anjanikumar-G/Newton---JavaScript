//Do no change the function name
function func(data) {
  return new Promise((resolve, reject) => {
    if (data % 2 === 0) {
      setTimeout(() => reject("even"), 2000);
    } else {
      setTimeout(() => resolve("odd"), 1000);
    }
  });
}
