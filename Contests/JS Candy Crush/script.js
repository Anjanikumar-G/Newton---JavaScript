// n is the number (number of candies) as  provided in input
function findCost(n) {
  // write code here
  // do not console.log the answer
  // return answer as a number
  let totalCost = 0;
  while (n > 0) {
    const candy = Math.ceil(n / 3);
    totalCost += candy * candy;
    n -= candy;
  }
  return totalCost;
}
