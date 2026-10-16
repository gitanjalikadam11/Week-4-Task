function add(a, b) {
  return a + b;
}

// Test 1
console.assert(add(2, 3) === 5, "Test 1 failed");

// Test 2
console.assert(add(10, 5) === 15, "Test 2 failed");

// Test 3
console.assert(add(-2, 2) === 0, "Test 3 failed");

console.log("Testing completed!");
