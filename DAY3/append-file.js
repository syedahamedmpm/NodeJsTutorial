const fs = require("fs");

console.log("Appending file started");
fs.appendFileSync("hello.txt", "\nAppended content!");
console.log("File appended successfully.");
