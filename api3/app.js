const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("HELLO"));

app.get("/", (req, res) => {
  const todoList = [
    { title: "ごはん", done: true },
    { title: "うんこ", done: true },
    { title: "ねむる", done: false },
  ];

  res.json(todoList);
});

app.listen(3000, () => {
  console.log("STARTED");
});
