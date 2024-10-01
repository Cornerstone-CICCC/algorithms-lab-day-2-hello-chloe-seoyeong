// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function (word) {
  const characters = word.split("");
  
  const characterObj = characters.reduce((obj, current) => {
    if(!obj[current]) {
      obj[current] = 1;
    } else {
      obj[current] += 1;
    }
    
    return obj;
  }, {})

  const character = Object.keys(characterObj).reduce((char, current) => characterObj[current] > characterObj[char] ? current : char);

  return character;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"