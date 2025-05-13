// in a method
const obj = {
  name: "Kyle",
  sayName() {
    console.log(this.name); // 'this' refers to obj
  },
};

obj.sayName(); // Kyle

// in a constructor
function Person(name) {
  this.name = name;
}

const user = new Person("Sam");
console.log(user.name); // Sam
