function hasUniqueCharacters(word) {
    // const lowerWord = word.toLowerCase();

    return new Set(word).length === word.length;
}

console.log(hasUniqueCharacters('unique'));