function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

const numbers = [1, 2, 3, 2, 4, 5, 6, 8];
console.log(removeDuplicates(numbers));