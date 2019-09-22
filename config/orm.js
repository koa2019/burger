// import mysql connection
var connection = require('../config/connection');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

//retrieve & store methods that excute mysql commands in the controllers
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {

    // query method selects everything from burgers table in mysql database
    selectAll: function(tableName, cb) {

        var query = 'SELECT * FROM ' + tableName + ';';
        connection.query(query, function(err, result) {
            if (err) {

                console.log(err);
            }
            console.log(result);
            cb(result);
        });
    },
    // query method to add new burger to burgers table
    insertOne: function(tableName, colToSearch, objColVal, cb) {
        var query = "INSERT INTO ??, ?? VALUES ? ";
        connection.query = (query, [tableName, colToSearch, objColVal], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);

        });
    },
    // query method to update burger table
    // An example of objColVals would be {burgerName: whopper, devoured: true}

    updateOne: function(tableName, objColVal, condition, cb) {
        var query = 'UPDATE ?? SET ? WHERE ??';
        connection.query(query, [tableName, objColVal, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);

        });
    }
};

// export orm object
module.exports = orm;