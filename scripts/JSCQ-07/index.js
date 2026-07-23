function findLongestWord(sentence) {

    let wordLength = '';
    const words = sentence.split(" ");

    for (let word of words) {
        if (wordLength.length <= word.length) {
            wordLength = word;
        }
    }

    return wordLength;

}

console.log(findLongestWord('This is the test sentence.'));