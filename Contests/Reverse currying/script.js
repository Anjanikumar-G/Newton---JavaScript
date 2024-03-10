// Your code here
function reverseWords(sentence, word) {
  return function reverseFunc() {
    const newSentence = `${sentence} ${word}`;
    return newSentence.split(" ").reverse().join(" ");
  };
}
