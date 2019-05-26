// Higher Order Function
// 1. Accepts a function as an arg
// 2. Returns a new function

// withCount
// Returns a console log of how many times we've called our newly returned func

function initFuncCount() {
  let countHash = {};

  const withCount = fn => {
    return (...args) => {
      countHash[fn] = countHash[fn] ? countHash[fn] + 1 : 1;
      return fn(...args);
    };
  };

  const getCount = fn => {
    return countHash[fn] || 0;
  };

  return {
    withCount,
    getCount
  };
}

const { withCount, getCount } = initFuncCount();

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const decoratedAdd = withCount(add);

console.log("Counting Adds...");
console.log(getCount(add));
decoratedAdd(1, 2);
decoratedAdd(3, 5);
console.log(getCount(add));

const decoratedSubtract = withCount(subtract);

console.log("Counting Subtracts...");
console.log(getCount(subtract));
decoratedSubtract(3, 1);
decoratedSubtract(2, 2);
decoratedSubtract(2, 2);
console.log(getCount(subtract));
