const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const { products, people } = require("./data");

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/people", (req, res) => {
  res.status(200).json(people);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>no found<h1>");
});

app.listen(port, () => {
  console.log("server is listening on port 5000...");
});
