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
    return [...new Map([...empOne, ...empTwo].map(obj => [obj.id, obj])).values()];
}
console.log(mergeArraysAndReturnUnique(empOne, empTwo));