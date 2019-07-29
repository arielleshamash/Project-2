var db = require("../models/index.js");
var moment = require('moment');
moment().format();

module.exports = function(app) {

//remove event
app.post("/api/")
//add data for event
//edit event to cross it off 




  // Get all examples
  app.get("/api/edit-todo", function(req, res) {
    console.log(req.body);
    var newEvent = req.body;
    planitDB
  });

  // Create a new example
  app.post("/api/new-todo", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/rem-todo/:id", function(req, res) {
    db.event.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
