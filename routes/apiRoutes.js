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
    db.Event.create({
      event: req.eventName,
      year: req.eventYear,
      month: req.eventMonth,
      day: req.eventDay,
      finished: req.eventFinished,
      important: req.eventImportnant
    })
    .then(function(dbExample) {
      res.json(dbExample);
    });
  });


// // creating some seeds for the database
//   app.get("/api/seed", function(req, res) {
//     db.Event.create({
//       event: "Burger Week",
//       year: 2019,
//       month: 07,
//       day: 30,
//       finished: false,
//       important: false
//     })
//     .then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

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
