function replaceNumbersWithChar(str) {
    return str.replace(/\d/g, '|');
}

const str = 'a1bc23d0';
console.log(replaceNumbersWithChar(str));