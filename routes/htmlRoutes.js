let questions = require("../data/questions");

// exporting routes to be used in server.js
module.exports = function (app) {

    // route to display the question html pages
    app.get("/", function (req, res) {
        res.render("index", { questions: questions });
    });
};