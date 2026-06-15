function groupAnagrams(words) {
    const result = {};

    for (const word of words) {
        const freq = new Array(26).fill(0);
        for (const char of word.toLowerCase()) {
            freq[char.charCodeAt(0) - 97]++;
        }

        const key = freq.join(',');

        result[key] ??= [];
        result[key].push(word);
    }

    return Object.values(result);
}

const words = ['Ate ', 'Eat', 'Hello', 'Integral', 'Listen', 'Silent', 'Tea', 'Triangle', 'World'];
console.log(groupAnagrams(words));