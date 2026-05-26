 function hasUniqueCharacters(str) {
    const charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}


console.log(hasUniqueCharacters("unique"));