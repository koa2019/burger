var connection = require('./connection');

//retrieve & store methods that excute mysql commands in the controllers
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {

    // query method selects everything from burgers table in mysql database
    selectAll: function(tableName) {

        var query = 'SELECT * FROM ??';
        connection.query(query, [talbeName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // query method to add new burger to burgers table
    insertOne: function(tableName, colToSearch, valofCol) {
        var query = "INSERT INTO ??, ?? VALUES ? ";
        connection.query = (query, [tableName, colToSearch, valofCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // query method to update burger table
    updateOne: function() {
        var query = 'UPDATE ';
        connection.query(query, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

// export orm object
module.exports = orm;