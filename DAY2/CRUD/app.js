const express = require("express");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
