function swapLetters(input, idx1, idx2) {
    const letters = input.split('');

    [letters[idx1], letters[idx2]] = [letters[idx2], letters[idx1]];

    return letters.join('');
}

const input = 'abcd';
console.log(swapLetters(input, 0, 3));