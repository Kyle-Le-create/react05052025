# Day 18 – Context & useReducer

This guide covers the fundamentals of using the Context API and `useReducer` hook in React to manage global and complex state. It also includes a homework project to implement a fullstack CRUD todo list using these tools.

---

## 📘 Topics Covered

### 🔹 Context API

- **Prop Drilling**
  - Passing props through many nested components.
  - Leads to tight coupling and hard-to-maintain code.
- **Context Provider**
  - Provides a way to pass data through the component tree without manually passing props.
- **Context Changes Cause Re-rendering**
  - Any change in the context value causes all consuming components to re-render.

### 🔹 useReducer

- A React hook used to manage complex state logic.
- Similar to Redux, but built into React.
- Updates state via actions and a reducer function.
- Good for managing multiple related pieces of state.

### 🔹 Context + useReducer

- Combine Context API and useReducer for global state management.
- Allows dispatching actions from anywhere in the app while maintaining centralized control.

---

## 📝 Homework

### 🧠 Concepts

#### ✅ What is Prop Drilling?

- Passing props from parent to child through intermediate components.
- Becomes inefficient in large component trees.
- **Solution**: Use Context API or a state management library like Redux.

#### ✅ useReducer

- Helps manage state updates in a predictable way.
- Reducer function handles state updates based on dispatched actions.
- Ideal for complex states and business logic.
- Syntax:
  ```js
  const [state, dispatch] = useReducer(reducer, initialState);
  ```
