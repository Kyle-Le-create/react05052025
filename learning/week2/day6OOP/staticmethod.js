class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(3, 4)); // 7
// Calculator.add is callable, but (new Calculator()).add is not.
