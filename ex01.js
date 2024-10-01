// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function (sentence) {
  const words = sentence.split(" ");

  const capitalize = words.map((word) => {
    let character = word.split("");
    character[0] = character[0].toUpperCase();
    character = character.join("");

    return character;
  })

  return capitalize.join(" ");
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
console.log(capitalizeWords("algorithms lab day")) //Expected output: "Algorithms Lab Day"
