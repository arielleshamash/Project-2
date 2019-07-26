let connect = require("connection");

module.exports = {
    //get data by month
    selectByMonth: function(month, year){
        const monthSelection = "SELECT * FROM holiday WHERE month_name="+month+", year="+year;
        connect.query(monthSelection, function(err, res){
            if(err) throw err;
        });
    },

//get data by day
selectByDay: function(day, month, year){
    const daySelection = "SELECT * FROM holiday WHERE day="+day+", month_name="+month+", year="+year;
    connect.query(daySelection, function(err, res){
        if(err) throw err;
    });
},

//get data by exact time
selectByTime: function(time, day, month, year){
    const timeSelection = "SELECT * FROM holiday WHERE time="+time+", day="+day+", month_name="+month+", year="+year;
    connect.query(timeSelection, function(err, res){
        if(err) throw err;
    });
},

//get important data
selectImportant: function(){
    const isImportant = "SELECT * FROM holiday WHERE important=true";
    connect.query(function(err, res){
        if (err) throw err;
    
    });
},

//remove event


//add data for event
//edit event to cross it off
}