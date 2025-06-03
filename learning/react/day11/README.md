# Describing the UI

[Link to full React Tutorial](https://www.youtube.com/watch?v=f55qeKGgB_M&ab_channel=PedroTech)
npx create-react-app app-name

## What is & Why React

React is a lightweight JavaScript library for building user interfaces. It’s:

– Components-based, meaning you build small, reusable pieces of UI (like buttons, form, etc.).

– Uses a Virtual DOM for fast rendering — only updates the parts of the UI that actually change.
– Has a great ecosystem with tools like Redux(for state management), React Router( for navigation), and lots of 3rd party libraries that make development easier.

It’s popular because it helps build interactive, dynamic web apps efficiently

## React Virtual DOM

The Virtual DOM is a lightweight copy of the real DOM (the structure of the page).
– Updating the real DOM is slow, so React uses the virtual DOM to calculate changes first.
– When your app’s state changes, React compares the previous virtual DOM to the new one.
– Then it uses a diffing algorithm to figure out the smallest set of changes needed and updates the real DOM efficiently
This makes your UI fast and responsive.

## Creating a react app

- create react app

```bash
npx create-react-app app-name
```

- vite (newer tool, good for modern projects)

```bash
npm create vite@latest app-name -- --template react
cd app-name
npm install
```

- babel & webpack (manual setup for full control, mostly in advanced or custom setups)
  initial npm: npm init -y
  install react: npm install react react-dom
  install Webpack & Babel:

```bash
npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin --save-dev
```

- production levels

```bash
npm run build
```

This generates an optimized /dist or /build folder with minified JS/CSS, ready to deploy.

## Components

In React, components are the building blocks of your UI. They can be:
function components( most common)
class components (older, less common now)
Each component returns JSX - a syntax that looks like HTML but works in JavaScript

- JSX lets you write HTML-like code inside JavaScript, making UI easier to describe. you use curly braces {} in JSX to embed JavaScript expressions like variables, function calls, or logic.

```jsx
const name = "Emile";

function Greeting() {
  return <h1>Hello, {name}!</h1>; // curly braces evaluate the variable
}
```

You can also use {} for dynamic content, conditions, arrays, and more.

- props (short for properties) are how you pass data from parent to child components. They make components reusable and dynamic.

```jsx
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}
//Usage
<Welcome name="Emile" />;
```

Props are read-only inside the component,
You can pass any value: string, number, object, function, etc

- children prop is a special prop that represents whatever you wrap inside a component.

```jsx
function Card(props) {
  return <div classname="card">{props.children}</div>;
}

//Usage
<Card>
  <h2>Title</h2>
  <p>This is a description.</p>
</Card>;
```

everything inside Card gets passed as props.children and rendered inside the card
This is useful for layout components, modals, wrappers, etc

## Rendering

Rendering means deciding what to show on the screen based on data (like state or props).
React updates the UI automatically when that data changes

- conditional rendering:

you can show or hide elements based on conditions using JavaScript logic like if, ?: , or &&

```jsx
// using if
function Message({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  }
  return <p>Please log in.</p>;
}

// using &&
{
  isAdmin && <button>Delete</button>;
}

// using ternary ? :
{
  isDarkMode ? <DarkTheme /> : <LightTheme />;
}
```

- rendering lists:

To display a list of items (like users or tasks), you use .map()

```js
const users = ["Alex", "Bob", "Charles"];

//filter user:
const myUser = users.filter((user) => user === "Alex");
function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user}> {user}</li>
      ))}
    </ul>
  );
}
```

each item is rendered as a component or element. You must give each one a key

- Keys in List
  A key is a special prop that helps React track which items have changed when the list updates.
  makes re-rendering more efficient
  prevents bugs when items are added/removed/reordered

Do:
use a unique, stable value(like an id)

```jsx
items.map((item) => <li key={item.id}>{item.name}</li>);
```

Don't use the array index as a key, especially if the list can change

## States

useStates is a React Hook that lets you adds state to a function component

```js
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // count = state value, setCount = updater function

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
```

- updating state
  Never modify state directly, use the setter function returned by useState.

```jsx
setCount(count + 1); //✅
count++; //❌ Wrong!!!
```

- states are immutable
  means we should create a new copy instead of changing the existing one.
  this ensures React knows the state has changed and can trigger a re-render

- using callback function to update state
  when the next state depends on the previous state, use a callback with the updater funtion:

```js
setCount((prev) => prev + 1);
```

This is safer, especially when updates are batched(in event handlers or timers)

- updating arrays with useState
  adding a new item to an array:

```js
const [todos, setTodos] = useState([]);

const addTodo = (newTodo) => {
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};
```

don't mutate the array with .push() always use spread (...) to create a new one

- updating objects with useState
  updating a property in an object:

```js
const [user, setUser] = useState({name:'kyle', age=25});

const updateAge = () => [
    setUser(prev => ({...prev, age: prev.age + 1}))
]
```

don't mutate the object directly, always spread the previous object (...prev) to avoid losing other properties.

## Class Component

Before Hooks, Class Component were the main way to manage state and use lifecycle methods in React.They're still supported, but Function Components with Hooks are now preferred for most use cases.

1. Creating a Class Component

```js
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
```

class component must extend React.Component
define a render() method that returns JSX

2. Receiving Props in Class Components
   Props are accessed using this.props:

```jsx
class Welcome extends Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}
```

3. Declaring & Updating State in Class Components
   declare state in the constructor and update it with this.setState():

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}
```

this.state holds the current state
this.setState() triggers a re-render
Use a function in setState if the new value depends on the previous state
