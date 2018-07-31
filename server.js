
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//var db = require("./models");

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
let routes = require("./routes/apiRoutes.js");
app.use(routes);
// Starting our Express app
// =============================================================
//will sync all of your databases after listening to port. 
//db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//});
