function findLargest(stringsNNumbers) {
    const numbers = stringsNNumbers.map((el) => Number(el)).filter((el) => !isNaN(el));

    return numbers.length > 0 ? Math.max(...numbers) : undefined;
}

const stringsNNumbers = [1, 'a', 10, 'r', '11'];
console.log(findLargest(stringsNNumbers));