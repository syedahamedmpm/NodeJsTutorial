const fs = require("fs");

console.log("File written started");

fs.writeFile("helloWorld.txt", "Hello, World!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully.");
  }
});

console.log("File written Completed");
