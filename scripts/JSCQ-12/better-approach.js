function swapLetters(input, idx1, idx2) {
    const letters = input.split('');

    return letters.toSpliced(idx1, 1, letters[idx2]).toSpliced(idx2, 1, letters[idx1]).join('');
}


const input = 'abcd';
console.log(swapLetters(input, 0, 3));