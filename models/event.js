

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    important: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Event;
};
