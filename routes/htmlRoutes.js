var db = require("../models/index.js");
var moment = require('moment');

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    currentDay = moment().format('DD');   // Today's day.
    currentMonth = moment().format('MM');   // Today's month.
    currentYear = moment().format('YYYY'); // Today's year.
    // Define default.
    var monthChange = 0;
    var storedDay;
    var storedMonth;
    var storedYear;

    // Define date object for ex: ajax usage.
    var date = {
      day: currentDay,
      month: currentMonth,
      year: currentYear
    };

    db.Event.findAll({
      where: {
        year: date.year,
        month: date.month
      }
    }).then(function (cMonth) {
      res.render("index", {
        month: cMonth,
        day: date.currentDay
      });
    });
  });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  };
