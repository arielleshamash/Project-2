const Sequelize = require('sequelize');
const db = require('./index.js');

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