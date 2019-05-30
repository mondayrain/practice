// Argument order REALLY MATTERS once we start
// curring and applying partial application.
const uncurriedMap = (callback, array) => array.map(callback);

const arr = [1, 2, 3, 4, 5];
const doubleCallback = x => x * 2;

const doubledNormally = uncurriedMap(doubleCallback, arr);
console.log(doubledNormally);

// We want arguments to go from
// MOST SPECIFIC -> LEAST SPECIFIC.

// This makes our partially-applied functions
// more useful.
const curriedMap = callBack => array => array.map(callBack);

const mapDouble = curriedMap(doubleCallback);

const doubledWithCurry = mapDouble(arr);
console.log(doubledWithCurry);

// The least specific argument in
// EVERY case is going to be the data!
// (e.g. the arguments)

const getAttribute = key => object => object[key];

const getName = getAttribute("name");

const data = {
  id: 1,
  name: "Larissa"
};

console.log(getName(data));
