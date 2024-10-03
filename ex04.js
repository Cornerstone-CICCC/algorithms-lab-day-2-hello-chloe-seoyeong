// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function (word) {
  const characters = word.split("");
  let mostFrequentCharacter = "";
  let mostFrequentCount = 0;

  // const characterObj = characters.reduce((obj, current) => {
  //   if(!obj[current]) {
  //     obj[current] = 1;
  //   } else {
  //     obj[current] += 1;
  //   }

  //   console.log(current, obj[current]);
    
  //   return obj;
  // }, {})

  const characterObj = characters.reduce((obj, current) => {
    obj[current] = (obj[current] || 0) + 1;

    if(obj[current] > mostFrequentCount) {
      mostFrequentCount = obj[current];
      mostFrequentCharacter = current;
    } else {
      mostFrequentCount = mostFrequentCount;
      mostFrequentCharacter = mostFrequentCharacter;
    }

    return obj;
  }, {})

  return mostFrequentCharacter;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"