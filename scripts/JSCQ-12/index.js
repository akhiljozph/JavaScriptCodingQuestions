function swapLetters(input, indexOne, indexTwo) {
    let letters = input.split('');
    const tempValue = letters[indexOne];

    letters[indexOne] = letters[indexTwo];
    letters[indexTwo] = tempValue;

    return letters.join('');
}

const input = 'abcd';
console.log(swapLetters(input, 0, 3));