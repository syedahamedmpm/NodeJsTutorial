const path = require("path");

console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));

const joined = path.join(__dirname, "folder", "test.txt");
console.log("Joined path:", joined);

const absolute = path.resolve("folder", "test.txt");
console.log("Absolute path:", absolute);
