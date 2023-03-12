const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("Hello World");
  })
  .listen(3000);

console.log("Listing on port 3000!!!");
