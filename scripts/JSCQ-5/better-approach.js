function hasUniqueCharacters(word) {
    // word = word.toLowerCase();

    return new Set(word).length === word.length;
}

console.log(hasUniqueCharacters('Unique'));