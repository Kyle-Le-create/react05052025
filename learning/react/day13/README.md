# 📘 W3D13 – Lifecycle Methods & useEffect

This guide explains **class component lifecycle methods** and how they map to the **`useEffect` hook** in functional components. Mastering these concepts is essential to control how your React components behave over time.

---

## 📌 Topics Covered

- Class Component Lifecycle Methods
- `useEffect` Overview
- Dependency Array Behavior
- Side Effect Examples (fetch APIs, event listeners)
- Lifecycle Equivalents
- Class vs Function Component Differences

---

## 🧱 1. Class Component Lifecycles

### Key Lifecycle Methods:

| Method                 | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `componentDidMount`    | Called once after the component is mounted |
| `componentDidUpdate`   | Called after every update                  |
| `componentWillUnmount` | Called before the component is destroyed   |

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return <div>Hello</div>;
  }
}

### useEffect
useEffect(() => {
  // side effect here

  return () => {
    // cleanup (like componentWillUnmount)
  };
}, [dependencies]);

| Dependency Setup             | Behavior Mimics...               |
| ---------------------------- | -------------------------------- |
| `useEffect(() => {...}, [])` | `componentDidMount`              |
| `useEffect(() => {...})`     | `componentDidUpdate`             |
| `return () => {...}`         | `componentWillUnmount`           |
| `[var1, var2]`               | Runs when those variables change |

## useEffect Examples

### Run on Mount Only
useEffect(() => {
  console.log("Component mounted");
}, []);

### Run on Every Render
useEffect(() => {
  console.log("Component updated");
});

### Run on Variable Change
useEffect(() => {
  console.log("count changed");
}, [count]);

### Cleanup on Unmount
useEffect(() => {
  const handleScroll = () => console.log("scrolling");

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

### Fetch API Example
useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  }

  fetchData();
}, []);

### 📚 Homework Concepts (Reflection)

✅ What are some class lifecycle methods?
componentDidMount

componentDidUpdate

componentWillUnmount

✅ How does useEffect work?
Accepts a callback and an optional dependency array.

Behavior changes depending on that array:

[]: only runs once (mount)

No array: runs on every render

[state]: runs when state changes

Return function: acts like unmount

🧠 6. Class vs Function Components

| Feature          | Class Component                 | Functional Component           |
| ---------------- | ------------------------------- | ------------------------------ |
| Syntax           | Uses `class`, `this`            | Uses function + hooks          |
| State            | `this.state`, `this.setState()` | `useState()`                   |
| Side Effects     | Lifecycle methods               | `useEffect()`                  |
| Cleanup          | `componentWillUnmount`          | Return function in `useEffect` |
| Error Catching   | Can use `componentDidCatch`     | Must use error boundaries      |
| Preferred Today? | Less common                     | ✅ Recommended modern approach  |

📎 Key Takeaways

useEffect can mimic all key class lifecycle behaviors.

You must understand how the dependency array controls the effect’s timing.

Return a cleanup function to replicate componentWillUnmount.

React will call the effect after every render unless dependencies are specified.
```
