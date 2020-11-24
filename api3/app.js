const express = require("express");
const multer = require("multer");
const uuid = require("uuid");

const app = express();
app.use(multer().none());
app.use(express.static("web"));

const todoList = [];

// GET
app.get("/api/v1/list", (req, res) => {
  res.json(todoList);
});

// POST
app.post("/api/v1/add", (req, res) => {
  console.log("ADD API STARTED");
  const todoData = req.body;
  const todoTitle = todoData.title;

  const id = uuid.v4();

  const todoItem = {
    id,
    title: todoTitle,
    done: false,
  };
  todoList.push(todoItem);

  console.log("add: " + JSON.stringify(todoItem));
  res.json(todoItem);
});

// DELETE
app.delete("/api/v1/item/:id", (req, res) => {
  console.log("DELETE API STARTED");

  const index = todoList.findIndex((item) => item.id === req.params.id);

  if (index >= 0) {
    const deleted = todoList.splice(index, 1);
    console.log("delete: " + JSON.stringify(deleted[0]));
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("STARTED");
});
