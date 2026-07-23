function countCharacters (word) {

    const obj = {};

    for (const char of word) {
        obj[char] = (obj[char] ?? 0) + 1;
    }

    return obj;
}

console.log(countCharacters('abbcccdddd'));