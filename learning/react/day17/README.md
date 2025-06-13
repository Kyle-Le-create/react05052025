# ⚡ React Performance Optimization – W4D17

This guide explores performance optimization techniques in React. Learn how to reduce unnecessary re-renders, optimize rendering behavior, and monitor your app's performance using modern tools.

---

## 📌 Topics Covered

1. When Do Components Rerender?
2. Preventing Unnecessary Renders
3. Memoization (`React.memo`, `useMemo`, `useCallback`)
4. Code Splitting & Lazy Loading
5. Rendering Patterns (SSR)
6. Performance Monitoring Tools
7. React DevTools
8. Web Vitals & Lighthouse

---

## 🔄 When Do Components Rerender?

Components rerender when:

- Their **state changes**
- Their **props change**
- Their **parent component rerenders**

This behavior is part of React's reconciliation process.

---

## 🧱 Prevent Unnecessary Rerenders

Unnecessary rerenders can slow down your app. Use the following tools:

### ✅ `React.memo()`

Wrap functional components to skip re-rendering if props haven’t changed.

```js
const MyComponent = React.memo(function MyComponent({ value }) {
  return <div>{value}</div>;
});

## ✅ PureComponent
Used in class components to do a shallow prop/state comparison.

class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}

## 🧠 Memoization
🔸 useMemo()
Memoizes the result of a computation:

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

##🔹 useCallback()
Memoizes the callback function (useful for passing stable props to child components):

const handleClick = useCallback(() => {
  doSomething();
}, []);

## 📦 Code Splitting & Lazy Loading
Helps reduce initial bundle size.
🔗 React Docs – Code Splitting ("https://reactjs.org/docs/code-splitting.html")

const LazyComponent = React.lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>

## 🚀 Rendering Patterns (SSR)

Server-Side Rendering (SSR):
Improves first paint performance.

Helps with SEO.

Use frameworks like Next.js for built-in SSR.

## 📊 Performance Monitoring Tools

React DevTools
Profiler tab shows re-render timings and prop changes.
Use to identify unnecessary renders and slow components.

Web Vitals
Measure core metrics like LCP, FID, CLS.
Libraries: web-vitals or Google Lighthouse.

Lighthouse (Chrome DevTools)
Audits performance, accessibility, and SEO.

##🧪 Homework Recap
❓ What causes rerenders?
State changes

Props changes

Parent rerenders

✅ How to prevent unnecessary rerenders?
React.memo

PureComponent

Memoize props (via useMemo, useCallback)

Restructure state lifting when appropriate

🔧 How to optimize a React app?
Avoid unnecessary rerenders

Code splitting & lazy loading

Use a CDN for static assets

Server-side rendering (SSR)

🔍 How to monitor performance?
React DevTools: Profiler tab

Lighthouse: Performance audits

Web Vitals: LCP, FID, CLS tracking
```

Debounce Explanation:

Debounce is a technique used to delay a function's execution until after a certain period of inactivity. In React, it's commonly used with inputs to prevent functions like API calls from firing on every keystroke.

Purpose of Debounce:

The purpose of debounce is to improve performance and user experience by:

Reducing the number of unnecessary function calls (e.g. API requests).

Ensuring actions are only taken when the user pauses, not during rapid input.

Preventing lag, server overload, or flickering UI.

Example use cases: search bars, resizing events, and form validations.
