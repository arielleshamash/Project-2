var db = require("../models/index.js");
var moment = require('moment');
moment().format();

module.exports = function(app) {
  // Get all examples
  app.get("/", function(req, res) {

    let currentDate = moment().format("MM")

    db.Holiday.findAll({where:{
      date: currentDate 
    }}).then(function(dbExamples) {
      res.json(dbExamples);
    });
    
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
