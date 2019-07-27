module.exports = function(sequelize, DataTypes) {
  var Holiday = sequelize.define("Holiday", {
    event: DataTypes.STRING,
    date: DataTypes.STRING,
    finished: DataTypes.BOOLEAN,
    important: DataTypes.BOOLEAN,
    year: DataTypes.INTEGER
  });
  return Holiday;
};
