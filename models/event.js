module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event: DataTypes.STRING,
    date: DataTypes.STRING,
    finished: DataTypes.BOOLEAN,
    important: DataTypes.BOOLEAN,
    year: DataTypes.INTEGER
  });
  return Event;
};
