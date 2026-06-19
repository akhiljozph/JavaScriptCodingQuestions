function isPrime(num) {
    if (num < 2) return `Number ${num} is not prime.`;

    const squareRoot = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= squareRoot; i++) {
        if (num % i === 0) {
            return `Number ${num} is not prime.`;
        }
    }

    return `Number ${num} is prime.`;
}

console.log(isPrime(5));