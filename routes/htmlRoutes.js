// so we pull the petfinder api results based on the first how many questions
// then from there we parse the text for keywords.
// how do we assign points based on keywords?
// And then rank each one. 


// every time they answer a question, it is added to array...then api is pulled based on that array after last submit, then text parser is run on those results, and compared to my math somehow?...then can click save and it's saved to db....

let questions = require("../data/questions");

// exporting routes to be used in server.js
module.exports = function (app) {

    // route to display the question html pages
    app.get("/", function (req, res) {
        res.render("index", { questions: questions });
    });
};