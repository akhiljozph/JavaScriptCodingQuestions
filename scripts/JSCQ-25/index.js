function traverseMatrix(matrix) {
    let result = [];

    for (let arr of matrix) {
        if (Array.isArray(arr)) {
            result.push(...arr)
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(traverseMatrix(matrix));