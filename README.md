# JavaScriptCodingQuestions

## Output Predictions

### [JSOP-1]
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### [JSOP-2]
```javascript
let original = { name: "Alice", details: { age: 25 } };
let clone = { ...original };

clone.name = "Bob";
clone.details.age = 30;

console.log(original.name);
console.log(original.details.age);
```

### [JSOP-3]
```javascript
function updateProfile(user) {
  user.age = 21;
  user = { name: "John", age: 30 };
  return user;
}

const person = { name: "Alex", age: 20 };
const newPerson = updateProfile(person);

console.log(person.age);
console.log(newPerson.age);
```

---

## [JSCQ-1](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-1)

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

## [JSCQ-2](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-2)

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

## [JSCQ-3](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-3)

### **Given an array with integers. Find the length of the longest consecutive sequence from the array.**

### Use Case - 1

```
const sequence = [0,1,3,5,2,6,4,8];
console.log(findLengthOfLongestConsecutiveSequence(sequence));
```

Expected output: ***7***

## [JSCQ-4](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-4)

### **Given an array with subarrays, return an array by flattening the original one.**

### Use Case - 1

```
const subArray = [0,1,[3,5,[2],6],4,8];
console.log(flattenArray(subArray));
```

Expected output: ***[0, 1, 3, 5, 2, 6, 4, 8]***

## [JSCQ-5](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-5)

### **Find out whether the provided word is having only unique characters.**

### Use Case - 1

```
console.log(hasUniqueCharacters('Unique'));;
```

Expected output: ***true***

## [JSCQ-6](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-6)

### **Find out the count of each characters from the provided word.**

### Use Case - 1

```
console.log(countCharacters('abbcccdddd'));
```

Expected output: ***{ a: 1, b: 2, c: 3, d: 4 }***

## [JSCQ-7](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-7)

### **Function to return the longest word from the provided sentence.**

### Use Case - 1

```
const sentence = 'This is a test sentence to find the largest word from this.';
console.log(findLargestWords(sentence));
```

Expected output: ***sentence***

## [JSCQ-8](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-8)

### **Find and return the second largest number from the provided list.**

### Use Case - 1

```
const numbers = [2, 6, 4, 5, 7, 8, 9, 1, 10, 11];
console.log(findSecondLargest(numbers));
```

Expected output: ***10***

## [JSCQ-9](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-9)

### **Find the missing numbers from the provided array. Array range will be provided.**

### Use Case - 1

```
const numbers = [0, 1, 3, 6, 5];
console.log(findMissingNumbers(numbers, 0, 7));
```

Expected output: ***[2, 4, 7]***

## [JSCQ-10](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-10)

### **Find and return the unique numbers from a given array.**

### Use Case - 1

```
const numbers = [1, 2, 3, 2, 4, 5, 6, 8];
console.log(removeDupicates(numbers));
```

Expected output: ***[1, 2, 3, 4, 5, 6, 8]***

## [JSCQ-11](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-11)

### **Verify whether the provided string is a palindrome or not.**

### Use Case - 1

```
console.log(console.log(isPalindrome("A man, a plan, a canal, Panama")););
```

Expected output: ***true***

## [JSCQ-12](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-12)

### **Given a word and two indexes of that word, swap the characters at those indexes and return the result.**

### Use Case - 1

```
const input = 'abcd';
console.log(swapLetters(input, 0, 3));
```

Expected output: ***dbca***

## [JSCQ-13](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-13)

### **Calculate the total sum of elements from the provided array.**

### Use Case - 1

```
const numbers = [1, 5, 9, 10, 11, 4];
console.log(findSumOfNumbers(numbers));
```

Expected output: ***40***

## [JSCQ-14](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-14)

### **Given an array of numbers and find the maximum difference between the elements of the array.**

### Use Case - 1

```
const numbers = [1, 2, 6];
console.log(findMaxDifference(numbers));
```

Expected output: ***5***

## [JSCQ-15](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-15)

### **Given an array of strings. Return an array with the angrams as sub arrays.**

### Use Case - 1

```
const words = ['Ate','Eat','Hello','Integral','Listen','Silent','Tea','Triangle','World'];
console.log(groupAnagrams(words));
```

Expected output: ***[['Ate', 'Eat', 'Tea'],['Integral','Triangle'],['Listen', 'Silent'],['Hello'],['World']]***

## [JSCQ-16](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-16)

### **Create an array from 1 to limit where elements divisible by num1 are replaced with 'Fizz', elements divisible by num2 are replaced with 'Buzz', and elements divisible by both are replaced with 'FizzBuzz'.**

### Use Case - 1

```
console.log(fizzBuzzVariations(10, 2, 3))
```

Expected output: ***[1, 'Fizz', 'Buzz', 'Fizz', 5, 'FizzBuzz', 7, 'Fizz', 'Buzz', 'Fizz']***


## [JSCQ-17](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-17)

### **Given an array of sentences, sort it by word and return the sorted sentences.**

### Use Case - 1

```
const sentences = ['The Road To Learn React', 'The road to learn angular', 'Learning React', 'Learning Angular15', 'Learning angular12', 'React In Action'];
console.log(sortSentences(sentences));
```

Expected output: ***['Learning angular12', 'Learning Angular15', 'Learning React', 'React In Action', 'The road to learn angular', 'The Road To Learn React']***

## [JSCQ-18](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-18)

### **Find out whether the number is a prime number or not.**

### Use Case - 1

```
console.log(isPrime(5));
```

Expected output: ***Number 5 is prime.***

## [JSCQ-19](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-19)

### **Find the factorial of the given number.**

### Use Case - 1

```
console.log(factorial(5));;
```

Expected output: ***120***

## [JSCQ-20](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-20)

### **Generate fibonacci series of the provided length.**

### Use Case - 1

```
console.log(generateFibonacciSeries(15));;
```

Expected output: ***[ 0,   1,   1,  2,  3,  5, 8,  13,  21, 34, 55, 89, 144, 233, 377 ]***

## [JSCQ-21](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-21)

### **Find the largest number from the given array which contains mixed inputs.**

### Use Case - 1

```
const stringsNNumbers = [1, 'a', 10, 'r', '11'];
console.log(findLargest(stringsNNumbers));
```

Expected output: ***10***

## [JSCQ-22](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-22)

### **Implement a javascript function that takes an array of numbers and returns a new array with only the even numbers.**

### Use Case - 1

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbers));
```

Expected output: ***[2, 4, 6, 8, 10]***

## [JSCQ-23](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-23)

### **Find and alphabetically sort all non-empty combinations of characters from a given string, preserving their relative order.**

### Use Case - 1

```
const str = 'abc';
console.log(generateUniqueSubStrings(str))
```

Expected output: ***[ 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]***

## [JSCQ-24](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-24)

### **Given a string s, replace every numeric digit with a sequence of '|' characters equal to the value of that digit. Non-digit characters should remain unchanged. Return the resulting string.**

### Use Case - 1

```
const str = 'a1bc23d0';
console.log(replaceNumbersWithChar(str));
```

Expected output: ***a|bc||d|***