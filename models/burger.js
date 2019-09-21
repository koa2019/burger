// import orm.js from config folder
// orm interacts with database  
var orm = require('../config/orm');

// creating a burger model that will call orm functions using burger specific input for the orm
var burger = {
    // function allows us to pass the callback value to another file
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // col & val are arrays
    insertOne: function(col, val, cb) {
        orm.insertOne('burgers', col, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVal, condition, cb) {
        orm.updateOne('burgers', objColVal, condition, function(res) {
            cb(res);
        });
    }
};

// export burger model so other files can access it
module.exports = burger;