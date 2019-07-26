module.exports = function(){
    let connection = mysql.createConnection({
        host: "localhost",
        // your port if not 3306
        port: 3306,
        // your username
        user:"root",
        // your password
        password:"Password",
        database:"planitDB"
    });

    connection.connect(function(err){
        if(err)throw err;
        console.log("connected as id "+ connection.threadId + "\n");
    
    });
}