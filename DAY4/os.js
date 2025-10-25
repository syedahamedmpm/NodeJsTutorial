const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU cores:", os.cpus().length);
console.log("Home dir:", os.homedir());
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem());
console.log("Uptime (seconds):", os.uptime());
