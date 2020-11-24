const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("STARTED!");
});

const photoList = [
  {
    id: 1,
    name: "photo1.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo1.jpg",
  },
  {
    id: 2,
    name: "photo2.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo2.jpg",
  },
  {
    id: 3,
    name: "photo3.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo3.jpg",
  },
];

app.get("/api/photo/list", (req, res, next) => {
  res.json(photoList);
});
