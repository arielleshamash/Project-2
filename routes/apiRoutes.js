var db = require("../models/index.js");
var moment = require('moment');

module.exports = function (app) {
  // Load index page

  //current month info
  app.get("/api/events/:year/:month", function(req, res) {
  
    db.Event.findAll({
       where: {
         year: req.params.year,
         month: req.params.month
      }
    }).then(cMonth => {
      // console.log("HELPPPP");
      // for (var i = 0; i < cMonth.length; i++) {
      //   console.log(cMonth[i].event);
      // }
      res.json(cMonth);
      });
  });

<<<<<<< HEAD
  app.post("/api/new-todo", function(req, res) {
    db.event.create({
      event: req.eventName,
      year: req.eventYear,
      month: req.eventMonth,
      day: req.eventDay,
      finished: req.eventFinished,
      important: req.eventImportnant
    })
    .then(function(dbExample) {
      res.json(dbExample);
=======
    //get data by exact event
    app.get("/event/:id", function (req, res) {
      var id = req.params[0];
      db.Event.findByPK(id).then(function (listing) {
        res.render("home", {
          listItem: listing
        })
      })
>>>>>>> 6b753fd6ca1c4f2e5ec6db2f2f3a2ed5a5ef7e12
    });

<<<<<<< HEAD
  // still needs work!!!!!
  app.get("api/todo", function(req, res){
    db.event.selectAll({where:{
      day: 30
    }})
  })

  // crossout an item on the todo list
  app.put("/api/update", function(req, res){
    db.event.update(req.body.important,
      {
        where:{
          event: req.body.event
=======

    //get important data
    app.get("/important-list/:month", function (req, res) {
      db.Event.findAll({
        where: {
          important: true
>>>>>>> 6b753fd6ca1c4f2e5ec6db2f2f3a2ed5a5ef7e12
        }
      }).then(function (veryImportant) {
        res.render("home", {
          importantList: veryImportant
        });
      });
<<<<<<< HEAD
  });

  // Delete an event
  app.delete("/api/delete-event", function(req, res) {
    const id = req.params.id
    db.event.destroy({ where: { id: id } }).then(function(db) {
      res.json(db);
=======
>>>>>>> 6b753fd6ca1c4f2e5ec6db2f2f3a2ed5a5ef7e12
    });
  };
