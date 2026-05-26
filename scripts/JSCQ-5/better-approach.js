function hasUniqueCharacters(word) {
    // word = word.toLowerCase();

    return new Set(word).size === word.length;
}

console.log(hasUniqueCharacters('words'));