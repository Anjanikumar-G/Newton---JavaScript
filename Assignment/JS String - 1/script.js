function numOfWords(str){
    // write code here
    // return the output , do not use console.log here
    // Splitting the string by spaces into an array of words
    const wordsArray = str.split(' ');

    // Returning the length of the array, which represents the number of words
    return wordsArray.length;

}