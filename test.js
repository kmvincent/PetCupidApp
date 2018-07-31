// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'));

//Data
var questionsArray = [
    {
        question: "Are you looking for a cat or a dog?",
        id: 1
    },
    {
        question: "Question 2"
    }
];

//Routes
app.get("/", function(req, res) {
    res.render("index", {questions: questionsArray});
});

app.get("/results", function(req, res) {
    res.render("results",);
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });