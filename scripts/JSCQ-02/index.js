const empOne = [
    {
        id: 1,
        name: "Akhil Joseph",
        department: "Delivery"
    }, {
        id: 2,
        name: "Abraham Joseph",
        department: "Delivery"
    }
];

const empTwo = [
    {
        id: 1,
        name: "Akhil Joseph",
        department: "Delivery"
    }, {
        id: 2,
        name: "Abraham Joseph",
        department: "Delivery"
    }, {
        id: 3,
        name: "Mariya James",
        department: "Delivery"
    }
];

function mergeArraysAndReturnUnique(empOne, empTwo) {

    const arrayWithUniqueElements = [];
    const mergedArrays = [...empOne, ...empTwo];

    for (let obj of mergedArrays) {
        if (!arrayWithUniqueElements.find(el => el.id === obj.id)) {
            arrayWithUniqueElements.push(obj);
        }
    }

    return arrayWithUniqueElements;
}

console.log(mergeArraysAndReturnUnique(empOne, empTwo));