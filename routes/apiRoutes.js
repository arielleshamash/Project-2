var db = require("../models/index.js");
var moment = require('moment');
moment().format();

module.exports = function(app) {

//remove event
app.post("/api/")

// add event, cross off, delete

// create fake post to know what is coming


  // Create a new event
var newevent = {
  eventName = $("#...").val(),
  eventYear = $("#...").val(),
  eventMonth = $("#...").val(),
  eventDay = $("#...").val(),
  eventFinished = $("#...").val(),
  eventImportnant = $("#...").val(),
}

  app.post("/api/new-todo", function(req, res) {
    db.Event.create({
      event: eventName,
      year: eventYear,
      month: eventMonth,
      day: eventDay,
      finished: eventFinished,
      important: eventImportnant
    })
    .then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // crossout an item on the todo list
  app.put("/api/update", function(req, res){
    db.Event.update(req.body.important,
      {
        where:{
          event: req.body.event
        }
      }).then(function(dbPost){
        res.json(dbPost);
      });
  });

  // Delete an event
  app.delete("/api/delete-event", function(req, res) {
    const id = req.params.id
    db.Event.destroy({ where: { id: id } }).then(function(db) {
      res.json(db);
    });
  });
};
