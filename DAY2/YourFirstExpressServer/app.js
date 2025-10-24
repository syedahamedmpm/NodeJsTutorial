const express = require("express");

const app = express();

app.use(express.json());

//Basic Route
app.get("/", (req, res) => {
  res.send("Hello from Express.js API!");
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
