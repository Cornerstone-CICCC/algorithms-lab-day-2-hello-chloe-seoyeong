// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = function (string) {
  const characters = string.split("");
  const vowels = ["a", "e", "i", "o", "u"];

  const consonants = characters.reduce((count, current) => {
    const check = vowels.some((vowel) => {
      if(current === " ") {
        return true;
      }
      return current === vowel;
    })

    if(!check) {
      count++;
    }
    return count;
  }, 0)

  return consonants;
}

console.log(countConsonants("hello world")); // Expected output: 7