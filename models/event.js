

<<<<<<< HEAD
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
=======
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
>>>>>>> c1f45740dc02f5c122a05f8e0539669ce43b31d7
