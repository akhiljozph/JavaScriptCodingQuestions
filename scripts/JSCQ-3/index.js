const sequence = [11, 0, 1, 3, 5, 9, 6, 4, 10, 8];

function findLengthOfLongestConsecutiveSequence(sequence) {
    const sequenceSet = new Set(sequence);
    let maxLength = 0;

    for (let element of sequenceSet) {
        if (!seq.has(element - 1)) {
            let currentNum = element;
            let currentLength = 1;

            while (seq.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

console.log(findLengthOfLongestConsecutiveSequence(sequence));