function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    // write code here
    // use console.log for output
        const expectedSum = ((upperBound - lowerBound + 1) * (upperBound + lowerBound)) / 2;
        const actualSum = arrayOfIntegers.reduce((sum, num) => sum + num, 0);
    
        // Print the missing number
        console.log(expectedSum - actualSum);
    }
    const input =  [[1, 4, 3] ,4, 1];
    const arr = input[0];
    const upper_bound = input[1];
    const lower_bound = input[2];