Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

user.greet(); // Hello, my name is Kyle

// with class (uses prototype)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    // this is automatically added to Person.prototype
    console.log(`Hi, I'm ${this.name}`);
  }
}
