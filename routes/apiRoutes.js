var db = require("../models/index.js");
var moment = require('moment');
moment().format();

module.exports = function(app) {

//remove event
app.post("/api/")

// add event, cross off, delete

// create fake post to know what is coming


  // Create a new event
  app.post("/api/new-todo", function(req, res) {
    db.Event.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // crossout an item on the todo list

  // Delete an event
  app.delete("/api/rem-todo/:id", function(req, res) {
    db.event.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
