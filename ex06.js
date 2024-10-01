// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = function (url) {
  const urls = url.split("?");
  const parameters = urls[1];
  const parameterArray = parameters.split("&");
  const parameter = parameterArray.map(element => {
    return element.split("=");
  })

  const params = parameter.reduce((obj, current) => {
    obj[current[0]] = current[1];

    return obj;
  }, {})

  return params;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }