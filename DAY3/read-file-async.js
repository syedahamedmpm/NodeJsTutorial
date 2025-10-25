const fs = require("fs");

console.log("File Read started");

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});

console.log("File Read Completed");
