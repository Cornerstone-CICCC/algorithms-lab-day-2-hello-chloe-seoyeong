// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

function findMax(arr) {
  console.log(arr)
  if(arr.length <= 1) {
    return arr.join("");
  }

  if ((arr[0] - arr[1]) > 0) {
    arr.splice(1, 1);
  } else {
    arr.splice(0, 1);
  }

  return findMax(arr)
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9