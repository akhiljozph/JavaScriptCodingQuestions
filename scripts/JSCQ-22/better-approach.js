function findEvenNumbers(numbers) {
    return numbers.filter(el => el % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbers));
