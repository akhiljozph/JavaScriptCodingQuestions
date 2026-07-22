function groupBy(arr, fn) {
    const grouped = {};

    for (const item of arr) {
        const key = fn(item);

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);
    }

    return grouped;
}

console.log(
    groupBy([6.1, 4.2, 6.3], Math.floor)
);