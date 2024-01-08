var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Create new message form get
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Create new message" });
});

// Handle create new message
router.post("/new", function (req, res, next) {
  const { author_name, message_text } = req.body;
  messages.push({ text: message_text, user: author_name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
