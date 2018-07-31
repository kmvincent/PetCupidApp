let express = require("express");
let questions = require("../public/js/dogQuestions");

let router = express.Router();

// route to display the question html pages
router.get("/", function (req, res) {
    res.render("index", { questions: questions });
});

// route to display results page if we have one
app.get("/results", function(req, res) {
    // Will need to set up another handlebars page for it as well as object to pass along
    res.render("results",);
});