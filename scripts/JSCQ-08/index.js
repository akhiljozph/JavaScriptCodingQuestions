function findSecondLargest(numbers) {
    let uniqueNumbers = new Set(numbers);
    let largest = -Infinity, secondLargest = -Infinity;

    for (let uniqueNumber of uniqueNumbers) {
        if (uniqueNumber > largest) {
            secondLargest = largest;
            largest = uniqueNumber;
        } else if (uniqueNumber > secondLargest) {
            secondLargest = uniqueNumber;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

const numbers = [2, 6, 4, 5, 7, 8, 9, 1, 10, 11];
console.log(findSecondLargest(numbers));