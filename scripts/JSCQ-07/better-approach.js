function findLongestWord(sentence) {
    return sentence
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .split(" ")
        .reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(findLongestWord('This is the test sentence.'));