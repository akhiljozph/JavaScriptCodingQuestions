function findSumOfNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 5, 9, 10, 11, 4];
console.log(findSumOfNumbers(numbers));