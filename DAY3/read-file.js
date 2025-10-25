const fs = require("fs");

console.log("File Read started");

const data = fs.readFileSync("hello.txt", "utf8");

console.log("File Read completed");
console.log("File contents:", data);
