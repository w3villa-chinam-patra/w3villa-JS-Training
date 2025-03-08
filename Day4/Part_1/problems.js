// reverse a string
var str = "hello world";
let reverseStr = "";
for (const char of str) reverseStr = char + reverseStr;
console.log(`The reversed string is: ${reverseStr}`);

// find the largest number in an array
var arr = [1, 4, 2, 6, 7, 8];
console.log(
  `The largest number in the array is: ${arr.reduce(
    (acc, curr) => (acc > curr ? acc : curr),
    arr[0]
  )}`
);

// remove duplicates from array
var arr = [1, 1, 1, 2, 6, 5, 6, 7, 7, 5, 6, 2, 8, 9, 9, 8];
arr.sort();
console.log(
  `The array without duplicate elements is: ${arr.reduce(
    (acc, curr) => {
      if (acc.at(-1) !== curr) acc.push(curr);
      return acc;
    },
    [arr[0]]
  )}`
);

// count occurrences of words in a sentence
var sentence = "hello world hello javascript hello";
console.log(`The occurrences of words in a sentence is as follows:`);
console.log(
  sentence.split(` `).reduce((acc, curr) => {
    if (acc[curr] === undefined) acc[curr] = 1;
    else acc[curr]++;
    return acc;
  }, {})
);
