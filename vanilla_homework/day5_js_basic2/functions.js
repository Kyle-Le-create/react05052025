export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here

  // Validate both arguments are numbers
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: both arguments must be numbers");
  }
  return a + b;
}

export function sumOfAll() {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here

  // Return 0 if no arguments
  if (args.length === 0) return 0;

  // Validate all arguments are numbers
  for (const arg of args) {
    if (typeof arg !== "number") {
      throw new Error("Invalid input: all arguments must be numbers");
    }
  }

  // Sum all arguments
  return args.reduce((acc, curr) => acc + curr, 0);
}
