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

## JSCQ-3

### **Given an array with integers. Find the length of the longest consecutive sequence from the array.**

### Use Case - 1

```
const sequence = [0,1,3,5,2,6,4,8];
console.log(findLengthOfLongestConsecutiveSequence(sequence));
```

Expected output: ***7***

## JSCQ-4

### **Given an array with subarrays, return an array by flattening the original one.**

### Use Case - 1

```
const subArray = [0,1,[3,5,[2],6],4,8];
console.log(flattenArray(subArray));
```

Expected output: ***[0, 1, 3, 5, 2, 6, 4, 8]***

## JSCQ-5

### **Find out whether the provided word is having only unique characters.**

### Use Case - 1

```
console.log(hasUniqueCharacters('Unique'));;
```

Expected output: ***true***

## JSCQ-6

### **Find out the count of each characters from the provided word.**

### Use Case - 1

```
console.log(countCharacters('abbcccdddd'));
```

Expected output: ***{ a: 1, b: 2, c: 3, d: 4 }***

## JSCQ-7

### **Function to return the longest word from the provided sentence.**

### Use Case - 1

```
const sentence = 'This is a test sentence to find the largest word from this.';
console.log(findLargestWords(sentence));
```

Expected output: ***sentence***