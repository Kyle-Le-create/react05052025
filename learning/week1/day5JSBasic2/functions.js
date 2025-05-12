export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Wrong input type");
  } else {
    return a + b;
  }
  // return () => {};
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  return args.reduce((total, num) => {
    if (typeof num !== "number") {
      throw new Error("Wrong input type");
    }
    return total + num;
  }, 0);
  // return () => {};
}
