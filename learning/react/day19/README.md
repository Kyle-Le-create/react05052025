📚 Day 19: Redux
This README covers core Redux concepts, differences from Context API, and instructions for a full-stack CRUD Todo list app with Redux and JSON server.

📖 Core Redux Concepts
Three core concepts:

Store: The single source of truth holding your app’s state.

Action: Plain objects describing what happened (contain type and optional payload).

Reducer: Pure functions receiving the previous state and an action to return the next state.

Reading state from store:

Use hooks like useSelector or mapStateToProps (if using class components) to access Redux state in your components.

Updating state in Redux:

Only way to update Redux state is by dispatching an action with dispatch().

📝 Key Redux Questions
What is Redux?

Global state management library.

Encourages a single store as the source of truth.

Uses reducers, actions, and dispatch to manage state changes.

Designed for predictable state updates.

Redux Components:

Reducers: Pure functions returning new state.

Action: Contains type and optional payload.

Dispatch: The only way to send actions to reducers.

🔄 Redux vs Context API
Feature Redux Context API
Usage Standardized for global state management. Flexible, minimal setup.
Best for Large-scale applications. Small apps/simple state.
Pros Middleware support, DevTools integration. Simpler for small needs.
Cons More boilerplate, setup complexity. Not optimized for frequent updates.

✅ How to Read and Update State in Redux
Read: Use useSelector((state) => state.someSlice.someValue) in components.

Update: Use dispatch(someAction(payload)) to send actions to reducers.

🛠️ Homework / Project
Goal: Build a full-stack CRUD Todo list with Redux.

Requirements:

Manage two global states:

todos (CRUD operations).

theme (light vs dark mode).

Use json-server as the backend API to persist todos.

🚀 CRUD Todo List Instructions
Setup Backend:

Install json-server globally or locally.

Create db.json with initial data for todos.

Run server:

bash
Copy
Edit
npx json-server --watch db.json --port 3001
Setup Frontend with Redux:

Create Redux slices or reducers for todos and theme.

Connect Redux store to your React app using <Provider>.

Use redux-thunk or redux-saga if you need side effects for async CRUD.

CRUD Features:

Create: Add new todo items.

Read: Fetch existing todos from json-server.

Update: Edit or toggle todo completion.

Delete: Remove todo items.

Theme Feature:

Create a Redux slice to toggle light/dark mode.

Update app styling based on current theme state.
