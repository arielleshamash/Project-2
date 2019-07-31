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
  };
