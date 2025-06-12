# 📘 W3D16 Patterns – React Study Guide

## 🔁 More Hooks

### 🔹 `useRef`

- Allows you to persist values between renders without causing re-renders.
- Commonly used for:
  - Accessing DOM elements directly.
  - Storing mutable values (like intervals or previous values).

---

## 🧩 Custom Hooks

### 🔗 Resources:

- [Web Dev Simplified – Custom Hooks](https://www.youtube.com/@WebDevSimplified)
- [PedroTech – Custom Hook Example](https://www.youtube.com/@PedroTech)

### ✅ What is a Custom Hook?

- A **function** that starts with the word `"use"` (e.g., `useFetch`, `useAuth`).
- Allows sharing of **reusable stateful logic** across components.
- **Avoids HOC hell** by making logic composable and easier to maintain.

**Examples:**

- `useFetch`, `useSelector`, `useDispatch`

---

## 🏗️ HOC (Higher-Order Components)

### 🔗 HOC Video Series:

- [Part 1 - 3 from Codevolution](https://www.youtube.com/@Codevolution)

### ✅ What is a HOC?

- A **function that returns a component**.
- Used to **share reusable state or behavior**.
- Passes props to the inner component (called `InnerComponent`).

**Examples:**

- `withFetch`
- `React.memo`
- `connect` (from Redux)
- `withFormik`

### ⚠️ Potential Issues:

- Known for **"HOC hell"** – deeply nested, hard-to-debug wrappers.

---

## 🧠 Conceptual Differences

### Class Components:

- Use HOCs to reuse logic
- Have access to lifecycle methods (e.g., `componentDidMount`)
- Tend to be more verbose

### Functional Components:

- Use **hooks** and **custom hooks**
- Simpler and more readable
- Avoid HOC hell by composing logic with functions

---

## 📝 Summary

| Topic             | Summary                                                             |
| ----------------- | ------------------------------------------------------------------- |
| `useRef`          | Keeps value without re-rendering; useful for DOM refs               |
| Custom Hook       | Reusable stateful logic in a `use*` function                        |
| HOC               | Function returning a component to inject logic; can lead to nesting |
| Class vs Function | Class uses HOC, function uses hooks for logic reuse                 |

---

### 🚀 Tips for Mastery:

- Practice converting class components into functional components with hooks.
- Build a custom hook from scratch (e.g., `useToggle`, `useFetch`, etc.).
- Try refactoring an HOC to a custom hook where possible.
