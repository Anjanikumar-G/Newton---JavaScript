// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N)
{
    // Your code here
    let count = 0;
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
    
    function isPrime(num) {
        if (num < 2){
            return false;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}