const fs = require("fs");

console.log("File written started");

fs.writeFileSync("hello.txt", "Hello, World!");

console.log("File written successfully.");
