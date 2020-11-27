const router = require("express").Router();

router.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

// localhost:3000/user/
router.get("/", (req, res) => {
  res.send("USER ページ");
});

// localhost:3000/user/about
router.get("/about", (req, res) => {
  res.send("ABOUT ページ");
});

// localhost:3000/user/:id
router.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).send(`HELLO USER_ID:${req.params.id}`);
});

module.exports = router;
