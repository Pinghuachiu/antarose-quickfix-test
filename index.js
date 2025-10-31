// QuickFix AI Test - Calculator with Bug

function add(a, b) {
  // BUG: This should return a + b, but returns a - b
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log('Calculator Test:');
console.log('2 + 3 =', add(2, 3));  // Expected: 5, Actual: -1 (BUG!)
console.log('4 * 5 =', multiply(4, 5));  // Expected: 20, Actual: 20 (Correct)

module.exports = { add, multiply };
