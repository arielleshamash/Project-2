var db = require("../models/index.js");
var moment = require('moment');

module.exports = function (app) {

  // -------------------------------Create a new event------------------------------
  app.post("/api/new-todo", function (req, res) {
    console.log(req.body);
    db.Event.create({
      event: req.body.eventName,
      year: req.body.eventYear,
      month: req.body.eventMonth,
      day: req.body.eventDay
    })
      .then(function (dbExample) {
        res.json(dbExample);
      });
  });

  // still needs work!!!!!
  app.get("api/todo-items", function (req, res) {
    db.Event.selectAll({
      where: {
        year: req.body.eventYear,
        day: req.body.eventDay,
        month: req.body.eventMonth
      }
    }).then(function(dbRes){
      res.json(dbRes);
    })
  })

  // crossout an item on the todo list
  // app.put("/api/update", function (req, res) {
  //   db.Event.update(req.body.important,
  //     {
  //       where: {
  //         event: req.body.event
  //       }
  //     }).then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // ---------------------------Delete an event-------------------------------------
  app.delete("/api/delete-event", function (req, res) {
    console.log(req.body)
    db.Event.destroy(
      {
        where: {
          event: req.body.eventName,
          year: req.body.eventYear,
          month: req.body.eventMonth,
          day: req.body.eventDay
        }
      }).then(function (db) {
        res.json(db);
      });
  });


  // ---------------------------- Jon's code -------------------------------
// Load index page

//current month info
app.get("/api/events/:year/:month", function (req, res) {

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

//get data by exact event
app.get("/event/:id", function (req, res) {
  var id = req.params[0];
  db.Event.findByPK(id).then(function (listing) {
    res.render("home", {
      listItem: listing
    })
  })
});


//get important data
app.get("/important-list/:month", function (req, res) {
  db.Event.findAll({
    where: {
      important: true
    }
  }).then(function (veryImportant) {
    res.render("home", {
      importantList: veryImportant
    });
  });
});
  
}