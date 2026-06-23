function generateUniqueSubStrings(str) {

    const results = [];

    function prepareSubStrings(str, index, char) {

        if (index === str.length) {
            if (char.length > 0) {
                results.push(char);
            }
            return;
        }

        prepareSubStrings(str, index + 1, char + str[index]);
        prepareSubStrings(str, index + 1, char);

    }

    prepareSubStrings(str, 0, '');

    return results.sort();

}

const str = 'abc';
console.log(generateUniqueSubStrings(str))
