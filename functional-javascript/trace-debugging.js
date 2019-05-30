// Comma operator: ( , , , , ) will evaluate each exxpression
// from left to right and return the final expression.
const value = (console.log("sup"), console.log("fool"), "some val");

// This is helpful for debugging function compositions,
// since we need a way to see the state of the return value
// during different parts of the composition being applied.
const trace = msg => x => (console.log(msg, x), x);
const withMessageTrace = trace("This is the message");
const retVal = withMessageTrace("This is the x");

console.log(`Message trace retval: ${retVal}`);
