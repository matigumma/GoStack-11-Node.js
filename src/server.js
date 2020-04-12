const app = require("./app");
const port = process.env.PORT ? process.env.PORT : 3333;
app.listen(port);
console.log("🚀 server Lunched at:", port);
