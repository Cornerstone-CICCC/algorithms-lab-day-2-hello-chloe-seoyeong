// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = function (string, word) {
  const splitString = string.split(" ");
  let count = 0;

  splitString.forEach(element => {
    if(element === word) {
      count++;
    }
  });

  return count;
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2