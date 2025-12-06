const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Protected Route test
const protect = require("./middleware/authMiddleware");

app.get("/api/protected", protect, (req, res) => {
  res.json({ msg: "Welcome! You are authenticated.", user: req.user });
});

// Export app (must be last)
module.exports = app;
