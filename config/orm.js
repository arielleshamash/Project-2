// I do not know where this goes.

const Sequelize = require('sequelize');
const sequelize = new Sequelize('planitDB', 'root', 'Password', {
    host: 'localhost',
    dialect: 'mysql'
});

//get data by month
planitDB.findAll({
    where: {
        month: ':month'
    }
})
    .then(planitDB => {
        res.json(planitDB);
    }),

//get data by day
 planitDB.findAll({
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
                    planitDB.findAll({
                        where: {
                            authorId: 12,
                            status: 'active'
                        }
                    }),
                    //remove event
                    planitDB.destroy({
                        where: {
                            important: 'true'
                        }
                    }).then(planitDB =>{
                        res.json
                    })
    //add data for event
    //edit event to cross it off