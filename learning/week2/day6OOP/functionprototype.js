function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const user = new Person("Kyle");
user.sayHi(); // Hi, I'm Kyle

// call()
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person = { name: "Kyle" };
greet.call(person, "Hello"); // Hello, my name is Kyle

// apply()
greet.apply(person, ["Hi"]); // Hi, my name is Kyle

// bind()
const boundGreet = greet.bind(person, "Hey");
boundGreet(); // Hey, my name is Kyle
