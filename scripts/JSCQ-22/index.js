function findEvenNumbers(numbers) {
    return numbers.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc.push(curr);
        }

        return acc;
    }, [])
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbers));