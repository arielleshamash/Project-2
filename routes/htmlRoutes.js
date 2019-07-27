var db = require("../models/index.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log("here in index")
    db.Holiday.findAll({}).then(function(holidayResults) {

      res.render("index", {
        msg: "change the message",
        examples: holidayResults
      });

    });
    
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Holiday.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
