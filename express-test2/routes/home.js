const router = require("express").Router();

router.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

router.get("/", (req, res) => {
  const data = {
    programming: [{ name: "Ruby" }, { name: "JS" }, { name: "PHP" }],
    foods: [{ name: "Ramen" }, { name: "Curry" }, { name: "Pan cake" }],
    animals: [{ name: "Dog" }, { name: "Neontetra" }],
  };

  res.status(200).render("index.ejs", data);
});

module.exports = router;
