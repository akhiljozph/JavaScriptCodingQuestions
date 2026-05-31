function findMissingNumbers(numbers, start, end) {

    const numSet = new Set(numbers);
    const result = [];

    for (let i = start; i <= end; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }

    return result;
}

const numbers = [0, 1, 3, 6, 5];
console.log(findMissingNumbers(numbers, 0, 7));