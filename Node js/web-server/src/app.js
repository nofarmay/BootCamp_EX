const path = require("path");
const express = require("express");
console.log(__dirname);
console.log(path.join(__dirname));
const app = express();

app.get("", (req, res) => {
  res.send("<h1>nofar</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "nof",
    age: 28,
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000.");
});
