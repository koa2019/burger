//import npm mysql2
var mysql = require('mysql2');

//create a connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

//export connection
module.exports = connection;