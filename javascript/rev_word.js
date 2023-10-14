function reverseWordsInSentence(sentence) {
  // Split the sentence into words using space as the delimiter
  const words = sentence.split(' ');

  // Reverse each word and store them in an array
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words to form a new sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usage:
const inputSentence = "how are you yaswanth";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
