const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Disposition", "attachment; filename=list.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id, name\n");
    res.write("1, Anna\n");
    res.write("2, Sebas\n");
    res.write("3, John\n");
    res.write("4, Christopher\n");
    res.write("5, Carl\n");

    res.end();
  })
  .listen(3000);

console.log("Listing on port 3000!!!");
