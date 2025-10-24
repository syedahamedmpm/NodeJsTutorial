const fs = require("fs");
console.log("Start Reading a File");

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    throw err;
  }
  console.log("File content:", data);
});

console.log("End of Script");
