const person = {
  greet() {
    console.log("Hello!");
  },
};

const student = Object.create(person);
student.name = "Kyle";

student.greet(); // Inherited from person
