function findCommon(firstArray, secondArray) {
    const arraySet = new Set(firstArray);
    const common = secondArray.filter(item => arraySet.has(item));
    return [...new Set(common)];
}

const firstArray = [1, 0, 2, 1, 5, 6];
const secondArray = [1, 4, 0, 8, 7, 6];
console.log(findCommon(firstArray, secondArray));