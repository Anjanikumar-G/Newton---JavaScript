function getNumbersGreaterThan5(nums) {
    return nums.filter(num => num > 5);
}

// Test
let inputArray = "1 2 3 9 10 7 5 4 3".split(" ").map(Number);
let result = getNumbersGreaterThan5(inputArray);
// result.forEach(num => console.log(num));