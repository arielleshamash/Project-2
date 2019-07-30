var db = require("../models/index.js");
var moment = require('moment');
moment().format();

// creating some seeds for the database
app.get("/api/seed", function(req, res) {
    db.Event.create({
      event: "Burger Week",
      year: 2019,
      month: 07,
      day: 30,
      finished: false,
      important: false
    })
    .then(function(dbExample) {
      res.json(dbExample);
    });
  });