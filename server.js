var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Dependency Installation

// img reference is static
app.use(express.static("public"));
// JSON translator
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// install handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Gives access to main air traffic controller.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  