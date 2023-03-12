const express = require("express");

const app = express();
const port = 3000;

//Middleware
app.use(express.static("public"));

app.get("/hello-world", (req, res) => {
  res.send("Hello world");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
