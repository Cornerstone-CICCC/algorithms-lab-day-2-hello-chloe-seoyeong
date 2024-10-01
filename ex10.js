// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = function(string) {
  const splitString = string.split(/[\s_]/);
  const camel = splitString.map((element, index) => {
    let elementArray = element.split("");
    if(index !== 0) {
      elementArray[0] = elementArray[0].toUpperCase();
    }
    elementArray = elementArray;

    return elementArray.join("");
  })

  return camel.join("");
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"