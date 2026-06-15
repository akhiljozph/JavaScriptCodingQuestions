function fizzBuzzVariations(limit, multiplierOne, multiplierTwo) {
    return Array.from({ length: limit }, (_, i) => {
        const value = i + 1;
        let str = '';

        if (value % multiplierOne === 0) str += 'Fizz';
        if (value % multiplierTwo === 0) str += 'Buzz';

        return str || value;
    });
}

console.log(fizzBuzzVariations(10, 2, 3));