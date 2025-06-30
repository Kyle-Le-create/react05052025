require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");

const authRoutes = require("./routes/authRoute");
const todosRoutes = require("./routes/todoRoute");

const app = express();
const PORT = 3000;

// middlewares
app.use(express.json()); //to parse JSON request body
app.use(cookieParser()); //to parse cookies from incoming requests

app.use("/auth", authRoutes);
app.use("/todos", todosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
