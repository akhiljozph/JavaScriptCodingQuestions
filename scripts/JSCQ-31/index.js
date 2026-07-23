function flattenObject(obj) {

    const result = {};
    const parent = '';

    Object.values(obj).entries(([key, value]) => {

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            parent = obj[index]
            flattenObject(value);
        }

        result[`${}`];
        parent = '';
    });

    return result;
}

const obj = {
    a: {
        b: {
            c: 1
        },
        d: 2
    },
    e: 3
};
console.log(flattenObject(obj));
