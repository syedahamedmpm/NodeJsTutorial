const fs = require("fs");

console.log("Appending file started");
fs.appendFile("hello.txt", "\nAppended content!", (err) => {
  if (err) {
    console.error("Error appending file:", err);
  } else {
    console.log("File appended successfully.");
  }
});

console.log("File appended END.");
