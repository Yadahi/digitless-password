// Check if contains uppercase
const stringHasUpperCase = (string) => {
  return /[A-Z]/.test(string);
};
// Split string by number and get an array of substrings
const splitStringIntoArray = (string) => {
  return string.split(/(\d+)/);
};
// Filter array to get only those that are strings
const getArrayOfStrings = (array) => {
  return array.filter((arrayItem) => isNaN(parseFloat(arrayItem)));
};
// Sort array based on the length of array items
const sortArray = (array) => {
  return array.sort((a, b) => b.length - a.length);
};

function solution(string) {
  if (typeof string !== "string") {
    console.log("The input is not a string");
    return -1;
  }
  if (string.length < 1 || string.length > 200) {
    console.log("The input does'nt fullfil the length requirements");
    return -1;
  }
  if (!/^[a-zA-Z0-9]+$/.test(string)) {
    console.log("The input contains invalid characters");
    return -1;
  }
  if (!/[A-Z]/.test(string)) {
    console.log("The input doesn't contains a uppercase letter");
    return -1;
  }

  const arrayOfStrings = splitStringIntoArray(string);
  const filteredArray = getArrayOfStrings(arrayOfStrings);
  const arrayHasUppercase = filteredArray.filter((item) =>
    stringHasUpperCase(item)
  );
  const sortedArray = sortArray(arrayHasUppercase);

  return sortedArray[0].length;
}

console.log("TEST - valid string:", solution("sk2jl0BajLs0123Klsa"));
console.log("TEST - invalid characters:", solution("#$@%^13123adfasdf"));
console.log("TEST - numbers without uppercase:", solution("13123adfasdf"));
console.log("TEST - without uppercase:", solution("adfasdf"));
console.log(
  "TEST - exceeded the max num of characters:",
  solution(
    "FTBXwc1Pnf0PoHDACtraIXQR4BO0QwIAH1FEiwZiwF0rdZH65kpf7mkvJOZWiO27p5q7D2N0AmGkMP0dmJBQ0lqk6o12D7uk0Vq8Lk5wWQKeGdf9g6yk6Gd6qtzIeSatfc4XtRe199LwDpgRxVqm9P9YZovec7pctmBb1rZwaew5B6kUOkrQPPHlj4PUpufSVnkFFsePZ"
  )
);
