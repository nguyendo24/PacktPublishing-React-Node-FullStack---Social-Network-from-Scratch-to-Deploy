const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Nhat");
});

app.listen(8080);
