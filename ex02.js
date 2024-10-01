// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

const arrayDifference = function (arr1, arr2) {
  const difference = arr1.filter((element) => !arr2.includes(element))

  return difference;
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]