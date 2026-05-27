function findLargestWords(sentence) {
  if (!sentence) {
    return [];
  }

  const cleanSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const words = cleanSentence.split(/\s+/); 

  let maxLength = 0;
  const largestWords = [];

  for (const word of words) {
    if (!word) continue; 

    const length = word.length;
    if (length > maxLength) {
      maxLength = length;
      largestWords.length = 0;
      largestWords.push(word);
    } else if (length === maxLength) {
      largestWords.push(word);
    }
  }

  return largestWords;
}

const sentence = 'This is a test sentence to find the largest word from this.';
console.log(findLargestWords(sentence));

const tieSentence = 'The quick brown fox jumps over the lazy dogs.';
console.log(findLargestWords(tieSentence));