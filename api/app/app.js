const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // HTMLのform受け取りを簡単にできるやつ（すでに標準装備されてるぽい）

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/v1/", (req, res) => {
  res.json({
    message: "HELLO EXPRESS",
  });
});

app.listen(3000);
console.log("STARTED");
