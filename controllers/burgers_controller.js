var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//Home Page, gets All the burgers.
router.get("/", function(req, res) {
burger.selectall(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Adds burger to the left side list.
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Once we have the burger, send it back to the front page.
    res.redirect("/");
  });
});

//Devour burger, move it to the right side.
router.post("/api/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;
  
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result){
      res.redirect("/");
  });

});

// ------------------------------- EXPORTS TO server.js -----------------------
module.exports = router;
 