const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a * b) / gcd(a, b);

function fizzBuzzVariations(limit, multiplierOne, multiplierTwo) {
    const result = new Array(limit);
    const lcmValue = lcm(multiplierOne, multiplierTwo);

    for (let i = 0; i < limit; i++) {
        const value = i + 1;

        if (value % lcmValue === 0) {
            result[i] = 'FizzBuzz';
        } else if (value % multiplierTwo === 0) {
            result[i] = 'Buzz';
        } else if (value % multiplierOne === 0) {
            result[i] = 'Fizz';
        } else {
            result[i] = value;
        }
    }
    return result;
}

console.log(fizzBuzzVariations(10, 2, 3));