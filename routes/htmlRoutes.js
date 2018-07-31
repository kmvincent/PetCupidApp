let questions = require("../public/js/questions");

// exporting routes to be used in server.js
module.exports = function (app) {

    // route to display the question html pages
    app.get("/", function (req, res) {
        res.render("index", { questions: questions });
    });

    // route to display results page if we have one
    app.get("/results", function (req, res) {
        // Will need to set up another handlebars page for it as well as object to pass along
        res.render("results", );
    });
};