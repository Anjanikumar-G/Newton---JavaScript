function correctMistake(inputString, wrongWord, correctWord) {
    const correctedString = inputString.replace(new RegExp(wrongWord, 'g'), correctWord);
    return correctedString;
}