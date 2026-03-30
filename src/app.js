import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";

import errorHandler from "./middlewares/error.middleware.js";

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use("/uploads", express.static("public/uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});