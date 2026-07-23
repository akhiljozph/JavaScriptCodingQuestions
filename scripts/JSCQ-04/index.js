const subArray = [0, 1, [3, 5, [2], 6], 4, 8];

function flattenArray(subArray) {
    let result = [];

    for (let element of subArray) {
        if (Array.isArray(element)) {
            // result.push(...flattenArray(element));
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

console.log(flattenArray(subArray));