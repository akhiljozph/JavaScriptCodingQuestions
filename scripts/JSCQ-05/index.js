function hasUniqueCharacters(word) {

    // word = word.toLowerCase();

    for (let char of word) {
        if (word.indexOf(char) !== word.lastIndexOf(char)) {
            return false;
        }
    }

    return true;
}

console.log(hasUniqueCharacters('Unique'));