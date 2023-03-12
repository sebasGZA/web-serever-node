const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("home Page");
});

app.get("/hello-world", (req, res) => {
  res.send("Hello world");
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
