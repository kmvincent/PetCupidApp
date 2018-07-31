
// ******************************************************************************
// *** Dependencies
// =============================================================
let express = require("express");
let bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//var db = require("./models");

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
// app.use(express.static(__dirname + './public'));
app.use(express.static("public"));

// Sets up Handlebars
// =============================================================
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
let routes = require("./routes/apiRoutes.js");
app.use(routes);
// require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Starting our Express app
// =============================================================
//will sync all of your databases after listening to port. 
//db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
//});
