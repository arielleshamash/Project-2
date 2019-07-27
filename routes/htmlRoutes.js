var db = require("../models/index.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
  currentDay		=	moment().format('DD');   // Today's day.
	currentMonth	=	moment().format('MM');   // Today's month.
	currentYear		=	moment().format('YYYY'); // Today's year.
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


    db.event.findAll({where:{
      date: currentDate 
    }}).then(function(cMonth) {
      res.render("home", {
        month: cMonth
      })
      ;
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
