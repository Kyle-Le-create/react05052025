const user = { name: "Kyle" };
console.log(user.hasOwnProperty("name")); // true
console.log(user.toString()); // [object Object]

// Object.keys(obj)
// const user = { name: "Kyle", age: 30 };
// console.log(Object.keys(user)); // ['name', 'age']

// Object.values(obj)
console.log(Object.values(user)); // ['Kyle', 30]

// Object.entries(obj)
console.log(Object.entries(user));
// [['name', 'Kyle'], ['age', 30]]
