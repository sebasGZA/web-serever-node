const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const hbs = require("hbs");

//Handlebars
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

//Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Node - Express",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Node - Express",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Node - Express",
  });
});

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
