# JavaScriptCodingQuestions

## JSCQ-1

### **Find the first non repeating character from the provided word.**

#### Use Case - 1

```
findFirstNonRepeatingChar('swiss');
```

Expected output: ***w***

#### Use Case - 2

```
findFirstNonRepeatingChar('Swiss');
```

Expected output: ***w***

## JSCQ-2

### **Given two arrays. Merge the arrays and return an with only unique elements.**

### Use Case - 1

```
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
```

Expected Output:
```
[
  { id: 1, name: 'Akhil Joseph', department: 'Delivery' },
  { id: 2, name: 'Abraham Joseph', department: 'Delivery' },
  { id: 3, name: 'Mariya James', department: 'Delivery' }
]
```