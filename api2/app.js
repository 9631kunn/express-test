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

// app.get("/api/photo/list", (req, res, next) => {
//   res.json(photoList);
// });

app.get("/api/photo/:photoId", (req, res, next) => {
  let photo;
  for (i = 0; i < photoList.length; i++) {
    if (photoList[i].id == req.params.photoId) {
      photo = photoList[i];
    }
  }
  res.json(photo);
});

/*
letは再「宣言」不可
let hoge = 0;
hoge = 1; <= OK!
let hoge = 2; <= NG!
*/
