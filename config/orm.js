// I do not know where this goes.

const Sequelize = require('sequelize');
 module.exports = new Sequelize('planitDB', 'root', 'Password', {
    host: 'localhost',
    dialect: 'mysql'
});

//get data by month
db.holiday.findAll({
    where: {
        month: ':month'
    }
})
    .then(planitDB => {
        res.json(planitDB);
    }),

//get data by day
 db.planitDB.findAll({
    where: {
        month: ':month',
        day: ':day'
     }
})
    .then(planitDB => {
         res.json(planitDB);
    }),

//get data by exact time
    planitDB.findAll({
        where: {
            month: ':month',
            day: ':day',
            time: ':time'
            }
        }).then(planitDB => {
            res.json(planitDB);
            }),

//get important data
    db.planitDB.findAll({
        where: {
            month: ':month',
            day: ':day',
            important: 'true'
             }
        }),

//remove event
    db.planitDB.destroy({
         where: {
            event: ':event'
            }
        }).then(planitDB =>{
            res.json(planitDB)
            })

    //add data for event
   holiday.create({
        event: '?',
        month_name: '?',
        month_number: '?',
        day: '?',
        time: '?',
        year: '?'
    })
    //edit event to cross it off
    