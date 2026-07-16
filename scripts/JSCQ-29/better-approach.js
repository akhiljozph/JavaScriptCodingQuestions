function reduceByAdjacentDifferences(numbers) {
    if (numbers.length === 1) {
        return numbers[0];
    }

    const reduced = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        reduced.push(Math.abs(numbers[i] - numbers[i + 1]));
    }

    return reduceByAdjacentDifferences(reduced);
}

const numbers = [8, 5, 2, 9];
console.log(reduceByAdjacentDifferences(numbers));