function checkCanIVote(time, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("You can vote");
      } else {
        reject("You can not vote");
      }
    }, 1000);
  });
}
