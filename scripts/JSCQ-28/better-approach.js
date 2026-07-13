function seperateOddPairsWithHyphens(number) {

    const numStr = number.toString();

    if (!numStr) return '';

    return numStr.split('').reduce((result, currentDigit, index) => {
        if (index === 0) return currentDigit;

        const previousDigit = numStr[index - 1];

        const isPrevOdd = Number(previousDigit) % 2 !== 0;
        const isCurrentOdd = Number(currentDigit) % 2 !== 0;

        if (isPrevOdd && isCurrentOdd) {
            return result + '-' + currentDigit;
        }

        return result + currentDigit;
    }, '');
}

const number = 354791;
console.log(seperateOddPairsWithHyphens(number));