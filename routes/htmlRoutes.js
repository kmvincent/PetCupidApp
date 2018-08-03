let questions = require("../data/questions");
let results = require("../data/results");
let saved = require("../data/saved");

// exporting routes to be used in server.js
module.exports = function (app) {

    // route to display the index/questionnaire html page
    app.get("/", function (req, res) {
        res.render("index", { questions: questions, results: results});
    });
    // route to display results page
    app.get("/results", function (req, res) {
        res.render("results", {results: results });
    });
    // route to display saved page
    app.get("/saved", function (req, res) {
        res.render("saved", {saved: saved });
    });
};

