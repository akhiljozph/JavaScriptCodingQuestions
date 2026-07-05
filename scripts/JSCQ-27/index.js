function findMaximumSumOfNonAdjacentElements(numbers) {
    if (!numbers || numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];

    let includePrevious = numbers[0];
    let excludePrevious = 0;

    for (let i = 1; i < numbers.length; i++) {
        let currentExclude = Math.max(includePrevious, excludePrevious);

        let currentInclude = excludePrevious + numbers[i];

        includePrevious = currentInclude;
        excludePrevious = currentExclude;
    }

    return Math.max(includePrevious, excludePrevious);
}

const numbers = [8, 1, 4, 9, 3, 2, 7];
console.log(findMaximumSumOfNonAdjacentElements(numbers));

