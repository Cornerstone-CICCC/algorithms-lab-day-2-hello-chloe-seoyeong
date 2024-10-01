// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function (arr) {
  const nums = arr;

  const missingNum = nums.reduce((num, current, index) => {
    if(current !== (index + 1)) {
      return num = index;
    }
    return num = num;
  }, 1)

  return missingNum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3