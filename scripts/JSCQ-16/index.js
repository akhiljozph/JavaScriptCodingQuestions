function fizzBuzzVariations(limit, multiplierOne, multiplierTwo) {
    return Array.from({ length: limit }, (_, i) => {
        const value = ++i;
        if (value % multiplierOne === 0 && value % multiplierTwo === 0) {
            return 'FizzBuzz';
        } else if (value % multiplierTwo === 0) {
            return 'Buzz';
        } else if (value % multiplierOne === 0) {
            return 'Fizz';
        } else {
            return value;
        }
    });
}

console.log(fizzBuzzVariations(10, 2, 3));