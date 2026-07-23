/**
 * Time Complexity - O(n)^2
 * Space Complexity - O(n)
 */

const findFirstNonRepeatingChar = (word) => {
    return word.split('').find((elem) => word.indexOf(elem) === word.lastIndexOf(elem));
}

console.log(findFirstNonRepeatingChar('swiss'));