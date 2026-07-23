/**
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */

const findFirstNonRepeatingChar = (word) => {
    const countChar = {};

    for (char of word) {
        countChar[char] = (countChar[char] || 0) + 1;
    }

    for (char of word) {
        if (countChar[char] === 1) {
            return char;
        }
    }
}

console.log(findFirstNonRepeatingChar('swiss'));