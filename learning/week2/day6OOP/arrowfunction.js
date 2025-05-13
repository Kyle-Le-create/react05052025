// in arrow functions
const obj = {
  name: "Kyle",
  greet: () => {
    console.log(this.name); // undefined (inherits from global scope)
  },
};

obj.greet(); // undefined
