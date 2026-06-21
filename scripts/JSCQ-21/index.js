function findLargest(stringsNNumbers) {
    // const numbers = stringsNNumbers.filter((el) => Number.isFinite(el));
    // const numbers = stringsNNumbers.filter((el) => typeof el === 'number');
    const numbers = stringsNNumbers.filter((el) => !isNaN(el));

    return Math.max(...numbers);
}

const stringsNNumbers = [1, 'a', 10, 'r', '11'];
console.log(findLargest(stringsNNumbers));