const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello, World!", "utf8");
console.log("File 'hello.txt' has been written.");
