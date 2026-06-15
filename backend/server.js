const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Task 5 Required API Health Status Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "UniRush API is running",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`UniRush Backend infrastructure live on port ${PORT}`);
});
