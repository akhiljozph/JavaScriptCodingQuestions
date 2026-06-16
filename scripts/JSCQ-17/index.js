function sortSentences(sentences) {
    return sentences.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); // Undefined means the local region
}

const sentences = ['The Road To Learn React', 'The road to learn angular', 'Learning React', 'Learning Angular15', 'Learning angular12', 'React In Action'];
console.log(sortSentences(sentences));