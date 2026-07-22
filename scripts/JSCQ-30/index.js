function groupBy(arr, fn) {
    let groupObj = {};

    for (let item of arr) {
        if (groupObj[fn(item)]) {
            groupObj[fn(item)].push(item);
        } else {
            groupObj[fn(item)] = [item]
        }
    }

    return groupObj;
}

console.log(
    groupBy([6.1, 4.2, 6.3], Math.floor)
);
