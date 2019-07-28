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
      month: date.month 
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

//get data by day
app.get("/to-do/:year/:month/:day", function(req, res) {
  var year = req.params[0], month = req.params[1], day = req.params[2];
  db.event.findAll({ 
    where: {
    year: year, 
    month: month, 
    day: day
    }
  }).then(function (todo) {
    res.render("home", {
      todolist:todo
    });
  });
}); 

//get data by exact event
app.get("/event/:id", function(req, res) {
  var id = req.params[0];
  db.event.findByPK(id).then(function (listing) {
    res.render("home", {
      listItem: listing
    })
  })
});

//get important data
app.get("/important-list/:month", function(req, res) {
  db.event.findAll({ 
    where: {
    important: true
    }
  }).then(function (veryImportant) {
    res.render("home", {
      importantList: veryImportant
    });
  });
});


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
