let questions = require("../data/questions");
let results = require("../data/results");
let saved = require("../data/saved");

// exporting routes to be used in server.js
module.exports = function (app) {

    // route to display the question html pages
    app.get("/", function (req, res) {
        res.render("index", { questions: questions, results: results});
    });
    app.get("/results", function (req, res) {
        res.render("results", {results: results });
    });
    app.get("/saved", function (req, res) {
        res.render("saved", {saved: saved });
    });
};

