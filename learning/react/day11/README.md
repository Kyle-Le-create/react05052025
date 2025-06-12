# 📚 Study Guide: W3D11 – Describing the UI with React

## ✅ 1. Why Use React?

- Lightweight JavaScript UI library
- Component-based architecture
- Fast updates via **Virtual DOM**
- Strong ecosystem: Redux, Router, dev tools

---

## 🧠 2. Virtual DOM

- **What is it?** A virtual copy of the real DOM
- **Why use it?** Real DOM is slow to update
- React compares old & new virtual DOMs (diffing algorithm) and updates the real DOM **efficiently**

---

## 🛠️ 3. Setting Up a React Project

- Tools:
  - `Create React App`
  - `Vite`
  - Babel & Webpack (used under the hood)
- Build Levels:
  - Development vs Production builds

---

## 🧩 4. Components

- React UI is made up of **components**
- Use **JSX** to write HTML-like code inside JS
- Use **curly braces `{}`** in JSX to embed JS expressions
- Props:
  - Pass data into components
  - `children` prop lets you nest other elements

---

## 🔄 5. Rendering Logic

- **Conditional Rendering**:
  - Render components only when certain conditions are met
  - Use ternary (`? :`) or logical AND (`&&`)
- **Rendering Lists**:
  - Use `.map()` to display items from an array
  - Assign **keys** for performance:
    - Must be unique and stable
    - Avoid using index if list order can change

---

## ⚙️ 6. useState and Updating State

- `useState()` is a **hook** for functional components
- Returns: `[value, setValue]`
- **Rules**:

  - State is **immutable** – never mutate directly
  - Use the **callback pattern** if new state depends on old:
    ```js
    setCount((prev) => prev + 1);
    ```

- Updating objects/arrays in state:
  - Use the spread operator (`...`)
  - Example:
    ```js
    setUser({ ...user, name: "Kyle" });
    ```

---

## 🧪 7. Sample Project (1:30:39 – 2:10)

- Combine:
  - Props
  - useState
  - Conditional rendering
  - List rendering

---

## 🏛️ 8. Class Components (Legacy)

- Can also:
  - Receive props
  - Declare state
- Use lifecycle methods like `componentDidMount`
- More verbose than functional components with hooks

---

## 📝 Key Comparisons

| Concept        | Summary                                                |
| -------------- | ------------------------------------------------------ |
| React          | Component-based UI library using a virtual DOM         |
| Virtual DOM    | Optimized version of DOM for faster UI updates         |
| JSX            | HTML-like syntax used in React (with JS expressions)   |
| Props          | Data passed from parent to child components            |
| useState       | Hook to create and update component state              |
| State vs Props | State is internal; props are received from parent      |
| List Keys      | Unique identifiers needed for efficient list rendering |

---

## 🔗 Useful Links

- [React Official Docs](https://reactjs.org/)
- [JSX Overview](https://reactjs.org/docs/introducing-jsx.html)
- [React List Rendering](https://reactjs.org/docs/lists-and-keys.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
