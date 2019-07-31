

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event: DataTypes.STRING,
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN,
    important: DataTypes.BOOLEAN,
    year: DataTypes.INTEGER,
  });
  return Event;
};
/*
module.exports = (sequelize, DataTypes) => {
  class Event extends sequelize.Model { }
  Event.init({
    event: DataTypes.STRING,
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN,
    important: DataTypes.BOOLEAN,
    year: DataTypes.INTEGER
  }, { sequelize });
  return Event;
}
*/