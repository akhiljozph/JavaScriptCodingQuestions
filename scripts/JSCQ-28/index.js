function seperateOddPairsWithHyphens(number) {
    let returnString = '';
    const numbers = number.toString().split('');

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            if (i > 0 && numbers[i - 1] % 2 !== 0) {
                returnString += `-${numbers[i]}`;
            } else {
                returnString += numbers[i];
            }
        } else {
            returnString += numbers[i];
        }
    }

    return returnString;
}

const number = 354791;
console.log(seperateOddPairsWithHyphens(number));