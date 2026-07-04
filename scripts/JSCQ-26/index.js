function findCommon(firstArray, secondArray) {
    const iterableArray = (firstArray.length > secondArray.length) ? firstArray : secondArray;
    const nonIterableArray = (firstArray.length > secondArray.length) ? secondArray : firstArray;
    const result = [];

    for (let item of iterableArray) {
        const response = nonIterableArray.find((elem) => elem === item);
        if (response !== undefined && !result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

const firstArray = [1, 0, 2, 1, 5, 6];
const secondArray = [1, 4, 0, 8, 7, 6];
console.log(findCommon(firstArray, secondArray));