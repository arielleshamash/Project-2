const Sequelize = require('sequelize');
const db = new Sequelize('planitDB', 'root', 'NotAnother1')

const Event = db.define('event', {
    moment: {
        type: Sequelize.STRING
    },
    event: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    },
    month: {
        type: Sequelize.INTEGER
    },
    day: {
        type: Sequelize.INTEGER
    }
});

module.exports = Event;