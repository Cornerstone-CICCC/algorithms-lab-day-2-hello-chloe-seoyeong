// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

const validateEmail = function (email) {
  let correctAt = false;
  let correctDot = false;

  const splitEmail = email.split("");

  splitEmail.map(element => {
    if (element === "@") {
      correctAt = true;
    }
    if (element === ".") {
      correctDot = true;
    }
  });

  if (correctAt && correctDot) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false