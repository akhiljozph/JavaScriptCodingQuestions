function findMaxDifference(numbers) {
    if (numbers.length < 2) {
        return "Array doesn't have enough elements";
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return max - min;
}

const numbers = [1, 2, 6];
console.log(findMaxDifference(numbers));