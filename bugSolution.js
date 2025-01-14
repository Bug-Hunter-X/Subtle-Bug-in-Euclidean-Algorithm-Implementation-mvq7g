function foo(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(15, 20)); // Output: 5
console.log(foo(25, 35)); // Output: 5
console.log(foo(1000000, 10000)); // Output: 10000