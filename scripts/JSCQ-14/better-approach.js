function findMaxDifference(numbers) {
    if (numbers.length < 2) {
        return "Array doesn't have enough elements";
    }

    let min = numbers[0], max = numbers[0];

    numbers.forEach((num) => {
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
    });
    return max - min;
}

const numbers = [1, 2, 6];
console.log(findMaxDifference(numbers));