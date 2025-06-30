📚 Node.js Week
This README covers foundational Node.js concepts, Express.js essentials, working with databases, and homework goals for building a backend CRUD API.

Part I: Node.js Basics
🔹 Topics:

NVM (Node Version Manager) for managing multiple Node versions.

CommonJS module system (require syntax).

Globals: **dirname, **filename, global.

Built-in Node modules:

fs (file system)

path (filesystem paths)

os (system info)

Event Emitters: Create custom events in Node.

🔹 CommonJS vs ES Module

CommonJS: Uses require() and module.exports.

ES Module: Uses import/export syntax.

Key differences:

CommonJS loads modules synchronously.

ES Modules allow top-level await and are becoming standard in modern Node.

Part II: Express.js
🔹 Topics:

RESTful API design with Express.js.

Routes: Define endpoints (e.g., GET /todos, POST /todos).

Middlewares: Functions that execute before reaching the final route handler.

🔹 User Authentication Concepts:

Session-based vs Token-based authentication

Session-based: Server stores session data.

Token-based: Client receives a token (e.g., JWT) for stateless authentication.

🔗 What is JWT Token

Part III: Databases
🔹 Goals:

Learn SQL basics (recommended: MySQL tutorials).

Understand ORMs (Object Relational Mapping):

Translate JavaScript objects to SQL tables.

Learn Layered Architecture:

Organize your project into layers (e.g., routes, controllers, services, models) for clean and maintainable code.

📝 Homework
By the end of the week, build a Node.js backend for a Todo app (no database required, can use in-memory or file storage):

Implement:

User signup / login / logout.

CRUD operations for todos.

📌 Notes
🔹 Browser runtime vs Node.js

Browser runtime:

Has Web APIs (e.g., fetch, DOM).

Uses ES Modules.

Node.js runtime:

Has built-in modules (fs, path, os).

By default, uses CommonJS modules (require).
