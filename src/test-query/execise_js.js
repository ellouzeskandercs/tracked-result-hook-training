const trackedKeys = new Set();

const trackedObject = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
};

console.log(trackedObject.a);
console.log(trackedObject.c);

console.log(Array.from(trackedKeys)); // Should contain only 'a' and 'c'
