let questions = require("../data/questions");
let results = require("../data/results");

// exporting routes to be used in server.js
module.exports = function (app) {

    // route to display the question html pages
    app.get("/", function (req, res) {
        res.render("index", { questions: questions, results:results});
    });
};

// can we pull more than one object?