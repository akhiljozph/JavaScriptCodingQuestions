function reduceByAdjacentDifferences(numbers) {

    const newArray = [];

    if (numbers.length > 1) {

        for (let i = 0; i < numbers.length - 1; i++) {
            const max = Math.max(numbers[i], numbers[i + 1]);
            const min = Math.min(numbers[i], numbers[i + 1]);

            newArray.push(max - min);
        }
        return reduceByAdjacentDifferences(newArray);

    }

    return numbers[0];

}

const numbers = [8, 5, 2, 9];
console.log(reduceByAdjacentDifferences(numbers));