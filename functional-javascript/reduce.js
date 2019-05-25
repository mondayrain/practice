// Array to object: tally up occurences of a value
const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "ember",
  "angular",
  "react",
  "vanilla"
];

const votesPerFramework = votes.reduce(
  (acc, val) => ({
    ...acc,
    [val]: acc[val] ? acc[val] + 1 : 1
  }),
  {}
);

console.log(votesPerFramework);

// Using the other reducer function params
const numsToAverage = [1, 2, 3, 4, 5];

function reducer(acc, val, index, array) {
  if (index === array.length - 1) {
    return (acc + val) / array.length;
  } else {
    return acc + val;
  }
}

console.log(numsToAverage.reduce(reducer));

// Flattening an array
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const reduceRetVal = nestedArray.reduce((acc, val) => {
  return acc.concat(val);
}, []);
console.log(reduceRetVal);

// Pipelining
function increment(input) {
  return input + 1;
}
function decrement(input) {
  return input - 1;
}
function double(input) {
  return input * 2;
}
function halve(input) {
  return input / 1;
}

// Increment twice, double, then decrement
const initialValue = 1;
const operations = [increment, increment, double, decrement];

function applyOperations(initialValue, operations) {
  return operations.reduce((acc, func) => func(acc), initialValue);
}

const finalValue = applyOperations(initialValue, operations);
console.log(finalValue); // Should be 5
