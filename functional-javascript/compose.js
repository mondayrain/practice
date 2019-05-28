// To compose functions, we likely need to curry our
// functions so that they are unary. This is because we need to
// pipe output values into the next function, and with differing
// # of args this can be very confusing.

// This is a prime usage of partial application.
function compose(...fns) {
  return function(initialValue) {
    return fns.reduce((acc, func) => func(acc), initialValue);
  };
}

const add = (x, y) => x + y;
const add1 = x => add(x, 1);

const subtract = (x, y) => x - y;
const subtract2 = x => x - 2;

add1ThenSubtract2 = compose(
  add1,
  subtract2
);

console.log(add1ThenSubtract2(3));
console.log(add1ThenSubtract2(1));
s;
