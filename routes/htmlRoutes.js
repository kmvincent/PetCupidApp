let express = require("express");
let questions = require("../public/js/dogQuestions");

let router = express.Router();

// route to display the question html pages
router.get("/", function (req, res) {
    res.render("index", { questions: questions });
});