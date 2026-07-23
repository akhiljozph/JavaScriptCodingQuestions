const sequence = [7, 1, 8, 0, 9, 2, 3];

function findLengthOfLongestConsecutiveSequence(sequence) {
    const sequenceSet = new Set(sequence);
    let maxLength = 0;

    for (let element of sequenceSet) {
        if (!sequenceSet.has(element - 1)) {
            let currentNum = element;
            let currentLength = 1;

            while (sequenceSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

console.log(findLengthOfLongestConsecutiveSequence(sequence));