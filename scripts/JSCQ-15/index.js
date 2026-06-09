function groupAnagrams(words) {
    const result = {};

    for (const word of words) {
        const sortedWord = word.toLowerCase().split('').sort().join('');
        console.log(sortedWord);
        if (result[sortedWord]) {
            result[sortedWord].push(word);
        } else {
            result[sortedWord] = [word]
        }

    }

    return Object.values(result);
}

const words = ['Ate', 'Eat', 'Hello', 'Integral', 'Listen', 'Silent', 'Tea', 'Triangle', 'World'];
console.log(groupAnagrams(words));